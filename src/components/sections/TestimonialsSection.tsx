import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const testimonials = [
  {
    name: "Dimas Rahardjo",
    position: "CEO, Tech Startup Jakarta",
    initials: "DR",
    rating: 5,
    content:
      "Profesional, cepat, dan sangat membantu. Pengurusan PT saya selesai hanya dalam beberapa hari. Tim sangat responsif dan memberikan update berkala.",
  },
  {
    name: "Yuli Astuti",
    position: "Pengusaha, Surabaya",
    initials: "YA",
    rating: 5,
    content:
      "Pendampingan hukum sangat transparan dan jujur. Terima kasih untuk bantuannya dalam menyelesaikan sengketa tanah keluarga dengan hasil yang memuaskan.",
  },
  {
    name: "Rudi Hermawan",
    position: "Direktur, PT Maju Bersama",
    initials: "RH",
    rating: 5,
    content:
      "Layanan notaris terbaik yang pernah saya gunakan. Proses cepat, harga transparan, dan hasil dokumen sangat rapi dan profesional.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <Badge className="mb-6 bg-yellow-100 text-yellow-600 border-yellow-400/50 px-4 py-2">
            💬 TESTIMONI KLIEN
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Apa Kata <span className="text-yellow-600">Klien</span> Kami
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 mx-auto mb-6"></div>
          <p className="md:text-xl text-gray-600 max-w-3xl mx-auto">
            Kepuasan klien adalah prioritas utama kami
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50 border-gray-200"
            >
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-500 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 text-sm md:text-base leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-400/20 to-amber-500/20 rounded-full flex items-center justify-center mr-4 border border-yellow-400/30">
                    <span className="text-yellow-600 font-bold text-lg">
                      {testimonial.initials}
                    </span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-lg">
                      {testimonial.name}
                    </p>
                    <p className="text-gray-500">{testimonial.position}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
