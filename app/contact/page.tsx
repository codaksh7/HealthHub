"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "general",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, subject: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsSubmitting(true)

    // Simulate form submission
    try {
      // In a real app, you would send this data to your backend
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setIsSubmitted(true)
    } catch (err) {
      setError("There was an error submitting your message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              We're here to help. Reach out to us with any questions, concerns, or feedback.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Phone</h3>
                <p className="text-gray-600 mb-2">Call us directly</p>
                <a href="tel:+15551234567" className="text-blue-600 font-medium">
                  +1 (555) 123-4567
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Email</h3>
                <p className="text-gray-600 mb-2">Send us an email</p>
                <a href="mailto:contact@healthhub.com" className="text-blue-600 font-medium">
                  contact@healthhub.com
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Location</h3>
                <p className="text-gray-600 mb-2">Visit our main office</p>
                <address className="not-italic text-blue-600 font-medium">
                  123 Healthcare Avenue
                  <br />
                  Medical District, City 12345
                </address>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>

              {isSubmitted ? (
                <Card>
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                    <p className="text-gray-700 mb-6">
                      Your message has been sent successfully. We'll get back to you as soon as possible.
                    </p>
                    <Button onClick={() => setIsSubmitted(false)}>Send Another Message</Button>
                  </CardContent>
                </Card>
              ) : (
                <Card>
                  <CardContent className="p-6">
                    {error && (
                      <div className="p-3 text-sm bg-red-50 text-red-500 border border-red-200 rounded-md mb-4">
                        {error}
                      </div>
                    )}
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          required
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john.doe@example.com"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="(555) 123-4567"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label>Subject</Label>
                        <RadioGroup
                          value={formData.subject}
                          onValueChange={handleRadioChange}
                          className="flex flex-col space-y-1"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="general" id="general" />
                            <Label htmlFor="general" className="font-normal cursor-pointer">
                              General Inquiry
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="appointment" id="appointment" />
                            <Label htmlFor="appointment" className="font-normal cursor-pointer">
                              Appointment Related
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="billing" id="billing" />
                            <Label htmlFor="billing" className="font-normal cursor-pointer">
                              Billing & Insurance
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="feedback" id="feedback" />
                            <Label htmlFor="feedback" className="font-normal cursor-pointer">
                              Feedback
                            </Label>
                          </div>
                        </RadioGroup>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Please provide details about your inquiry..."
                          className="min-h-[150px]"
                          required
                        />
                      </div>

                      <Button type="submit" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Hours & Locations */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Hours & Locations</h2>

              <Card className="mb-8">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-blue-600" />
                    Hours of Operation
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">Monday - Friday</span>
                      <span>8:00 AM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Saturday</span>
                      <span>9:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Sunday</span>
                      <span>10:00 AM - 3:00 PM</span>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-blue-50 text-blue-800 rounded-md text-sm">
                    <p>Emergency services available 24/7</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-blue-600" />
                    Our Locations
                  </h3>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-lg">Main Hospital</h4>
                      <address className="not-italic text-gray-600 mt-1">
                        123 Healthcare Avenue
                        <br />
                        Medical District, City 12345
                      </address>
                      <div className="mt-2">
                        <a href="tel:+15551234567" className="text-blue-600 block">
                          +1 (555) 123-4567
                        </a>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-lg">Downtown Clinic</h4>
                      <address className="not-italic text-gray-600 mt-1">
                        456 Central Street
                        <br />
                        Downtown, City 12345
                      </address>
                      <div className="mt-2">
                        <a href="tel:+15559876543" className="text-blue-600 block">
                          +1 (555) 987-6543
                        </a>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-lg">Westside Medical Center</h4>
                      <address className="not-italic text-gray-600 mt-1">
                        789 Westview Boulevard
                        <br />
                        Westside, City 12345
                      </address>
                      <div className="mt-2">
                        <a href="tel:+15552468013" className="text-blue-600 block">
                          +1 (555) 246-8013
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Link href="/locations">
                      <Button variant="outline" className="w-full">
                        View All Locations
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-700">
              Find answers to common questions about our services, appointments, and policies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-2">How do I schedule an appointment?</h3>
                <p className="text-gray-700">
                  You can schedule an appointment through our online booking system, by calling our appointment line, or
                  by visiting one of our locations in person.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-2">What insurance plans do you accept?</h3>
                <p className="text-gray-700">
                  We accept most major insurance plans. Please contact our billing department to verify your specific
                  insurance coverage.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-2">How can I access my medical records?</h3>
                <p className="text-gray-700">
                  You can access your medical records through our patient portal. If you need assistance, please contact
                  our medical records department.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-2">What should I bring to my appointment?</h3>
                <p className="text-gray-700">
                  Please bring your insurance card, photo ID, list of current medications, and any relevant medical
                  records or test results.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-2">Do you offer telemedicine services?</h3>
                <p className="text-gray-700">
                  Yes, we offer virtual visits for many types of appointments. You can schedule a telemedicine
                  appointment through our online booking system.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-2">How do I refill my prescription?</h3>
                <p className="text-gray-700">
                  You can request prescription refills through our patient portal, by calling your provider's office, or
                  by contacting your pharmacy directly.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Link href="/faq">
              <Button variant="outline">View All FAQs</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Immediate Assistance?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our patient support team is available to help you with any questions or concerns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+15551234567">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Phone className="mr-2 h-4 w-4" />
                Call Us Now
              </Button>
            </a>
            <Link href="/appointments/book">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Book an Appointment
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

