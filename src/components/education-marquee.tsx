"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Marquee from "react-fast-marquee";

const educationContent = [
  {
    type: "image",
    title: "Cara Mendirikan PT dengan Mudah",
    description: "Tutorial lengkap pendirian PT dari A-Z",
    duration: "15 menit",
    thumbnail: "/gallery/1.webp",
    category: "Corporate Law",
  },
  {
    type: "image",
    title: "Infografis Hak dan Kewajiban Karyawan",
    description: "Panduan visual tentang hukum ketenagakerjaan",
    thumbnail: "/gallery/2.webp",
    category: "Employment Law",
  },
  {
    type: "image",
    title: "Proses Jual Beli Tanah yang Aman",
    description: "Tips menghindari sengketa properti",
    duration: "12 menit",
    thumbnail: "/gallery/3.webp",
    category: "Property Law",
  },
  {
    type: "image",
    title: "Flowchart Pengurusan Sertifikat Tanah",
    description: "Alur lengkap pengurusan sertifikat",
    thumbnail: "/gallery/4.webp",
    category: "Property Law",
  },
  {
    type: "image",
    title: "Hak Waris dalam Hukum Indonesia",
    description: "Memahami pembagian warisan yang adil",
    duration: "18 menit",
    thumbnail: "/gallery/5.webp",
    category: "Family Law",
  },
  {
    type: "image",
    title: "Panduan HAKI untuk UMKM",
    description: "Melindungi merek dagang bisnis Anda",
    thumbnail: "/gallery/7.webp",
    category: "Intellectual Property",
  },
  {
    type: "image",
    title: "Panduan HAKI untuk UMKM",
    description: "Melindungi merek dagang bisnis Anda",
    thumbnail: "/gallery/8.webp",
    category: "Intellectual Property",
  },
  {
    type: "image",
    title: "Panduan HAKI untuk UMKM",
    description: "Melindungi merek dagang bisnis Anda",
    thumbnail: "/gallery/9.webp",
    category: "Intellectual Property",
  },
  {
    type: "image",
    title: "Panduan HAKI untuk UMKM",
    description: "Melindungi merek dagang bisnis Anda",
    thumbnail: "/gallery/10.webp",
    category: "Intellectual Property",
  },
  {
    type: "image",
    title: "Panduan HAKI untuk UMKM",
    description: "Melindungi merek dagang bisnis Anda",
    thumbnail: "/gallery/11.webp",
    category: "Intellectual Property",
  },
  {
    type: "image",
    title: "Panduan HAKI untuk UMKM",
    description: "Melindungi merek dagang bisnis Anda",
    thumbnail: "/gallery/12.webp",
    category: "Intellectual Property",
  },
  {
    type: "image",
    title: "Panduan HAKI untuk UMKM",
    description: "Melindungi merek dagang bisnis Anda",
    thumbnail: "/gallery/13.webp",
    category: "Intellectual Property",
  },
  {
    type: "image",
    title: "Panduan HAKI untuk UMKM",
    description: "Melindungi merek dagang bisnis Anda",
    thumbnail: "/gallery/14.webp",
    category: "Intellectual Property",
  },
  {
    type: "image",
    title: "Panduan HAKI untuk UMKM",
    description: "Melindungi merek dagang bisnis Anda",
    thumbnail: "/gallery/15.webp",
    category: "Intellectual Property",
  },
  {
    type: "image",
    title: "Panduan HAKI untuk UMKM",
    description: "Melindungi merek dagang bisnis Anda",
    thumbnail: "/gallery/16.webp",
    category: "Intellectual Property",
  },
  {
    type: "image",
    title: "Panduan HAKI untuk UMKM",
    description: "Melindungi merek dagang bisnis Anda",
    thumbnail: "/gallery/17.webp",
    category: "Intellectual Property",
  },
  {
    type: "image",
    title: "Panduan HAKI untuk UMKM",
    description: "Melindungi merek dagang bisnis Anda",
    thumbnail: "/gallery/18.webp",
    category: "Intellectual Property",
  },
];

export function EducationMarquee() {
  return (
    <section className="py-24 bg-gradient-to-br from-yellow-50 to-amber-50 overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <div className="text-center">
          <Badge className="mb-6 bg-yellow-100 text-yellow-600 border-yellow-400/50 px-4 py-2">
            📚 GALERIS HUKUM
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-yellow-600">Galeri</span> Hukum
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 mx-auto mb-6"></div>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        <Marquee
          gradient={false}
          speed={65}
          pauseOnHover={true}
          className="flex space-x-6"
        >
          {educationContent.map((content, index) => (
            <Card
              key={index}
              className="flex-shrink-0 w-80 shadow-xl hover:shadow-2xl transition-all duration-300 group border-0 bg-white mx-3"
            >
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={content.thumbnail || "/placeholder.svg"}
                  alt={content.title}
                  className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              {/* Anda bisa aktifkan CardContent jika ingin menampilkan detail */}
              {/* <CardContent className="p-6">
                <div className="mb-3">
                  <Badge
                    variant="secondary"
                    className="text-xs bg-yellow-100 text-yellow-700 border-yellow-200"
                  >
                    {content.category}
                  </Badge>
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors">
                  {content.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {content.description}
                </p>
                <Button className="w-full bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-300 hover:to-amber-400 text-black font-semibold">
                  {content.type === "video"
                    ? "Tonton Video"
                    : "Lihat Infografis"}
                </Button>
              </CardContent> */}
            </Card>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
