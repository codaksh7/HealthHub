"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Search, MapPin, Star } from "lucide-react"
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
    location: "New York, NY",
    experience: 15,
    availability: ["Mon", "Wed", "Fri"],
    price: 150,
  },
  {
    id: 2,
    name: "Dr. Sarah Johnson",
    specialty: "Pediatrician",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Foto%20retrato%20confiante%20jovem%20m%C3%A9dica%20femi%E2%80%A6-7hT8QZPvqnYcVyRk4a82p5pxGByPq5.jpeg",
    rating: 4.8,
    reviews: 36,
    location: "Boston, MA",
    experience: 10,
    availability: ["Tue", "Thu", "Sat"],
    price: 120,
  },
  {
    id: 3,
    name: "Dr. Robert Williams",
    specialty: "Neurologist",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Royalty%20Free%20Stock%20Photos%20And%20Images-bvH3SVAw9Y3sRSRIzdyV6bnk42A8os.jpeg",
    rating: 4.7,
    reviews: 29,
    location: "Chicago, IL",
    experience: 20,
    availability: ["Mon", "Tue", "Thu"],
    price: 180,
  },
  {
    id: 4,
    name: "Dr. Michael Chen",
    specialty: "Orthopedic Surgeon",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Aqu%C3%AD%20las%20fotos%20de%20los%2010%20doctores%20%C2%A1m%C3%A1s%20hot%20de%E2%80%A6-ZoZNyCWhohxVmWqabLsrgeHb3YeJLV.jpeg",
    rating: 4.6,
    reviews: 42,
    location: "San Francisco, CA",
    experience: 12,
    availability: ["Wed", "Fri", "Sat"],
    price: 200,
  },
  {
    id: 5,
    name: "Dr. Emily Davis",
    specialty: "Dermatologist",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Foto%20retrato%20confiante%20jovem%20m%C3%A9dica%20femi%E2%80%A6-7hT8QZPvqnYcVyRk4a82p5pxGByPq5.jpeg",
    rating: 4.9,
    reviews: 53,
    location: "Los Angeles, CA",
    experience: 8,
    availability: ["Mon", "Wed", "Fri"],
    price: 160,
  },
  {
    id: 6,
    name: "Dr. James Wilson",
    specialty: "Psychiatrist",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7a76f940-b357-4979-af50-4c8670d8116a-IzuylyZsk4AmWpCDLkTfesryYLRyYh.jpeg",
    rating: 4.8,
    reviews: 31,
    location: "Seattle, WA",
    experience: 14,
    availability: ["Tue", "Thu", "Sat"],
    price: 170,
  },
]

// Specialties for filter
const specialties = [
  "Cardiologist",
  "Pediatrician",
  "Neurologist",
  "Orthopedic Surgeon",
  "Dermatologist",
  "Psychiatrist",
]

export default function DoctorsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedSpecialties, setSelectedSpecialties] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState([0, 300])
  const [filteredDoctors, setFilteredDoctors] = useState(doctorsData)

  // Apply filters
  const applyFilters = () => {
    let filtered = doctorsData

    // Apply search term filter
    if (searchTerm) {
      filtered = filtered.filter(
        (doctor) =>
          doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
          doctor.location.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    // Apply specialty filter
    if (selectedSpecialties.length > 0) {
      filtered = filtered.filter((doctor) => selectedSpecialties.includes(doctor.specialty))
    }

    // Apply price range filter
    filtered = filtered.filter((doctor) => doctor.price >= priceRange[0] && doctor.price <= priceRange[1])

    setFilteredDoctors(filtered)
  }

  // Toggle specialty selection
  const toggleSpecialty = (specialty: string) => {
    setSelectedSpecialties((prev) =>
      prev.includes(specialty) ? prev.filter((s) => s !== specialty) : [...prev, specialty],
    )
  }

  // Reset filters
  const resetFilters = () => {
    setSearchTerm("")
    setSelectedSpecialties([])
    setPriceRange([0, 300])
    setFilteredDoctors(doctorsData)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Find Doctors</h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filters Sidebar */}
        <div className="lg:col-span-1">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Search</h3>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    <Input
                      placeholder="Search doctors, specialties..."
                      className="pl-10"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Specialties</h3>
                  <div className="space-y-2">
                    {specialties.map((specialty) => (
                      <div key={specialty} className="flex items-center space-x-2">
                        <Checkbox
                          id={specialty}
                          checked={selectedSpecialties.includes(specialty)}
                          onCheckedChange={() => toggleSpecialty(specialty)}
                        />
                        <Label htmlFor={specialty} className="text-sm">
                          {specialty}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Price Range</h3>
                  <Slider
                    defaultValue={priceRange}
                    min={0}
                    max={300}
                    step={10}
                    value={priceRange}
                    onValueChange={setPriceRange}
                    className="mb-4"
                  />
                  <div className="flex justify-between text-sm">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>

                <div className="flex flex-col space-y-2">
                  <Button onClick={applyFilters}>Apply Filters</Button>
                  <Button variant="outline" onClick={resetFilters}>
                    Reset Filters
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Doctors List */}
        <div className="lg:col-span-3">
          {filteredDoctors.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold mb-2">No doctors found</h3>
              <p className="text-gray-500">Try adjusting your filters to find more doctors</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredDoctors.map((doctor) => (
                <Card key={doctor.id} className="overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-1/3 h-48 md:h-auto relative">
                      <Image src={doctor.image || "/placeholder.svg"} alt={doctor.name} fill className="object-cover" />
                    </div>
                    <CardContent className="p-4 w-full md:w-2/3">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-bold text-lg">{doctor.name}</h3>
                          <p className="text-gray-600">{doctor.specialty}</p>
                        </div>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                          <span className="ml-1 text-sm font-medium">{doctor.rating}</span>
                          <span className="text-xs text-gray-500 ml-1">({doctor.reviews})</span>
                        </div>
                      </div>

                      <div className="mt-2 flex items-center text-sm text-gray-500">
                        <MapPin className="h-4 w-4 mr-1" />
                        {doctor.location}
                      </div>

                      <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
                        <div>
                          <span className="text-gray-500">Experience:</span>
                          <p>{doctor.experience} years</p>
                        </div>
                        <div>
                          <span className="text-gray-500">Consultation:</span>
                          <p>${doctor.price}</p>
                        </div>
                      </div>

                      <div className="mt-4 flex justify-between items-center">
                        <div className="flex space-x-1">
                          {doctor.availability.map((day) => (
                            <span key={day} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                              {day}
                            </span>
                          ))}
                        </div>
                        <div className="flex space-x-2">
                          <Link href={`/doctors/${doctor.id}`}>
                            <Button variant="outline" size="sm">
                              View Profile
                            </Button>
                          </Link>
                          <Link href={`/appointments/book?doctor=${doctor.id}`}>
                            <Button size="sm">Book</Button>
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

