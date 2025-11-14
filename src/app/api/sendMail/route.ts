import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: "gmail",
  // port: 587,
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.GMAIL_RECIPIENT,
    pass: process.env.GMAIL_PASSWORD,
  },
});

export async function POST(request: Request) {

  const body = await request.json();
  const username = body.username.toString();
  const email = body.email.toString()
  const subject = body.subject.toString();
  const contents = body.message.toString()

  try {
     await transporter.sendMail({
      from: `"${username}" <${email}>`, 
      to: "Tranhunghp22112004@gmail.com",
      subject: subject,
      text: contents,
    });

    return new Response("Send email successfully", { status: 200 });
  } catch (reason) {

    console.log(reason?.message);

    const message =
      reason instanceof Error ? reason.message : 'Unexpected exception'

    return new Response(message, { status: 500 })
  }
}