'use client'

import { motion } from 'framer-motion'
import { containerVariants, itemVariants } from '@/lib/animation-variants'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, Linkedin, Github, Twitter } from 'lucide-react'
import { useState } from 'react'

const socialLinks = [
  { icon: Mail, label: 'Email', href: 'mailto:mbmarshall002@gmail.com', color: 'bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/barinua-mon', color: 'bg-blue-500/10 text-blue-500 hover:bg-blue-500 hover:text-white' },
  { icon: Github, label: 'GitHub', href: 'https://github.com/Barinua-Mon', color: 'bg-gray-500/10 text-gray-500 hover:bg-gray-500 hover:text-white' },
  { icon: Twitter, label: 'Twitter', href: 'https://x.com/Baron96795712', color: 'bg-sky-500/10 text-sky-500 hover:bg-sky-500 hover:text-white' },
]

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setIsSubmitting(true)

  try {
    const res = await fetch("https://formspree.io/f/mpqknvnv", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })

    if (res.ok) {
      setSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
      
    } else {
      alert("Something went wrong")
    }

  } catch (error) {
    console.error(error)
    alert("Error sending message")
  } finally {
    setIsSubmitting(false)
    setTimeout(() => setSubmitted(false), 3000)
  }
}

  return (
    <section id="contact" className="py-20 px-4 bg-card/30">
      <motion.div
        className="max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I&apos;d love to hear from you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div variants={itemVariants}>
            <Card>
              <CardHeader>
                <CardTitle>Connect With Me</CardTitle>
                <CardDescription>
                  Reach out through any of these channels
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {socialLinks.map((link) => {
                  const Icon = link.icon
                  return (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-lg border hover:border-primary transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      <div className={`p-3 rounded-lg transition-all ${link.color}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">{link.label}</div>
                        <div className="text-sm text-muted-foreground">Get in touch with me</div>
                      </div>
                    </motion.a>
                  )
                })}

                <div className="pt-4 border-t">
                  <div className="text-sm text-muted-foreground mb-4">
                    Or fill out the form and I&apos;ll get back to you as soon as possible!
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card>
              <CardHeader>
                <CardTitle>Send Me a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="bg-muted/50"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className="bg-muted/50"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message..."
                      required
                      rows={4}
                      className="bg-muted/50 resize-none"
                    />
                  </div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="submit"
                      className="w-full rounded-lg bg-primary text-primary-foreground hover:bg-primary/90"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : submitted ? 'Message Sent!' : 'Send Message'}
                    </Button>
                  </motion.div>

                  {submitted && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-sm text-center text-green-500 mt-4"
                    >
                      Thank you for reaching out! I&apos;ll get back to you soon.
                    </motion.p>
                  )}
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
