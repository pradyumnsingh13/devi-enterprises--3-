"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Create email with form data
    const subject = encodeURIComponent(`Contact Form Submission from ${formData.name}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`,
    )

    // Open email client
    window.location.href = `mailto:devienterprisesbaddi@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="section-bg contact-bg py-8 md:py-12">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Contact Us</h2>

        <div className="grid md:grid-cols-2 gap-12 mt-8">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-blue-300">Get In Touch</h3>
            <p className="text-gray-200 mb-8">
              We're here to answer any questions you may have about our products and services. Reach out to us and we'll
              respond as soon as we can.
            </p>

            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-blue-400 mr-3 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-white">Address</h4>
                  <p className="text-gray-300">Plot No. 164, HPSIDC Industrial Area, Baddi, Dist-Solan, H.P., 173205</p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="h-6 w-6 text-blue-400 mr-3 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-white">Phone</h4>
                  <p className="text-gray-300">+91 9816273955</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="h-6 w-6 text-blue-400 mr-3 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-white">Email</h4>
                  <p className="text-gray-300">devienterprisesbaddi@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="bg-slate-800 p-6 rounded-lg shadow-lg border border-blue-500">
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border bg-slate-700 text-white border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border bg-slate-700 text-white border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-200 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border bg-slate-700 text-white border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border bg-slate-700 text-white border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button type="submit" className="btn-primary w-full flex items-center justify-center">
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
