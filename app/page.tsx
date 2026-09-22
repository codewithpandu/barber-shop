"use client";
import { useState } from "react";

const WA_NUMBER = "622157901234";

const layanan = [
  { nama: "Signature Haircut", durasi: "60 Menit", tag: "Full Treatment", desc: "Potongan presisi menyeluruh yang disesuaikan dengan pola tumbuh rambut dan bentuk rahang, termasuk pijat kepala relaks dan styling pomade matte kelas dunia.", harga: "Rp 250.000", badge: "Terpopuler" },
  { nama: "Classic Haircut", durasi: "45 Menit", tag: "Essential Groom", desc: "Potongan esensial dengan gunting dan clipper tajam, keramas segar mint wash, serta cooling tonic untuk kulit kepala.", harga: "Rp 200.000" },
  { nama: "Skin Fade", durasi: "50 Menit", tag: "Micro Precision", desc: "Transisi gradasi ultra-halus (zero / low-mid-high taper fade) dengan teknik foil shaver presisi tinggi tanpa iritasi.", harga: "Rp 230.000" },
  { nama: "Beard Grooming", durasi: "35 Menit", tag: "Beard Sculpt", desc: "Pembentukan kontur janggut presisi, hot lather shave tradisional, razor lining tajam, dan nutrisi beard oil organik.", harga: "Rp 160.000" },
  { nama: "Haircut + Beard", durasi: "80 Menit", tag: "Complete Ritual", desc: "Paket komplit: haircut signature, beard sculpting arsitektural, double hot towel steam aromaterapi, dan pijat akupresur wajah.", harga: "Rp 360.000", badge: "Best Value" },
  { nama: "Kids Haircut", durasi: "40 Menit", tag: "Gentle Craft", desc: "Potongan rapi dan modis untuk anak usia 3–12 tahun dengan pendekatan sabar dan pengalaman kursi yang menenangkan.", harga: "Rp 180.000" },
];

const barbers = [
  { nama: "Reza Pratama", peran: "Head Master Barber", exp: "9+ Tahun • Ex-Editorial Groomer", desc: "Spesialis face sculpting dan siluet klasik berkarakter tajam dengan pendekatan anatomis mendalam.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCwlDgysasMydHpYvx1eMWIaJb_VpWDNwGZpfjEPhyrbGxPeMUkQO3NaFhXGamJoO9Wdb9Y2rTn_OvcwadU7V-3vWVaglt11JYkIQUKdlT_5BgNKyd2G00DxEna8BLFkoS0jyOyIjQufPLoQ9WdSPGU0fJ2HRqC5v78A7g4ehBZ-KhC6zJskOdbK0JLKmHaqgNUKbsFe0SCrhCuzECnumMfixj_klYkQqpzczK2HZFPAOibr46mMJokug" },
  { nama: "Adrian Wicaksono", peran: "Senior Barber", exp: "7+ Tahun • Precision Specialist", desc: "Ahli skin fade halus tanpa batas dan texturized crop modern yang mudah dirawat untuk eksekutif muda.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCVDnVnAvohs269KITvI4w1NPfDsHY7e0KN6rDWzkbXSUnt79Dthf2IOuc0suI70AMBwUqDebKSCH28Gf99oZBeUhw5PfoO3GkagYKhoF6uYjAcsEBPJgBhDF7msXjNYdRzLzLGDK96LHa7gj-j8dxha99Kq3A2DncpYx2znjHWsp6WHBl52UgQ6s-XhHno8RYlv2G3MEnYDfbSoolByWzK0K8qC4qEkTQpy0gaGFeF85IWb-c1RLphzw" },
  { nama: "Farhan Ramadhan", peran: "Master Groomer", exp: "8+ Tahun • Scissor Craftsman", desc: "Pakar kontur janggut arsitektural dan teknik gunting layer panjang untuk rambut gelombang atau ikal.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuABwqDud88BGxwVii5ydiBIilMkG8jXEhNQo-iqBczPPiMReMhPouenj-ES2NlxvaZd8nCXVQ89_XcVdYxXkkCwOKXXlMqDhpuFZPdHdIMS_R3djKvpj-j7WB3vfmjOZts9KFS97ig5ppAp9Y9UwYS4mRjTHWqA9l6PiTVrzZ3oZvb9jDjwlrCyQkgcVcbITWqyYwxJAzIFYxIPVoFxVZiQ20BvW_iIVdyJr2eJiiVqG0-e5h3Xr47lUg" },
];

export default function Page() {
  const [service, setService] = useState(layanan[0].nama);
  const [barber, setBarber] = useState("Tanpa Preferensi");
  const [tanggal, setTanggal] = useState("");
  const [jam, setJam] = useState("10:00");
  const [nama, setNama] = useState("");
  const [telp, setTelp] = useState("");

  const submitWA = (e: React.FormEvent) => {
    e.preventDefault();
    const pesan = `Halo ARCA Barber! Saya ${nama || "(nama)"} (${telp || "-"}). Saya ingin reservasi:%0A• Layanan: ${service}%0A• Barber: ${barber}%0A• Tanggal: ${tanggal || "-"}%0A• Jam: ${jam}%0AMohon konfirmasi ketersediaan. Terima kasih.`;
    window.open(`https://wa.me/${WA_NUMBER}?text=${pesan}`, "_blank");
  };

  const pilihLayanan = (n: string) => {
    setService(n);
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* HEADER */}
      <header className="fixed top-0 inset-x-0 z-50 bg-lowest/90 backdrop-blur-xl border-b border-line">
        <div className="h-20 max-w-7xl mx-auto px-5 lg:px-10 flex items-center justify-between gap-6">
          <a href="#beranda" className="flex items-center gap-3">
            <div className="w-9 h-9 bg-bronze text-base font-serif font-bold flex items-center justify-center text-xl">A</div>
            <div className="flex flex-col">
              <span className="label-caps text-bronze">Arca Barber</span>
              <span className="text-xs text-muted hidden sm:inline tracking-wider">Jakarta Atelier</span>
            </div>
          </a>
          <nav className="hidden xl:flex items-center gap-8">
            {[
              ["Layanan", "#layanan"],
              ["Tentang Kami", "#tentang"],
              ["Master Barber", "#barber"],
              ["Galeri", "#galeri"],
              ["Lokasi & Jam", "#lokasi"],
            ].map(([label, href]) => (
              <a key={href} href={href} className="label-caps text-muted hover:text-bronze transition-colors">{label}</a>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <a href="tel:+622157901234" className="hidden lg:block label-caps text-muted hover:text-bronze">+62 21 5790 1234</a>
            <a href="#booking" className="bg-bronze text-base hover:bg-bronzesoft label-caps px-6 py-3 transition-colors">Booking Sekarang</a>
          </div>
        </div>
      </header>

      <main id="beranda" className="pt-20 max-w-7xl mx-auto px-5 lg:px-10">
        {/* HERO */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center py-8 lg:py-14">
          <div className="lg:col-span-7 space-y-6">
            <p className="label-caps text-bronze">●&nbsp;&nbsp;EST. 2022 • SENOPATI, JAKARTA SELATAN</p>
            <h1 className="font-serif text-4xl lg:text-[56px] leading-[1.08] font-normal">
              Potongan Berkarakter.<br />
              <span className="italic text-bronze">Gaya Tanpa Batas.</span>
            </h1>
            <p className="text-muted max-w-xl leading-relaxed">
              Pengalaman grooming modern untuk pria yang memperhatikan detail. Presisi arsitektural, ruang sanctuary yang tenang, dan keanggunan gaya kontemporer di jantung Senopati.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a href="#booking" className="bg-bronze text-base label-caps px-8 py-4 hover:bg-bronzesoft transition-colors">Booking Sekarang</a>
              <a href="#layanan" className="bg-surface text-offwhite label-caps px-7 py-4 hover:text-bronze transition-colors hairline">Lihat Menu</a>
            </div>
            <div className="grid grid-cols-2 gap-4 max-w-lg pt-4">
              <div className="bg-low p-4 hairline">
                <p className="font-semibold text-lg">4.9 / 5.0</p>
                <p className="text-xs text-muted">1.200+ Klien Terverifikasi</p>
              </div>
              <div className="bg-low p-4 hairline">
                <p className="font-semibold text-lg">100% Private</p>
                <p className="text-xs text-muted">Konsultasi Wajah Bespoke</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="relative bg-low overflow-hidden hairline">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="Klien ARCA Barber" className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHOTBc68XPQwrEf5d1CI_lyzn8GbVfsrEasRYC52-gzFREWDhj1dJGy7Sw3athsvatjD-GhWmrwS0EhIBDhVvRKaHp5DlM5jHZMqGkZbME-E0FVodVzRIbc_ILbbd0f3GOn67Mm_so17aryyBQs_iphWngKlvoCyUy3gmbegKW0kk-KlRSG2EStyxU9NlPdz9e8u0vpMp_PXLXB870Yhi3t3jGgukBxhR8PKJepMrw5Q74JVlXeKChJw" />
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
              <p className="text-xs leading-snug">Artisan Pour-Over &amp; Single Origin Cold Brew</p>
            </div>
          </div>
        </section>

        {/* TENTANG */}
        <section id="tentang" className="bg-lowest -mx-5 lg:-mx-10 px-5 lg:px-10 py-14 my-8">
          <div className="max-w-7xl mx-auto space-y-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="max-w-2xl">
                <p className="label-caps text-bronze">Filosofi Atelier</p>
                <h2 className="font-serif text-3xl md:text-[40px] leading-tight mt-2">Redefinisi Grooming Pria<br /><span className="italic text-bronze">Kontemporer Jakarta</span></h2>
              </div>
              <p className="text-sm text-muted max-w-md leading-relaxed">ARCA Barber menolak standar salon konvensional yang bising dan terburu-buru. Kami mendedikasikan waktu penuh untuk tiap helai rambut, memadukan kepekaan visual arsitektur dengan presisi gunting artisanal Jepang.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                ["Konsultasi Struktur Wajah", "Analisis bentuk rahang, kontur tengkorak, dan arah tumbuh rambut untuk potongan proporsional yang membingkai karakter alami Anda."],
                ["Artisanal Hot Towel & Oils", "Relaksasi dengan handuk katun kukus bersuhu presisi, diinfusi minyak esensial cedarwood dan bergamot organik."],
                ["Precision Scissor Work", "Detail manual dengan gunting baja tempa Jepang. Tekstur bernyawa, jatuh alami, dan mudah ditata harian."],
                ["Kurasi Produk Jepang & Eropa", "Hanya hair tonic, matte clay, dan grooming oil bersertifikasi dermatologis dari Tokyo, London, dan Stockholm."],
              ].map(([t, d]) => (
                <div key={t} className="bg-surface p-6 space-y-3 hairline card-sheen hover:-translate-y-1 transition-transform">
                  <h3 className="font-semibold text-[18px]">{t}</h3>
                  <p className="text-sm text-muted leading-relaxed">{d}</p>
                </div>
              ))}
            </div>
            <div className="bg-high p-8 md:p-10 hairline grid lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-8">
                <p className="label-caps text-bronze">Sanctuary Experience</p>
                <h3 className="font-serif text-2xl md:text-3xl mt-1">Lounge Tenang &amp; Complimentary Bar</h3>
                <p className="text-sm text-muted mt-2 max-w-2xl leading-relaxed">Datanglah 15 menit lebih awal. Nikmati artisan pour-over Flores Bajawa, cold brew khas kami, atau sparkling water sambil bersantai di sofa kulit arsitektural menghadap taman Zen kami.</p>
              </div>
              <div className="lg:col-span-4 lg:justify-end flex">
                <div className="bg-lowest p-6 text-center w-full max-w-xs hairline">
                  <p className="label-caps text-bronze">Waktu Konsultasi</p>
                  <p className="font-serif text-4xl mt-1">60+ Min</p>
                  <p className="text-xs text-muted mt-1">Tanpa antrean berdesak, tanpa distraksi</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* LAYANAN */}
        <section id="layanan" className="py-14 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="label-caps text-bronze">— Daftar Layanan</p>
              <h2 className="font-serif text-3xl md:text-[40px] mt-2">Menu Layanan Eksklusif</h2>
              <p className="text-sm text-muted mt-2">Setiap sesi mencakup konsultasi bentuk wajah, keramas premium, hot towel treatment, dan styling akhir.</p>
            </div>
            <div className="bg-surface px-5 py-3 text-right hairline hidden sm:block">
              <p className="label-caps text-bronze">Transparansi Nilai</p>
              <p className="text-xs text-muted">Nett Price • Tanpa Biaya Tersembunyi</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {layanan.map((l) => (
              <div key={l.nama} className="bg-low p-6 flex flex-col justify-between gap-6 hairline card-sheen relative">
                {l.badge && <span className="absolute top-0 right-0 bg-bronze text-base label-caps px-3 py-1">{l.badge}</span>}
                <div className="space-y-3 pt-2">
                  <h3 className="font-serif text-2xl">{l.nama}</h3>
                  <p className="label-caps text-muted">{l.durasi} • {l.tag}</p>
                  <p className="text-sm text-muted leading-relaxed">{l.desc}</p>
                </div>
                <div className="pt-4 flex items-center justify-between border-t border-line">
                  <div>
                    <p className="label-caps text-muted">Tarif</p>
                    <p className="font-semibold text-bronze text-lg">{l.harga}</p>
                  </div>
                  <button onClick={() => pilihLayanan(l.nama)} className="bg-high hover:bg-bronze hover:text-base px-5 py-3 label-caps transition-colors">Pilih +</button>
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 bg-lowest hairline flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <p className="text-sm"><span className="text-bronze font-medium">Minuman Gratis:</span> Semua layanan termasuk iced black coffee, hot pour-over, atau artisan tea.</p>
            <a href="#booking" className="label-caps text-bronze hover:text-offwhite shrink-0">Reservasi Sekarang →</a>
          </div>
        </section>

        {/* BARBER */}
        <section id="barber" className="bg-lowest -mx-5 lg:-mx-10 px-5 lg:px-10 py-14 my-8">
          <div className="max-w-7xl mx-auto space-y-10">
            <div className="max-w-2xl">
              <p className="label-caps text-bronze">Keahlian &amp; Reputasi</p>
              <h2 className="font-serif text-3xl md:text-[40px] mt-2">Para Kurator Gaya Anda</h2>
              <p className="text-sm text-muted mt-2">Master barber berdedikasi dengan pengalaman minimum 7 tahun di grooming kontemporer dan editorial pria.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {barbers.map((b) => (
                <div key={b.nama} className="bg-surface hairline overflow-hidden group">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <div className="aspect-[3/4] overflow-hidden bg-high relative">
                    <img src={b.img} alt={b.nama} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" loading="lazy" />
                    <span className="absolute top-4 left-4 bg-lowest/80 px-2.5 py-1 label-caps">■ Available Today</span>
                  </div>
                  <div className="p-6 space-y-3">
                    <p className="label-caps text-bronze">{b.peran}</p>
                    <h3 className="font-serif text-2xl">{b.nama}</h3>
                    <p className="text-xs text-muted">{b.exp}</p>
                    <p className="text-sm text-muted leading-relaxed">{b.desc}</p>
                    <button onClick={() => { setBarber(b.nama); document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" }); }} className="w-full py-3 bg-high hover:bg-bronze hover:text-base label-caps transition-colors">Pilih Barber</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GALERI */}
        <section id="galeri" className="py-14 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <p className="label-caps text-bronze">Portofolio &amp; Atmosfer</p>
              <h2 className="font-serif text-3xl md:text-[40px] mt-2">Galeri Karya &amp; Suasana Studio</h2>
              <p className="text-sm text-muted mt-2">Intip portofolio potongan presisi dan atmosfer sanctuary kami di Senopati.</p>
            </div>
            <a href="https://instagram.com/arcabarber.jkt" target="_blank" rel="noreferrer" className="label-caps text-bronze hover:text-offwhite">@arcabarber.jkt ↗</a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <div className="col-span-2 row-span-2 relative overflow-hidden bg-surface hairline min-h-[320px]">
              <img className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" alt="Interior ARCA" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGz93sempO1qXI0UgnrWsA540dUcVWupROMPbI_vBsWxqRasj20uSE6ZuBAF-crk2uxQQhQ3_JxSJUABVqTOpGIeLjaSAOTvPn_H08hynw39TRvYpme1WxzfDzAZfYv7eHPGBK7gG9HNQAZYjLPmVslelzLDDNt5IbErShuJPRf8ivkxz88nPNtmLZJSe_Vqn24qE5wS63AXGbZVv9jewyZK94jtT_RJXeIc2j8U24wv5GlLF7ec8v0A" loading="lazy" />
              <div className="absolute bottom-0 p-6 bg-gradient-to-t from-lowest/90 to-transparent w-full">
                <p className="label-caps text-bronze">#ArcaStudio</p>
                <p className="font-serif text-2xl">Sanctuary Senopati</p>
              </div>
            </div>
            {[
              ["#ModernFade", "https://lh3.googleusercontent.com/aida-public/AB6AXuCYrYdMXTldQXvJhTRoG0b1xlFXDte4SBcUMVOaQkK5HWtqK3ChNQIMjG1B_j-44OA14hJ2_2DrYuiKWJecK1wuJCC0ehhfvm94o2xbNqfC4tKt9-Zo3K60uqwYBUWKgQs90rT8OP7L0MP0zvjH106jRtbBWg6Ksw6ruyFXoF2ZdYEPApdkf9lE0tWWHkh9YIRwCCnty_1Wj4xEdAr4EZzH4e60SevT91fipXgnjRf7wdMN82z3K8i23A"],
              ["#TexturedCrop", "https://lh3.googleusercontent.com/aida-public/AB6AXuC08KzYO72GEgApNxqm26KMZuPB_A7Ehgv_i-Nit7JRW2C6t2GT5IoadLbIzzLbC_IA7sYRwQUqbu_Bswsf5Nmr4hBJucWlmsm4OgysgDUZ0PvK5AVGhYG6rXg4hs3IRx0p_aOHzhKI70m1lG-Q8JlABKt8R5-ZJzlXsaPQVYCFX9KD_4f1vBjUKY6v9pkfLvfzDHKe-rdHfg92A3mPSlkroaMlV_2PTgGTVvY_-L0BwJ5-HqjZ2YPE8A"],
              ["#HotTowelRitual", "https://lh3.googleusercontent.com/aida-public/AB6AXuBVyO-L3I91_Xbww2OU8hNinY0_CQtpyXsi_4h_lyvTy-QKmGd1HjrfzX2Yjyk-EWN-mp1bMR-w61U-APiD8pt9uzK1pkk6EV3XprTeT69ZBp4XPP_WoCAzxzBzBnWeFcQABSlUtLKaYzQB8JsAXs5sOZlDzWwXViGrGrmlDIv_nptlc9NTtyUEMPvEJIHBVq9Phg5hbtz1Q7Coniswh_xFLmzJqkdaQS7lfPgES7ppzKtjU_0cFOZTHg"],
              ["#JakartaGentleman", "https://lh3.googleusercontent.com/aida-public/AB6AXuCBl-p9JpT2ms8zRiabcvQYlUJttyipli3J0dc2i4GZiXnFdXwr2zKCtFpevgLwKuiVNDWF-WeasLCkzyRgR9L22Tj-GqxjPVWwSeY0TfCwchWp2AC6BdVW-uaM30RLxjt93DGRrlPHad811_43_Z8HnXWFH0TUk3NLxWsJalfvUnIxtaHZ6Hd2fImg0pFMKZ9-LY55fe60CSXgh1Y57NfdtbCjkd_OvENXD056Fap-_dkeKUqgkQHdMw"],
            ].map(([tag, src]) => (
              <div key={tag} className="relative aspect-square overflow-hidden bg-surface hairline group">
                <img src={src} alt={tag} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" loading="lazy" />
                <span className="absolute bottom-3 left-3 label-caps text-bronze bg-lowest/70 px-2 py-1">{tag}</span>
              </div>
            ))}
          </div>
        </section>

        {/* TESTIMONI */}
        <section className="bg-lowest -mx-5 lg:-mx-10 px-5 lg:px-10 py-14 my-8">
          <div className="max-w-7xl mx-auto space-y-10">
            <div className="text-center max-w-xl mx-auto">
              <p className="label-caps text-bronze">Testimoni Klien</p>
              <h2 className="font-serif text-3xl md:text-[40px] mt-2">Kisah Klien ARCA</h2>
              <p className="text-sm text-muted mt-2">Refleksi dari para profesional, pendiri usaha, dan penikmat kualitas di Jakarta.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                ["Potongan fade paling rapi yang pernah saya dapat di Jakarta Selatan. Suasananya tenang, kopinya enak, dan barber sangat paham tekstur rambut pria Asia.", "Dimas S.", "Founder & Creative Director, SCBD"],
                ["Haircut + Beard adalah ritual bulanan wajib saya. Detail hot towel dan razor lining-nya luar biasa presisi. Rasanya seperti reset pikiran.", "Rendy K.", "Corporate Lawyer, Senopati"],
                ["Bukan sekadar barbershop, ini tempat dekompresi terbaik di akhir pekan. Sangat menghargai waktu appointment tanpa menunggu lama.", "Kevin T.", "Tech Lead, BSD & Jakarta"],
              ].map(([q, n, r]) => (
                <div key={n} className="bg-surface p-8 flex flex-col justify-between gap-6 hairline">
                  <div className="space-y-4">
                    <p className="text-bronze tracking-widest">★★★★★</p>
                    <p className="text-sm leading-relaxed italic">“{q}”</p>
                  </div>
                  <div><p className="font-semibold">{n}</p><p className="text-xs text-bronze">{r}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BOOKING + LOKASI */}
        <section id="booking" className="py-14 space-y-10">
          <div className="max-w-2xl">
            <p className="label-caps text-bronze">Reservasi &amp; Kunjungan</p>
            <h2 className="font-serif text-3xl md:text-[40px] mt-2">Pesan Sesi Pribadi Anda</h2>
            <p className="text-sm text-muted mt-2">Pilih layanan dan barber favorit. Konfirmasi otomatis terhubung via concierge WhatsApp kami dalam &lt; 5 menit.</p>
          </div>
          <div className="grid lg:grid-cols-12 gap-6 items-start">
            <form onSubmit={submitWA} className="lg:col-span-7 bg-low p-6 sm:p-8 space-y-5 hairline">
              <div className="flex items-center justify-between">
                <span className="font-serif text-2xl">Formulir Reservasi</span>
                <span className="label-caps text-bronze">Via WhatsApp</span>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <label className="space-y-2 block">
                  <span className="label-caps text-muted">Nama Lengkap *</span>
                  <input required value={nama} onChange={(e) => setNama(e.target.value)} placeholder="cth. Andi Pratama" className="w-full bg-surface px-4 py-3.5 hairline focus:border-bronze outline-none text-sm placeholder:text-muted" />
                </label>
                <label className="space-y-2 block">
                  <span className="label-caps text-muted">No. WhatsApp *</span>
                  <input required value={telp} onChange={(e) => setTelp(e.target.value)} placeholder="cth. 0812xxxxxxx" className="w-full bg-surface px-4 py-3.5 hairline focus:border-bronze outline-none text-sm placeholder:text-muted" />
                </label>
              </div>
              <label className="space-y-2 block">
                <span className="label-caps text-muted">Pilih Layanan Utama</span>
                <select value={service} onChange={(e) => setService(e.target.value)} className="w-full bg-surface px-4 py-3.5 hairline outline-none text-sm">
                  {layanan.map((l) => <option key={l.nama} value={l.nama}>{l.nama} — {l.harga} ({l.durasi})</option>)}
                </select>
              </label>
              <label className="space-y-2 block">
                <span className="label-caps text-muted">Preferensi Barber</span>
                <select value={barber} onChange={(e) => setBarber(e.target.value)} className="w-full bg-surface px-4 py-3.5 hairline outline-none text-sm">
                  <option>Tanpa Preferensi</option>
                  {barbers.map((b) => <option key={b.nama}>{b.nama}</option>)}
                </select>
              </label>
              <div className="grid sm:grid-cols-2 gap-4">
                <label className="space-y-2 block">
                  <span className="label-caps text-muted">Tanggal *</span>
                  <input type="date" required value={tanggal} onChange={(e) => setTanggal(e.target.value)} className="w-full bg-surface px-4 py-3.5 hairline outline-none text-sm [color-scheme:dark]" />
                </label>
                <label className="space-y-2 block">
                  <span className="label-caps text-muted">Jam *</span>
                  <select value={jam} onChange={(e) => setJam(e.target.value)} className="w-full bg-surface px-4 py-3.5 hairline outline-none text-sm">
                    {["10:00", "11:30", "13:00", "14:30", "16:00", "17:30", "19:00", "20:00"].map((j) => <option key={j}>{j}</option>)}
                  </select>
                </label>
              </div>
              <button type="submit" className="w-full bg-bronze text-base label-caps py-4 hover:bg-bronzesoft transition-colors">Konfirmasi via WhatsApp</button>
              <p className="text-xs text-muted text-center">Dengan menekan tombol, Anda akan diarahkan ke WhatsApp concierge ARCA. Tanpa DP, pembatalan gratis H-3.</p>
            </form>
            <div id="lokasi" className="lg:col-span-5 space-y-4">
              <div className="bg-low p-6 sm:p-8 space-y-5 hairline">
                <h3 className="font-serif text-2xl">Lokasi &amp; Jam Operasional</h3>
                <div className="text-sm space-y-3 text-muted leading-relaxed">
                  <p><span className="text-offwhite font-medium">ARCA Barber Senopati</span><br />Jl. Senopati No. 88, Kebayoran Baru<br />Jakarta Selatan 12190</p>
                  <div className="border-t border-line pt-3 space-y-1.5">
                    <div className="flex justify-between"><span>Senin – Jumat</span><span className="text-offwhite">10.00 – 21.00</span></div>
                    <div className="flex justify-between"><span>Sabtu – Minggu</span><span className="text-offwhite">09.00 – 21.00</span></div>
                    <div className="flex justify-between"><span>Hari Libur Nasional</span><span className="text-offwhite">10.00 – 18.00</span></div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <a href="tel:+622157901234" className="text-center border border-line label-caps py-3 hover:border-bronze hover:text-bronze transition-colors">Telepon</a>
                  <a href={`https://wa.me/${WA_NUMBER}?text=Halo%20ARCA%20Barber!%20Saya%20ingin%20tanya%20slot%20hari%20ini.`} target="_blank" rel="noreferrer" className="text-center bg-high label-caps py-3 hover:bg-bronze hover:text-base transition-colors">WhatsApp</a>
                </div>
              </div>
              <div className="bg-high p-6 hairline">
                <p className="label-caps text-bronze">Catatan Parkir</p>
                <p className="text-sm text-muted mt-1.5 leading-relaxed">Valet tersedia di lobi serta area parkir motor di sisi timur gedung. Tunjukkan bukti booking untuk validasi parkir 2 jam gratis.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-line bg-lowest">
        <div className="max-w-7xl mx-auto px-5 lg:px-10 py-10 grid md:grid-cols-3 gap-8 text-sm">
          <div className="space-y-2">
            <p className="label-caps text-bronze">Arca Barber</p>
            <p className="text-muted leading-relaxed">Atelier grooming pria kontemporer di Senopati, Jakarta Selatan. Presisi arsitektural sejak 2022.</p>
          </div>
          <div className="space-y-2">
            <p className="label-caps text-muted">Navigasi</p>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              <a href="#layanan" className="hover:text-bronze">Layanan</a>
              <a href="#barber" className="hover:text-bronze">Master Barber</a>
              <a href="#galeri" className="hover:text-bronze">Galeri</a>
              <a href="#booking" className="hover:text-bronze">Booking</a>
            </div>
          </div>
          <div className="space-y-2">
            <p className="label-caps text-muted">Kontak</p>
            <p className="text-muted">Jl. Senopati No. 88, Jaksel<br />+62 21 5790 1234 • @arcabarber.jkt</p>
          </div>
        </div>
        <div className="border-t border-line py-4 text-center text-xs text-muted">© 2026 ARCA Barber Jakarta. Seluruh harga nett dalam Rupiah.</div>
      </footer>
    </>
  );
}
