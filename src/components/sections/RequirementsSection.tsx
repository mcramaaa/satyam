import { RequirementsAccordion } from "../requirements-accordion";

export default function RequirementsSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Persyaratan <span className="text-yellow-600">Dokumen</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Dokumen dan persyaratan yang diperlukan untuk berbagai layanan hukum
            kami
          </p>
        </div>

        <RequirementsAccordion />
      </div>
    </section>
  );
}
