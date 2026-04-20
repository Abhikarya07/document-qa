const stats = [
  { value: "500+", label: "Clients Served" },
  { value: "4.9★", label: "Average Rating" },
  { value: "48 hrs", label: "First-Draft Delivery" },
  { value: "Pan-India", label: "Fully Remote" },
];

export default function Stats() {
  return (
    <section className="bg-indigo-600 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {stats.map(({ value, label }) => (
          <div key={label}>
            <p className="text-3xl sm:text-4xl font-extrabold text-white">{value}</p>
            <p className="mt-1 text-indigo-200 text-sm font-medium">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
