"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { Mail } from "lucide-react"

const products = [
  {
    id: "work-table",
    name: "SS Work Table",
    image: "/images/steel/worktable.webp",
    description: "Durable stainless steel work tables designed for pharmaceutical and laboratory environments.",
  },
  {
    id: "industrial-table",
    name: "SS Industrial Work Table",
    image: "/images/steel/industrial work table.jpg",
    description: "Heavy-duty industrial work tables with reinforced structure for manufacturing facilities.",
  },
  {
    id: "office-table",
    name: "SS Office Table",
    image: "/images/steel/office table.jpg",
    description: "Elegant stainless steel office tables combining functionality with modern aesthetics.",
  },
  {
    id: "sink-table",
    name: "SS Sink Table",
    image: "/images/steel/sinktable.jpg",
    description: "Integrated sink tables with seamless welding for easy cleaning and maintenance.",
  },
  {
    id: "sliding-door-table",
    name: "SS Sliding Door Table",
    image: "/images/steel/sliding door table.webp",
    description: "Work tables with convenient sliding doors for storage and organization.",
  },
  {
    id: "three-shelf-trolley",
    name: "SS Three Shelf Trolley",
    image: "/images/steel/three shelf trolley.webp",
    description: "Mobile three-tier trolleys for efficient material transport in clean environments.",
  },
  {
    id: "instrument-trolley",
    name: "SS Instrument Trolley",
    image: "/images/steel/instrument trolley.jpeg",
    description: "Specialized trolleys for organizing and transporting laboratory instruments.",
  },
  {
    id: "rectangular-stool",
    name: "SS Rectangular Stool",
    image: "/images/steel/rectangular stool.webp",
    description: "Ergonomic stainless steel stools designed for laboratory and industrial settings.",
  },
  {
    id: "cupboard-trolley",
    name: "SS Cupboard Trolley",
    image: "/images/steel/cupboard trolley.jpeg",
    description: "Mobile storage solutions combining cupboard space with trolley functionality.",
  },
  {
    id: "material-trolley",
    name: "SS Material Trolley",
    image: "/images/steel/materialtolley.webp",
    description: "Heavy-duty trolleys designed for transporting materials in manufacturing environments.",
  },
  {
    id: "circular-stand",
    name: "SS Circular Stand",
    image: "/images/steel/circular stool.webp",
    description: "Versatile circular stands for laboratory equipment and instrument support.",
  },
  {
    id: "chair",
    name: "SS Chair",
    image: "/images/steel/chair.jpg",
    description: "Durable stainless steel chairs designed for clean room and laboratory environments.",
  },
  {
    id: "scoops",
    name: "SS Scoops",
    image: "/images/steel/scoops.webp",
    description: "Precision-crafted stainless steel scoops for pharmaceutical and food applications.",
  },
  {
    id: "trolley-with-drawer",
    name: "SS Instrument Trolley with Drawyer",
    image: "/images/steel/instrument trolley with drawer.jpeg",
    description: "Advanced instrument trolleys featuring convenient drawers for organized storage.",
  },
  {
    id: "canteen-table",
    name: "SS Canteen Table",
    image: "/images/steel/canteen table.jpg",
    description: "Hygienic stainless steel tables designed specifically for canteen and dining areas.",
  },
  {
    id: "ladder",
    name: "SS Ladder",
    image: "/images/steel/ss ladder.jpeg",
    description: "Safety-focused stainless steel ladders for clean room and industrial applications.",
  },
  {
    id: "tool-box",
    name: "SS Tool Box",
    image: "/images/steel/toolbox.jpg",
    description: "Organized storage solutions for tools in clean and controlled environments.",
  },
  {
    id: "double-floor-cupboard",
    name: "SS Double Floor Cupboard",
    image: "/images/steel/double door cupboard.webp",
    description: "Spacious double-floor cupboards providing ample storage for laboratory supplies.",
  },
  {
    id: "rack",
    name: "SS Rack",
    image: "/images/steel/ss rack.jpg",
    description: "Adjustable stainless steel racks for efficient storage in laboratory settings.",
  },
  {
    id: "industrial-cupboard",
    name: "SS Industrial Cupboard",
    image: "/images/steel/industrial cupboard.webp",
    description: "Heavy-duty industrial cupboards designed for manufacturing and warehouse environments.",
  },
]

export default function SteelFurnitureSection() {
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

  // Add event listener for product selection
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
        const productCard = document.getElementById(`steel-product-${index}`)
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
    <section id="steel-furniture" className="section-bg steel-bg py-8 md:py-12">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Steel Furniture</h2>

        <div
          ref={sliderRef}
          className="product-slider flex overflow-x-auto snap-x snap-mandatory mt-8 pb-8"
          onScroll={handleScroll}
        >
          {products.map((product, index) => (
            <div key={product.id} className="product-slide flex-shrink-0 w-full px-4">
              <div
                id={`steel-product-${index}`}
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

        <div className="flex justify-center mt-6 gap-2 flex-wrap">
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
