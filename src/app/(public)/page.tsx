'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function LandingPage() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState<boolean>(false)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <main className="relative min-h-screen overflow-hidden bg-white dark:bg-[#0B1120] text-gray-900 dark:text-gray-100 transition-colors">

      {/* ===== BLUR BACKGROUND ===== */}
      <div className="absolute -top-40 -left-40 h-130 w-130 rounded-full bg-blue-500/30 blur-[160px]" />
      <div className="absolute top-1/3 -right-40 h-100 w-100 rounded-full bg-cyan-400/20 blur-[140px]" />

      {/* ===== HEADER ===== */}
      <header className="relative z-10 flex items-center justify-between px-6 py-5 max-w-7xl mx-auto">
        <span className="font-semibold text-lg">📍 Sukabumi Explore</span>
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="rounded-lg border px-3 py-1 text-sm hover:bg-gray-100 dark:hover:bg-white/10 transition"
        >
          {theme === 'dark' ? '☀️ Mode Terang' : '🌙 Mode Gelap'}
        </button>
      </header>

      {/* ===== HERO ===== */}
      <section className="relative z-10 px-6 pt-24 pb-32 text-center max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold tracking-tight"
        >
          Bingung Cari Tempat
          <span className="block text-blue-600 dark:text-blue-400">
            di Kota Sukabumi?
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-6 text-lg text-gray-600 dark:text-gray-400"
        >
          Sukabumi Explore membantu kamu menemukan rumah sakit,
          sekolah, tempat ibadah, kuliner, dan layanan penting
          lainnya — semuanya dalam satu peta yang mudah digunakan.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
        >
          <Link
            href="/explore"
            className="rounded-xl bg-blue-600 px-8 py-4 text-white font-medium hover:bg-blue-700 transition"
          >
            🔍 Mulai Cari Lokasi
          </Link>

          <Link
            href="#features"
            className="rounded-xl border px-8 py-4 font-medium hover:bg-gray-100 dark:hover:bg-white/10 transition"
          >
            📖 Lihat Cara Kerjanya
          </Link>
        </motion.div>

        <p className="mt-4 text-sm text-gray-500">
          Gratis • Tanpa login • Fokus Sukabumi
        </p>
      </section>

      {/* ===== KATEGORI ===== */}
      <section id="features" className="relative z-10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-3xl font-semibold">
            Kamu Bisa Cari Apa Saja?
          </h2>

          <p className="mt-4 text-center text-gray-600 dark:text-gray-400">
            Tempat-tempat yang sering kamu butuhkan, kami kumpulkan di satu peta.
          </p>

          <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
            {[
              { icon: '🏥', label: 'Rumah Sakit & Klinik' },
              { icon: '🎓', label: 'Sekolah & Kampus' },
              { icon: '🍽️', label: 'Kuliner & UMKM' },
              { icon: '🕌', label: 'Tempat Ibadah' },
              { icon: '⛽', label: 'SPBU' },
              { icon: '🏦', label: 'ATM & Bank' },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-2xl border border-gray-200 bg-white/70 dark:bg-white/5 backdrop-blur p-6 text-center shadow-sm hover:shadow-md transition"
              >
                <div className="text-3xl">{item.icon}</div>
                <div className="mt-3 text-sm font-medium">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== STORYTELLING : MASALAH → SOLUSI ===== */}
      <section className="bg-gray-50/70 relative z-10 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid gap-14 md:grid-cols-2 items-center">

            {/* MASALAH */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-semibold">
                Pernah Mengalami Ini?
              </h2>

              <ul className="mt-6 space-y-4 text-gray-600 dark:text-gray-400">
                <li>❌ Butuh rumah sakit, tapi bingung yang paling dekat</li>
                <li>❌ Cari ATM atau SPBU, harus buka banyak aplikasi</li>
                <li>❌ Lokasi ada, tapi tidak jelas masih buka atau tidak</li>
                <li>❌ Data umum, tidak spesifik Sukabumi</li>
              </ul>

              <p className="mt-6 text-sm text-gray-500">
                Masalah kecil, tapi sering bikin buang waktu.
              </p>
            </motion.div>

            {/* SOLUSI */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl border border-gray-200 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur p-8 shadow-sm"
            >
              <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400">
                Sukabumi Explore Hadir
              </h3>

              <p className="mt-4 text-gray-600 dark:text-gray-400">
                Kami mengumpulkan tempat-tempat penting di Kota Sukabumi
                ke dalam satu peta interaktif yang mudah digunakan.
              </p>

              <ul className="mt-6 space-y-3 text-sm">
                <li>✅ Lokasi akurat & fokus Sukabumi</li>
                <li>✅ Filter berdasarkan kategori</li>
                <li>✅ Lihat jarak & status buka</li>
                <li>✅ Langsung navigasi ke Google Maps</li>
              </ul>

              <Link
                href="/explore"
                className="inline-block mt-8 rounded-xl bg-blue-600 px-6 py-3 text-white font-medium hover:bg-blue-700 transition"
              >
                Coba Sekarang →
              </Link>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ===== VALUE ===== */}
      <section className="relative z-10 py-24 bg-white dark:bg-white/5 backdrop-blur">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-center text-3xl font-semibold">
            Kenapa Pakai Sukabumi Explore?
          </h2>

          <div className="mt-14 grid gap-10 sm:grid-cols-3">
            {[
              {
                title: 'Lebih Cepat Ketemu',
                desc: 'Tidak perlu buka banyak aplikasi. Semua lokasi penting ada di satu peta.',
              },
              {
                title: 'Fokus Lokal',
                desc: 'Dirancang khusus untuk Kota Sukabumi, bukan data umum yang sering tidak relevan.',
              },
              {
                title: 'Langsung Jalan',
                desc: 'Tinggal klik, buka Google Maps, dan langsung berangkat ke lokasi.',
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl bg-white dark:bg-white/5 p-6 shadow-sm"
              >
                <h3 className="font-semibold text-base">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="bg-blue-50/70 relative z-10 py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold">
            Cara Pakainya Simpel Banget
          </h2>

          <div className="mt-16 grid gap-10 sm:grid-cols-3">
            {[
              'Buka peta Sukabumi Explore',
              'Pilih kategori yang kamu cari',
              'Datangi lokasinya dengan navigasi',
            ].map((step, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold">
                  {i + 1}
                </div>
                <p className="mt-4 text-base font-medium">
                  {step}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="relative z-10 py-28 text-center bg-white dark:bg-blue-900/30">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-semibold"
        >
          Yuk, Mulai Jelajahi Sukabumi
        </motion.h2>

        <p className="mt-4 text-gray-600 dark:text-gray-400">
          Temukan tempat yang kamu butuhkan, tanpa ribet.
        </p>

        <Link
          href="/explore"
          className="mt-10 inline-block rounded-xl bg-blue-600 px-10 py-4 font-medium text-white hover:bg-blue-700 transition"
        >
          🚀 Buka Peta Sekarang
        </Link>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="relative z-10 border-t border-black/5 dark:border-white/10 py-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Sukabumi Explore — Dibuat untuk warga Sukabumi oleh 
        <a href="http://github.com/fathan" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
          &nbsp;Fathan Rohman
        </a>
      </footer>
    </main>
  )
}
