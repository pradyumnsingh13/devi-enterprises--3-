"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Search, Menu, X } from "lucide-react"
import { useRouter } from "next/navigation"
import Image from "next/image"

// Product data
const pharmaceuticalItems = [
  "GMP Biological safety cabinet",
  "GMP air showers",
  "GMP Mobile laminar air flow",
  "Suspended/ceiling laminar air flow",
  "GMP Garment cubicles",
  "Horizontal laminar air flow",
  "Dynamic & static passbox",
]

const steelFurnitureItems = [
  "SS work table",
  "SS industrial work table",
  "SS office table",
  "SS sink table",
  "SS sliding door table",
  "SS three shelf trolley",
  "SS instrument trolley",
  "SS rectangular stool",
  "SS cupboard trolley",
  "SS material trolley",
  "SS circular stand",
  "SS chair",
  "SS scoops",
  "SS instrument trolley with drawyer",
  "SS canteen table",
  "SS ladder",
  "SS tool box",
  "SS double floor cupboard",
  "SS rack",
  "SS industrial cupboard",
]

const handlingItems = [
  "Foot operated dustbin",
  "SS container trolley",
  "SS containers",
  "SS pallets",
  "SS tray trolley",
  "Multi purpose trolley",
  "Straight conveyor",
  "Packing conveyor",
  "Inclined conveyor",
  "Roller conveyor",
]

const facilitiesItems = ["Orbital welding machine", "CNC Hydraulic press", "CNC laser cutting machine"]

// Combine all items for search
const allItems = [
  ...pharmaceuticalItems.map((item) => ({ name: item, category: "pharmaceutical" })),
  ...steelFurnitureItems.map((item) => ({ name: item, category: "steel" })),
  ...handlingItems.map((item) => ({ name: item, category: "handling" })),
  ...facilitiesItems.map((item) => ({ name: item, category: "facilities" })),
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<Array<{ name: string; category: string }>>([])
  const [showSearchResults, setShowSearchResults] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const router = useRouter()
  const searchRef = useRef<HTMLDivElement>(null)

  // Handle search
  useEffect(() => {
    if (searchQuery.length > 1) {
      const results = allItems.filter((item) => item.name.toLowerCase().includes(searchQuery.toLowerCase()))
      setSearchResults(results)
      setShowSearchResults(true)
    } else {
      setShowSearchResults(false)
    }
  }, [searchQuery])

  // Close search results when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSearchResults(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Handle search result click
  const handleSearchResultClick = (item: { name: string; category: string }) => {
    setShowSearchResults(false)
    setSearchQuery("")

    // Navigate to the appropriate section
    let sectionId = ""
    switch (item.category) {
      case "pharmaceutical":
        sectionId = "pharmaceutical"
        break
      case "steel":
        sectionId = "steel-furniture"
        break
      case "handling":
        sectionId = "handling-equipment"
        break
      case "facilities":
        sectionId = "facilities"
        break
    }

    // Scroll to the section
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })

      // Set the selected product in localStorage to be picked up by the product section components
      localStorage.setItem("selectedProduct", item.name)

      // Dispatch a custom event to notify product sections that a product was selected
      const event = new CustomEvent("productSelected", { detail: { productName: item.name } })
      window.dispatchEvent(event)
    }
  }

  // Toggle dropdown
  const toggleDropdown = (dropdown: string) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null)
    } else {
      setActiveDropdown(dropdown)
    }
  }

  return (
    <nav className="bg-gradient-to-r from-purple-900 to-indigo-900 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo-white.svg"
              alt="Devi Enterprises Logo"
              width={180}
              height={50}
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/#home" className="font-medium text-yellow-300 hover:text-yellow-200 transition-colors">
              Home
            </Link>
            <Link href="/#about" className="font-medium text-yellow-300 hover:text-yellow-200 transition-colors">
              About
            </Link>

            {/* Pharmaceutical Equipment Dropdown */}
            <div className="relative">
              <button
                className="flex items-center font-medium text-yellow-300 hover:text-yellow-200 transition-colors"
                onClick={() => toggleDropdown("pharmaceutical")}
              >
                Pharmaceutical Equipment
                <svg
                  className={`w-4 h-4 ml-1 transition-transform ${activeDropdown === "pharmaceutical" ? "transform rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              {activeDropdown === "pharmaceutical" && (
                <div className="absolute left-0 mt-2 w-64 bg-indigo-800 shadow-lg rounded-md overflow-hidden z-50 border border-purple-500">
                  <div className="py-2">
                    {pharmaceuticalItems.map((item, index) => (
                      <Link
                        key={index}
                        href={`/#pharmaceutical`}
                        className="block px-4 py-2 text-sm text-yellow-200 hover:bg-indigo-700 hover:text-yellow-100 transition-colors"
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Steel Furniture Dropdown */}
            <div className="relative">
              <button
                className="flex items-center font-medium text-yellow-300 hover:text-yellow-200 transition-colors"
                onClick={() => toggleDropdown("steel")}
              >
                Steel Furniture
                <svg
                  className={`w-4 h-4 ml-1 transition-transform ${activeDropdown === "steel" ? "transform rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              {activeDropdown === "steel" && (
                <div className="absolute left-0 mt-2 w-64 bg-indigo-800 shadow-lg rounded-md overflow-hidden z-50 border border-purple-500">
                  <div className="py-2 max-h-96 overflow-y-auto">
                    {steelFurnitureItems.map((item, index) => (
                      <Link
                        key={index}
                        href={`/#steel-furniture`}
                        className="block px-4 py-2 text-sm text-yellow-200 hover:bg-indigo-700 hover:text-yellow-100 transition-colors"
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Handling Equipment Dropdown */}
            <div className="relative">
              <button
                className="flex items-center font-medium text-yellow-300 hover:text-yellow-200 transition-colors"
                onClick={() => toggleDropdown("handling")}
              >
                Handling Equipment
                <svg
                  className={`w-4 h-4 ml-1 transition-transform ${activeDropdown === "handling" ? "transform rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              {activeDropdown === "handling" && (
                <div className="absolute left-0 mt-2 w-64 bg-indigo-800 shadow-lg rounded-md overflow-hidden z-50 border border-purple-500">
                  <div className="py-2">
                    {handlingItems.map((item, index) => (
                      <Link
                        key={index}
                        href={`/#handling-equipment`}
                        className="block px-4 py-2 text-sm text-yellow-200 hover:bg-indigo-700 hover:text-yellow-100 transition-colors"
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link href="/#clients" className="font-medium text-yellow-300 hover:text-yellow-200 transition-colors">
              Clients
            </Link>
            <Link href="/#contact" className="font-medium text-yellow-300 hover:text-yellow-200 transition-colors">
              Contact Us
            </Link>
          </div>

          {/* Search Bar */}
          <div className="relative flex items-center ml-4" ref={searchRef}>
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-400 w-full md:w-64 bg-indigo-800 text-white border-purple-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-yellow-300" />
            </div>

            {/* Search Results */}
            {showSearchResults && searchResults.length > 0 && (
              <div className="absolute top-full right-0 mt-2 w-full md:w-64 bg-indigo-800 shadow-lg rounded-md overflow-hidden z-50 border border-purple-500">
                <div className="py-2 max-h-96 overflow-y-auto">
                  {searchResults.map((item, index) => (
                    <button
                      key={index}
                      className="block w-full text-left px-4 py-2 text-sm hover:bg-indigo-700 hover:text-yellow-100 transition-colors text-yellow-200"
                      onClick={() => handleSearchResultClick(item)}
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <button className="lg:hidden flex items-center text-yellow-300" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-purple-700">
            <div className="flex flex-col space-y-3">
              <Link
                href="/#home"
                className="px-4 py-2 font-medium text-yellow-300 hover:bg-indigo-800 hover:text-yellow-100 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/#about"
                className="px-4 py-2 font-medium text-yellow-300 hover:bg-indigo-800 hover:text-yellow-100 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>

              {/* Mobile Pharmaceutical Equipment */}
              <div>
                <button
                  className="flex items-center justify-between w-full px-4 py-2 font-medium text-yellow-300 hover:bg-indigo-800 hover:text-yellow-100 rounded-md transition-colors"
                  onClick={() => toggleDropdown("pharmaceutical")}
                >
                  <span>Pharmaceutical Equipment</span>
                  <svg
                    className={`w-4 h-4 transition-transform ${activeDropdown === "pharmaceutical" ? "transform rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                {activeDropdown === "pharmaceutical" && (
                  <div className="pl-8 py-2 space-y-2">
                    {pharmaceuticalItems.map((item, index) => (
                      <Link
                        key={index}
                        href={`/#pharmaceutical`}
                        className="block py-1 text-sm text-yellow-200 hover:text-yellow-100 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Steel Furniture */}
              <div>
                <button
                  className="flex items-center justify-between w-full px-4 py-2 font-medium text-yellow-300 hover:bg-indigo-800 hover:text-yellow-100 rounded-md transition-colors"
                  onClick={() => toggleDropdown("steel")}
                >
                  <span>Steel Furniture</span>
                  <svg
                    className={`w-4 h-4 transition-transform ${activeDropdown === "steel" ? "transform rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                {activeDropdown === "steel" && (
                  <div className="pl-8 py-2 space-y-2 max-h-60 overflow-y-auto">
                    {steelFurnitureItems.map((item, index) => (
                      <Link
                        key={index}
                        href={`/#steel-furniture`}
                        className="block py-1 text-sm text-yellow-200 hover:text-yellow-100 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Handling Equipment */}
              <div>
                <button
                  className="flex items-center justify-between w-full px-4 py-2 font-medium text-yellow-300 hover:bg-indigo-800 hover:text-yellow-100 rounded-md transition-colors"
                  onClick={() => toggleDropdown("handling")}
                >
                  <span>Handling Equipment</span>
                  <svg
                    className={`w-4 h-4 transition-transform ${activeDropdown === "handling" ? "transform rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                {activeDropdown === "handling" && (
                  <div className="pl-8 py-2 space-y-2">
                    {handlingItems.map((item, index) => (
                      <Link
                        key={index}
                        href={`/#handling-equipment`}
                        className="block py-1 text-sm text-yellow-200 hover:text-yellow-100 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/#clients"
                className="px-4 py-2 font-medium text-yellow-300 hover:bg-indigo-800 hover:text-yellow-100 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Clients
              </Link>
              <Link
                href="/#contact"
                className="px-4 py-2 font-medium text-yellow-300 hover:bg-indigo-800 hover:text-yellow-100 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
