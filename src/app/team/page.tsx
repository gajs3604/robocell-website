import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import TeamHero from '@/components/sections/TeamHero'
import TeamGrid from '@/components/sections/TeamGrid'

export const metadata = {
  title: 'Team | RoboCell NIT Durgapur',
  description: 'Meet the talented team behind RoboCell - passionate engineers, innovators, and robotics enthusiasts.',
}

export default function TeamPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <TeamHero />
      <TeamGrid />
      <Footer />
    </main>
  )
}
