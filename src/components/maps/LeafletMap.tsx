'use client'

import { useEffect, useState } from 'react'
import { useMapStore } from '@/store/useMapStore'
import 'leaflet/dist/leaflet.css'

const LOCATIONS = [
  {
    id: 'loc-1',
    name: 'RSUD Sukabumi',
    category: 'health',
    position: [-6.917, 106.926],
  },
  {
    id: 'loc-2',
    name: 'Cafe Contoh',
    category: 'food',
    position: [-6.92, 106.93],
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
