import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Building2,
  ExternalLink,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ContactFormCard from "./ContactFormCard";
import Image from "next/image";

const contactInfo = [
  {
    icon: MapPin,
    title: "Alamat",
    content: "Jl. Blimbing I No. 8, Pondok Candra Indah, Waru, Sidoarjo",
    action: "Buka Google Maps",
    href: "https://www.google.com/maps/search/?api=1&query=Jl.+Blimbing+I+No.+8+Pondok+Candra+Indah+Waru+Sidoarjo",
    target: "_blank",
  },
  {
    icon: Phone,
    title: "WhatsApp",
    content: "0812-3264-199",
    action: "Chat WhatsApp",
    href:
      "https://wa.me/628123264199?text=" +
      encodeURIComponent(
        "Halo Satyam Law Office, saya ingin berkonsultasi mengenai layanan hukum.",
      ),
    target: "_blank",
  },
  {
    icon: Mail,
    title: "Email",
    content: "info@satyamlaw.id",
    action: "Kirim Email",
    href:
      "mailto:info@satyamlaw.id?subject=" +
      encodeURIComponent("Konsultasi Hukum - Satyam Law Office") +
      "&body=" +
      encodeURIComponent(
        `Halo Satyam Law Office,

Saya ingin berkonsultasi mengenai layanan hukum.

Mohon informasi mengenai proses konsultasi selanjutnya.

Terima kasih.`,
      ),
  },
  {
    icon: Clock,
    title: "Jam Operasional",
    content: "Senin – Jumat\n09.00 – 17.00 WIB",
    action: null,
    href: null,
    target: undefined,
  },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white py-24 text-gray-900"
    >
      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-yellow-400/10 blur-3xl" />

        <div className="absolute -right-32 bottom-10 h-[420px] w-[420px] rounded-full bg-amber-500/10 blur-3xl" />
      </div>

      {/* ================= CONTAINER ================= */}

      <div className="container relative z-10 mx-auto px-4">
        {/* ================= HEADER ================= */}

        <div className="mx-auto mb-16 max-w-3xl text-center">
          <Badge className="mb-5 border-yellow-400/40 bg-yellow-400/10 px-4 py-2 text-yellow-700 hover:bg-yellow-400/10">
            HUBUNGI KAMI
          </Badge>

          <h2 className="mb-5 text-4xl font-bold tracking-tight md:text-5xl">
            Konsultasikan Kebutuhan Hukum Anda
          </h2>

          <p className="mx-auto max-w-2xl text-lg leading-8 text-gray-600">
            Kami siap membantu memberikan solusi hukum yang profesional,
            transparan, dan sesuai dengan kebutuhan Anda.
          </p>

          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500" />
        </div>

        {/* ================= MAIN CONTENT ================= */}

        <div className="mx-auto grid max-w-6xl items-stretch gap-10 lg:grid-cols-2">
          {/* ================= OFFICE PHOTO ================= */}

          <div className="relative min-h-[560px] overflow-hidden rounded-3xl shadow-xl">
            <Image
              src="/officeImg.jpeg"
              alt="Kantor Satyam Law Office"
              fill
              priority={false}
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />

            {/* Image Overlay */}

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Office Badge */}

            <div className="absolute left-6 top-6">
              <div className="flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 shadow-md backdrop-blur-sm">
                <Building2 className="h-4 w-4 text-yellow-600" />

                <span className="text-sm font-semibold text-gray-900">
                  Kantor Satyam Law Office
                </span>
              </div>
            </div>

            {/* Office Information */}

            <div className="absolute bottom-0 left-0 right-0 p-7 md:p-9">
              <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-yellow-400">
                Satyam Law Office
              </span>

              <h3 className="mb-3 text-3xl font-bold text-white">
                Advokat & Konsultan Hukum
              </h3>

              <p className="mb-6 max-w-lg leading-7 text-gray-200">
                Pendampingan hukum profesional untuk individu maupun perusahaan
                dengan pelayanan yang terpercaya dan responsif.
              </p>

              {/* Address */}

              <a
                href="https://www.google.com/maps/search/?api=1&query=Jl.+Blimbing+I+No.+8+Pondok+Candra+Indah+Waru+Sidoarjo"
                target="_blank"
                rel="noopener noreferrer"
                className="group/address flex items-start gap-3 text-white"
              >
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-yellow-400 transition-transform group-hover/address:scale-110" />

                <div>
                  <p className="max-w-md text-sm leading-6 text-gray-200 transition-colors group-hover/address:text-white">
                    Jl. Blimbing I No. 8, Perumahan Pondok Candra Indah, Waru,
                    Sidoarjo, Jawa Timur
                  </p>

                  <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-yellow-400">
                    Buka di Google Maps
                    <ExternalLink className="h-3 w-3" />
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* ================= CONTACT FORM ================= */}

          <ContactFormCard />
        </div>

        {/* ================= CONTACT INFORMATION ================= */}

        <div className="mx-auto mt-10 grid max-w-6xl gap-5 md:grid-cols-2 lg:grid-cols-4">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;

            /*
             * Content card dipisahkan agar card yang memiliki
             * link dapat dibungkus dengan <a>.
             */

            const card = (
              <Card
                className={`h-full border-gray-200 bg-white transition-all duration-300 ${
                  info.href
                    ? "cursor-pointer hover:-translate-y-1 hover:border-yellow-400/60 hover:shadow-lg"
                    : ""
                }`}
              >
                <CardContent className="flex h-full gap-4 p-5">
                  {/* Icon */}

                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-yellow-400/20 to-amber-500/20 transition-all duration-300 ${
                      info.href
                        ? "group-hover:scale-110 group-hover:from-yellow-400/30 group-hover:to-amber-500/30"
                        : ""
                    }`}
                  >
                    <Icon className="h-6 w-6 text-yellow-600" />
                  </div>

                  {/* Content */}

                  <div className="flex min-w-0 flex-1 flex-col">
                    <h4 className="mb-1 font-semibold text-gray-900">
                      {info.title}
                    </h4>

                    <p className="whitespace-pre-line text-sm leading-6 text-gray-600">
                      {info.content}
                    </p>

                    {/* Action */}

                    {/* {info.action && (
                      <div className="mt-auto pt-3">
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-yellow-600 transition-colors group-hover:text-amber-600">
                          {info.action}

                          <ExternalLink className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5" />
                        </span>
                      </div>
                    )} */}
                  </div>
                </CardContent>
              </Card>
            );

            /*
             * Jam operasional tidak memiliki href,
             * sehingga hanya menampilkan Card biasa.
             */

            if (!info.href) {
              return <div key={index}>{card}</div>;
            }

            /*
             * Alamat, WhatsApp dan Email clickable.
             */

            return (
              <a
                key={index}
                href={info.href}
                target={info.target}
                rel={
                  info.target === "_blank" ? "noopener noreferrer" : undefined
                }
                className="group block h-full rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2"
                aria-label={`${info.action}: ${info.content}`}
              >
                {card}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
