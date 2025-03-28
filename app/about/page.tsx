import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Users, Award, Heart } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About HealthHub</h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              Dedicated to providing exceptional healthcare services with compassion and expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-700 mb-6">
                At HealthHub, our mission is to improve the health and wellbeing of the communities we serve. We are
                committed to delivering high-quality, patient-centered healthcare with compassion, integrity, and
                excellence.
              </p>
              <p className="text-gray-700 mb-6">
                We strive to make healthcare accessible to all, regardless of background or circumstance. Our team of
                dedicated professionals works tirelessly to ensure that every patient receives the care they deserve in
                a welcoming and supportive environment.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-lg">Patient-Centered Care</h3>
                    <p className="text-gray-600">
                      We put patients at the center of everything we do, ensuring their needs and preferences guide our
                      decisions.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-lg">Excellence in Healthcare</h3>
                    <p className="text-gray-600">
                      We are committed to providing the highest standard of medical care through continuous improvement
                      and innovation.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-lg">Community Engagement</h3>
                    <p className="text-gray-600">
                      We actively engage with our communities to understand their healthcare needs and develop tailored
                      solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/As%20You%20Wished%2C%20Medfort%20Hospital%20and%20Clinic%20is%20Here%E2%80%A6-XsnBRFqq4j4HeQSQcAqdKQxMGNj6as.jpeg"
                alt="HealthHub Mission"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our History */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our History</h2>
            <p className="text-gray-700">
              From humble beginnings to becoming a leading healthcare provider, our journey has been defined by a
              commitment to excellence and innovation.
            </p>
          </div>

          <div className="space-y-12 max-w-4xl mx-auto">
            <div className="relative pl-10 md:pl-0 md:grid md:grid-cols-5 md:gap-10 items-start">
              <div className="md:col-span-2 md:text-right">
                <div className="bg-blue-600 text-white text-lg font-bold py-2 px-4 rounded md:inline-block">2010</div>
                <h3 className="text-xl font-bold mt-2">Foundation</h3>
              </div>
              <div className="absolute top-0 left-0 md:relative md:col-span-1 flex justify-center">
                <div className="h-full w-0.5 bg-blue-600 absolute left-0 md:left-1/2 top-10 bottom-0"></div>
                <div className="w-8 h-8 rounded-full bg-blue-600 border-4 border-white shadow z-10"></div>
              </div>
              <div className="md:col-span-2">
                <p className="text-gray-700">
                  HealthHub was founded with a vision to transform healthcare delivery by making it more accessible,
                  efficient, and patient-friendly. Starting with a single clinic, we focused on building a reputation
                  for quality care and personalized service.
                </p>
              </div>
            </div>

            <div className="relative pl-10 md:pl-0 md:grid md:grid-cols-5 md:gap-10 items-start">
              <div className="md:col-span-2 md:text-right">
                <div className="bg-blue-600 text-white text-lg font-bold py-2 px-4 rounded md:inline-block">2015</div>
                <h3 className="text-xl font-bold mt-2">Expansion</h3>
              </div>
              <div className="absolute top-0 left-0 md:relative md:col-span-1 flex justify-center">
                <div className="h-full w-0.5 bg-blue-600 absolute left-0 md:left-1/2 top-10 bottom-0"></div>
                <div className="w-8 h-8 rounded-full bg-blue-600 border-4 border-white shadow z-10"></div>
              </div>
              <div className="md:col-span-2">
                <p className="text-gray-700">
                  Following our initial success, we expanded our services to multiple locations, bringing our unique
                  approach to healthcare to more communities. We also introduced specialized departments and recruited
                  top medical talent from around the country.
                </p>
              </div>
            </div>

            <div className="relative pl-10 md:pl-0 md:grid md:grid-cols-5 md:gap-10 items-start">
              <div className="md:col-span-2 md:text-right">
                <div className="bg-blue-600 text-white text-lg font-bold py-2 px-4 rounded md:inline-block">2020</div>
                <h3 className="text-xl font-bold mt-2">Digital Transformation</h3>
              </div>
              <div className="absolute top-0 left-0 md:relative md:col-span-1 flex justify-center">
                <div className="h-full w-0.5 bg-blue-600 absolute left-0 md:left-1/2 top-10 bottom-0"></div>
                <div className="w-8 h-8 rounded-full bg-blue-600 border-4 border-white shadow z-10"></div>
              </div>
              <div className="md:col-span-2">
                <p className="text-gray-700">
                  Recognizing the importance of technology in modern healthcare, we invested heavily in digital
                  infrastructure, launching our online platform for appointment booking, telemedicine services, and
                  electronic health records, making healthcare more convenient for our patients.
                </p>
              </div>
            </div>

            <div className="relative pl-10 md:pl-0 md:grid md:grid-cols-5 md:gap-10 items-start">
              <div className="md:col-span-2 md:text-right">
                <div className="bg-blue-600 text-white text-lg font-bold py-2 px-4 rounded md:inline-block">Today</div>
                <h3 className="text-xl font-bold mt-2">Leading Healthcare Provider</h3>
              </div>
              <div className="absolute top-0 left-0 md:relative md:col-span-1 flex justify-center">
                <div className="w-8 h-8 rounded-full bg-blue-600 border-4 border-white shadow z-10"></div>
              </div>
              <div className="md:col-span-2">
                <p className="text-gray-700">
                  Today, HealthHub stands as a leading healthcare provider, known for our commitment to excellence,
                  innovation, and patient satisfaction. We continue to grow and evolve, always with our core mission at
                  heart: improving the health and wellbeing of the communities we serve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Leadership Team</h2>
            <p className="text-gray-700">
              Meet the dedicated professionals who guide our organization with vision, expertise, and a commitment to
              excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden">
              <div className="h-64 relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bd587061-52a8-4759-8829-eb1e6546f13f-Y6amnvR0WbHXzfwwc6U4ZVzqP0rseQ.jpeg"
                  alt="Dr. James Wilson"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold">Dr. James Wilson</h3>
                <p className="text-blue-600 mb-3">Chief Medical Officer</p>
                <p className="text-gray-600 mb-4">
                  With over 20 years of experience in healthcare management and clinical practice, Dr. Wilson leads our
                  medical team with expertise and compassion.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="h-64 relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Foto%20retrato%20confiante%20jovem%20m%C3%A9dica%20femi%E2%80%A6-7hT8QZPvqnYcVyRk4a82p5pxGByPq5.jpeg"
                  alt="Dr. Emily Parker"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold">Dr. Emily Parker</h3>
                <p className="text-blue-600 mb-3">Director of Patient Services</p>
                <p className="text-gray-600 mb-4">
                  Dr. Parker ensures that patient care remains at the heart of everything we do, overseeing quality
                  improvement initiatives and patient experience programs.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="h-64 relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7a76f940-b357-4979-af50-4c8670d8116a-IzuylyZsk4AmWpCDLkTfesryYLRyYh.jpeg"
                  alt="Dr. Michael Thompson"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold">Dr. Michael Thompson</h3>
                <p className="text-blue-600 mb-3">Head of Research & Innovation</p>
                <p className="text-gray-600 mb-4">
                  Leading our research department, Dr. Thompson drives innovation in healthcare delivery and medical
                  treatments, keeping HealthHub at the forefront of medical advances.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
              <p className="text-lg opacity-90">Healthcare Facilities</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">200+</div>
              <p className="text-lg opacity-90">Specialized Doctors</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">100K+</div>
              <p className="text-lg opacity-90">Patients Served</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
              <p className="text-lg opacity-90">Years of Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-gray-700">These principles guide our actions, decisions, and interactions every day.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Compassion</h3>
                <p className="text-gray-600">
                  We treat every patient with kindness, empathy, and respect, recognizing their unique needs and
                  concerns.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Excellence</h3>
                <p className="text-gray-600">
                  We strive for the highest standards in medical care, service, and operational efficiency.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Teamwork</h3>
                <p className="text-gray-600">
                  We collaborate across disciplines to provide comprehensive, coordinated care for our patients.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Integrity</h3>
                <p className="text-gray-600">
                  We act with honesty, transparency, and ethical responsibility in all that we do.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Healthcare Community</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-700">
            Experience the HealthHub difference. Register today to access our comprehensive healthcare services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <Button size="lg">Register Now</Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

