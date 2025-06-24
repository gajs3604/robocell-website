import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import AboutHero from '@/components/sections/AboutHero'
import Mission from '@/components/sections/Mission'
import Timeline from '@/components/sections/Timeline'
import Achievements from '@/components/sections/Achievements'

export const metadata = {
  title: 'About RoboCell | NIT Durgapur Robotics Club',
  description: 'Learn about RoboCell, our mission, vision, and journey in robotics and embedded systems at NIT Durgapur.',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <AboutHero />
      <Mission />
      <Timeline />
      <Achievements />
      <Footer />
    </main>
  )
}
