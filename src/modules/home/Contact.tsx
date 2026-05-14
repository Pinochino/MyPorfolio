'use client'
import React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/hooks/use-toast'
import { useI18n } from '@/i18n/LanguageProvider'
import { Github, Linkedin, Mail } from 'lucide-react'

const Contact = () => {
    const { dictionary } = useI18n()
    const { toast } = useToast()

    const formSchema = z.object({
        username: z.string().min(2, { message: dictionary.contact.form.validation.fullName }),
        subject: z.string().min(3, { message: dictionary.contact.form.validation.subject }),
        email: z.string().email({ message: dictionary.contact.form.validation.email }),
        message: z.string().min(10, { message: dictionary.contact.form.validation.message }),
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: { username: '', subject: '', email: '', message: '' },
    })

    const isSubmitting = form.formState.isSubmitting

    async function onSubmit(values: z.infer<typeof formSchema>) {
        const res = await fetch('/api/sendMail', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values),
        })

        if (res.ok) {
            toast({ description: dictionary.contact.form.success })
            form.reset()
            return
        }

        const payload = (await res.json().catch(() => null)) as { message?: string } | null
        toast({ description: payload?.message ?? dictionary.contact.form.failed })
    }

    return (
        <section id="contact" className="px-[5%] py-16">
            <div className="grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
                <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm dark:border-slate-800 dark:bg-slate-950">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">{dictionary.contact.title}</h2>
                    <p className="mt-2 text-slate-600 dark:text-slate-300">{dictionary.contact.subtitle}</p>

                    <div className="mt-6 space-y-4 text-sm text-slate-700 dark:text-slate-200">
                        <a href="mailto:Tranhunghp22112004@gmail.com" className="flex items-center gap-2 hover:text-amber-600">
                            <Mail className="h-4 w-4" /> Tranhunghp22112004@gmail.com
                        </a>
                        <a href="https://www.linkedin.com/in/pinochino/" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-amber-600">
                            <Linkedin className="h-4 w-4" /> linkedin.com/in/pinochino
                        </a>
                        <a href="https://github.com/Pinochino" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-amber-600">
                            <Github className="h-4 w-4" /> github.com/Pinochino
                        </a>
                    </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm dark:border-slate-800 dark:bg-slate-950">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                            <FormField
                                control={form.control}
                                name="username"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>{dictionary.contact.form.fullName}</FormLabel>
                                        <FormControl>
                                            <Input placeholder={dictionary.contact.form.fullName} {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>{dictionary.contact.form.email}</FormLabel>
                                        <FormControl>
                                            <Input placeholder="example@mail.com" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="subject"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>{dictionary.contact.form.subject}</FormLabel>
                                        <FormControl>
                                            <Input placeholder={dictionary.contact.form.subject} {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="message"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>{dictionary.contact.form.message}</FormLabel>
                                        <FormControl>
                                            <Textarea rows={5} placeholder={dictionary.contact.form.message} {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <Button type="submit" disabled={isSubmitting} className="w-full bg-sky-700 text-white hover:bg-sky-800">
                                {isSubmitting ? dictionary.contact.form.sending : dictionary.contact.form.submit}
                            </Button>
                        </form>
                    </Form>
                </div>
            </div>
        </section>
    )
}

export default Contact
