"use client";

import { useState } from "react";
import { MessageCircle, ArrowRight } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactFormCard() {
  const [formData, setFormData] = useState({
    nama: "",
    layanan: "",
    pesan: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Ganti dengan nomor WhatsApp kantor
    const nomorKantor = "628123264199";

    const message = `Halo Satyam Law Office,

Perkenalkan, nama saya ${formData.nama}.

Saya ingin berkonsultasi mengenai ${formData.layanan}.

Kebutuhan Konsultasi sebagai berikut:
${formData.pesan}

Mohon informasi mengenai proses konsultasi selanjutnya.

Terima kasih.`;

    const whatsappUrl = `https://wa.me/${nomorKantor}?text=${encodeURIComponent(
      message,
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <Card className="h-full rounded-3xl border-gray-200 bg-white/90 shadow-xl backdrop-blur-sm">
      <CardHeader className="p-7 pb-4 md:p-9 md:pb-4">
        <CardTitle className="text-3xl font-bold text-gray-900">
          Kirim Pesan
        </CardTitle>

        <p className="mt-2 leading-7 text-gray-600">
          Ceritakan kebutuhan hukum Anda dan lanjutkan konsultasi langsung
          melalui WhatsApp.
        </p>
      </CardHeader>

      <CardContent className="p-7 pt-4 md:p-9 md:pt-4">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Nama */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Nama Lengkap
            </label>

            <Input
              name="nama"
              value={formData.nama}
              onChange={handleChange}
              required
              placeholder="Masukkan nama lengkap"
              className="h-12 border-gray-300 bg-gray-50 focus:border-yellow-500"
            />
          </div>

          {/* Jenis Layanan */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Jenis Layanan
            </label>

            <select
              name="layanan"
              value={formData.layanan}
              onChange={handleChange}
              required
              className="h-12 w-full rounded-md border border-gray-300 bg-gray-50 px-3 text-gray-900 outline-none transition focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
            >
              <option value="">Pilih jenis layanan</option>

              <option value="Konsultasi Hukum">Konsultasi Hukum</option>

              <option value="Legalitas Perusahaan">Legalitas Perusahaan</option>

              <option value="Notaris & Akta">Notaris & Akta</option>

              <option value="Pertanahan">Pertanahan</option>

              <option value="Hukum Keluarga">Hukum Keluarga</option>

              <option value="HAKI">HAKI</option>
            </select>
          </div>

          {/* Pesan */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Pesan
            </label>

            <Textarea
              name="pesan"
              value={formData.pesan}
              onChange={handleChange}
              required
              placeholder="Jelaskan secara singkat kebutuhan hukum Anda..."
              className="min-h-[180px] resize-none border-gray-300 bg-gray-50 focus:border-yellow-500"
            />
          </div>

          {/* Submit */}
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-yellow-400 to-amber-500 py-6 text-base font-semibold text-black shadow-md transition-all hover:from-yellow-300 hover:to-amber-400 hover:shadow-lg"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Konsultasi via WhatsApp
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>

          <p className="text-center text-xs leading-5 text-gray-500">
            Anda akan diarahkan ke WhatsApp untuk mengirim pesan kepada Satyam
            Law Office.
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
