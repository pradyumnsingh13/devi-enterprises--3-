import { Mail, Phone, FileText } from "lucide-react"
import Link from "next/link"

export default function TopBar() {
  return (
    <div className="bg-purple-900 text-white py-2 px-4 text-sm border-b border-purple-800">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <div className="flex flex-wrap items-center gap-4 md:gap-6">
          <div className="flex items-center">
            <span className="font-semibold mr-2">GST:</span>
            <span>02AZYPD8158R1ZF</span>
          </div>
          <Link
            href="mailto:devienterprisesbaddi@gmail.com"
            className="flex items-center hover:text-yellow-300 transition-colors"
          >
            <Mail className="h-4 w-4 mr-1" />
            <span>devienterprisesbaddi@gmail.com</span>
          </Link>
          <Link href="tel:+919816273955" className="flex items-center hover:text-yellow-300 transition-colors">
            <Phone className="h-4 w-4 mr-1" />
            <span>+91 9816273955</span>
          </Link>
        </div>
        <Link href="/catalogue.pdf" className="flex items-center hover:text-yellow-300 transition-colors mt-2 md:mt-0">
          <FileText className="h-4 w-4 mr-1" />
          <span>Download Catalogue</span>
        </Link>
      </div>
    </div>
  )
}
