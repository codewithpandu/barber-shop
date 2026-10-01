import { galeriHighlight, galeriItems } from "../data";

export default function Galeri() {
  return (
    <section id="galeri" className="py-14 space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <p className="label-caps text-bronze">Portofolio &amp; Atmosfer</p>
          <h2 className="font-serif text-3xl md:text-[40px] mt-2">
            Galeri Karya &amp; Suasana Studio
          </h2>
          <p className="text-sm text-muted mt-2">
            Intip portofolio potongan presisi dan atmosfer sanctuary kami di Senopati.
          </p>
        </div>
        <a
          href="https://instagram.com/arcabarber.jkt"
          target="_blank"
          rel="noreferrer"
          className="label-caps text-bronze hover:text-offwhite"
        >
          @arcabarber.jkt ↗
        </a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <div className="col-span-2 row-span-2 relative overflow-hidden bg-surface hairline min-h-[320px]">
          <img
            className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            alt={galeriHighlight.alt}
            src={galeriHighlight.src}
            loading="lazy"
          />
          <div className="absolute bottom-0 p-6 bg-gradient-to-t from-lowest/90 to-transparent w-full">
            <p className="label-caps text-bronze">{galeriHighlight.tag}</p>
            <p className="font-serif text-2xl">{galeriHighlight.title}</p>
          </div>
        </div>

        {galeriItems.map((item) => (
          <div
            key={item.tag}
            className="relative aspect-square overflow-hidden bg-surface hairline group"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.src}
              alt={item.tag}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
              loading="lazy"
            />
            <span className="absolute bottom-3 left-3 label-caps text-bronze bg-lowest/70 px-2 py-1">
              {item.tag}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
