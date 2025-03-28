import Link from "next/link"
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">HealthHub</h3>
            <p className="text-sm">Your trusted healthcare partner, providing quality medical services and care.</p>
            <div className="flex space-x-4 mt-4">
              <Link href="#" className="hover:text-white">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-white">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="hover:text-white">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/doctors" className="hover:text-white">
                  Find Doctors
                </Link>
              </li>
              <li>
                <Link href="/appointments" className="hover:text-white">
                  Book Appointment
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/primary-care" className="hover:text-white">
                  Primary Care
                </Link>
              </li>
              <li>
                <Link href="/services/specialist-care" className="hover:text-white">
                  Specialist Care
                </Link>
              </li>
              <li>
                <Link href="/services/emergency" className="hover:text-white">
                  Emergency Services
                </Link>
              </li>
              <li>
                <Link href="/services/diagnostics" className="hover:text-white">
                  Diagnostics
                </Link>
              </li>
              <li>
                <Link href="/services/telemedicine" className="hover:text-white">
                  Telemedicine
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <MapPin size={16} className="mr-2 mt-1 flex-shrink-0" />
                <span>123 Healthcare Avenue, Medical District, City, Country</span>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2 flex-shrink-0" />
                <span>contact@healthhub.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-sm text-center">
          <p>© {new Date().getFullYear()} HealthHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

