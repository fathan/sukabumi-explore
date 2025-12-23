'use client'

import { useEffect, useState } from 'react'
import { useMapStore } from '@/store/useMapStore'
import 'leaflet/dist/leaflet.css'

const LOCATIONS = [
  {
    id: 'health-1',
    name: 'RSUD Sukabumi',
    category: 'health',
    position: [-6.9149114280274535, 106.93519925449246],
  },
  {
    id: 'health-2',
    name: 'RSI Assyifa',
    category: 'health',
    position: [-6.918940383249558, 106.91740816746577],
  },
  {
    id: 'health-3',
    name: 'RS Kartika',
    category: 'health',
    position: [-6.921823014403176, 106.92435346245806],
  },
  {
    id: 'health-4',
    name: 'RS Hermina',
    category: 'health',
    position: [-6.8943130354705735, 107.03156933580115],
  },
  {
    id: 'health-5',
    name: 'RS Betha Medika',
    category: 'health',
    position: [-6.9027424292215604, 106.88328638466362],
  },
  {
    id: 'health-6',
    name: 'RS Bhayangkara Setukpa Lemdikpol Polri',
    category: 'health',
    position: [-6.912023468392641, 106.9224983071567],
  },
  {
    id: 'fuel-1',
    name: 'SPBU Sukabumi 34 - 43105',
    category: 'fuel',
    position: [-6.919052866084563, 106.92096403541422],
  },
]

export default function LeafletMap() {
  const { category } = useMapStore()
  const [L, setL] = useState<typeof import('react-leaflet')>()

  useEffect(() => {
    import('react-leaflet').then(setL)
  }, [])

  if (!L) return null

  const { MapContainer, TileLayer, Marker, Popup } = L

  const filtered = category
    ? LOCATIONS.filter(l => l.category === category)
    : LOCATIONS

  return (
    <MapContainer
      center={[-6.917, 106.926]}
      zoom={15}
      className="h-full w-full"
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {filtered.map(loc => (
        <Marker key={loc.id} position={loc.position as [number, number]}>
          <Popup>
            {loc.name}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}
