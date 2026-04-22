import nodemailer from 'nodemailer';
import { z } from 'zod'

const sendMailSchema = z.object({
  username: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(3),
  message: z.string().min(10),
})

export async function POST(request: Request) {
  const recipient = process.env.GMAIL_RECIPIENT ?? process.env.SMTP_USER ?? process.env.MAIL_FROM
  const appPassword = process.env.GMAIL_PASSWORD ?? process.env.SMTP_PASS
  const smtpHost = process.env.SMTP_HOST
  const smtpPort = Number(process.env.SMTP_PORT ?? '587')
  const smtpSecure = process.env.SMTP_SECURE === 'true'

  if (!recipient || !appPassword) {
    const missing: string[] = []
    if (!recipient) missing.push('GMAIL_RECIPIENT or SMTP_USER')
    if (!appPassword) missing.push('GMAIL_PASSWORD or SMTP_PASS')

    return Response.json(
      {
        message:
          'Email service is not configured on the server. Missing: ' +
          missing.join(', ') +
          '. Please set these values in .env.local and restart the server.',
      },
      { status: 500 },
    )
  }

  let parsedBody: z.infer<typeof sendMailSchema>

  try {
    const body = await request.json()
    parsedBody = sendMailSchema.parse(body)
  } catch {
    return Response.json({ message: 'Invalid request payload.' }, { status: 400 })
  }

  const transporter = smtpHost
    ? nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpSecure,
        auth: {
          user: recipient,
          pass: appPassword,
        },
      })
    : nodemailer.createTransport({
        service: 'gmail',
        secure: true,
        auth: {
          user: recipient,
          pass: appPassword,
        },
      })

  try {
    await transporter.sendMail({
      from: `"${parsedBody.username}" <${recipient}>`,
      replyTo: parsedBody.email,
      to: recipient,
      subject: parsedBody.subject,
      text: `From: ${parsedBody.username} <${parsedBody.email}>\n\n${parsedBody.message}`,
    })

    return Response.json({ message: 'Message sent successfully.' }, { status: 200 })
  } catch (reason) {
    const message =
      reason instanceof Error ? reason.message : 'Unexpected exception'

    return Response.json({ message }, { status: 500 })
  }
}