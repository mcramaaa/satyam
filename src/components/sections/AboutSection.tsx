import { Scale, Award, Users, TrendingUp, Heart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const values = [
  {
    icon: Scale,
    title: "Profesional",
    description: "Standar tinggi",
  },
  {
    icon: Award,
    title: "Terpercaya",
    description: "Reputasi solid",
  },
  {
    icon: Users,
    title: "Berpengalaman",
    description: "15+ tahun",
  },
];

const achievements = [
  {
    icon: Award,
    title: "PERADI Certified",
    description: "Advokat berlisensi resmi",
  },
  {
    icon: Scale,
    title: "Notaris Bersertifikat",
    description: "Mitra notaris terpercaya",
  },
  {
    icon: Users,
    title: "IPPAT",
    description: "Ikatan Pejabat Pembuat Akta Tanah",
  },
];

const missionPoints = [
  "Memberikan layanan hukum yang solutif dan akuntabel",
  "Mendampingi klien dalam setiap proses hukum dengan optimal",
  "Meningkatkan kesadaran hukum masyarakat dan pelaku usaha",
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <Badge className="mb-6 bg-yellow-100 text-yellow-600 border-yellow-400/50 px-4 py-2">
            🧑‍⚖️ TENTANG KAMI
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Siapa <span className="text-yellow-600">Kami?</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              <span className="font-semibold text-gray-900">
                SATYAM LAW OFFICE
              </span>{" "}
              adalah kantor hukum dan konsultan hukum yang berdedikasi untuk
              memberikan layanan hukum terbaik kepada masyarakat, pelaku usaha,
              dan institusi. Kami berkomitmen pada integritas, profesionalisme,
              dan solusi hukum yang efektif.
            </p>

            <div className="grid sm:grid-cols-3 gap-8 mb-10">
              {values.map((value, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-gradient-to-r from-yellow-400/20 to-amber-500/20 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg border border-yellow-400/30">
                    <value.icon className="h-10 w-10 text-yellow-600" />
                  </div>
                  <p className="font-bold text-gray-900 text-lg">
                    {value.title}
                  </p>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-gray-50 hover:shadow-2xl transition-all duration-300  border-gray-200">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent flex items-center">
                  <TrendingUp className="mr-3 h-6 w-6 text-yellow-600" />
                  Visi
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Menjadi kantor hukum yang terpercaya, progresif, dan adaptif
                  dalam memberikan perlindungan hukum yang menyeluruh dengan
                  standar internasional.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-xl bg-gradient-to-br from-white to-gray-50 hover:shadow-2xl transition-all duration-300  border-gray-200">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent flex items-center">
                  <Heart className="mr-3 h-6 w-6 text-yellow-600" />
                  Misi
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 text-gray-600">
                  {missionPoints.map((point, index) => (
                    <li key={index} className="flex items-start">
                      <div className="bg-gradient-to-r from-yellow-400 to-amber-500 w-2 h-2 rounded-full mr-4 mt-3 flex-shrink-0"></div>
                      <span className="text-lg">{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Awards & Certifications */}
        <div className="bg-gradient-to-r from-white to-gray-50 rounded-3xl p-12 text-gray-900 border border-yellow-400/30">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 text-gray-900">
              Penghargaan & Sertifikasi
            </h3>
            <p className="text-gray-600 text-lg">
              Pengakuan atas dedikasi dan profesionalisme kami
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-yellow-400/20 to-amber-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-yellow-400/30">
                  <achievement.icon className="h-8 w-8 text-yellow-600" />
                </div>
                <h4 className="font-semibold text-lg mb-2 text-gray-900">
                  {achievement.title}
                </h4>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
