import { User, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";

const teamLead = [
  {
    name: " I Dewa Ayu Yudhiani, SH, M.Kn",
    position: "Notaris & PPAT",
    img: "/estri.png",
    description: "Spesialis Hukum Pidana & Perdata dengan pengalaman 20+ tahun",
    specialties: ["Hukum Pidana", "Litigasi"],
  },
  {
    name: "I Gusti Ngurah Bagus Suryadharma, SH, M.Kn",
    position: "Legal Specialist - Lawyer",
    img: "/jaler.png",
    description:
      "Ahli Hukum Perusahaan & Investasi dengan track record internasional",
    specialties: ["Corporate Law", "Investment"],
  },
];
const teamMembers = [
  {
    name: "R. Fauzi Zuhri Wahyu Pradika, SH, MH.",
    position: "legal specialist",
  },
  {
    name: "Prayudi Indra Wahyu, SH",
    position: "legal specialist",
  },
  {
    name: "Bambang Widjanarko",
    position: "Tax & Licensing Specialist",
  },
  {
    name: "Mochamad Ramadhani",
    position: "IT Specialist",
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <Badge className="mb-6 bg-yellow-100 text-yellow-600 border-yellow-400/50 px-4 py-2">
            👥 TIM PROFESIONAL
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Tim <span className="text-yellow-600">Ahli</span> Kami
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 mx-auto mb-6"></div>
          <p className="md:text-xl text-gray-600 max-w-3xl mx-auto">
            Dipimpin oleh para ahli hukum berpengalaman dengan spesialisasi di
            berbagai bidang
          </p>
        </div>

        <div className="flex justify-center gap-10 flex-wrap">
          {teamLead.map((member, index) => (
            <Card
              key={index}
              className=" shadow-xl hover:shadow-2xl  transition-all duration-300 group overflow-hidden bg-gradient-to-br from-white to-gray-50 border border-gray-200 max-w-72"
            >
              <div
                className="bg-radial from-gray-100 from-50%
                 to-gray-200 w-full aspect-square flex items-center justify-center relative"
              >
                <Image
                  fill
                  alt=""
                  src={member.img}
                  className="object-contain"
                />
              </div>
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div> */}
              <CardContent className="p-5">
                <h3 className="md:text-xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-yellow-600 font-semibold mb-3">
                  {member.position}
                </p>
                {/* <p className="text-gray-600 mb-4">{member.description}</p> */}
                {/* <div className="flex space-x-2">
                  {member.specialties.map((specialty, idx) => (
                    <Badge
                      key={idx}
                      variant="secondary"
                      className="text-xs bg-yellow-400/20 text-yellow-600 border-yellow-400/30"
                    >
                      {specialty}
                    </Badge>
                  ))}
                </div> */}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* <p className="text-2xl font-bold mt-10 text-center max-w-3xl mx-auto">
          Tim lain kami
        </p> */}
        <div className="flex justify-center gap-10 flex-wrap mt-14">
          {teamMembers.map((service, index) =>
            service.name === teamMembers[teamMembers.length - 1].name ? (
              <Link
                href={"https://mcrama.vercel.app/"}
                target="_blank"
                key={index}
                className=" bg-gradient-to-br from-white/80 to-gray-50/80 backdrop-blur-sm p-3 rounded-2xl border border-gray-200 hover:border-yellow-400/50 transition-all duration-300 group drop-shadow-md w-full md:w-fit hover:cursor-pointer"
              >
                <div className="flex items-start gap-2">
                  {/* <div className="bg-gradient-to-r from-yellow-400/20 to-amber-500/20 p-2 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"> */}
                  <User className="h-5 w-5 mt-[2px] text-yellow-600" />
                  {/* </div> */}
                  <p className="w-full font-bold">{service.name}</p>
                </div>
                <p className="text-gray-600 mt-2 text-sm">{service.position}</p>
              </Link>
            ) : (
              <div
                key={index}
                className=" bg-gradient-to-br from-white/80 to-gray-50/80 backdrop-blur-sm p-3 rounded-2xl border border-gray-200 hover:border-yellow-400/50 transition-all duration-300 group drop-shadow-md w-full md:w-fit"
              >
                <div className="flex items-start gap-2">
                  {/* <div className="bg-gradient-to-r from-yellow-400/20 to-amber-500/20 p-2 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"> */}
                  <User className="h-5 w-5 mt-[2px] text-yellow-600" />
                  {/* </div> */}
                  <p className="w-full font-bold">{service.name}</p>
                </div>
                <p className="text-gray-600 mt-2 text-sm">{service.position}</p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
