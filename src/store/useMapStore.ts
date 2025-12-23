import { create } from 'zustand'

export type Category =
  | 'health'
  | 'school'
  | 'food'
  | 'worship'
  | 'fuel'
  | 'atm'
  | null

type MapState = {
  category: Category
  radius: number
  selectedLocationId: string | null

  setCategory: (c: Category) => void
  setRadius: (r: number) => void
  selectLocation: (id: string | null) => void
}

export const useMapStore = create<MapState>((set) => ({
  category: null,
  radius: 5,
  selectedLocationId: null,

  setCategory: (category: Category) => set({ category }),
  setRadius: (radius: number) => set({ radius }),
  selectLocation: (id: string | null) => set({ selectedLocationId: id }),
}))
