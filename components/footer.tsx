import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-indigo-900 text-white pt-12 pb-6 border-t border-purple-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <Link href="/" className="flex items-center mb-4">
              <Image
                src="logo.jpg"
                alt="Devi Enterprises Logo"
                width={180}
                height={50}
                className="h-12 w-auto"
              />
            </Link>
            <p className="mb-4 text-gray-300">
              Premium pharmaceutical equipment manufacturer based in Baddi, Himachal Pradesh. Delivering quality and
              innovation since 2014.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-yellow-300 transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-yellow-300 transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="hover:text-yellow-300 transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="hover:text-yellow-300 transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-yellow-300">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#home" className="hover:text-yellow-300 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-yellow-300 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#pharmaceutical" className="hover:text-yellow-300 transition-colors">
                  Pharmaceutical Equipment
                </Link>
              </li>
              <li>
                <Link href="/#steel-furniture" className="hover:text-yellow-300 transition-colors">
                  Steel Furniture
                </Link>
              </li>
              <li>
                <Link href="/#handling-equipment" className="hover:text-yellow-300 transition-colors">
                  Handling Equipment
                </Link>
              </li>
              <li>
                <Link href="/#clients" className="hover:text-yellow-300 transition-colors">
                  Our Clients
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-yellow-300 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-yellow-300">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#pharmaceutical" className="hover:text-yellow-300 transition-colors">
                  GMP Biological Safety Cabinet
                </Link>
              </li>
              <li>
                <Link href="/#pharmaceutical" className="hover:text-yellow-300 transition-colors">
                  GMP Air Showers
                </Link>
              </li>
              <li>
                <Link href="/#steel-furniture" className="hover:text-yellow-300 transition-colors">
                  SS Work Tables
                </Link>
              </li>
              <li>
                <Link href="/#steel-furniture" className="hover:text-yellow-300 transition-colors">
                  SS Trolleys
                </Link>
              </li>
              <li>
                <Link href="/#handling-equipment" className="hover:text-yellow-300 transition-colors">
                  Conveyors
                </Link>
              </li>
              <li>
                <Link href="/#handling-equipment" className="hover:text-yellow-300 transition-colors">
                  SS Containers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-yellow-300">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5 text-yellow-300" />
                <span className="text-gray-300">
                  Plot No. 164, HPSIDC Industrial Area, Baddi, Dist. Solan, H.P. 173205
                </span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 mr-2 flex-shrink-0 text-yellow-300" />
                <Link href="tel:+919816273955" className="hover:text-yellow-300 transition-colors text-gray-300">
                  +91 9816273955
                </Link>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 mr-2 flex-shrink-0 text-yellow-300" />
                <Link href="tel:+919805072983" className="hover:text-yellow-300 transition-colors text-gray-300">
                  +91 9805072983
                </Link>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 mr-2 flex-shrink-0 text-yellow-300" />
                <Link
                  href="mailto:devienterprisesbaddi@gmail.com"
                  className="hover:text-yellow-300 transition-colors text-gray-300"
                >
                  devienterprisesbaddi@gmail.com
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-indigo-800 pt-6 mt-6 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Devi Enterprises. All rights reserved. | GST: 02AZYPD8158R1ZF</p>
        </div>
      </div>
    </footer>
  )
}
