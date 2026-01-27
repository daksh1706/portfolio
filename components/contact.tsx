'use client'

import React from "react"

import { useState } from 'react'
import { Mail, Phone, Github, Linkedin } from 'lucide-react'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Using Formspree or similar service for form submission
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setSubmitted(false), 5000)
      }
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-3xl opacity-40" />

      <div className="relative max-w-4xl mx-auto">
        <div className="mb-4 inline-block">
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">
            Get In Touch
          </span>
        </div>
        <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-8">
          Let's Connect & Collaborate
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <p className="text-muted-foreground mb-10 leading-relaxed text-balance">
              I'm always open to new opportunities, creative ideas, and interesting projects. 
              Reach out and let's build something amazing together!
            </p>

            <div className="space-y-4">
              {/* Email */}
              <a
                href="mailto:dakshmaru10@gmail.com"
                className="group flex items-start gap-4 p-6 rounded-xl bg-gradient-to-br from-card/50 to-card/30 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 backdrop-blur-sm"
              >
                <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/30 group-hover:border-primary/60 transition-colors">
                  <Mail className="text-primary" size={24} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Email</p>
                  <p className="text-foreground font-semibold mt-1 group-hover:text-primary transition-colors">
                    dakshmaru10@gmail.com
                  </p>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+917878489640"
                className="group flex items-start gap-4 p-6 rounded-xl bg-gradient-to-br from-card/50 to-card/30 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 backdrop-blur-sm"
              >
                <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/30 group-hover:border-primary/60 transition-colors">
                  <Phone className="text-primary" size={24} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Phone</p>
                  <p className="text-foreground font-semibold mt-1 group-hover:text-primary transition-colors">
                    +91-7878489640
                  </p>
                </div>
              </a>

              {/* Social Links */}
              <div>
                <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider mb-4">Connect</p>
                <div className="flex gap-3">
                  <a
                    href="https://github.com/daksh1706"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-xl bg-gradient-to-br from-card/50 to-card/30 border border-border/50 text-primary hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 backdrop-blur-sm"
                    aria-label="GitHub"
                  >
                    <Github size={24} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/daksh-maru-4b07a5325/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-xl bg-gradient-to-br from-card/50 to-card/30 border border-border/50 text-primary hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 backdrop-blur-sm"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-bold text-foreground mb-2 uppercase tracking-wider"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-card/50 border border-border/50 text-foreground placeholder-muted-foreground focus:border-primary focus:bg-card focus:ring-1 focus:ring-primary/30 outline-none transition-all duration-300 backdrop-blur-sm"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-bold text-foreground mb-2 uppercase tracking-wider"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-card/50 border border-border/50 text-foreground placeholder-muted-foreground focus:border-primary focus:bg-card focus:ring-1 focus:ring-primary/30 outline-none transition-all duration-300 backdrop-blur-sm"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-bold text-foreground mb-2 uppercase tracking-wider"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-card/50 border border-border/50 text-foreground placeholder-muted-foreground focus:border-primary focus:bg-card focus:ring-1 focus:ring-primary/30 outline-none transition-all duration-300 backdrop-blur-sm"
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-bold text-foreground mb-2 uppercase tracking-wider"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-card/50 border border-border/50 text-foreground placeholder-muted-foreground focus:border-primary focus:bg-card focus:ring-1 focus:ring-primary/30 outline-none transition-all duration-300 resize-none backdrop-blur-sm"
                placeholder="Your message here..."
              />
            </div>

            {submitted && (
              <div className="p-4 rounded-lg bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/40 text-primary font-medium">
                ✓ Thank you! Your message has been sent successfully.
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full px-6 py-3 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-lg font-bold uppercase tracking-wider hover:shadow-lg hover:shadow-primary/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
