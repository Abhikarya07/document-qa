export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 via-white to-purple-50 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-40 translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-100 rounded-full blur-3xl opacity-40 -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <span className="inline-block bg-indigo-100 text-indigo-700 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
          Pan-India · Fully Remote · 48-Hour Drafts
        </span>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight">
          Digital Services{" "}
          <span className="text-indigo-600">Tailored to</span>
          <br />
          Where You Are Right Now
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
          PPTs, resumes, LinkedIn, Naukri, websites, social media, and SEO —
          all in one place, built for your stage in life.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="w-full sm:w-auto bg-indigo-600 text-white font-semibold px-8 py-4 rounded-full hover:bg-indigo-700 transition-colors text-base shadow-lg shadow-indigo-200"
          >
            Book Free Consultation
          </a>
          <a
            href="#services"
            className="w-full sm:w-auto border border-gray-300 text-gray-700 font-semibold px-8 py-4 rounded-full hover:border-indigo-400 hover:text-indigo-600 transition-colors text-base"
          >
            Explore Services
          </a>
        </div>

        <p className="mt-6 text-sm text-gray-400">
          Trusted by <strong className="text-gray-600">500+</strong> clients across India · ⭐ 4.9 avg. rating
        </p>
      </div>
    </section>
  );
}
