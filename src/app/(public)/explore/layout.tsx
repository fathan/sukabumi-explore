import SidebarWrapper from "@/components/fragments/explore/SidebarWrapper";

export default function ExploreLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <SidebarWrapper />
      <main className="flex-1">
        {children}
      </main>
    </div>
  )
}