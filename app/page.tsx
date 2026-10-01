"use client";

import { FormEvent, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Tentang from "./components/Tentang";
import Layanan from "./components/Layanan";
import BarberSection from "./components/BarberSection";
import Galeri from "./components/Galeri";
import Testimoni from "./components/Testimoni";
import Booking, { BookingFormState } from "./components/Booking";
import Footer from "./components/Footer";
import { layananList, slotJamList, WA_NUMBER } from "./data";

function scrollToBooking() {
  document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
}

export default function Page() {
  const [form, setForm] = useState<BookingFormState>({
    service: layananList[0].nama,
    barber: "Tanpa Preferensi",
    tanggal: "",
    jam: slotJamList[0],
    nama: "",
    telp: "",
  });

  const patchForm = (patch: Partial<BookingFormState>) =>
    setForm((prev) => ({ ...prev, ...patch }));

  const submitWA = (e: FormEvent) => {
    e.preventDefault();
    const pesan =
      `Halo ARCA Barber! Saya ${form.nama || "(nama)"} (${form.telp || "-"}). ` +
      `Saya ingin reservasi:%0A• Layanan: ${form.service}` +
      `%0A• Barber: ${form.barber}` +
      `%0A• Tanggal: ${form.tanggal || "-"}` +
      `%0A• Jam: ${form.jam}%0AMohon konfirmasi ketersediaan. Terima kasih.`;
    window.open(`https://wa.me/${WA_NUMBER}?text=${pesan}`, "_blank");
  };

  return (
    <>
      <Header />

      <main id="beranda" className="pt-20 max-w-7xl mx-auto px-5 lg:px-10">
        <Hero />
        <Tentang />
        <Layanan
          onPilih={(nama) => {
            patchForm({ service: nama });
            scrollToBooking();
          }}
        />
        <BarberSection
          onPilih={(nama) => {
            patchForm({ barber: nama });
            scrollToBooking();
          }}
        />
        <Galeri />
        <Testimoni />
        <Booking {...form} onChange={patchForm} onSubmit={submitWA} />
      </main>

      <Footer />
    </>
  );
}
