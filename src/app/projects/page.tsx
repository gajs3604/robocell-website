import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ProjectsHero from '@/components/sections/ProjectsHero'
import ProjectsGrid from '@/components/sections/ProjectsGrid'

export const metadata = {
  title: 'Projects | RoboCell NIT Durgapur',
  description: 'Explore our innovative robotics and embedded systems projects. From AI-powered bots to sensor-based automation.',
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ProjectsHero />
      <ProjectsGrid />
      <Footer />
    </main>
  )
}
