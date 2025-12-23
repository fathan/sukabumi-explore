import { createSupabaseServer } from '@/lib/supabase/server'
import Sidebar from './Sidebar'

export default async function SidebarWrapper() {
  const supabase = await createSupabaseServer()

  const { data: places } = await supabase
    .from('testing')
    .select('id, name, distance, category, created_at')

  return (
    <Sidebar initialPlaces={places ?? []} />
  )
}
