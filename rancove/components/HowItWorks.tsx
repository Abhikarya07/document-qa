const steps = [
  {
    num: "01",
    title: "Free Consultation",
    desc: "Tell us your goals. We'll recommend the right service for your stage — zero pressure.",
  },
  {
    num: "02",
    title: "50% Advance",
    desc: "Once you're on board, pay 50% to kick things off. We begin work immediately.",
  },
  {
    num: "03",
    title: "48-Hour First Draft",
    desc: "Receive your first draft within 48 hours. We iterate until you're 100% satisfied.",
  },
  {
    num: "04",
    title: "Delivery & Balance",
    desc: "Pay the remaining 50% and get your final files — ready to impress the world.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">How It Works</h2>
          <p className="mt-4 text-gray-500 text-lg">Simple, fast, and fully remote.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={step.num} className="relative flex flex-col items-start gap-3">
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-full w-full h-px bg-indigo-200 -translate-y-1/2 z-0" />
              )}
              <span className="relative z-10 inline-flex items-center justify-center w-12 h-12 rounded-full bg-indigo-600 text-white font-extrabold text-sm flex-shrink-0">
                {step.num}
              </span>
              <h3 className="text-base font-bold text-gray-900">{step.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
