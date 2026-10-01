import { barberList } from "../data";

interface BarberProps {
  onPilih: (nama: string) => void;
}

export default function BarberSection({ onPilih }: BarberProps) {
  return (
    <section id="barber" className="bg-lowest -mx-5 lg:-mx-10 px-5 lg:px-10 py-14 my-8">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="max-w-2xl">
          <p className="label-caps text-bronze">Keahlian &amp; Reputasi</p>
          <h2 className="font-serif text-3xl md:text-[40px] mt-2">
            Para Kurator Gaya Anda
          </h2>
          <p className="text-sm text-muted mt-2">
            Master barber berdedikasi dengan pengalaman minimum 7 tahun di
            grooming kontemporer dan editorial pria.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {barberList.map((b) => (
            <article key={b.nama} className="bg-surface hairline overflow-hidden group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <div className="aspect-[3/4] overflow-hidden bg-high relative">
                <img
                  src={b.img}
                  alt={b.nama}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  loading="lazy"
                />
                <span className="absolute top-4 left-4 bg-lowest/80 px-2.5 py-1 label-caps">
                  ■ Available Today
                </span>
              </div>
              <div className="p-6 space-y-3">
                <p className="label-caps text-bronze">{b.peran}</p>
                <h3 className="font-serif text-2xl">{b.nama}</h3>
                <p className="text-xs text-muted">{b.exp}</p>
                <p className="text-sm text-muted leading-relaxed">{b.desc}</p>
                <button
                  onClick={() => onPilih(b.nama)}
                  className="w-full py-3 bg-high hover:bg-bronze hover:text-base label-caps transition-colors"
                >
                  Pilih Barber
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
