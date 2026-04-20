const plans = [
  {
    stage: "Students",
    price: "₹999",
    note: "starting at",
    ltv: "₹999–₹2,499",
    highlight: false,
  },
  {
    stage: "Graduates",
    price: "₹3,999",
    note: "starting at",
    ltv: "₹3,999–₹8,999",
    highlight: false,
  },
  {
    stage: "Professionals",
    price: "₹4,999",
    note: "starting at",
    ltv: "₹4,999–₹14,999",
    highlight: true,
  },
  {
    stage: "Entrepreneurs",
    price: "₹29,999",
    note: "starting at",
    ltv: "₹29,999–₹90,000+",
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Transparent Pricing
          </h2>
          <p className="mt-4 text-gray-500 text-lg max-w-2xl mx-auto">
            No hidden fees. 50% advance, 50% on delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.stage}
              className={`rounded-2xl border p-6 flex flex-col gap-4 ${
                plan.highlight
                  ? "bg-indigo-600 border-indigo-600 text-white shadow-xl shadow-indigo-200"
                  : "bg-white border-gray-200 text-gray-900"
              }`}
            >
              <p className={`text-sm font-semibold uppercase tracking-widest ${plan.highlight ? "text-indigo-200" : "text-gray-400"}`}>
                {plan.stage}
              </p>
              <div>
                <p className={`text-xs ${plan.highlight ? "text-indigo-300" : "text-gray-400"}`}>{plan.note}</p>
                <p className="text-3xl font-extrabold">{plan.price}</p>
              </div>
              <p className={`text-xs ${plan.highlight ? "text-indigo-200" : "text-gray-400"}`}>
                Lifetime value: {plan.ltv}
              </p>
              <a
                href="#contact"
                className={`mt-auto text-center text-sm font-semibold px-4 py-3 rounded-full transition-colors ${
                  plan.highlight
                    ? "bg-white text-indigo-600 hover:bg-indigo-50"
                    : "bg-indigo-600 text-white hover:bg-indigo-700"
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-gray-400">
          All packages include unlimited revisions until you are satisfied.
        </p>
      </div>
    </section>
  );
}
