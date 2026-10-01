"use client";

import { FormEvent } from "react";
import {
  barberList,
  jamOperasionalList,
  layananList,
  slotJamList,
  WA_NUMBER,
  WA_TANYA_SLOT,
} from "../data";

export interface BookingFormState {
  service: string;
  barber: string;
  tanggal: string;
  jam: string;
  nama: string;
  telp: string;
}

interface BookingProps extends BookingFormState {
  onChange: (patch: Partial<BookingFormState>) => void;
  onSubmit: (e: FormEvent) => void;
}

function FieldLabel({ children }: { children: React.ReactNode }) {
  return <span className="label-caps text-muted">{children}</span>;
}

export default function Booking({
  service,
  barber,
  tanggal,
  jam,
  nama,
  telp,
  onChange,
  onSubmit,
}: BookingProps) {
  return (
    <section id="booking" className="py-14 space-y-10">
      <div className="max-w-2xl">
        <p className="label-caps text-bronze">Reservasi &amp; Kunjungan</p>
        <h2 className="font-serif text-3xl md:text-[40px] mt-2">
          Pesan Sesi Pribadi Anda
        </h2>
        <p className="text-sm text-muted mt-2">
          Pilih layanan dan barber favorit. Konfirmasi otomatis terhubung via
          concierge WhatsApp kami dalam &lt; 5 menit.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-6 items-start">
        <form
          onSubmit={onSubmit}
          className="lg:col-span-7 bg-low p-6 sm:p-8 space-y-5 hairline"
        >
          <div className="flex items-center justify-between">
            <span className="font-serif text-2xl">Formulir Reservasi</span>
            <span className="label-caps text-bronze">Via WhatsApp</span>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <label className="space-y-2 block">
              <FieldLabel>Nama Lengkap *</FieldLabel>
              <input
                required
                value={nama}
                onChange={(e) => onChange({ nama: e.target.value })}
                placeholder="cth. Andi Pratama"
                className="w-full bg-surface px-4 py-3.5 hairline focus:border-bronze outline-none text-sm placeholder:text-muted"
              />
            </label>
            <label className="space-y-2 block">
              <FieldLabel>No. WhatsApp *</FieldLabel>
              <input
                required
                value={telp}
                onChange={(e) => onChange({ telp: e.target.value })}
                placeholder="cth. 0812xxxxxxx"
                className="w-full bg-surface px-4 py-3.5 hairline focus:border-bronze outline-none text-sm placeholder:text-muted"
              />
            </label>
          </div>

          <label className="space-y-2 block">
            <FieldLabel>Pilih Layanan Utama</FieldLabel>
            <select
              value={service}
              onChange={(e) => onChange({ service: e.target.value })}
              className="w-full bg-surface px-4 py-3.5 hairline outline-none text-sm"
            >
              {layananList.map((l) => (
                <option key={l.nama} value={l.nama}>
                  {l.nama} — {l.harga} ({l.durasi})
                </option>
              ))}
            </select>
          </label>

          <label className="space-y-2 block">
            <FieldLabel>Preferensi Barber</FieldLabel>
            <select
              value={barber}
              onChange={(e) => onChange({ barber: e.target.value })}
              className="w-full bg-surface px-4 py-3.5 hairline outline-none text-sm"
            >
              <option>Tanpa Preferensi</option>
              {barberList.map((b) => (
                <option key={b.nama}>{b.nama}</option>
              ))}
            </select>
          </label>

          <div className="grid sm:grid-cols-2 gap-4">
            <label className="space-y-2 block">
              <FieldLabel>Tanggal *</FieldLabel>
              <input
                type="date"
                required
                value={tanggal}
                onChange={(e) => onChange({ tanggal: e.target.value })}
                className="w-full bg-surface px-4 py-3.5 hairline outline-none text-sm [color-scheme:dark]"
              />
            </label>
            <label className="space-y-2 block">
              <FieldLabel>Jam *</FieldLabel>
              <select
                value={jam}
                onChange={(e) => onChange({ jam: e.target.value })}
                className="w-full bg-surface px-4 py-3.5 hairline outline-none text-sm"
              >
                {slotJamList.map((j) => (
                  <option key={j}>{j}</option>
                ))}
              </select>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-bronze text-base label-caps py-4 hover:bg-bronzesoft transition-colors"
          >
            Konfirmasi via WhatsApp
          </button>
          <p className="text-xs text-muted text-center">
            Dengan menekan tombol, Anda akan diarahkan ke WhatsApp concierge
            ARCA. Tanpa DP, pembatalan gratis H-3.
          </p>
        </form>

        <div id="lokasi" className="lg:col-span-5 space-y-4">
          <div className="bg-low p-6 sm:p-8 space-y-5 hairline">
            <h3 className="font-serif text-2xl">Lokasi &amp; Jam Operasional</h3>
            <div className="text-sm space-y-3 text-muted leading-relaxed">
              <p>
                <span className="text-offwhite font-medium">
                  ARCA Barber Senopati
                </span>
                <br />
                Jl. Senopati No. 88, Kebayoran Baru
                <br />
                Jakarta Selatan 12190
              </p>
              <div className="border-t border-line pt-3 space-y-1.5">
                {jamOperasionalList.map((row) => (
                  <div key={row.hari} className="flex justify-between">
                    <span>{row.hari}</span>
                    <span className="text-offwhite">{row.jam}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <a
                href={`tel:+${WA_NUMBER}`}
                className="text-center border border-line label-caps py-3 hover:border-bronze hover:text-bronze transition-colors"
              >
                Telepon
              </a>
              <a
                href={WA_TANYA_SLOT}
                target="_blank"
                rel="noreferrer"
                className="text-center bg-high label-caps py-3 hover:bg-bronze hover:text-base transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>
          <div className="bg-high p-6 hairline">
            <p className="label-caps text-bronze">Catatan Parkir</p>
            <p className="text-sm text-muted mt-1.5 leading-relaxed">
              Valet tersedia di lobi serta area parkir motor di sisi timur
              gedung. Tunjukkan bukti booking untuk validasi parkir 2 jam
              gratis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
