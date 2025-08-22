import {
  Phone,
  Mail,
  ArrowRight,
  Gavel,
  Building,
  FileText,
  Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const stats = [
  { value: "500+", label: "Klien Terlayani" },
  { value: "15+", label: "Tahun Pengalaman" },
  { value: "98%", label: "Tingkat Keberhasilan" },
  { value: "24/7", label: "Layanan Darurat" },
];

const serviceHighlights = [
  {
    icon: Gavel,
    title: "Hukum Pidana & Perdata",
    description: "Konsultasi dan pendampingan hukum komprehensif",
  },
  {
    icon: Building,
    title: "Legalitas Usaha",
    description: "Pengurusan izin dan dokumen perusahaan",
  },
  {
    icon: FileText,
    title: "Notaris & Akta",
    description: "Pembuatan akta dan dokumen legal resmi",
  },
  {
    icon: Shield,
    title: "Pertanahan",
    description: "Sertifikat dan perizinan properti",
  },
];

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-white via-gray-50 to-white py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] opacity-5"></div>
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-center">
              <div className="flex items-center w-fit gap-3 mb-6  px-4 py-2 text-sm font-medium ">
                <div className="relative w-20 md:w-16 object-contain aspect-square">
                  <Image src={"/satyam.png"} fill alt="satyam" />
                </div>
                <p className="text-3xl font-black text-red-800 ">
                  SATYAM LAW OFFICE
                </p>
                <div className="relative w-20 md:w-16 object-contain aspect-square">
                  <Image src={"/satyam.png"} fill alt="satyam" />
                </div>
              </div>
            </div>
            <h1 className="text-2xl md:text-4xl font-bold mb-6 flex justify-center">
              <span className="bg-gradient-to-r from-gray-900 via-amber-600 to-yellow-600 bg-clip-text text-transparent">
                Kantor Hukum & Konsultan Hukum
              </span>
              <span className="bg-gradient-to-r  bg-clip-text text-transparent"></span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Mitra Hukum Profesional dan Terpercaya dengan Pengalaman Lebih
              dari 15 Tahun
            </p>
            <p className="text-lg text-gray-500 mb-12 max-w-4xl mx-auto">
              Kami memberikan layanan hukum terpadu yang mencakup litigasi,
              perizinan usaha, notaris, serta pengurusan dokumen legal untuk
              pribadi dan perusahaan dengan standar internasional.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-300 hover:to-amber-400 text-black border-0 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link
                href={
                  "https://api.whatsapp.com/send?phone=628123264199&text=Hai%20Satyam%20Law%20Office"
                }
                target="_blank"
              >
                <Phone className="mr-2 h-5 w-5" />
                Hubungi Kami Sekarang
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 mt-12">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center bg-gradient-to-r from-gray-50/50 to-white/50 p-6 rounded-xl border border-yellow-400/30 backdrop-blur-sm"
              >
                <div className="text-3xl md:text-4xl font-bold text-yellow-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Service Highlights */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {serviceHighlights.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white/80 to-gray-50/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-200 hover:border-yellow-400/50 transition-all duration-300 group"
              >
                <div className="bg-gradient-to-r from-yellow-400/20 to-amber-500/20 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-6 w-6 text-yellow-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
