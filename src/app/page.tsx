import Header from '@/components/layout/Header'
import HomeSection from '@/components/sections/Hero'
import InteractiveShowcase from '@/components/sections/LogoShowcase'
import MiniQuiz from '@/components/sections/MiniQuiz'
import Mission from '@/components/sections/Mission'
import Memories from '@/components/sections/Memories'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HomeSection />
      <InteractiveShowcase />
      <MiniQuiz />
      <Mission />
      <Memories />
      <Footer />
    </main>
  )
}
