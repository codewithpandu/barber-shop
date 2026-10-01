import { filosofiItems } from "../data";

export default function Tentang() {
  return (
    <section id="tentang" className="bg-lowest -mx-5 lg:-mx-10 px-5 lg:px-10 py-14 my-8">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="label-caps text-bronze">Filosofi Atelier</p>
            <h2 className="font-serif text-3xl md:text-[40px] leading-tight mt-2">
              Redefinisi Grooming Pria
              <br />
              <span className="italic text-bronze">Kontemporer Jakarta</span>
            </h2>
          </div>
          <p className="text-sm text-muted max-w-md leading-relaxed">
            ARCA Barber menolak standar salon konvensional yang bising dan
            terburu-buru. Kami mendedikasikan waktu penuh untuk tiap helai
            rambut, memadukan kepekaan visual arsitektur dengan presisi gunting
            artisanal Jepang.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filosofiItems.map((item) => (
            <div
              key={item.judul}
              className="bg-surface p-6 space-y-3 hairline card-sheen hover:-translate-y-1 transition-transform"
            >
              <h3 className="font-semibold text-[18px]">{item.judul}</h3>
              <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-high p-8 md:p-10 hairline grid lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-8">
            <p className="label-caps text-bronze">Sanctuary Experience</p>
            <h3 className="font-serif text-2xl md:text-3xl mt-1">
              Lounge Tenang &amp; Complimentary Bar
            </h3>
            <p className="text-sm text-muted mt-2 max-w-2xl leading-relaxed">
              Datanglah 15 menit lebih awal. Nikmati artisan pour-over Flores
              Bajawa, cold brew khas kami, atau sparkling water sambil bersantai
              di sofa kulit arsitektural menghadap taman Zen kami.
            </p>
          </div>
          <div className="lg:col-span-4 lg:justify-end flex">
            <div className="bg-lowest p-6 text-center w-full max-w-xs hairline">
              <p className="label-caps text-bronze">Waktu Konsultasi</p>
              <p className="font-serif text-4xl mt-1">60+ Min</p>
              <p className="text-xs text-muted mt-1">
                Tanpa antrean berdesak, tanpa distraksi
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
