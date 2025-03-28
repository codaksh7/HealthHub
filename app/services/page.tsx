import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Heart,
  Baby,
  Brain,
  Bone,
  Microscope,
  Pill,
  Stethoscope,
  Activity,
  Scissors,
  Eye,
  Ear,
  SmileIcon as Tooth,
  ArrowRight,
} from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Healthcare Services</h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              Comprehensive medical care tailored to your needs with a focus on quality and patient satisfaction.
            </p>
            <Link href="#services">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100">
                Explore Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Comprehensive Healthcare Services</h2>
            <p className="text-gray-700">
              At HealthHub, we offer a wide range of medical services to meet all your healthcare needs under one roof.
            </p>
          </div>

          <Tabs defaultValue="specialties" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="specialties">Medical Specialties</TabsTrigger>
              <TabsTrigger value="diagnostics">Diagnostics & Testing</TabsTrigger>
              <TabsTrigger value="programs">Special Programs</TabsTrigger>
            </TabsList>

            <TabsContent value="specialties" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ServiceCard
                  icon={<Heart className="h-8 w-8 text-blue-600" />}
                  title="Cardiology"
                  description="Comprehensive care for heart conditions, including diagnostic testing, treatment, and preventive care."
                  link="/services/cardiology"
                />

                <ServiceCard
                  icon={<Baby className="h-8 w-8 text-blue-600" />}
                  title="Pediatrics"
                  description="Specialized healthcare for infants, children, and adolescents, focusing on growth, development, and childhood illnesses."
                  link="/services/pediatrics"
                />

                <ServiceCard
                  icon={<Brain className="h-8 w-8 text-blue-600" />}
                  title="Neurology"
                  description="Diagnosis and treatment of disorders of the nervous system, including the brain, spinal cord, and peripheral nerves."
                  link="/services/neurology"
                />

                <ServiceCard
                  icon={<Bone className="h-8 w-8 text-blue-600" />}
                  title="Orthopedics"
                  description="Specialized care for the musculoskeletal system, including bones, joints, ligaments, tendons, and muscles."
                  link="/services/orthopedics"
                />

                <ServiceCard
                  icon={<Scissors className="h-8 w-8 text-blue-600" />}
                  title="General Surgery"
                  description="Surgical procedures for a wide range of conditions, performed by experienced surgeons using advanced techniques."
                  link="/services/surgery"
                />

                <ServiceCard
                  icon={<Stethoscope className="h-8 w-8 text-blue-600" />}
                  title="Internal Medicine"
                  description="Comprehensive care for adults, focusing on prevention, diagnosis, and treatment of adult diseases."
                  link="/services/internal-medicine"
                />

                <ServiceCard
                  icon={<Eye className="h-8 w-8 text-blue-600" />}
                  title="Ophthalmology"
                  description="Specialized care for eye conditions, including routine exams, disease management, and surgical procedures."
                  link="/services/ophthalmology"
                />

                <ServiceCard
                  icon={<Ear className="h-8 w-8 text-blue-600" />}
                  title="ENT"
                  description="Diagnosis and treatment of conditions affecting the ears, nose, throat, head, and neck regions."
                  link="/services/ent"
                />

                <ServiceCard
                  icon={<Tooth className="h-8 w-8 text-blue-600" />}
                  title="Dental Care"
                  description="Comprehensive dental services, including preventive care, restorative treatments, and cosmetic procedures."
                  link="/services/dental"
                />
              </div>
            </TabsContent>

            <TabsContent value="diagnostics" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ServiceCard
                  icon={<Microscope className="h-8 w-8 text-blue-600" />}
                  title="Laboratory Services"
                  description="Comprehensive testing services, including blood work, urinalysis, and other diagnostic tests."
                  link="/services/laboratory"
                />

                <ServiceCard
                  icon={<Activity className="h-8 w-8 text-blue-600" />}
                  title="Imaging & Radiology"
                  description="Advanced imaging services, including X-rays, CT scans, MRIs, and ultrasounds for accurate diagnosis."
                  link="/services/imaging"
                />

                <ServiceCard
                  icon={<Heart className="h-8 w-8 text-blue-600" />}
                  title="Cardiac Diagnostics"
                  description="Specialized tests to evaluate heart function, including ECGs, stress tests, and echocardiograms."
                  link="/services/cardiac-diagnostics"
                />

                <ServiceCard
                  icon={<Brain className="h-8 w-8 text-blue-600" />}
                  title="Neurological Testing"
                  description="Advanced diagnostics for neurological conditions, including EEGs, EMGs, and nerve conduction studies."
                  link="/services/neuro-diagnostics"
                />

                <ServiceCard
                  icon={<Stethoscope className="h-8 w-8 text-blue-600" />}
                  title="Pulmonary Function Tests"
                  description="Comprehensive testing to evaluate lung function and diagnose respiratory conditions."
                  link="/services/pulmonary-tests"
                />

                <ServiceCard
                  icon={<Microscope className="h-8 w-8 text-blue-600" />}
                  title="Pathology Services"
                  description="Expert analysis of tissue samples to diagnose diseases and guide treatment decisions."
                  link="/services/pathology"
                />
              </div>
            </TabsContent>

            <TabsContent value="programs" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ServiceCard
                  icon={<Heart className="h-8 w-8 text-blue-600" />}
                  title="Cardiac Rehabilitation"
                  description="Structured program to help patients recover from heart attacks, heart surgery, and other cardiac events."
                  link="/services/cardiac-rehab"
                />

                <ServiceCard
                  icon={<Activity className="h-8 w-8 text-blue-600" />}
                  title="Weight Management"
                  description="Comprehensive programs to help patients achieve and maintain a healthy weight through diet, exercise, and lifestyle changes."
                  link="/services/weight-management"
                />

                <ServiceCard
                  icon={<Pill className="h-8 w-8 text-blue-600" />}
                  title="Diabetes Management"
                  description="Specialized care for patients with diabetes, including education, monitoring, and treatment."
                  link="/services/diabetes"
                />

                <ServiceCard
                  icon={<Stethoscope className="h-8 w-8 text-blue-600" />}
                  title="Preventive Care"
                  description="Comprehensive services focused on preventing illness and promoting overall health and wellness."
                  link="/services/preventive-care"
                />

                <ServiceCard
                  icon={<Baby className="h-8 w-8 text-blue-600" />}
                  title="Maternal & Child Health"
                  description="Specialized care for mothers and children, including prenatal care, delivery, and pediatric services."
                  link="/services/maternal-child"
                />

                <ServiceCard
                  icon={<Brain className="h-8 w-8 text-blue-600" />}
                  title="Mental Health Services"
                  description="Comprehensive mental health care, including counseling, therapy, and psychiatric services."
                  link="/services/mental-health"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Services</h2>
            <p className="text-gray-700">Learn more about our most sought-after medical services and specialties.</p>
          </div>

          <div className="space-y-12">
            <FeaturedService
              title="Comprehensive Cardiac Care"
              description="Our cardiology department offers state-of-the-art diagnostic and treatment services for all types of heart conditions. Our team of experienced cardiologists uses the latest technology and techniques to provide personalized care for each patient."
              image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/02d10080-66e7-4289-aba5-4bf4c6e0c3b3-4biF2WlA8bhPNhQXK2EffppyUfJ4Kp.jpeg"
              features={[
                "Advanced cardiac imaging",
                "Interventional cardiology procedures",
                "Electrophysiology studies",
                "Cardiac rehabilitation programs",
                "Preventive cardiology services",
              ]}
              reverse={false}
            />

            <FeaturedService
              title="Pediatric Excellence"
              description="Our pediatric department is dedicated to providing comprehensive healthcare for children from birth through adolescence. We create a child-friendly environment where young patients feel comfortable and parents feel confident in the care their children receive."
              image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Foto%20retrato%20confiante%20jovem%20m%C3%A9dica%20femi%E2%80%A6-7hT8QZPvqnYcVyRk4a82p5pxGByPq5.jpeg"
              features={[
                "Well-child visits and immunizations",
                "Diagnosis and treatment of childhood illnesses",
                "Developmental assessments",
                "Behavioral health services",
                "Specialized care for chronic conditions",
              ]}
              reverse={true}
            />

            <FeaturedService
              title="Advanced Surgical Services"
              description="Our surgical department offers a wide range of procedures performed by skilled surgeons using the latest techniques and technology. We prioritize patient safety, comfort, and successful outcomes for all surgical interventions."
              image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bd587061-52a8-4759-8829-eb1e6546f13f-Y6amnvR0WbHXzfwwc6U4ZVzqP0rseQ.jpeg"
              features={[
                "Minimally invasive procedures",
                "Robotic-assisted surgery",
                "Same-day surgical services",
                "Comprehensive pre and post-operative care",
                "Specialized surgical teams for various procedures",
              ]}
              reverse={false}
            />
          </div>
        </div>
      </section>

      {/* Telemedicine Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Virtual Care Services</h2>
              <p className="text-gray-700 mb-6">
                Access quality healthcare from the comfort of your home with our telemedicine services. Our virtual care
                platform connects you with healthcare providers for consultations, follow-ups, and certain treatments
                without the need to visit a physical location.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                  </div>
                  <p className="text-gray-600">Convenient access to healthcare providers from anywhere</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                  </div>
                  <p className="text-gray-600">Reduced wait times and no travel required</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                  </div>
                  <p className="text-gray-600">Secure and private video consultations</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                  </div>
                  <p className="text-gray-600">Prescription renewals and follow-up appointments</p>
                </div>
              </div>
              <Link href="/appointments">
                <Button>Schedule a Virtual Visit</Button>
              </Link>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Aqu%C3%AD%20las%20fotos%20de%20los%2010%20doctores%20%C2%A1m%C3%A1s%20hot%20de%E2%80%A6-ZoZNyCWhohxVmWqabLsrgeHb3YeJLV.jpeg"
                alt="Telemedicine Services"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Insurance & Payment */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Insurance & Payment Options</h2>
            <p className="text-gray-700">
              We work with most major insurance providers and offer flexible payment options to make healthcare
              accessible to all.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Accepted Insurance Plans</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    <span>Blue Cross Blue Shield</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    <span>Aetna</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    <span>Cigna</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    <span>UnitedHealthcare</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    <span>Medicare</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    <span>Medicaid</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    <span>And many more</span>
                  </li>
                </ul>
                <p className="mt-4 text-sm text-gray-600">
                  Please contact our billing department to verify your specific insurance coverage.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Payment Options</h3>
                <p className="text-gray-700 mb-4">
                  We offer various payment options to accommodate your financial needs:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    <span>Credit and debit cards</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    <span>Cash and personal checks</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    <span>Health Savings Accounts (HSA)</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    <span>Flexible Spending Accounts (FSA)</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    <span>Payment plans for eligible services</span>
                  </li>
                </ul>
                <p className="mt-4 text-sm text-gray-600">
                  Our financial counselors are available to discuss payment options and assist with any billing
                  questions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience Our Services?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book an appointment today and take the first step towards better health with HealthHub.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/appointments/book">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Book an Appointment
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

// Service Card Component
function ServiceCard({
  icon,
  title,
  description,
  link,
}: {
  icon: React.ReactNode
  title: string
  description: string
  link: string
}) {
  return (
    <Card className="h-full">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{description}</p>
        <Link href={link} className="text-blue-600 flex items-center hover:underline mt-auto">
          Learn More <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </CardContent>
    </Card>
  )
}

// Featured Service Component
function FeaturedService({
  title,
  description,
  image,
  features,
  reverse,
}: {
  title: string
  description: string
  image: string
  features: string[]
  reverse: boolean
}) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${reverse ? "md:flex-row-reverse" : ""}`}>
      <div className={reverse ? "order-1 md:order-2" : ""}>
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-gray-700 mb-6">{description}</p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <Link href="/appointments/book">
            <Button>Book an Appointment</Button>
          </Link>
        </div>
      </div>
      <div
        className={`relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl ${reverse ? "order-2 md:order-1" : ""}`}
      >
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
    </div>
  )
}

function CheckCircle(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  )
}

