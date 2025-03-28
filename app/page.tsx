import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Search, Calendar, Clock, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">Your Health Is Our Priority</h1>
              <p className="text-lg md:text-xl opacity-90">
                Find the best doctors, book appointments, and get the care you deserve with HealthHub.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/doctors">
                  <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100">
                    Find Doctors
                  </Button>
                </Link>
                <Link href="/appointments">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    Book Appointment
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/02d10080-66e7-4289-aba5-4bf4c6e0c3b3-4biF2WlA8bhPNhQXK2EffppyUfJ4Kp.jpeg"
                alt="Healthcare professionals caring for patients"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-md p-6 -mt-12 relative z-10 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-center">Find Nearby Healthcare Facilities</h2>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <select className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">All Types</option>
                  <option value="hospital">Hospitals</option>
                  <option value="clinic">Clinics</option>
                  <option value="specialist">Specialists</option>
                  <option value="emergency">Emergency Care</option>
                </select>
              </div>
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Enter your location"
                  className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <Button className="h-12 px-6">
                <Search className="mr-2 h-4 w-4" />
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Our Services</h2>
            <p className="text-gray-600 mt-2">Comprehensive healthcare services for you and your family</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="rounded-full bg-blue-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Search className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Find Doctors</h3>
                <p className="text-gray-600 mb-4">
                  Search for specialists, read reviews, and find the right doctor for your needs.
                </p>
                <Link href="/doctors" className="text-blue-600 flex items-center hover:underline">
                  Find a Doctor <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="rounded-full bg-blue-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Book Appointments</h3>
                <p className="text-gray-600 mb-4">
                  Schedule appointments online with your preferred doctors at your convenience.
                </p>
                <Link href="/appointments" className="text-blue-600 flex items-center hover:underline">
                  Book Now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="rounded-full bg-blue-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
                <p className="text-gray-600 mb-4">
                  Get medical advice and support anytime through our telemedicine services.
                </p>
                <Link href="/services" className="text-blue-600 flex items-center hover:underline">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Doctors */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Our Featured Doctors</h2>
            <p className="text-gray-600 mt-2">Experienced healthcare professionals ready to help you</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="overflow-hidden">
              <div className="h-64 relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bd587061-52a8-4759-8829-eb1e6546f13f-Y6amnvR0WbHXzfwwc6U4ZVzqP0rseQ.jpeg"
                  alt="Doctor"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg">Dr. John Smith</h3>
                <p className="text-gray-600">Cardiologist</p>
                <div className="mt-4 flex justify-between items-center">
                  <div className="flex items-center text-yellow-500">
                    ★★★★★
                    <span className="text-gray-600 ml-1">(48)</span>
                  </div>
                  <Link href="/doctors/john-smith">
                    <Button variant="outline" size="sm">
                      View Profile
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="h-64 relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Foto%20retrato%20confiante%20jovem%20m%C3%A9dica%20femi%E2%80%A6-7hT8QZPvqnYcVyRk4a82p5pxGByPq5.jpeg"
                  alt="Doctor"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg">Dr. Sarah Johnson</h3>
                <p className="text-gray-600">Pediatrician</p>
                <div className="mt-4 flex justify-between items-center">
                  <div className="flex items-center text-yellow-500">
                    ★★★★★
                    <span className="text-gray-600 ml-1">(36)</span>
                  </div>
                  <Link href="/doctors/sarah-johnson">
                    <Button variant="outline" size="sm">
                      View Profile
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="h-64 relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Royalty%20Free%20Stock%20Photos%20And%20Images-bvH3SVAw9Y3sRSRIzdyV6bnk42A8os.jpeg"
                  alt="Doctor"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg">Dr. Robert Williams</h3>
                <p className="text-gray-600">Neurologist</p>
                <div className="mt-4 flex justify-between items-center">
                  <div className="flex items-center text-yellow-500">
                    ★★★★☆
                    <span className="text-gray-600 ml-1">(29)</span>
                  </div>
                  <Link href="/doctors/robert-williams">
                    <Button variant="outline" size="sm">
                      View Profile
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="h-64 relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Aqu%C3%AD%20las%20fotos%20de%20los%2010%20doctores%20%C2%A1m%C3%A1s%20hot%20de%E2%80%A6-ZoZNyCWhohxVmWqabLsrgeHb3YeJLV.jpeg"
                  alt="Doctor"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg">Dr. Michael Chen</h3>
                <p className="text-gray-600">Orthopedic Surgeon</p>
                <div className="mt-4 flex justify-between items-center">
                  <div className="flex items-center text-yellow-500">
                    ★★★★☆
                    <span className="text-gray-600 ml-1">(42)</span>
                  </div>
                  <Link href="/doctors/michael-chen">
                    <Button variant="outline" size="sm">
                      View Profile
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-10">
            <Link href="/doctors">
              <Button>View All Doctors</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">What Our Patients Say</h2>
            <p className="text-gray-600 mt-2">Read testimonials from our satisfied patients</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center text-yellow-500 mb-4">★★★★★</div>
                <p className="text-gray-600 mb-6">
                  "The doctors at HealthHub are amazing. They took the time to listen to my concerns and provided
                  excellent care. I highly recommend their services!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                  <div>
                    <h4 className="font-semibold">Emily Thompson</h4>
                    <p className="text-sm text-gray-500">Patient since 2021</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center text-yellow-500 mb-4">★★★★★</div>
                <p className="text-gray-600 mb-6">
                  "Booking appointments online was so easy! The staff was friendly and professional. I received great
                  care and will definitely be coming back."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                  <div>
                    <h4 className="font-semibold">David Wilson</h4>
                    <p className="text-sm text-gray-500">Patient since 2022</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center text-yellow-500 mb-4">★★★★☆</div>
                <p className="text-gray-600 mb-6">
                  "The telemedicine service was a lifesaver when I couldn't leave home. The doctor was thorough and
                  helped me get the treatment I needed quickly."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                  <div>
                    <h4 className="font-semibold">Jennifer Martinez</h4>
                    <p className="text-sm text-gray-500">Patient since 2020</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Take Control of Your Health?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied patients who trust HealthHub for their healthcare needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Register Now
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

