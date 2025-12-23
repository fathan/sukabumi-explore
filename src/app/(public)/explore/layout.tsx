import Sidebar from "@/components/fragments/explore/Sidebar";

export default function ExploreLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1">
        {children}
      </main>
    </div>
  )
}