"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function HomeSection() {
  const [currentImage, setCurrentImage] = useState(0)
  const images = [
    "/airshower.jpg",
    "/laminarflow.webp",
    "/passbox.jpg",
    "/safetycabinet.webp",
    "/horizontallaminarairflow.jpg",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <section id="home" className="section-bg home-bg py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
              Premium Pharmaceutical Equipment Manufacturer
            </h1>
            <p className="text-lg text-gray-200">
              Devi Enterprises is a leading manufacturer of high-quality pharmaceutical equipment, steel furniture, and
              material handling solutions based in Baddi, Himachal Pradesh.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/#pharmaceutical" className="btn-primary flex items-center">
                Explore Products <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link href="/#contact" className="btn-outline">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 relative h-[400px] w-full md:h-[500px] rounded-xl overflow-hidden ">
            {images.map((src, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentImage ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={src || "/placeholder.svg"}
                  alt={`Devi Enterprises Product ${index + 1}`}
                  fill
                  className="object-contain"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
