import Image from "next/image"
import { CheckCircle } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="about" className="section-bg about-bg py-8 md:py-12">
      <div className="container mx-auto px-4">
        <h2 className="section-title">About Devi Enterprises</h2>

        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 mt-8">
          <div className="md:w-1/2">
            <Image
              src="/safetycabinet.webp"
              alt="Devi Enterprises Facility"
              width={600}
              height={400}
              className="rounded-xl shadow-lg object-cover border-2 border-blue-500"
            />
          </div>
          <div className="md:w-1/2 space-y-6">
            <p className="text-lg text-gray-200">
              Established in 2014, Devi Enterprises has grown to become a trusted name in the pharmaceutical and
              healthcare industry. Based in Baddi, Himachal Pradesh, we specialize in manufacturing premium quality
              equipment that meets international standards.
            </p>
            <p className="text-gray-300">
              Our state-of-the-art manufacturing facility is equipped with the latest technology and operated by skilled
              professionals who are committed to delivering excellence in every product we create.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-400 mr-2 flex-shrink-0" />
                <span className="text-gray-200">GMP Compliant Manufacturing</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-400 mr-2 flex-shrink-0" />
                <span className="text-gray-200">ISO 9001:2015 Certified</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-400 mr-2 flex-shrink-0" />
                <span className="text-gray-200">Custom Design Solutions</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-400 mr-2 flex-shrink-0" />
                <span className="text-gray-200">Nationwide Service Network</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-400 mr-2 flex-shrink-0" />
                <span className="text-gray-200">Quality Raw Materials</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-400 mr-2 flex-shrink-0" />
                <span className="text-gray-200">Timely Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
