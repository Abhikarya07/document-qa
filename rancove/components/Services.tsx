const tiers = [
  {
    stage: "Students",
    emoji: "🎓",
    price: "₹999+",
    tagline: "Ace your presentations",
    description:
      "Stand out with stunning PPTs and project reports that impress professors and recruiters alike.",
    features: ["PPT Design", "Project Reports", "Research Posters", "Infographics"],
    color: "from-sky-50 to-blue-50",
    accent: "text-sky-600",
    border: "border-sky-200",
    badge: "bg-sky-100 text-sky-700",
  },
  {
    stage: "Graduates",
    emoji: "💼",
    price: "₹3,999+",
    tagline: "Land your first big role",
    description:
      "ATS-ready resumes, LinkedIn makeovers, and Naukri profiles that get you shortlisted faster.",
    features: ["Resume Writing", "LinkedIn Optimization", "Naukri Profile", "Cover Letters"],
    color: "from-violet-50 to-purple-50",
    accent: "text-violet-600",
    border: "border-violet-200",
    badge: "bg-violet-100 text-violet-700",
  },
  {
    stage: "Professionals",
    emoji: "🚀",
    price: "₹4,999+",
    tagline: "Accelerate your career",
    description:
      "Personal branding and career advancement tools to help you get promoted or pivot to your dream role.",
    features: ["Personal Branding", "Executive Resume", "LinkedIn Strategy", "Portfolio Building"],
    color: "from-amber-50 to-orange-50",
    accent: "text-amber-600",
    border: "border-amber-200",
    badge: "bg-amber-100 text-amber-700",
    popular: true,
  },
  {
    stage: "Entrepreneurs",
    emoji: "🏢",
    price: "₹29,999+",
    tagline: "Build your digital empire",
    description:
      "Full-stack digital presence: website, social media management, and SEO to grow your business online.",
    features: ["Website Development", "Social Media Management", "SEO Strategy", "Google Business"],
    color: "from-emerald-50 to-teal-50",
    accent: "text-emerald-600",
    border: "border-emerald-200",
    badge: "bg-emerald-100 text-emerald-700",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Services for Every Stage
          </h2>
          <p className="mt-4 text-gray-500 text-lg max-w-2xl mx-auto">
            We grow with you — from your first PPT to your first product launch.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.stage}
              className={`relative rounded-2xl bg-gradient-to-br ${tier.color} border ${tier.border} p-6 flex flex-col gap-4`}
            >
              {tier.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-white text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
                  Most Popular
                </span>
              )}

              <div className="text-4xl">{tier.emoji}</div>

              <div>
                <span className={`text-xs font-semibold uppercase tracking-widest ${tier.accent}`}>
                  {tier.stage}
                </span>
                <h3 className="mt-1 text-xl font-bold text-gray-900">{tier.tagline}</h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">{tier.description}</p>
              </div>

              <ul className="flex flex-col gap-2 mt-auto">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                    <svg className={`w-4 h-4 flex-shrink-0 ${tier.accent}`} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-4 pt-4 border-t border-gray-200 flex items-center justify-between">
                <span className={`text-2xl font-extrabold ${tier.accent}`}>{tier.price}</span>
                <a
                  href="#contact"
                  className={`text-xs font-semibold px-4 py-2 rounded-full ${tier.badge} hover:opacity-80 transition-opacity`}
                >
                  Get Started
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
