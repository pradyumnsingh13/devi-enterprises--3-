"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Mail } from "lucide-react"

const products = [
  {
    id: "bio-safety-cabinet",
    name: "GMP Biological Safety Cabinet",
    image: "safetycabinet.webp",
    description:
      "Advanced biological safety cabinets designed for pharmaceutical laboratories with HEPA filtration and ergonomic design.",
  },
  {
    id: "air-shower",
    name: "GMP Air Showers",
    image: "airshower.jpg",
    description: "High-performance air showers for personnel decontamination before entering clean rooms.",
  },
  {
    id: "mobile-laminar",
    name: "GMP Mobile Laminar Air Flow",
    image: "laminarflow.webp",
    description: "Portable laminar flow units providing ISO Class 5 clean air environments for critical processes.",
  },
  {
    id: "ceiling-laminar",
    name: "Suspended/Ceiling Laminar Air Flow",
    image: "/ceiling.webp",
    description: "Ceiling-mounted laminar flow systems for clean room applications with uniform air distribution.",
  },
  {
    id: "garment-cubicle",
    name: "GMP Garment Cubicles",
    image: "/garmentcubicle.jpeg",
    description: "Specialized changing areas for clean room gowning procedures with proper air classification.",
  },
  {
    id: "horizontal-laminar",
    name: "Horizontal Laminar Air Flow",
    image: "/horizontallaminarairflow.jpg",
    description: "Horizontal flow clean benches providing product protection for non-hazardous applications.",
  },
  {
    id: "passbox",
    name: "Dynamic & Static Passbox",
    image: "passbox.jpg",
    description:
      "Material transfer systems for clean rooms with interlocking doors to maintain pressure differentials.",
  },
]

export default function PharmaceuticalSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const sliderRef = useRef<HTMLDivElement>(null)

  const scrollToProduct = (index: number) => {
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

  const requestQuote = (productName: string) => {
    const subject = encodeURIComponent(`Quote Request for ${productName}`)
    const body = encodeURIComponent(
      `I would like to request a quote for ${productName}.\n\nPlease provide details on pricing, specifications, and availability.\n\nThank you.`,
    )
    window.location.href = `mailto:devienterprisesbaddi@gmail.com?subject=${subject}&body=${body}`
  }

  useEffect(() => {
    // Function to handle product selection from search
    const handleProductSelection = (event: CustomEvent) => {
      const { productName } = event.detail

      // Find the product index
      const index = products.findIndex((product) => product.name.toLowerCase() === productName.toLowerCase())

      // If found, scroll to that product
      if (index !== -1) {
        scrollToProduct(index)

        // Highlight the product card briefly
        const productCard = document.getElementById(`pharma-product-${index}`)
        if (productCard) {
          productCard.classList.add("ring-4", "ring-yellow-400", "ring-opacity-75")
          setTimeout(() => {
            productCard.classList.remove("ring-4", "ring-yellow-400", "ring-opacity-75")
          }, 2000)
        }
      }
    }

    // Check localStorage on component mount
    const selectedProduct = localStorage.getItem("selectedProduct")
    if (selectedProduct) {
      const index = products.findIndex((product) => product.name.toLowerCase() === selectedProduct.toLowerCase())
      if (index !== -1) {
        setTimeout(() => scrollToProduct(index), 300)
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
    <section id="pharmaceutical" className="section-bg pharma-bg py-8 md:py-12">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Pharmaceutical Equipment</h2>

        <div
          ref={sliderRef}
          className="product-slider flex overflow-x-auto snap-x snap-mandatory mt-8 pb-8"
          onScroll={handleScroll}
        >
          {products.map((product, index) => (
            <div key={product.id} className="product-slide flex-shrink-0 w-full px-4">
              <div
                id={`pharma-product-${index}`}
                className="product-card flex flex-row h-full transition-all duration-300"
              >
                <div className="w-1/2 relative p-4 flex items-center justify-center min-h-[300px]">
                  <div className="relative w-full h-[280px]">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="w-1/2 p-6 flex flex-col">
                  <h3 className="text-2xl font-bold mb-4 text-yellow-300">{product.name}</h3>
                  <p className="text-gray-300 mb-6 flex-grow">{product.description}</p>
                  <button
                    onClick={() => requestQuote(product.name)}
                    className="btn-primary flex items-center justify-center"
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Request Quote
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-6 gap-2">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToProduct(index)}
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
