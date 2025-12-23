import { Providers } from "../providers";

export default function ExploreLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Providers>
        {children}
      </Providers>
    </>
  )
}