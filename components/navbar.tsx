"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, User, LogIn } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  // Check if the link is active
  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true
    if (path !== "/" && pathname.startsWith(path)) return true
    return false
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="text-primary text-2xl font-bold flex items-center">
            <span className="text-primary">Health</span>
            <span className="text-blue-600">Hub</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          <Link
            href="/"
            className={`text-sm font-medium transition-colors ${isActive("/") ? "text-primary font-semibold" : "hover:text-primary"}`}
          >
            Home
          </Link>
          <Link
            href="/doctors"
            className={`text-sm font-medium transition-colors ${isActive("/doctors") ? "text-primary font-semibold" : "hover:text-primary"}`}
          >
            Find Doctors
          </Link>
          <Link
            href="/appointments"
            className={`text-sm font-medium transition-colors ${isActive("/appointments") ? "text-primary font-semibold" : "hover:text-primary"}`}
          >
            Appointments
          </Link>
          <Link
            href="/services"
            className={`text-sm font-medium transition-colors ${isActive("/services") ? "text-primary font-semibold" : "hover:text-primary"}`}
          >
            Services
          </Link>
          <Link
            href="/about"
            className={`text-sm font-medium transition-colors ${isActive("/about") ? "text-primary font-semibold" : "hover:text-primary"}`}
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className={`text-sm font-medium transition-colors ${isActive("/contact") ? "text-primary font-semibold" : "hover:text-primary"}`}
          >
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link href="/login">
            <Button variant="outline" size="sm">
              <LogIn className="mr-2 h-4 w-4" />
              Login
            </Button>
          </Link>
          <Link href="/register">
            <Button size="sm">
              <User className="mr-2 h-4 w-4" />
              Register
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-gray-100"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t py-4 absolute top-16 left-0 right-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 shadow-md">
          <div className="container flex flex-col space-y-4">
            <Link
              href="/"
              className={`text-sm font-medium px-4 py-2 rounded-md hover:bg-gray-100 ${isActive("/") ? "bg-gray-100 text-primary font-semibold" : ""}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/doctors"
              className={`text-sm font-medium px-4 py-2 rounded-md hover:bg-gray-100 ${isActive("/doctors") ? "bg-gray-100 text-primary font-semibold" : ""}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Find Doctors
            </Link>
            <Link
              href="/appointments"
              className={`text-sm font-medium px-4 py-2 rounded-md hover:bg-gray-100 ${isActive("/appointments") ? "bg-gray-100 text-primary font-semibold" : ""}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Appointments
            </Link>
            <Link
              href="/services"
              className={`text-sm font-medium px-4 py-2 rounded-md hover:bg-gray-100 ${isActive("/services") ? "bg-gray-100 text-primary font-semibold" : ""}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/about"
              className={`text-sm font-medium px-4 py-2 rounded-md hover:bg-gray-100 ${isActive("/about") ? "bg-gray-100 text-primary font-semibold" : ""}`}
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className={`text-sm font-medium px-4 py-2 rounded-md hover:bg-gray-100 ${isActive("/contact") ? "bg-gray-100 text-primary font-semibold" : ""}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="flex flex-col space-y-2 pt-2 border-t px-4 mt-2">
              <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                <Button variant="outline" className="w-full justify-start">
                  <LogIn className="mr-2 h-4 w-4" />
                  Login
                </Button>
              </Link>
              <Link href="/register" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full justify-start">
                  <User className="mr-2 h-4 w-4" />
                  Register
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

