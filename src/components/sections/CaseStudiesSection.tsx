import { Building, Shield, Gavel, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const caseStudies = [
  {
    title: "Pendirian PT Teknologi",
    description:
      "Berhasil mendirikan PT untuk startup teknologi dengan modal Rp 2.5 miliar, termasuk pengurusan NIB dan izin usaha lengkap dalam waktu 7 hari kerja.",
    icon: Building,
    category: "Corporate Law",
    year: "2023",
  },
  {
    title: "Sengketa Tanah Warisan",
    description:
      "Menyelesaikan sengketa tanah warisan seluas 2 hektar melalui mediasi, menghemat waktu dan biaya dibanding litigasi di pengadilan.",
    icon: Shield,
    category: "Pertanahan",
    year: "2023",
  },
  {
    title: "Kasus Pidana Ekonomi",
    description:
      "Berhasil membebaskan klien dari tuduhan korupsi dengan nilai Rp 50 miliar melalui pembuktian yang komprehensif di Mahkamah Agung.",
    icon: Gavel,
    category: "Hukum Pidana",
    year: "2022",
  },
];

export default function CaseStudiesSection() {
  return (
    <section id="cases" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <Badge className="mb-6 bg-yellow-100 text-yellow-600 border-yellow-400/50 px-4 py-2">
            📊 STUDI KASUS
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Kisah <span className="text-yellow-600">Sukses</span> Klien
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 mx-auto mb-6"></div>
          <p className="md:text-xl text-gray-600 max-w-3xl mx-auto">
            Beberapa kasus yang telah berhasil kami tangani dengan hasil
            memuaskan
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((caseStudy, index) => (
            <Card
              key={index}
              className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 group bg-gradient-to-br from-white to-gray-50  border-gray-200"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-green-500/20 text-green-500 border-green-500/30">
                    Berhasil
                  </Badge>
                  <Calendar className="h-5 w-5 text-gray-400" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  {caseStudy.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 text-sm md:text-base">
                  {caseStudy.description}
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <caseStudy.icon className="h-4 w-4 mr-2" />
                  {caseStudy.category} • {caseStudy.year}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
