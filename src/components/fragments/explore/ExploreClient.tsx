'use client'

import dynamic from 'next/dynamic'

const LeafletMap = dynamic(
  () => import('@/components/maps/LeafletMap'),
  { ssr: false }
)

export default function ExploreClient() {
  return <LeafletMap />
}