"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  FileText,
  CreditCard,
  Users,
  Shield,
  Clock,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const requirements = [
  {
    id: "dokumen-identitas",
    icon: FileText,
    title: "Dokumen Identitas & Legalitas",
    items: [
      "KTP/Identitas yang masih berlaku",
      "NPWP pribadi atau perusahaan",
      "Akta pendirian perusahaan (jika berbadan hukum)",
      "SK Kemenkumham untuk PT/CV",
    ],
  },
  {
    id: "dokumen-keuangan",
    icon: CreditCard,
    title: "Dokumen Keuangan & Bisnis",
    items: [
      "Laporan keuangan 2 tahun terakhir",
      "Rekening koran 6 bulan terakhir",
      "Profil perusahaan dan rencana bisnis",
      "Surat keterangan domisili usaha",
    ],
  },
  {
    id: "persyaratan-khusus",
    icon: Shield,
    title: "Persyaratan Khusus Sektor",
    items: [
      "Izin khusus sesuai bidang usaha (SIUP, TDP, dll)",
      "Sertifikat halal (untuk produk makanan/minuman)",
      "BPOM/PIRT (untuk produk konsumsi)",
      "Asuransi pertanggungjawaban produk",
    ],
    isWarning: true,
  },
  {
    id: "tim-manajemen",
    icon: Users,
    title: "Informasi Tim & Manajemen",
    items: [
      "CV dan identitas direktur/pemilik",
      "Struktur organisasi perusahaan",
      "Surat kuasa (jika diwakilkan)",
      "Referensi bisnis atau klien",
    ],
  },
  {
    id: "waktu-proses",
    icon: Clock,
    title: "Waktu Proses & Biaya",
    hasSpecialContent: true,
  },
];

export function RequirementsAccordion() {
  return (
    <div className="w-full max-w-4xl mx-auto space-y-3">
      <Accordion type="single" collapsible className="space-y-3">
        {requirements.map((requirement) => (
          <AccordionItem
            key={requirement.id}
            value={requirement.id}
            className="border-none bg-gradient-to-r from-white to-gray-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-yellow-400/50"
          >
            <AccordionTrigger className="px-6 py-5 hover:no-underline group [&[data-state=open]]:pb-3">
              <div className="flex items-center space-x-4 text-left">
                <div className="bg-gradient-to-r from-yellow-400 to-amber-500 p-2.5 rounded-lg group-hover:from-yellow-300 group-hover:to-amber-400 transition-all duration-300 shadow-lg">
                  <requirement.icon className="h-5 w-5 text-black" />
                </div>
                <span className="font-semibold text-gray-900 text-lg group-hover:text-yellow-600 transition-colors">
                  {requirement.title}
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6 pt-2">
              {requirement.hasSpecialContent ? (
                <div className="space-y-4 text-gray-600">
                  <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-4 rounded-lg border border-yellow-200">
                    <h4 className="font-semibold text-yellow-700 mb-2 text-sm">
                      Estimasi Waktu:
                    </h4>
                    <ul className="space-y-1 text-sm text-yellow-600">
                      <li>• Konsultasi awal: 1-2 hari kerja</li>
                      <li>• Review dokumen: 3-5 hari kerja</li>
                      <li>• Proses legal: 7-14 hari kerja</li>
                      <li>• Finalisasi: 2-3 hari kerja</li>
                    </ul>
                  </div>
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-green-700 mb-2 text-sm">
                      Biaya Konsultasi:
                    </h4>
                    <p className="text-sm text-green-600 leading-relaxed">
                      Konsultasi awal GRATIS selama 30 menit. Biaya selanjutnya
                      akan disesuaikan dengan kompleksitas kasus dan jenis
                      layanan yang dibutuhkan.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="space-y-3 text-gray-600">
                  {requirement.items?.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      {requirement.isWarning ? (
                        <AlertCircle className="h-4 w-4 text-yellow-500 mt-1 flex-shrink-0" />
                      ) : (
                        <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                      )}
                      <span className="text-sm leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
