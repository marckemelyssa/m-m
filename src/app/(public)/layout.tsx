import NavBar from "@/components/common/navbar"
import Footer from "@/components/common/fotter"
import { ScrollToTopOnMount } from "@/components/utils/scroll-to-top"

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
      <div className="flex min-h-screen flex-col">
        <NavBar />
        <ScrollToTopOnMount />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
  )
}
