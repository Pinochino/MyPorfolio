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

const formSchema = z.object({
    username: z.string().min(2, { message: 'Username must be at least 2 characters.' }).optional(),
    subject: z.string().min(2, { message: 'Username must be at least 2 characters.' }).optional(),
    email: z.string().email({ message: 'Email is not valid format' }),
    message: z.string(),
})

const Contact = () => {

    const { toast } = useToast()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: { username: '', subject: "", email: '', message: '' },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);

        const res = await fetch("/api/sendMail", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(values), 
        });

        if (res.ok) {
            toast({
                description: "Gửi email thành công",
            });
            form.reset()
        } else {
            toast({
                description: "Gửi email thất bại",
            });
        }
    }


    return (
        <div className="flex justify-center py-16 px-4">
            <div className="w-full max-w-xl  shadow-lg rounded-xl border p-10">
                <h4 className="text-center text-3xl font-bold text-emerald-700 mb-8">Contact Us</h4>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        {/* USERNAME */}
                        <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-gray-700 font-medium">Username</FormLabel>
                                    <FormControl>
                                        <Input
                                            className="focus:ring-2 focus:ring-emerald-500"
                                            placeholder="Enter your name..."
                                            {...field}
                                        />
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
                                    <FormLabel className="text-gray-700 font-medium">Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            className="focus:ring-2 focus:ring-emerald-500"
                                            placeholder="Enter your email..."
                                            {...field}
                                        />
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
                                    <FormLabel className="text-gray-700 font-medium">Subject</FormLabel>
                                    <FormControl>
                                        <Input
                                            className="focus:ring-2 focus:ring-emerald-500"
                                            placeholder="Enter your subject..."
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* MESSAGE */}
                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-gray-700 font-medium">Message</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            className="focus:ring-2 focus:ring-emerald-500"
                                            placeholder="Type your message here..."
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* BUTTON */}
                        <div className="flex justify-center pt-4">
                            <Button type="submit" className="w-40 bg-emerald-600 hover:bg-emerald-700 text-white">
                                Send Message
                            </Button>
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    )
}

export default Contact
