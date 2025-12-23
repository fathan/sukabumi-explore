'use client'

import { useMemo } from 'react'
import { Category, useMapStore } from '@/store/useMapStore'
import Link from 'next/link'

type Place = {
  id: string
  name: string
  distance: number
  category: string
}

type Props = {
  initialPlaces: Place[]
}

const CATEGORIES = [
  { id: 'health', label: 'Kesehatan', icon: '🏥' },
  { id: 'school', label: 'Sekolah', icon: '🎓' },
  { id: 'food', label: 'Kuliner', icon: '🍽️' },
  { id: 'worship', label: 'Ibadah', icon: '🕌' },
  { id: 'fuel', label: 'SPBU', icon: '⛽' },
  { id: 'atm', label: 'ATM', icon: '🏦' },
]

export default function Sidebar({ initialPlaces }: Props) {
  const {
    category,
    setCategory,
    radius,
    setRadius,
    selectLocation,
  } = useMapStore()

  const filteredPlaces = useMemo(() => {
    return initialPlaces.filter(item => {
      if (category && item.category !== category) return false
      if (item.distance > radius) return false
      return true
    })
  }, [initialPlaces, category, radius])

  return (
    <aside className="w-85 h-screen bg-white border-r border-gray-300 flex flex-col">
      <div className="pt-4 px-4 font-semibold text-lg">
        Sukabumi Explore
      </div>

      <Link href="/" className="pt-4 px-4 text-sm text-blue-400">
        Kembali ke Beranda
      </Link>

      {/* Search */}
      <div className="p-4">
        <input
          placeholder="Cari lokasi..."
          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-500"
        />
      </div>

      {/* Categories */}
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
              <span className="text-gray-400">{cat.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Radius */}
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

      {/* Result */}
      <div className="flex-1 overflow-y-auto px-4 mt-4 space-y-3">
        {filteredPlaces.map(item => (
          <div
            key={item.id}
            onClick={() => selectLocation(item.id)}
            className="cursor-pointer rounded-lg border border-gray-300 p-3 hover:bg-gray-50"
          >
            <h3 className="text-sm font-medium text-gray-500">
              {item.name}
            </h3>
            <p className="text-xs text-gray-500">
              Jarak: {item.distance} km
            </p>
          </div>
        ))}

        {filteredPlaces.length === 0 && (
          <p className="text-xs text-gray-400">
            Tidak ada lokasi ditemukan
          </p>
        )}
      </div>
    </aside>
  )
}
