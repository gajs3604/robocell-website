import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import JoinHero from '@/components/sections/JoinHero'
import WhyJoin from '@/components/sections/WhyJoin'
import JoinForm from '@/components/sections/JoinForm'

export const metadata = {
  title: 'Join Us | RoboCell NIT Durgapur',
  description: 'Join RoboCell and be part of an innovative robotics community. Apply now to start your journey in robotics and automation.',
}

export default function JoinPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <JoinHero />
      <WhyJoin />
      <JoinForm />
      <Footer />
    </main>
  )
}
