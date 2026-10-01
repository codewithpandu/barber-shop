import { navLinks } from "../data";

export default function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-lowest/90 backdrop-blur-xl border-b border-line">
      <div className="h-20 max-w-7xl mx-auto px-5 lg:px-10 flex items-center justify-between gap-6">
        <a href="#beranda" className="flex items-center gap-3">
          <div className="w-9 h-9 bg-bronze text-base font-serif font-bold flex items-center justify-center text-xl">
            A
          </div>
          <div className="flex flex-col">
            <span className="label-caps text-bronze">Arca Barber</span>
            <span className="text-xs text-muted hidden sm:inline tracking-wider">
              Jakarta Atelier
            </span>
          </div>
        </a>

        <nav className="hidden xl:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="label-caps text-muted hover:text-bronze transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="tel:+622157901234"
            className="hidden lg:block label-caps text-muted hover:text-bronze"
          >
            +62 21 5790 1234
          </a>
          <a
            href="#booking"
            className="bg-bronze text-base hover:bg-bronzesoft label-caps px-6 py-3 transition-colors"
          >
            Booking Sekarang
          </a>
        </div>
      </div>
    </header>
  );
}
