"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { Mail } from "lucide-react"

const products = [
  {
    id: "foot-dustbin",
    name: "Foot Operated Dustbin",
    image: "/images/handling/foot operated dustbin.jpg",
    description: "Hygienic foot-operated waste bins designed for clean room and pharmaceutical environments.",
  },
  {
    id: "container-trolley",
    name: "SS Container Trolley",
    image: "/images/handling/container trolley.jpg",
    description: "Specialized trolleys for transporting containers in manufacturing facilities.",
  },
  {
    id: "containers",
    name: "SS Containers",
    image: "/images/handling/containers.webp",
    description: "High-quality stainless steel containers for material storage and transport.",
  },
  {
    id: "pallets",
    name: "SS Pallets",
    image: "/images/handling/pallets.jpg",
    description: "Durable stainless steel pallets designed for clean room and pharmaceutical applications.",
  },
  {
    id: "tray-trolley",
    name: "SS Tray Trolley",
    image: "/images/handling/tray trolley.jpg",
    description: "Mobile trolleys with multiple trays for efficient material handling.",
  },
  {
    id: "multi-purpose-trolley",
    name: "Multi Purpose Trolley",
    image: "/images/handling/multipurpose trolley.webp",
    description: "Versatile trolleys designed for various material handling applications.",
  },
  {
    id: "straight-conveyor",
    name: "Straight Conveyor",
    image: "/images/handling/straight conveyor.jpg",
    description: "Efficient straight conveyors for streamlined material transport in production lines.",
  },
  {
    id: "packing-conveyor",
    name: "Packing Conveyor",
    image: "/images/handling/packing conveyor.webp",
    description: "Specialized conveyors designed for packaging operations in manufacturing facilities.",
  },
  {
    id: "inclined-conveyor",
    name: "Inclined Conveyor",
    image: "/images/handling/inclined conveyor.jpg",
    description: "Angled conveyors for vertical material transport between different production levels.",
  },
  {
    id: "roller-conveyor",
    name: "Roller Conveyor",
    image: "/images/handling/roller conveyor.webp",
    description: "Roller-based conveyors for smooth and efficient material movement in production environments.",
  },
]

export default function HandlingEquipmentSection() {
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
        const productCard = document.getElementById(`handling-product-${index}`)
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
    <section id="handling-equipment" className="section-bg handling-bg py-8 md:py-12">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Material Handling Equipment</h2>

        <div
          ref={sliderRef}
          className="product-slider flex overflow-x-auto snap-x snap-mandatory mt-8 pb-8"
          onScroll={handleScroll}
        >
          {products.map((product, index) => (
            <div key={product.id} className="product-slide flex-shrink-0 w-full px-4">
              <div
                id={`handling-product-${index}`}
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
