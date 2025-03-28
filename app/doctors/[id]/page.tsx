"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Star, Phone, Mail, Award, FileText } from "lucide-react"
import Image from "next/image"

// Sample doctor data
const doctorsData = [
  {
    id: 1,
    name: "Dr. John Smith",
    specialty: "Cardiologist",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bd587061-52a8-4759-8829-eb1e6546f13f-Y6amnvR0WbHXzfwwc6U4ZVzqP0rseQ.jpeg",
    rating: 4.9,
    reviews: 48,
    location: "Main Hospital, Room 302",
    address: "123 Medical Center Blvd, New York, NY 10001",
    phone: "+1 (555) 123-4567",
    email: "john.smith@healthhub.com",
    experience: 15,
    education: [
      { degree: "MD", institution: "Harvard Medical School", year: "2008" },
      { degree: "Residency in Internal Medicine", institution: "Massachusetts General Hospital", year: "2011" },
      { degree: "Fellowship in Cardiology", institution: "Johns Hopkins Hospital", year: "2014" },
    ],
    certifications: [
      "American Board of Internal Medicine",
      "American College of Cardiology",
      "Advanced Cardiac Life Support (ACLS)",
    ],
    specializations: ["Coronary Artery Disease", "Heart Failure", "Cardiac Arrhythmias", "Preventive Cardiology"],
    languages: ["English", "Spanish"],
    availability: ["Monday", "Wednesday", "Friday"],
    bio: "Dr. John Smith is a board-certified cardiologist with over 15 years of experience in diagnosing and treating heart conditions. He specializes in preventive cardiology and heart disease management, with a focus on helping patients improve their heart health through lifestyle modifications and appropriate medical interventions. Dr. Smith is committed to providing compassionate, patient-centered care and staying at the forefront of advances in cardiology.",
    price: 150,
    reviews_data: [
      {
        id: 1,
        patient: "Michael Johnson",
        rating: 5,
        date: "2025-03-15",
        comment:
          "Dr. Smith is an excellent cardiologist. He took the time to explain my condition in detail and answered all my questions. Highly recommended!",
      },
      {
        id: 2,
        patient: "Sarah Williams",
        rating: 5,
        date: "2025-02-28",
        comment:
          "Very professional and knowledgeable. Dr. Smith made me feel comfortable and provided clear explanations about my treatment options.",
      },
      {
        id: 3,
        patient: "David Brown",
        rating: 4,
        date: "2025-02-10",
        comment:
          "Good experience overall. The wait time was a bit long, but Dr. Smith was thorough and attentive during my appointment.",
      },
    ],
  },
]

export default function DoctorProfilePage({ params }: { params: { id: string } }) {
  const doctorId = Number.parseInt(params.id)
  const doctor = doctorsData.find((doc) => doc.id === doctorId)

  const [activeTab, setActiveTab] = useState("overview")

  if (!doctor) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Doctor Not Found</h1>
        <p className="mb-8">The doctor you are looking for does not exist or has been removed.</p>
        <Link href="/doctors">
          <Button>Browse All Doctors</Button>
        </Link>
      </div>
    )
  }

  // Format date
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
    return new Date(dateString).toLocaleDateString("en-US", options)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Link href="/doctors" className="text-blue-600 hover:underline flex items-center">
          ← Back to Doctors
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Doctor Info Card */}
        <div className="lg:col-span-1">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="relative h-48 w-48 rounded-full overflow-hidden mb-4">
                  <Image src={doctor.image || "/placeholder.svg"} alt={doctor.name} fill className="object-cover" />
                </div>
                <h1 className="text-2xl font-bold">{doctor.name}</h1>
                <p className="text-gray-600 mb-2">{doctor.specialty}</p>
                <div className="flex items-center mb-4">
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  <span className="ml-1 font-medium">{doctor.rating}</span>
                  <span className="text-gray-500 ml-1">({doctor.reviews} reviews)</span>
                </div>

                <div className="w-full space-y-4 mt-4">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-gray-500 mt-0.5 mr-3" />
                    <div className="text-left">
                      <p className="font-medium">Location</p>
                      <p className="text-gray-600">{doctor.address}</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-gray-500 mr-3" />
                    <div className="text-left">
                      <p className="font-medium">Phone</p>
                      <p className="text-gray-600">{doctor.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-gray-500 mr-3" />
                    <div className="text-left">
                      <p className="font-medium">Email</p>
                      <p className="text-gray-600">{doctor.email}</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <Award className="h-5 w-5 text-gray-500 mr-3" />
                    <div className="text-left">
                      <p className="font-medium">Experience</p>
                      <p className="text-gray-600">{doctor.experience} years</p>
                    </div>
                  </div>
                </div>

                <div className="w-full mt-6">
                  <Link href={`/appointments/book?doctor=${doctor.id}`}>
                    <Button className="w-full">Book Appointment</Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Availability Card */}
          <Card className="mt-6">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Availability</h3>
              <div className="space-y-3">
                {doctor.availability.map((day, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span>{day}</span>
                    <span className="text-gray-600">9:00 AM - 5:00 PM</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-3 bg-blue-50 text-blue-800 rounded-md text-sm">
                <p>Please book an appointment to confirm availability.</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-2">
          <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-6">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="experience">Experience & Education</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-4">About Dr. {doctor.name.split(" ")[1]}</h2>
                  <p className="text-gray-700 mb-6">{doctor.bio}</p>

                  <h3 className="text-lg font-semibold mb-3">Specializations</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {doctor.specializations.map((specialization, index) => (
                      <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                        {specialization}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-lg font-semibold mb-3">Languages</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {doctor.languages.map((language, index) => (
                      <span key={index} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                        {language}
                      </span>
                    ))}
                  </div>

                  <div className="border-t pt-6 mt-6">
                    <h3 className="text-lg font-semibold mb-4">Consultation Fee</h3>
                    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-md">
                      <div>
                        <p className="font-medium">In-person consultation</p>
                        <p className="text-gray-600 text-sm">30 minutes</p>
                      </div>
                      <div className="text-xl font-bold">${doctor.price}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="experience">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-6">Education & Experience</h2>

                  <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-4 flex items-center">
                      <FileText className="h-5 w-5 mr-2 text-blue-600" />
                      Education
                    </h3>
                    <div className="space-y-6">
                      {doctor.education.map((edu, index) => (
                        <div
                          key={index}
                          className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gray-200"
                        >
                          <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-blue-600 -translate-x-1/2"></div>
                          <h4 className="font-semibold">{edu.degree}</h4>
                          <p className="text-gray-600">{edu.institution}</p>
                          <p className="text-sm text-gray-500">{edu.year}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-4 flex items-center">
                      <Award className="h-5 w-5 mr-2 text-blue-600" />
                      Certifications
                    </h3>
                    <ul className="space-y-2 list-disc list-inside text-gray-700">
                      {doctor.certifications.map((cert, index) => (
                        <li key={index}>{cert}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reviews">
              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold">Patient Reviews</h2>
                    <div className="flex items-center">
                      <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                      <span className="ml-1 font-medium text-lg">{doctor.rating}</span>
                      <span className="text-gray-500 ml-1">({doctor.reviews} reviews)</span>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {doctor.reviews_data.map((review) => (
                      <div key={review.id} className="border-b pb-6 last:border-b-0 last:pb-0">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h4 className="font-semibold">{review.patient}</h4>
                            <p className="text-sm text-gray-500">{formatDate(review.date)}</p>
                          </div>
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${i < review.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-gray-700">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

