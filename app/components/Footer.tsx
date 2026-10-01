import { footerNavLinks } from "../data";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-lowest">
      <div className="max-w-7xl mx-auto px-5 lg:px-10 py-10 grid md:grid-cols-3 gap-8 text-sm">
        <div className="space-y-2">
          <p className="label-caps text-bronze">Arca Barber</p>
          <p className="text-muted leading-relaxed">
            Atelier grooming pria kontemporer di Senopati, Jakarta Selatan.
            Presisi arsitektural sejak 2022.
          </p>
        </div>
        <div className="space-y-2">
          <p className="label-caps text-muted">Navigasi</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {footerNavLinks.map((link) => (
              <a key={link.href + link.label} href={link.href} className="hover:text-bronze">
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div className="space-y-2">
          <p className="label-caps text-muted">Kontak</p>
          <p className="text-muted">
            Jl. Senopati No. 88, Jaksel
            <br />
            +62 21 5790 1234 • @arcabarber.jkt
          </p>
        </div>
      </div>
      <div className="border-t border-line py-4 text-center text-xs text-muted">
        © 2026 ARCA Barber Jakarta. Seluruh harga nett dalam Rupiah.
      </div>
    </footer>
  );
}
