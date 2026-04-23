import React, { useState } from 'react'
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md'

const ContactPage = () => {
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(form)
    }

    return (
        <div className="bg-white min-h-screen px-4 py-16">

            {/* Heading */}
            <div className="text-center mb-12">
                <h1 className="font-abhaya text-4xl sm:text-5xl lg:text-6xl font-bold">
                    <span className="text-black">Get In </span>
                    <span className="text-orange-400">Touch</span>
                </h1>
                <p className="text-gray-500 mt-3 text-sm sm:text-base max-w-xl mx-auto">
                    Have a project in mind or just want to say hello? Feel free to reach out!
                </p>
            </div>

            <div className="max-w-[1100px] mx-auto flex flex-col lg:flex-row gap-10">

                {/* Left - Contact Info */}
                <div className="bg-[#272727] text-white rounded-3xl p-8 flex flex-col gap-8 lg:w-[380px] shrink-0">
                    <div>
                        <h2 className="text-2xl font-semibold mb-2">Contact Information</h2>
                        <p className="text-gray-400 text-sm">Fill up the form and I will get back to you within 24 hours.</p>
                    </div>

                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-4">
                            <div className="bg-orange-400 p-3 rounded-full shrink-0">
                                <MdPhone size={20} />
                            </div>
                            <div>
                                <p className="text-xs text-gray-400 mb-0.5">Phone</p>
                                <p className="font-medium">+20 11 43 63 73 41</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="bg-orange-400 p-3 rounded-full shrink-0">
                                <MdEmail size={20} />
                            </div>
                            <div>
                                <p className="text-xs text-gray-400 mb-0.5">Email</p>
                                <p className="font-medium">fawzisayed1209@gmail.com</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="bg-orange-400 p-3 rounded-full shrink-0">
                                <MdLocationOn size={20} />
                            </div>
                            <div>
                                <p className="text-xs text-gray-400 mb-0.5">Location</p>
                                <p className="font-medium">Mumbai, India</p>
                            </div>
                        </div>
                    </div>

                    {/* Social */}
                    <div>
                        <p className="text-gray-400 text-sm mb-3">Follow Me</p>
                        <div className="flex gap-3">
                            {['Youtube', 'Instagram', 'LinkedIn'].map((s) => (
                                <button key={s} className="bg-orange-400 text-white text-xs px-4 py-2 rounded-full font-medium hover:bg-orange-500 transition">
                                    {s}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right - Form */}
                <div className="flex-1 bg-gray-50 rounded-3xl p-8">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">

                        <div className="flex flex-col sm:flex-row gap-5">
                            <div className="flex-1 flex flex-col gap-1">
                                <label className="text-sm font-medium text-gray-700">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="Your name"
                                    className="border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-orange-400 transition bg-white text-sm"
                                />
                            </div>
                            <div className="flex-1 flex flex-col gap-1">
                                <label className="text-sm font-medium text-gray-700">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="your@email.com"
                                    className="border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-orange-400 transition bg-white text-sm"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-medium text-gray-700">Subject</label>
                            <input
                                type="text"
                                name="subject"
                                value={form.subject}
                                onChange={handleChange}
                                placeholder="What's this about?"
                                className="border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-orange-400 transition bg-white text-sm"
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-medium text-gray-700">Message</label>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                placeholder="Write your message..."
                                rows={6}
                                className="border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-orange-400 transition bg-white text-sm resize-none"
                            />
                        </div>

                        <button
                            type="submit"
                            className="bg-orange-400 hover:bg-orange-500 transition text-white font-semibold py-3 px-8 rounded-full self-start"
                        >
                            Send Message →
                        </button>

                    </form>
                </div>

            </div>
        </div>
    )
}

export default ContactPage