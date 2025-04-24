import Image from "next/image"

export default function ClientsSection() {
  const clients = [
    {
      id: 1,
      name: "Acme",
      logo: "/images/clients/acme.png",
    },
    {
      id: 2,
      name: "Venus Remedies",
      logo: "/images/clients/venus.png",
    },
    {
      id: 3,
      name: "Unichem",
      logo: "/images/clients/unichem.png",
    },
    {
      id: 4,
      name: "Panacea",
      logo: "/images/clients/panacea.png",
    },
    {
      id: 5,
      name: "torrent",
      logo: "/images/clients/torrent.png",
    },
    

  ]

  return (
    <section id="clients" className="section-bg clients-bg py-8 md:py-12">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Our Clients</h2>

        <div className="mt-8">
          <p className="text-center text-lg mb-8 max-w-3xl mx-auto text-gray-200">
            We are proud to serve leading pharmaceutical and healthcare companies across India. Our commitment to
            quality and excellence has earned us the trust of these prestigious organizations.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
            {clients.map((client) => (
              <div
                key={client.id}
                className="bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow w-full max-w-[200px] h-[120px] flex items-center justify-center border border-blue-500"
              >
                <Image
                  src={client.logo || "/placeholder.svg"}
                  alt={client.name}
                  width={150}
                  height={80}
                  className="max-h-[80px] w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
