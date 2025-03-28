"use client"

import type React from "react"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Calendar } from "@/components/ui/calendar"
import { format } from "date-fns"
import { CalendarIcon, Clock, MapPin } from "lucide-react"
import Image from "next/image"

// Sample doctor data
const doctorsData = [
  {
    id: 1,
    name: "Dr. John Smith",
    specialty: "Cardiologist",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bd587061-52a8-4759-8829-eb1e6546f13f-Y6amnvR0WbHXzfwwc6U4ZVzqP0rseQ.jpeg",
    location: "Main Hospital, Room 302",
    price: 150,
  },
  {
    id: 2,
    name: "Dr. Sarah Johnson",
    specialty: "Pediatrician",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Foto%20retrato%20confiante%20jovem%20m%C3%A9dica%20femi%E2%80%A6-7hT8QZPvqnYcVyRk4a82p5pxGByPq5.jpeg",
    location: "Children's Clinic, Room 105",
    price: 120,
  },
  {
    id: 3,
    name: "Dr. Robert Williams",
    specialty: "Neurologist",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Royalty%20Free%20Stock%20Photos%20And%20Images-bvH3SVAw9Y3sRSRIzdyV6bnk42A8os.jpeg",
    location: "Neurology Department, Room 118",
    price: 180,
  },
  {
    id: 4,
    name: "Dr. Michael Chen",
    specialty: "Orthopedic Surgeon",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Aqu%C3%AD%20las%20fotos%20de%20los%2010%20doctores%20%C2%A1m%C3%A1s%20hot%20de%E2%80%A6-ZoZNyCWhohxVmWqabLsrgeHb3YeJLV.jpeg",
    location: "Orthopedic Center, Room 204",
    price: 200,
  },
]

// Sample time slots
const timeSlots = [
  "9:00 AM",
  "9:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "1:00 PM",
  "1:30 PM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM",
  "4:00 PM",
  "4:30 PM",
]

// Sample appointment types
const appointmentTypes = [
  { id: "new", label: "New Patient Visit", description: "First time consultation with the doctor" },
  { id: "follow-up", label: "Follow-up Visit", description: "Follow-up on previous treatment" },
  { id: "annual", label: "Annual Check-up", description: "Routine annual health examination" },
  { id: "urgent", label: "Urgent Care", description: "For immediate medical attention" },
]

export default function BookAppointmentPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const doctorIdParam = searchParams.get("doctor")

  const [step, setStep] = useState(1)
  const [selectedDoctor, setSelectedDoctor] = useState<number | null>(
    doctorIdParam ? Number.parseInt(doctorIdParam) : null,
  )
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [timeSlot, setTimeSlot] = useState<string | null>(null)
  const [appointmentType, setAppointmentType] = useState<string | null>(null)
  const [reason, setReason] = useState("")

  // Get selected doctor data
  const doctorData = selectedDoctor ? doctorsData.find((doctor) => doctor.id === selectedDoctor) : null

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // In a real app, you would send this data to your backend
    const appointmentData = {
      doctorId: selectedDoctor,
      date: date ? format(date, "yyyy-MM-dd") : null,
      time: timeSlot,
      type: appointmentType,
      reason,
    }

    console.log("Appointment data:", appointmentData)

    // Redirect to confirmation page
    router.push("/appointments")
  }

  // Go to next step
  const goToNextStep = () => {
    if ((step === 1 && selectedDoctor) || (step === 2 && date && timeSlot) || (step === 3 && appointmentType)) {
      setStep(step + 1)
      window.scrollTo(0, 0)
    }
  }

  // Go to previous step
  const goToPreviousStep = () => {
    if (step > 1) {
      setStep(step - 1)
      window.scrollTo(0, 0)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Book an Appointment</h1>

      <div className="flex justify-between mb-8">
        <div className="flex items-center">
          <div
            className={`rounded-full w-10 h-10 flex items-center justify-center ${step >= 1 ? "bg-primary text-white" : "bg-gray-200"}`}
          >
            1
          </div>
          <div className={`h-1 w-16 mx-2 ${step >= 2 ? "bg-primary" : "bg-gray-200"}`}></div>
          <div
            className={`rounded-full w-10 h-10 flex items-center justify-center ${step >= 2 ? "bg-primary text-white" : "bg-gray-200"}`}
          >
            2
          </div>
          <div className={`h-1 w-16 mx-2 ${step >= 3 ? "bg-primary" : "bg-gray-200"}`}></div>
          <div
            className={`rounded-full w-10 h-10 flex items-center justify-center ${step >= 3 ? "bg-primary text-white" : "bg-gray-200"}`}
          >
            3
          </div>
          <div className={`h-1 w-16 mx-2 ${step >= 4 ? "bg-primary" : "bg-gray-200"}`}></div>
          <div
            className={`rounded-full w-10 h-10 flex items-center justify-center ${step >= 4 ? "bg-primary text-white" : "bg-gray-200"}`}
          >
            4
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Step 1: Select Doctor */}
        {step === 1 && (
          <div>
            <h2 className="text-2xl font-semibold mb-6">Select a Doctor</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {doctorsData.map((doctor) => (
                <Card
                  key={doctor.id}
                  className={`cursor-pointer transition-all ${selectedDoctor === doctor.id ? "ring-2 ring-primary" : ""}`}
                  onClick={() => setSelectedDoctor(doctor.id)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4">
                        <Image
                          src={doctor.image || "/placeholder.svg"}
                          alt={doctor.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">{doctor.name}</h3>
                        <p className="text-gray-600">{doctor.specialty}</p>
                      </div>
                    </div>
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center text-sm">
                        <MapPin className="h-4 w-4 mr-2 text-gray-500" />
                        {doctor.location}
                      </div>
                      <div className="text-sm">
                        <span className="font-medium">Consultation Fee:</span> ${doctor.price}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-8 flex justify-end">
              <Button type="button" onClick={goToNextStep} disabled={!selectedDoctor}>
                Continue
              </Button>
            </div>
          </div>
        )}

        {/* Step 2: Select Date and Time */}
        {step === 2 && (
          <div>
            <h2 className="text-2xl font-semibold mb-6">Select Date and Time</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Select Date</CardTitle>
                </CardHeader>
                <CardContent>
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    disabled={(date) => {
                      // Disable past dates and weekends
                      const today = new Date()
                      today.setHours(0, 0, 0, 0)
                      const day = date.getDay()
                      return date < today || day === 0 || day === 6
                    }}
                    className="rounded-md border"
                  />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Select Time</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {timeSlots.map((time) => (
                      <Button
                        key={time}
                        type="button"
                        variant={timeSlot === time ? "default" : "outline"}
                        onClick={() => setTimeSlot(time)}
                        className="justify-start"
                      >
                        <Clock className="mr-2 h-4 w-4" />
                        {time}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="mt-8 flex justify-between">
              <Button type="button" variant="outline" onClick={goToPreviousStep}>
                Back
              </Button>
              <Button type="button" onClick={goToNextStep} disabled={!date || !timeSlot}>
                Continue
              </Button>
            </div>
          </div>
        )}

        {/* Step 3: Appointment Details */}
        {step === 3 && (
          <div>
            <h2 className="text-2xl font-semibold mb-6">Appointment Details</h2>
            <Card>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div>
                    <Label className="text-base">Appointment Type</Label>
                    <RadioGroup
                      value={appointmentType || ""}
                      onValueChange={setAppointmentType}
                      className="mt-3 space-y-3"
                    >
                      {appointmentTypes.map((type) => (
                        <div key={type.id} className="flex items-start space-x-3">
                          <RadioGroupItem value={type.id} id={type.id} />
                          <Label htmlFor={type.id} className="font-normal cursor-pointer">
                            <span className="font-medium">{type.label}</span>
                            <p className="text-sm text-gray-500">{type.description}</p>
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  <div>
                    <Label htmlFor="reason" className="text-base">
                      Reason for Visit
                    </Label>
                    <textarea
                      id="reason"
                      value={reason}
                      onChange={(e) => setReason(e.target.value)}
                      className="mt-2 w-full h-32 p-3 border rounded-md"
                      placeholder="Please describe your symptoms or reason for the appointment..."
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="mt-8 flex justify-between">
              <Button type="button" variant="outline" onClick={goToPreviousStep}>
                Back
              </Button>
              <Button type="button" onClick={goToNextStep} disabled={!appointmentType}>
                Continue
              </Button>
            </div>
          </div>
        )}

        {/* Step 4: Review and Confirm */}
        {step === 4 && doctorData && date && (
          <div>
            <h2 className="text-2xl font-semibold mb-6">Review and Confirm</h2>
            <Card>
              <CardHeader>
                <CardTitle>Appointment Summary</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4">
                      <Image
                        src={doctorData.image || "/placeholder.svg"}
                        alt={doctorData.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{doctorData.name}</h3>
                      <p className="text-gray-600">{doctorData.specialty}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-gray-500 mb-2">Date & Time</h4>
                      <div className="flex items-center">
                        <CalendarIcon className="h-5 w-5 mr-2 text-gray-500" />
                        <span>{format(date, "EEEE, MMMM d, yyyy")}</span>
                      </div>
                      <div className="flex items-center mt-2">
                        <Clock className="h-5 w-5 mr-2 text-gray-500" />
                        <span>{timeSlot}</span>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-500 mb-2">Location</h4>
                      <div className="flex items-center">
                        <MapPin className="h-5 w-5 mr-2 text-gray-500" />
                        <span>{doctorData.location}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-500 mb-2">Appointment Type</h4>
                    <p>{appointmentTypes.find((type) => type.id === appointmentType)?.label}</p>
                  </div>

                  {reason && (
                    <div>
                      <h4 className="font-medium text-gray-500 mb-2">Reason for Visit</h4>
                      <p className="text-gray-700">{reason}</p>
                    </div>
                  )}

                  <div className="border-t pt-4">
                    <h4 className="font-medium text-gray-500 mb-2">Payment Details</h4>
                    <div className="flex justify-between">
                      <span>Consultation Fee</span>
                      <span>${doctorData.price}</span>
                    </div>
                    <div className="flex justify-between mt-2 font-bold">
                      <span>Total</span>
                      <span>${doctorData.price}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="mt-8 flex justify-between">
              <Button type="button" variant="outline" onClick={goToPreviousStep}>
                Back
              </Button>
              <Button type="submit">Confirm Appointment</Button>
            </div>
          </div>
        )}
      </form>
    </div>
  )
}

