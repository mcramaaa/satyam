import { Scale, Instagram, Globe, Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const serviceLinks = [
  "Konsultasi Hukum",
  "Legalitas Perusahaan",
  "Notaris & Akta",
  "Pertanahan",
  "HAKI",
];

const contactInfo = [
  {
    icon: Phone,
    text: "0812-3264-199",
    link: "https://api.whatsapp.com/send?phone=628123264199&text=Hai%20Satyam%20Law%20Office",
  },
  {
    icon: Mail,
    text: "ignbagus17@gmail.com",
    link: `mailto:ignbagus17@gmail.com`,
  },
  {
    icon: MapPin,
    text: "Jl. Swan Menganti Park No.Kel, Pelemwatu, Kec. Menganti, Kabupaten Gresik, Jawa Timur 6117",
    link: "https://g.co/kgs/RTkbMnz",
  },
];

const socialLinks = [
  { icon: Instagram, href: "#" },
  { icon: Globe, href: "#" },
  { icon: Mail, href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-white to-gray-50 text-gray-900 py-12 border-t border-yellow-400/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="h-8 w-10 relative aspect-square">
                <Image src={"/satyam.png"} fill alt="satyam" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-red-900">
                  SATYAM LAW OFFICE
                </h3>
                <p className="text-gray-600">Kantor Hukum & Konsultan Hukum</p>
              </div>
            </div>
            <p className="text-gray-600 mb-6 max-w-md">
              Mitra hukum profesional dan terpercaya dengan pengalaman lebih
              dari 15 tahun dalam memberikan solusi hukum terbaik.
            </p>
            {/* <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <div
                  key={index}
                  className="bg-gray-200 p-2 rounded-lg hover:bg-yellow-500 transition-colors cursor-pointer border border-gray-300 hover:border-yellow-400"
                >
                  <social.icon className="h-5 w-5" />
                </div>
              ))}
            </div> */}
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-600">
              Layanan Utama
            </h4>
            <ul className="space-y-2 text-gray-600">
              {serviceLinks.map((service, index) => (
                <li
                  key={index}
                  className="hover:text-yellow-600 transition-colors cursor-pointer"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-600">
              Kontak
            </h4>
            <ul className="space-y-2 text-gray-600">
              {contactInfo.map((contact, index) => (
                <li key={index} className="flex items-start">
                  <contact.icon className="h-4 w-4 mr-2 mt-1" />
                  <Link target="_blank" href={contact.link} className="w-full">
                    {contact.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-300 pt-8 text-center text-xs grid place-items-center">
          © 2024 Satyam Law Office. Semua hak dilindungi undang-undang.
          <p className="text-gray-600">
            <Link
              href={"https://mcrama.vercel.app/"}
              className="text-yellow-600 ml-1 flex items-center gap-2"
              target="_blank"
            >
              Dibuat oleh️ Cathabot.id untuk keadilan{" "}
              <Scale className="w-4 h-4" />
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
