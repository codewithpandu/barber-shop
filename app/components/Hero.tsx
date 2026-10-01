import { heroImage, heroStats } from "../data";

export default function Hero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center py-8 lg:py-14">
      <div className="lg:col-span-7 space-y-6">
        <p className="label-caps text-bronze">
          ●&nbsp;&nbsp;EST. 2022 • SENOPATI, JAKARTA SELATAN
        </p>
        <h1 className="font-serif text-4xl lg:text-[56px] leading-[1.08] font-normal">
          Potongan Berkarakter.
          <br />
          <span className="italic text-bronze">Gaya Tanpa Batas.</span>
        </h1>
        <p className="text-muted max-w-xl leading-relaxed">
          Pengalaman grooming modern untuk pria yang memperhatikan detail.
          Presisi arsitektural, ruang sanctuary yang tenang, dan keanggunan
          gaya kontemporer di jantung Senopati.
        </p>
        <div className="flex flex-wrap gap-4 pt-2">
          <a
            href="#booking"
            className="bg-bronze text-base label-caps px-8 py-4 hover:bg-bronzesoft transition-colors"
          >
            Booking Sekarang
          </a>
          <a
            href="#layanan"
            className="bg-surface text-offwhite label-caps px-7 py-4 hover:text-bronze transition-colors hairline"
          >
            Lihat Menu
          </a>
        </div>

        <div className="grid grid-cols-2 gap-4 max-w-lg pt-4">
          {heroStats.map((stat) => (
            <div key={stat.value} className="bg-low p-4 hairline">
              <p className="font-semibold text-lg">{stat.value}</p>
              <p className="text-xs text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="lg:col-span-5 relative">
        <div className="relative bg-low overflow-hidden hairline">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt={heroImage.alt}
            className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-700"
            src={heroImage.src}
          />
          <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-lowest via-lowest/90 to-transparent flex items-end justify-between">
            <div>
              <span className="label-caps text-bronze">Private Suite Room</span>
              <p className="font-serif text-2xl">Senopati Sanctuary</p>
            </div>
            <span className="label-caps text-bronzesoft">Open Daily</span>
          </div>
        </div>
        <div className="hidden sm:block absolute -top-5 -left-5 bg-highest p-4 max-w-[210px] hairline">
          <p className="label-caps text-bronze mb-1">Complimentary</p>
          <p className="text-xs leading-snug">
            Artisan Pour-Over &amp; Single Origin Cold Brew
          </p>
        </div>
      </div>
    </section>
  );
}
