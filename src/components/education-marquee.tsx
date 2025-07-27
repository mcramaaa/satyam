"use client";

import { Play, BookOpen, Users, Award, Video, ImageIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

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
    thumbnail: "/gallery/6.webp",
    category: "Intellectual Property",
  },
];

export function EducationMarquee() {
  return (
    <section className="py-24 bg-gradient-to-br from-yellow-50 to-amber-50 overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <div className="text-center">
          <Badge className="mb-6 bg-yellow-100 text-yellow-600 border-yellow-400/50 px-4 py-2">
            📚 EDUKASI HUKUM
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Pusat <span className="text-yellow-600">Edukasi</span> Hukum
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Pelajari berbagai aspek hukum melalui video tutorial dan infografis
            yang mudah dipahami
          </p>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        <div className="flex space-x-6 animate-marquee">
          {/* First set of content */}
          {educationContent.map((content, index) => (
            <Card
              key={`first-${index}`}
              className="flex-shrink-0 w-80 shadow-xl hover:shadow-2xl transition-all duration-300 group border-0 bg-white justify-between"
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={content.thumbnail || "/placeholder.svg"}
                  alt={content.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                <div className="absolute top-4 left-4">
                  <Badge
                    className={`${
                      content.type === "video"
                        ? "bg-red-500/90 text-white"
                        : "bg-blue-500/90 text-white"
                    }`}
                  >
                    {content.type === "video" ? (
                      <>
                        <Video className="w-3 h-3 mr-1" />
                        Video
                      </>
                    ) : (
                      <>
                        <ImageIcon className="w-3 h-3 mr-1" />
                        Infografis
                      </>
                    )}
                  </Badge>
                </div>
                {content.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/90 rounded-full p-3 group-hover:bg-yellow-400 transition-colors duration-300">
                      <Play className="w-6 h-6 text-gray-900 fill-current" />
                    </div>
                  </div>
                )}
                {content.duration && (
                  <div className="absolute bottom-4 right-4">
                    <Badge className="bg-black/70 text-white text-xs">
                      {content.duration}
                    </Badge>
                  </div>
                )}
              </div>
              <CardContent className="p-6 ">
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
              </CardContent>
            </Card>
          ))}

          {/* Duplicate set for seamless loop */}
          {educationContent.map((content, index) => (
            <Card
              key={`second-${index}`}
              className="flex-shrink-0 w-80 shadow-xl hover:shadow-2xl transition-all duration-300 group border-0 bg-white"
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={content.thumbnail || "/placeholder.svg"}
                  alt={content.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                <div className="absolute top-4 left-4">
                  <Badge
                    className={`${
                      content.type === "video"
                        ? "bg-red-500/90 text-white"
                        : "bg-blue-500/90 text-white"
                    }`}
                  >
                    {content.type === "video" ? (
                      <>
                        <Video className="w-3 h-3 mr-1" />
                        Video
                      </>
                    ) : (
                      <>
                        <ImageIcon className="w-3 h-3 mr-1" />
                        Infografis
                      </>
                    )}
                  </Badge>
                </div>
                {content.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/90 rounded-full p-3 group-hover:bg-yellow-400 transition-colors duration-300">
                      <Play className="w-6 h-6 text-gray-900 fill-current" />
                    </div>
                  </div>
                )}
                {content.duration && (
                  <div className="absolute bottom-4 right-4">
                    <Badge className="bg-black/70 text-white text-xs">
                      {content.duration}
                    </Badge>
                  </div>
                )}
              </div>
              <CardContent className="p-6">
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
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      {/* <div className="container mx-auto px-4 mt-16 text-center">
        <div className="bg-white rounded-2xl p-8 shadow-xl border border-yellow-200">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="bg-gradient-to-r from-yellow-400/20 to-amber-500/20 p-3 rounded-xl border border-yellow-400/30">
              <BookOpen className="h-8 w-8 text-yellow-600" />
            </div>
            <div className="bg-gradient-to-r from-yellow-400/20 to-amber-500/20 p-3 rounded-xl border border-yellow-400/30">
              <Users className="h-8 w-8 text-yellow-600" />
            </div>
            <div className="bg-gradient-to-r from-yellow-400/20 to-amber-500/20 p-3 rounded-xl border border-yellow-400/30">
              <Award className="h-8 w-8 text-yellow-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ingin Belajar Lebih Banyak?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Dapatkan akses ke lebih dari 100+ video tutorial dan panduan hukum
            eksklusif. Tingkatkan pemahaman hukum Anda bersama para ahli.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-300 hover:to-amber-400 text-black px-8 py-3 font-semibold">
              <BookOpen className="mr-2 h-5 w-5" />
              Akses Semua Konten
            </Button>
            <Button
              variant="outline"
              className="border-2 border-yellow-400 text-yellow-600 hover:bg-yellow-50 px-8 py-3 font-semibold bg-transparent"
            >
              <Users className="mr-2 h-5 w-5" />
              Bergabung dengan Komunitas
            </Button>
          </div>
        </div>
      </div> */}
    </section>
  );
}
