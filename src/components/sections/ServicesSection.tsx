import {
  Gavel,
  Building,
  FileText,
  Shield,
  Heart,
  Briefcase,
  ChevronRight,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Gavel,
    title: "Konsultasi & Penanganan Hukum",
    items: [
      "Konsultasi Hukum (Pidana, Perdata, TUN)",
      "Litigasi: Pendampingan di Pengadilan",
      "Non-Litigasi: Legal Opinion, Legal Drafting",
      "Mediasi, Arbitrase, dan Penyelesaian Alternatif",
    ],
  },
  {
    icon: Building,
    title: "Legalitas Perusahaan",
    items: [
      "Pendirian PT, CV, Yayasan, Koperasi",
      "Perubahan Akta & Struktur Kepemilikan",
      "NIB, SIUJK, OSS RBA",
      "SIUP, TDP, HO, SITU",
    ],
  },
  {
    icon: FileText,
    title: "Notaris & Akta",
    items: [
      "Pembuatan Akta Jual Beli",
      "Perjanjian Kerja Sama",
      "Surat Kuasa, Wasiat, Hibah",
      "Akta Pendirian & Perubahan Perusahaan",
    ],
  },
  {
    icon: Shield,
    title: "Pertanahan & Bangunan",
    items: [
      "Jual Beli dan Balik Nama Sertifikat",
      "Hibah, Waris, AJB",
      "SHM, HGB",
      "IMB & Sertifikat Layak Fungsi (SLF)",
    ],
  },
  {
    icon: Heart,
    title: "Hukum Keluarga & Waris",
    items: [
      "Perkawinan dan Perceraian",
      "Perwalian Anak",
      "Pembagian Warisan",
      "Akta Kelahiran, Akta Kematian",
    ],
  },
  {
    icon: Briefcase,
    title: "HAKI & Layanan Tambahan",
    items: [
      "Pendaftaran Merek Dagang",
      "Hak Cipta dan Paten",
      "Sertifikasi Halal MUI",
      "PIRT & Izin Edar BPOM, NPWP",
    ],
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="py-24 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <Badge className="mb-6 bg-yellow-100 text-yellow-600 border-yellow-400/50 px-4 py-2">
            ⚖️ LAYANAN KAMI
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Layanan Hukum <span className="text-yellow-600">Terpadu</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Solusi hukum komprehensif untuk semua kebutuhan legal Anda
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 group bg-gradient-to-br from-white to-gray-50 border border-gray-200"
            >
              <CardHeader className="pb-4">
                <div className="bg-gradient-to-r from-yellow-400/20 to-amber-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border border-yellow-400/30">
                  <service.icon className="h-8 w-8 text-yellow-600" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-600">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-center">
                      <ChevronRight className="h-4 w-4 text-yellow-600 mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button className="w-full mt-6 bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-300 hover:to-amber-400 text-black font-semibold">
                  Pelajari Lebih Lanjut
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
