export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <div className="w-1/4">Sidebar</div>
      <main className="flex-1">{children}</main>
    </div>
  )
}