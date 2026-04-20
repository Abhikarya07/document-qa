export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <span className="text-xl font-bold text-white">Rancove</span>

        <div className="flex flex-wrap justify-center gap-6">
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          <a href="mailto:hello@rancove.com" className="hover:text-white transition-colors">hello@rancove.com</a>
        </div>

        <p>© {new Date().getFullYear()} Rancove. All rights reserved.</p>
      </div>
    </footer>
  );
}
