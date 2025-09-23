import React from 'react'

export default function Contact() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800">Get in Touch</h1>
        <p className="mt-4 text-gray-600">
          Have questions, wholesale inquiries, or want to partner with us? Fill out the form below or reach us directly at 
          <span className="font-semibold text-accent"> info@danikom.com</span>.
        </p>

        {/* Contact Form */}
        <form className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-1">
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-accent focus:border-accent"
            />
          </div>
          <div className="md:col-span-1">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Your email"
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-accent focus:border-accent"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              rows="5"
              placeholder="Write your message..."
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-accent focus:border-accent"
            />
          </div>
          <div className="md:col-span-2">
            <button
              type="submit"
              className="px-6 py-3 rounded-lg bg-accent text-white font-semibold shadow hover:bg-accent/90 transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
