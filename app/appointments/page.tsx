"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, MapPin, CalendarIcon, AlertCircle } from "lucide-react"
import Image from "next/image"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

// Sample appointment data
const initialUpcomingAppointments = [
  {
    id: 1,
    doctorName: "Dr. John Smith",
    doctorSpecialty: "Cardiologist",
    doctorImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bd587061-52a8-4759-8829-eb1e6546f13f-Y6amnvR0WbHXzfwwc6U4ZVzqP0rseQ.jpeg",
    date: "2025-04-15",
    time: "10:00 AM",
    location: "Main Hospital, Room 302",
    status: "confirmed",
  },
  {
    id: 2,
    doctorName: "Dr. Sarah Johnson",
    doctorSpecialty: "Pediatrician",
    doctorImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Foto%20retrato%20confiante%20jovem%20m%C3%A9dica%20femi%E2%80%A6-7hT8QZPvqnYcVyRk4a82p5pxGByPq5.jpeg",
    date: "2025-04-22",
    time: "2:30 PM",
    location: "Children's Clinic, Room 105",
    status: "confirmed",
  },
]

const initialPastAppointments = [
  {
    id: 3,
    doctorName: "Dr. Michael Chen",
    doctorSpecialty: "Orthopedic Surgeon",
    doctorImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Aqu%C3%AD%20las%20fotos%20de%20los%2010%20doctores%20%C2%A1m%C3%A1s%20hot%20de%E2%80%A6-ZoZNyCWhohxVmWqabLsrgeHb3YeJLV.jpeg",
    date: "2025-03-10",
    time: "11:15 AM",
    location: "Orthopedic Center, Room 204",
    status: "completed",
  },
  {
    id: 4,
    doctorName: "Dr. Robert Williams",
    doctorSpecialty: "Neurologist",
    doctorImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Royalty%20Free%20Stock%20Photos%20And%20Images-bvH3SVAw9Y3sRSRIzdyV6bnk42A8os.jpeg",
    date: "2025-02-28",
    time: "9:00 AM",
    location: "Neurology Department, Room 118",
    status: "completed",
  },
  {
    id: 5,
    doctorName: "Dr. Emily Davis",
    doctorSpecialty: "Dermatologist",
    doctorImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Foto%20retrato%20confiante%20jovem%20m%C3%A9dica%20femi%E2%80%A6-7hT8QZPvqnYcVyRk4a82p5pxGByPq5.jpeg",
    date: "2025-02-15",
    time: "3:45 PM",
    location: "Dermatology Clinic, Room 210",
    status: "cancelled",
  },
]

// Available time slots for rescheduling
const availableTimeSlots = ["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"]

// Available dates for rescheduling (next 7 days)
const getAvailableDates = () => {
  const dates = []
  const today = new Date()

  for (let i = 1; i <= 7; i++) {
    const date = new Date(today)
    date.setDate(today.getDate() + i)
    dates.push(date.toISOString().split("T")[0])
  }

  return dates
}

export default function AppointmentsPage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("upcoming")
  const [upcomingAppointments, setUpcomingAppointments] = useState(initialUpcomingAppointments)
  const [pastAppointments, setPastAppointments] = useState(initialPastAppointments)

  // Dialog states
  const [cancelDialogOpen, setCancelDialogOpen] = useState(false)
  const [rescheduleDialogOpen, setRescheduleDialogOpen] = useState(false)
  const [successDialogOpen, setSuccessDialogOpen] = useState(false)
  const [currentAppointment, setCurrentAppointment] = useState<any>(null)
  const [successMessage, setSuccessMessage] = useState("")

  // Reschedule form state
  const [rescheduleDate, setRescheduleDate] = useState("")
  const [rescheduleTime, setRescheduleTime] = useState("")
  const [cancelReason, setCancelReason] = useState("schedule_conflict")

  // Format date
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }
    return new Date(dateString).toLocaleDateString("en-US", options)
  }

  // Get status badge color
  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-green-100 text-green-800"
      case "completed":
        return "bg-blue-100 text-blue-800"
      case "cancelled":
        return "bg-red-100 text-red-800"
      case "rescheduled":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  // Handle cancel appointment
  const handleCancelAppointment = () => {
    if (!currentAppointment) return

    // Update the appointment status to cancelled
    const updatedAppointments = upcomingAppointments.filter((appointment) => appointment.id !== currentAppointment.id)

    // Add to past appointments with cancelled status
    const cancelledAppointment = {
      ...currentAppointment,
      status: "cancelled",
    }

    setPastAppointments([cancelledAppointment, ...pastAppointments])
    setUpcomingAppointments(updatedAppointments)

    // Show success message
    setSuccessMessage("Your appointment has been cancelled successfully.")
    setCancelDialogOpen(false)
    setSuccessDialogOpen(true)
  }

  // Handle reschedule appointment
  const handleRescheduleAppointment = () => {
    if (!currentAppointment || !rescheduleDate || !rescheduleTime) return

    // Update the appointment with new date and time
    const updatedAppointments = upcomingAppointments.map((appointment) => {
      if (appointment.id === currentAppointment.id) {
        return {
          ...appointment,
          date: rescheduleDate,
          time: rescheduleTime,
          status: "rescheduled",
        }
      }
      return appointment
    })

    setUpcomingAppointments(updatedAppointments)

    // Show success message
    setSuccessMessage(`Your appointment has been rescheduled to ${formatDate(rescheduleDate)} at ${rescheduleTime}.`)
    setRescheduleDialogOpen(false)
    setSuccessDialogOpen(true)

    // Reset form
    setRescheduleDate("")
    setRescheduleTime("")
  }

  // Handle book again
  const handleBookAgain = (appointment: any) => {
    // Navigate to booking page with doctor pre-selected
    router.push(`/appointments/book?doctor=${appointment.id}`)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <h1 className="text-3xl font-bold">My Appointments</h1>
        <Link href="/appointments/book">
          <Button className="mt-4 md:mt-0">
            <CalendarIcon className="mr-2 h-4 w-4" />
            Book New Appointment
          </Button>
        </Link>
      </div>

      <Tabs defaultValue="upcoming" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mb-6">
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="past">Past</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming">
          {upcomingAppointments.length === 0 ? (
            <Card>
              <CardContent className="py-12 text-center">
                <h3 className="text-xl font-semibold mb-2">No upcoming appointments</h3>
                <p className="text-gray-500 mb-6">You don't have any upcoming appointments scheduled.</p>
                <Link href="/appointments/book">
                  <Button>Book an Appointment</Button>
                </Link>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-6">
              {upcomingAppointments.map((appointment) => (
                <Card key={appointment.id}>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row">
                      <div className="w-full md:w-1/4 mb-4 md:mb-0">
                        <div className="relative h-24 w-24 rounded-full overflow-hidden mx-auto md:mx-0">
                          <Image
                            src={appointment.doctorImage || "/placeholder.svg"}
                            alt={appointment.doctorName}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <div className="w-full md:w-3/4">
                        <div className="flex flex-col md:flex-row justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-bold">{appointment.doctorName}</h3>
                            <p className="text-gray-600">{appointment.doctorSpecialty}</p>
                          </div>
                          <div className="mt-2 md:mt-0">
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(appointment.status)}`}
                            >
                              {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
                            </span>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                          <div className="flex items-center">
                            <Calendar className="h-5 w-5 mr-2 text-gray-500" />
                            <div>
                              <p className="text-sm text-gray-500">Date</p>
                              <p className="font-medium">{formatDate(appointment.date)}</p>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-5 w-5 mr-2 text-gray-500" />
                            <div>
                              <p className="text-sm text-gray-500">Time</p>
                              <p className="font-medium">{appointment.time}</p>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-5 w-5 mr-2 text-gray-500" />
                            <div>
                              <p className="text-sm text-gray-500">Location</p>
                              <p className="font-medium">{appointment.location}</p>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 mt-4">
                          <Button
                            variant="outline"
                            onClick={() => {
                              setCurrentAppointment(appointment)
                              setRescheduleDialogOpen(true)
                            }}
                          >
                            Reschedule
                          </Button>
                          <Button
                            variant="destructive"
                            onClick={() => {
                              setCurrentAppointment(appointment)
                              setCancelDialogOpen(true)
                            }}
                          >
                            Cancel Appointment
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent value="past">
          {pastAppointments.length === 0 ? (
            <Card>
              <CardContent className="py-12 text-center">
                <h3 className="text-xl font-semibold mb-2">No past appointments</h3>
                <p className="text-gray-500">You don't have any past appointments.</p>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-6">
              {pastAppointments.map((appointment) => (
                <Card key={appointment.id}>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row">
                      <div className="w-full md:w-1/4 mb-4 md:mb-0">
                        <div className="relative h-24 w-24 rounded-full overflow-hidden mx-auto md:mx-0">
                          <Image
                            src={appointment.doctorImage || "/placeholder.svg"}
                            alt={appointment.doctorName}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <div className="w-full md:w-3/4">
                        <div className="flex flex-col md:flex-row justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-bold">{appointment.doctorName}</h3>
                            <p className="text-gray-600">{appointment.doctorSpecialty}</p>
                          </div>
                          <div className="mt-2 md:mt-0">
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(appointment.status)}`}
                            >
                              {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
                            </span>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                          <div className="flex items-center">
                            <Calendar className="h-5 w-5 mr-2 text-gray-500" />
                            <div>
                              <p className="text-sm text-gray-500">Date</p>
                              <p className="font-medium">{formatDate(appointment.date)}</p>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-5 w-5 mr-2 text-gray-500" />
                            <div>
                              <p className="text-sm text-gray-500">Time</p>
                              <p className="font-medium">{appointment.time}</p>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-5 w-5 mr-2 text-gray-500" />
                            <div>
                              <p className="text-sm text-gray-500">Location</p>
                              <p className="font-medium">{appointment.location}</p>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 mt-4">
                          <Button variant="outline">View Details</Button>
                          <Button
                            onClick={() => handleBookAgain(appointment)}
                            disabled={appointment.status === "cancelled"}
                          >
                            Book Again
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>

      {/* Cancel Appointment Dialog */}
      <Dialog open={cancelDialogOpen} onOpenChange={setCancelDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Cancel Appointment</DialogTitle>
            <DialogDescription>
              Are you sure you want to cancel your appointment with {currentAppointment?.doctorName} on{" "}
              {currentAppointment ? formatDate(currentAppointment.date) : ""} at {currentAppointment?.time}?
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="cancel-reason">Reason for cancellation</Label>
              <RadioGroup value={cancelReason} onValueChange={setCancelReason} className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="schedule_conflict" id="schedule_conflict" />
                  <Label htmlFor="schedule_conflict" className="font-normal cursor-pointer">
                    Schedule conflict
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="feeling_better" id="feeling_better" />
                  <Label htmlFor="feeling_better" className="font-normal cursor-pointer">
                    Feeling better
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="other_doctor" id="other_doctor" />
                  <Label htmlFor="other_doctor" className="font-normal cursor-pointer">
                    Seeing another doctor
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="other" id="other" />
                  <Label htmlFor="other" className="font-normal cursor-pointer">
                    Other reason
                  </Label>
                </div>
              </RadioGroup>
            </div>
            <div className="flex items-start">
              <AlertCircle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5" />
              <p className="text-sm text-gray-600">
                Cancellations made less than 24 hours before the appointment may incur a fee.
              </p>
            </div>
          </div>
          <DialogFooter className="flex flex-col sm:flex-row sm:justify-between sm:space-x-2">
            <Button type="button" variant="outline" onClick={() => setCancelDialogOpen(false)} className="mb-2 sm:mb-0">
              Keep Appointment
            </Button>
            <Button type="button" variant="destructive" onClick={handleCancelAppointment}>
              Cancel Appointment
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Reschedule Appointment Dialog */}
      <Dialog open={rescheduleDialogOpen} onOpenChange={setRescheduleDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Reschedule Appointment</DialogTitle>
            <DialogDescription>
              Please select a new date and time for your appointment with {currentAppointment?.doctorName}.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="reschedule-date">New Date</Label>
              <Select value={rescheduleDate} onValueChange={setRescheduleDate}>
                <SelectTrigger id="reschedule-date">
                  <SelectValue placeholder="Select a date" />
                </SelectTrigger>
                <SelectContent>
                  {getAvailableDates().map((date) => (
                    <SelectItem key={date} value={date}>
                      {formatDate(date)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="reschedule-time">New Time</Label>
              <Select value={rescheduleTime} onValueChange={setRescheduleTime}>
                <SelectTrigger id="reschedule-time">
                  <SelectValue placeholder="Select a time" />
                </SelectTrigger>
                <SelectContent>
                  {availableTimeSlots.map((time) => (
                    <SelectItem key={time} value={time}>
                      {time}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-start">
              <AlertCircle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5" />
              <p className="text-sm text-gray-600">
                Rescheduling is subject to availability. Your original appointment will be cancelled once you confirm.
              </p>
            </div>
          </div>
          <DialogFooter className="flex flex-col sm:flex-row sm:justify-between sm:space-x-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => setRescheduleDialogOpen(false)}
              className="mb-2 sm:mb-0"
            >
              Cancel
            </Button>
            <Button type="button" onClick={handleRescheduleAppointment} disabled={!rescheduleDate || !rescheduleTime}>
              Confirm Reschedule
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Success Dialog */}
      <Dialog open={successDialogOpen} onOpenChange={setSuccessDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Success</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <p>{successMessage}</p>
          </div>
          <DialogFooter>
            <Button type="button" onClick={() => setSuccessDialogOpen(false)}>
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

