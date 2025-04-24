"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { Mail } from "lucide-react"

const facilities = [
  {
    id: "orbital-welding",
    name: "Orbital Welding Machine",
    image: "/images/facilities/orbital welding.jpg",
    description:
      "Advanced orbital welding technology for precise, consistent, and contamination-free welds in stainless steel components.",
  },
  {
    id: "cnc-hydraulic",
    name: "CNC Hydraulic Press",
    image: "/images/facilities/cnc hydraulic press.webp",
    description: "Computer-controlled hydraulic presses for precise metal forming operations with consistent quality.",
  },
  {
    id: "laser-cutting",
    name: "CNC Laser Cutting Machine",
    image: "/images/facilities/laser cutting.jpeg",
    description:
      "High-precision laser cutting systems for intricate designs and clean edges in stainless steel fabrication.",
  },
]

export default function FacilitiesSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const sliderRef = useRef<HTMLDivElement>(null)

  const scrollToFacility = (index: number) => {
    setActiveIndex(index)
    if (sliderRef.current) {
      const slideWidth = sliderRef.current.offsetWidth
      sliderRef.current.scrollTo({
        left: slideWidth * index,
        behavior: "smooth",
      })
    }
  }

  const handleScroll = () => {
    if (sliderRef.current) {
      const scrollPosition = sliderRef.current.scrollLeft
      const slideWidth = sliderRef.current.offsetWidth
      const newIndex = Math.round(scrollPosition / slideWidth)
      if (newIndex !== activeIndex) {
        setActiveIndex(newIndex)
      }
    }
  }

  const requestInfo = (facilityName: string) => {
    const subject = encodeURIComponent(`Information Request for ${facilityName}`)
    const body = encodeURIComponent(
      `I would like to request more information about your ${facilityName}.\n\nPlease provide details on capabilities, specifications, and how it can benefit my project.\n\nThank you.`,
    )
    window.location.href = `mailto:devienterprisesbaddi@gmail.com?subject=${subject}&body=${body}`
  }

  useEffect(() => {
    // Function to handle facility selection from search
    const handleProductSelection = (event: CustomEvent) => {
      const { productName } = event.detail

      // Find the facility index
      const index = facilities.findIndex((facility) => facility.name.toLowerCase() === productName.toLowerCase())

      // If found, scroll to that facility
      if (index !== -1) {
        scrollToFacility(index)

        // Highlight the facility card briefly
        const facilityCard = document.getElementById(`facility-${index}`)
        if (facilityCard) {
          facilityCard.classList.add("ring-4", "ring-yellow-400", "ring-opacity-75")
          setTimeout(() => {
            facilityCard.classList.remove("ring-4", "ring-yellow-400", "ring-opacity-75")
          }, 2000)
        }
      }
    }

    // Check localStorage on component mount
    const selectedProduct = localStorage.getItem("selectedProduct")
    if (selectedProduct) {
      const index = facilities.findIndex((facility) => facility.name.toLowerCase() === selectedProduct.toLowerCase())
      if (index !== -1) {
        setTimeout(() => scrollToFacility(index), 300)
        localStorage.removeItem("selectedProduct")
      }
    }

    // Add event listener
    window.addEventListener("productSelected", handleProductSelection as EventListener)

    // Cleanup
    return () => {
      window.removeEventListener("productSelected", handleProductSelection as EventListener)
    }
  }, [])

  return (
    <section id="facilities" className="section-bg facilities-bg py-8 md:py-12">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Our Facilities</h2>

        <div
          ref={sliderRef}
          className="product-slider flex overflow-x-auto snap-x snap-mandatory mt-8 pb-8"
          onScroll={handleScroll}
        >
          {facilities.map((facility, index) => (
            <div key={facility.id} className="product-slide flex-shrink-0 w-full px-4">
              <div id={`facility-${index}`} className="product-card flex flex-row h-full transition-all duration-300">
                <div className="w-1/2 relative p-4 flex items-center justify-center min-h-[300px]">
                  <div className="relative w-full h-[280px]">
                    <Image
                      src={facility.image || "/placeholder.svg"}
                      alt={facility.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="w-1/2 p-6 flex flex-col">
                  <h3 className="text-2xl font-bold mb-4 text-yellow-300">{facility.name}</h3>
                  <p className="text-gray-300 mb-6 flex-grow">{facility.description}</p>
                  <button
                    onClick={() => requestInfo(facility.name)}
                    className="btn-primary flex items-center justify-center"
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Request Information
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-6 gap-2">
          {facilities.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToFacility(index)}
              className={`dot-indicator h-2 rounded-full transition-all ${
                activeIndex === index ? "w-8 bg-yellow-400" : "w-2 bg-gray-600"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
