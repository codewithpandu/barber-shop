export interface NavLink {
  label: string;
  href: string;
}

export interface Layanan {
  nama: string;
  durasi: string;
  tag: string;
  desc: string;
  harga: string;
  badge?: string;
}

export interface Barber {
  nama: string;
  peran: string;
  exp: string;
  desc: string;
  img: string;
}

export interface Filosofi {
  judul: string;
  desc: string;
}

export interface GaleriItem {
  tag: string;
  src: string;
}

export interface Testimoni {
  quote: string;
  nama: string;
  peran: string;
}

export interface JamOperasional {
  hari: string;
  jam: string;
}

export const WA_NUMBER = "622157901234";
export const WA_TANYA_SLOT = `https://wa.me/${WA_NUMBER}?text=Halo%20ARCA%20Barber!%20Saya%20ingin%20tanya%20slot%20hari%20ini.`;

export const navLinks: NavLink[] = [
  { label: "Layanan", href: "#layanan" },
  { label: "Tentang Kami", href: "#tentang" },
  { label: "Master Barber", href: "#barber" },
  { label: "Galeri", href: "#galeri" },
  { label: "Lokasi & Jam", href: "#lokasi" },
];

export const footerNavLinks: NavLink[] = [
  { label: "Layanan", href: "#layanan" },
  { label: "Master Barber", href: "#barber" },
  { label: "Galeri", href: "#galeri" },
  { label: "Booking", href: "#booking" },
];

export const heroStats = [
  { value: "4.9 / 5.0", label: "1.200+ Klien Terverifikasi" },
  { value: "100% Private", label: "Konsultasi Wajah Bespoke" },
];

export const filosofiItems: Filosofi[] = [
  {
    judul: "Konsultasi Struktur Wajah",
    desc: "Analisis bentuk rahang, kontur tengkorak, dan arah tumbuh rambut untuk potongan proporsional yang membingkai karakter alami Anda.",
  },
  {
    judul: "Artisanal Hot Towel & Oils",
    desc: "Relaksasi dengan handuk katun kukus bersuhu presisi, diinfusi minyak esensial cedarwood dan bergamot organik.",
  },
  {
    judul: "Precision Scissor Work",
    desc: "Detail manual dengan gunting baja tempa Jepang. Tekstur bernyawa, jatuh alami, dan mudah ditata harian.",
  },
  {
    judul: "Kurasi Produk Jepang & Eropa",
    desc: "Hanya hair tonic, matte clay, dan grooming oil bersertifikasi dermatologis dari Tokyo, London, dan Stockholm.",
  },
];

export const layananList: Layanan[] = [
  {
    nama: "Signature Haircut",
    durasi: "60 Menit",
    tag: "Full Treatment",
    desc: "Potongan presisi menyeluruh yang disesuaikan dengan pola tumbuh rambut dan bentuk rahang, termasuk pijat kepala relaks dan styling pomade matte kelas dunia.",
    harga: "Rp 250.000",
    badge: "Terpopuler",
  },
  {
    nama: "Classic Haircut",
    durasi: "45 Menit",
    tag: "Essential Groom",
    desc: "Potongan esensial dengan gunting dan clipper tajam, keramas segar mint wash, serta cooling tonic untuk kulit kepala.",
    harga: "Rp 200.000",
  },
  {
    nama: "Skin Fade",
    durasi: "50 Menit",
    tag: "Micro Precision",
    desc: "Transisi gradasi ultra-halus (zero / low-mid-high taper fade) dengan teknik foil shaver presisi tinggi tanpa iritasi.",
    harga: "Rp 230.000",
  },
  {
    nama: "Beard Grooming",
    durasi: "35 Menit",
    tag: "Beard Sculpt",
    desc: "Pembentukan kontur janggut presisi, hot lather shave tradisional, razor lining tajam, dan nutrisi beard oil organik.",
    harga: "Rp 160.000",
  },
  {
    nama: "Haircut + Beard",
    durasi: "80 Menit",
    tag: "Complete Ritual",
    desc: "Paket komplit: haircut signature, beard sculpting arsitektural, double hot towel steam aromaterapi, dan pijat akupresur wajah.",
    harga: "Rp 360.000",
    badge: "Best Value",
  },
  {
    nama: "Kids Haircut",
    durasi: "40 Menit",
    tag: "Gentle Craft",
    desc: "Potongan rapi dan modis untuk anak usia 3–12 tahun dengan pendekatan sabar dan pengalaman kursi yang menenangkan.",
    harga: "Rp 180.000",
  },
];

export const barberList: Barber[] = [
  {
    nama: "Reza Pratama",
    peran: "Head Master Barber",
    exp: "9+ Tahun • Ex-Editorial Groomer",
    desc: "Spesialis face sculpting dan siluet klasik berkarakter tajam dengan pendekatan anatomis mendalam.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCwlDgysasMydHpYvx1eMWIaJb_VpWDNwGZpfjEPhyrbGxPeMUkQO3NaFhXGamJoO9Wdb9Y2rTn_OvcwadU7V-3vWVaglt11JYkIQUKdlT_5BgNKyd2G00DxEna8BLFkoS0jyOyIjQufPLoQ9WdSPGU0fJ2HRqC5v78A7g4ehBZ-KhC6zJskOdbK0JLKmHaqgNUKbsFe0SCrhCuzECnumMfixj_klYkQqpzczK2HZFPAOibr46mMJokug",
  },
  {
    nama: "Adrian Wicaksono",
    peran: "Senior Barber",
    exp: "7+ Tahun • Precision Specialist",
    desc: "Ahli skin fade halus tanpa batas dan texturized crop modern yang mudah dirawat untuk eksekutif muda.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCVDnVnAvohs269KITvI4w1NPfDsHY7e0KN6rDWzkbXSUnt79Dthf2IOuc0suI70AMBwUqDebKSCH28Gf99oZBeUhw5PfoO3GkagYKhoF6uYjAcsEBPJgBhDF7msXjNYdRzLzLGDK96LHa7gj-j8dxha99Kq3A2DncpYx2znjHWsp6WHBl52UgQ6s-XhHno8RYlv2G3MEnYDfbSoolByWzK0K8qC4qEkTQpy0gaGFeF85IWb-c1RLphzw",
  },
  {
    nama: "Farhan Ramadhan",
    peran: "Master Groomer",
    exp: "8+ Tahun • Scissor Craftsman",
    desc: "Pakar kontur janggut arsitektural dan teknik gunting layer panjang untuk rambut gelombang atau ikal.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuABwqDud88BGxwVii5ydiBIilMkG8jXEhNQo-iqBczPPiMReMhPouenj-ES2NlxvaZd8nCXVQ89_XcVdYxXkkCwOKXXlMqDhpuFZPdHdIMS_R3djKvpj-j7WB3vfmjOZts9KFS97ig5ppAp9Y9UwYS4mRjTHWqA9l6PiTVrzZ3oZvb9jDjwlrCyQkgcVcbITWqyYwxJAzIFYxIPVoFxVZiQ20BvW_iIVdyJr2eJiiVqG0-e5h3Xr47lUg",
  },
];

export const galeriHighlight = {
  tag: "#ArcaStudio",
  title: "Sanctuary Senopati",
  alt: "Interior ARCA",
  src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDGz93sempO1qXI0UgnrWsA540dUcVWupROMPbI_vBsWxqRasj20uSE6ZuBAF-crk2uxQQhQ3_JxSJUABVqTOpGIeLjaSAOTvPn_H08hynw39TRvYpme1WxzfDzAZfYv7eHPGBK7gG9HNQAZYjLPmVslelzLDDNt5IbErShuJPRf8ivkxz88nPNtmLZJSe_Vqn24qE5wS63AXGbZVv9jewyZK94jtT_RJXeIc2j8U24wv5GlLF7ec8v0A",
};

export const galeriItems: GaleriItem[] = [
  {
    tag: "#ModernFade",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCYrYdMXTldQXvJhTRoG0b1xlFXDte4SBcUMVOaQkK5HWtqK3ChNQIMjG1B_j-44OA14hJ2_2DrYuiKWJecK1wuJCC0ehhfvm94o2xbNqfC4tKt9-Zo3K60uqwYBUWKgQs90rT8OP7L0MP0zvjH106jRtbBWg6Ksw6ruyFXoF2ZdYEPApdkf9lE0tWWHkh9YIRwCCnty_1Wj4xEdAr4EZzH4e60SevT91fipXgnjRf7wdMN82z3K8i23A",
  },
  {
    tag: "#TexturedCrop",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC08KzYO72GEgApNxqm26KMZuPB_A7Ehgv_i-Nit7JRW2C6t2GT5IoadLbIzzLbC_IA7sYRwQUqbu_Bswsf5Nmr4hBJucWlmsm4OgysgDUZ0PvK5AVGhYG6rXg4hs3IRx0p_aOHzhKI70m1lG-Q8JlABKt8R5-ZJzlXsaPQVYCFX9KD_4f1vBjUKY6v9pkfLvfzDHKe-rdHfg92A3mPSlkroaMlV_2PTgGTVvY_-L0BwJ5-HqjZ2YPE8A",
  },
  {
    tag: "#HotTowelRitual",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBVyO-L3I91_Xbww2OU8hNinY0_CQtpyXsi_4h_lyvTy-QKmGd1HjrfzX2Yjyk-EWN-mp1bMR-w61U-APiD8pt9uzK1pkk6EV3XprTeT69ZBp4XPP_WoCAzxzBzBnWeFcQABSlUtLKaYzQB8JsAXs5sOZlDzWwXViGrGrmlDIv_nptlc9NTtyUEMPvEJIHBVq9Phg5hbtz1Q7Coniswh_xFLmzJqkdaQS7lfPgES7ppzKtjU_0cFOZTHg",
  },
  {
    tag: "#JakartaGentleman",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCBl-p9JpT2ms8zRiabcvQYlUJttyipli3J0dc2i4GZiXnFdXwr2zKCtFpevgLwKuiVNDWF-WeasLCkzyRgR9L22Tj-GqxjPVWwSeY0TfCwchWp2AC6BdVW-uaM30RLxjt93DGRrlPHad811_43_Z8HnXWFH0TUk3NLxWsJalfvUnIxtaHZ6Hd2fImg0pFMKZ9-LY55fe60CSXgh1Y57NfdtbCjkd_OvENXD056Fap-_dkeKUqgkQHdMw",
  },
];

export const testimoniList: Testimoni[] = [
  {
    quote:
      "Potongan fade paling rapi yang pernah saya dapat di Jakarta Selatan. Suasananya tenang, kopinya enak, dan barber sangat paham tekstur rambut pria Asia.",
    nama: "Dimas S.",
    peran: "Founder & Creative Director, SCBD",
  },
  {
    quote:
      "Haircut + Beard adalah ritual bulanan wajib saya. Detail hot towel dan razor lining-nya luar biasa presisi. Rasanya seperti reset pikiran.",
    nama: "Rendy K.",
    peran: "Corporate Lawyer, Senopati",
  },
  {
    quote:
      "Bukan sekadar barbershop, ini tempat dekompresi terbaik di akhir pekan. Sangat menghargai waktu appointment tanpa menunggu lama.",
    nama: "Kevin T.",
    peran: "Tech Lead, BSD & Jakarta",
  },
];

export const jamOperasionalList: JamOperasional[] = [
  { hari: "Senin – Jumat", jam: "10.00 – 21.00" },
  { hari: "Sabtu – Minggu", jam: "09.00 – 21.00" },
  { hari: "Hari Libur Nasional", jam: "10.00 – 18.00" },
];

export const slotJamList: string[] = [
  "10:00",
  "11:30",
  "13:00",
  "14:30",
  "16:00",
  "17:30",
  "19:00",
  "20:00",
];

export const heroImage = {
  alt: "Klien ARCA Barber",
  src: "https://images.unsplash.com/photo-1603291783835-12c1ebe6c701?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};
