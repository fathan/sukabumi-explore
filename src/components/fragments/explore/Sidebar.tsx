'use client'

import { Category, useMapStore } from '@/store/useMapStore'
import Link from 'next/link'

const CATEGORIES = [
  { id: 'health', label: 'Kesehatan', icon: '🏥' },
  { id: 'school', label: 'Sekolah', icon: '🎓' },
  { id: 'food', label: 'Kuliner', icon: '🍽️' },
  { id: 'worship', label: 'Ibadah', icon: '🕌' },
  { id: 'fuel', label: 'SPBU', icon: '⛽' },
  { id: 'atm', label: 'ATM', icon: '🏦' },
]

export default function Sidebar() {
  const {
    category,
    setCategory,
    radius,
    setRadius,
    selectLocation,
  } = useMapStore()

  return (
    <aside className="w-85 h-screen bg-white border-r border-gray-300 flex flex-col">
      <div className="pt-4 px-4 font-semibold text-lg">
        Sukabumi Explore
      </div>

      <Link href="/" className="pt-4 px-4 text-sm text-blue-400">
        Kembali ke Beranda
      </Link>

      <div className="p-4">
        <input
          placeholder="Cari lokasi..."
          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
        />
      </div>

      <div className="px-4">
        <div className="grid grid-cols-3 gap-2">
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setCategory(cat.id as Category)}
              className={`rounded-lg border border-gray-300 p-3 text-xs
                ${category === cat.id ? 'bg-blue-50 border-blue-500' : ''}
              `}
            >
              <div className="text-lg">{cat.icon}</div>
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      <div className="px-4 mt-4">
        <label className="text-xs">Radius: {radius} km</label>
        <input
          type="range"
          min={1}
          max={20}
          value={radius}
          onChange={(e) => setRadius(Number(e.target.value))}
          className="w-full"
        />
      </div>

      <div className="flex-1 overflow-y-auto px-4 mt-4 space-y-3">
        {['loc-1', 'loc-2'].map(id => (
          <div
            key={id}
            onClick={() => selectLocation(id)}
            className="cursor-pointer rounded-lg border border-gray-300 p-3 hover:bg-gray-50"
          >
            <h3 className="text-sm font-medium">RS Contoh</h3>
            <p className="text-xs text-gray-500">1.2 km</p>
          </div>
        ))}
      </div>
    </aside>
  )
}
