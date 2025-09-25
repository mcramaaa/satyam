import { MessageCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    id: "konsultasi-online",
    question: "Apakah bisa konsultasi online?",
    answer:
      "Ya, kami menyediakan layanan konsultasi via WhatsApp, Zoom, Google Meet, dan Email. Konsultasi online tersedia 24/7 untuk kasus darurat.",
  },
  {
    id: "biaya-jasa",
    question: "Berapa biaya jasa hukum di Satyam Law Office?",
    answer:
      "Biaya disesuaikan dengan jenis layanan dan kompleksitas kasus. Konsultasi awal gratis selama 30 menit. Kami juga menyediakan paket layanan dengan harga kompetitif.",
  },
  {
    id: "izin-resmi",
    question: "Apakah Satyam Law Office memiliki izin resmi?",
    answer:
      "Ya. Kami dikelola oleh advokat berlisensi PERADI dan mitra notaris bersertifikat. Semua praktisi kami memiliki sertifikasi profesi yang valid dan terupdate.",
  },
  {
    id: "waktu-proses",
    question: "Berapa lama proses pengurusan dokumen legal?",
    answer:
      "Waktu proses bervariasi tergantung jenis dokumen. PT dapat selesai 3-7 hari kerja, sertifikat tanah 14-30 hari kerja, dan akta notaris 1-3 hari kerja.",
  },
];

export default function FAQSection() {
  return (
    <section
      id="faq"
      className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Pertanyaan <span className="text-yellow-600">Umum</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 mx-auto mb-6"></div>
          <p className=" md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Jawaban atas pertanyaan yang sering diajukan klien
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-3">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className=" bg-gradient-to-r from-white to-gray-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-yellow-400/50"
              >
                <AccordionTrigger className="px-6 py-5 hover:no-underline group [&[data-state=open]]:pb-3">
                  <div className="flex items-center space-x-4 text-left">
                    <div className="bg-gradient-to-r from-yellow-400 to-amber-500 p-2.5 rounded-lg group-hover:from-yellow-300 group-hover:to-amber-400 transition-all duration-300 shadow-lg">
                      <MessageCircle className="h-5 w-5 text-black" />
                    </div>
                    <span className="font-semibold text-gray-900 md:text-lg group-hover:text-yellow-600 transition-colors">
                      {faq.question}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 pt-2">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
