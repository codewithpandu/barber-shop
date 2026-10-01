import { testimoniList } from "../data";

export default function Testimoni() {
  return (
    <section className="bg-lowest -mx-5 lg:-mx-10 px-5 lg:px-10 py-14 my-8">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="text-center max-w-xl mx-auto">
          <p className="label-caps text-bronze">Testimoni Klien</p>
          <h2 className="font-serif text-3xl md:text-[40px] mt-2">Kisah Klien ARCA</h2>
          <p className="text-sm text-muted mt-2">
            Refleksi dari para profesional, pendiri usaha, dan penikmat kualitas
            di Jakarta.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimoniList.map((t) => (
            <figure
              key={t.nama}
              className="bg-surface p-8 flex flex-col justify-between gap-6 hairline"
            >
              <div className="space-y-4">
                <p className="text-bronze tracking-widest">★★★★★</p>
                <blockquote className="text-sm leading-relaxed italic">
                  “{t.quote}”
                </blockquote>
              </div>
              <figcaption>
                <p className="font-semibold">{t.nama}</p>
                <p className="text-xs text-bronze">{t.peran}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
