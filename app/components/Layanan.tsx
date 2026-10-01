import { layananList } from "../data";

interface LayananProps {
  onPilih: (nama: string) => void;
}

export default function Layanan({ onPilih }: LayananProps) {
  return (
    <section id="layanan" className="py-14 space-y-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="max-w-2xl">
          <p className="label-caps text-bronze">— Daftar Layanan</p>
          <h2 className="font-serif text-3xl md:text-[40px] mt-2">
            Menu Layanan Eksklusif
          </h2>
          <p className="text-sm text-muted mt-2">
            Setiap sesi mencakup konsultasi bentuk wajah, keramas premium, hot
            towel treatment, dan styling akhir.
          </p>
        </div>
        <div className="bg-surface px-5 py-3 text-right hairline hidden sm:block">
          <p className="label-caps text-bronze">Transparansi Nilai</p>
          <p className="text-xs text-muted">Nett Price • Tanpa Biaya Tersembunyi</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {layananList.map((l) => (
          <article
            key={l.nama}
            className="bg-low p-6 flex flex-col justify-between gap-6 hairline card-sheen relative"
          >
            {l.badge && (
              <span className="absolute top-0 right-0 bg-bronze text-base label-caps px-3 py-1">
                {l.badge}
              </span>
            )}
            <div className="space-y-3 pt-2">
              <h3 className="font-serif text-2xl">{l.nama}</h3>
              <p className="label-caps text-muted">
                {l.durasi} • {l.tag}
              </p>
              <p className="text-sm text-muted leading-relaxed">{l.desc}</p>
            </div>
            <div className="pt-4 flex items-center justify-between border-t border-line">
              <div>
                <p className="label-caps text-muted">Tarif</p>
                <p className="font-semibold text-bronze text-lg">{l.harga}</p>
              </div>
              <button
                onClick={() => onPilih(l.nama)}
                className="bg-high hover:bg-bronze hover:text-base px-5 py-3 label-caps transition-colors"
              >
                Pilih +
              </button>
            </div>
          </article>
        ))}
      </div>

      <div className="p-4 bg-lowest hairline flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
        <p className="text-sm">
          <span className="text-bronze font-medium">Minuman Gratis:</span> Semua
          layanan termasuk iced black coffee, hot pour-over, atau artisan tea.
        </p>
        <a href="#booking" className="label-caps text-bronze hover:text-offwhite shrink-0">
          Reservasi Sekarang →
        </a>
      </div>
    </section>
  );
}
