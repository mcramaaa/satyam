import { Phone, Mail, MapPin, Clock, Globe, Instagram, MessageCircle, ArrowRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const contactInfo = [
  {
    icon: MapPin,
    title: "Alamat",
    content: "[Masukkan alamat kantor lengkap]",
  },
  {
    icon: Phone,
    title: "WhatsApp",
    content: "[08xx-xxxx-xxxx]",
  },
  {
    icon: Mail,
    title: "Email",
    content: "info@satyamlaw.id",
  },
  {
    icon: Clock,
    title: "Jam Operasional",
    content: "Senin – Jumat\n09.00 – 17.00 WIB",
  },
]

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-br from-white via-gray-50 to-white text-gray-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] opacity-5"></div>
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <Badge className="mb-6 bg-gradient-to-r from-yellow-400/20 to-amber-500/20 text-yellow-600 border-yellow-400/50 px-4 py-2">
            📞 HUBUNGI KAMI
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-yellow-600 bg-clip-text text-transparent">
              SATYAM LAW OFFICE
            </span>
          </h2>
          <p className="text-2xl text-yellow-600 mb-6">Advokat & Konsultan Hukum</p>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-gray-900">Informasi Kontak</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="bg-gradient-to-br from-white/80 to-gray-50/80 backdrop-blur-sm border-gray-200 hover:border-yellow-400/50 transition-all duration-300"
                >
                  <CardContent className="p-6 text-center">
                    <div className="bg-gradient-to-r from-yellow-400/20 to-amber-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-yellow-400/30">
                      <info.icon className="h-8 w-8 text-yellow-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2 text-lg">{info.title}</h4>
                    <p className="text-gray-600 whitespace-pre-line">{info.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex space-x-4 justify-center">
              <Button className="bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-300 hover:to-amber-400 text-black px-6 py-3 font-semibold">
                <Globe className="mr-2 h-5 w-5" />
                www.satyamlaw.id
              </Button>
              <Button className="bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-300 hover:to-amber-400 text-black px-6 py-3 font-semibold">
                <Instagram className="mr-2 h-5 w-5" />
                @satyamlawoffice
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="bg-gradient-to-br from-white/80 to-gray-50/80 backdrop-blur-sm border-gray-200">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">Kirim Pesan</CardTitle>
                <p className="text-gray-600">Konsultasi gratis untuk pertanyaan pertama Anda</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-2">Nama Lengkap</label>
                    <Input
                      className="bg-gray-100/50 border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-yellow-500"
                      placeholder="Masukkan nama lengkap"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-2">Email</label>
                    <Input
                      className="bg-gray-100/50 border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-yellow-500"
                      placeholder="email@example.com"
                      type="email"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">Nomor WhatsApp</label>
                  <Input
                    className="bg-gray-100/50 border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-yellow-500"
                    placeholder="08xx-xxxx-xxxx"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">Jenis Layanan</label>
                  <select className="w-full bg-gray-100/50 border border-gray-300 text-gray-900 rounded-md px-3 py-2 focus:border-yellow-500">
                    <option value="">Pilih jenis layanan</option>
                    <option value="konsultasi">Konsultasi Hukum</option>
                    <option value="perusahaan">Legalitas Perusahaan</option>
                    <option value="notaris">Notaris & Akta</option>
                    <option value="pertanahan">Pertanahan</option>
                    <option value="keluarga">Hukum Keluarga</option>
                    <option value="haki">HAKI</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">Pesan</label>
                  <Textarea
                    className="bg-gray-100/50 border-gray-300 text-gray-900 placeholder:text-gray-500 min-h-[120px] focus:border-yellow-500"
                    placeholder="Jelaskan kebutuhan hukum Anda..."
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-300 hover:to-amber-400 text-black py-3 text-lg font-semibold">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Kirim Pesan
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center mt-16">
          <Button
            size="lg"
            className="bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-300 hover:to-amber-400 text-black px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <MessageCircle className="mr-2 h-6 w-6" />
            Mulai Konsultasi Sekarang
            <ArrowRight className="ml-2 h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  )
}
