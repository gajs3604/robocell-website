import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import BlogHero from '@/components/sections/BlogHero'
import BlogGrid from '@/components/sections/BlogGrid'

export const metadata = {
  title: 'Blog | RoboCell NIT Durgapur',
  description: 'Read technical articles, tutorials, and insights from the RoboCell community on robotics, AI, and embedded systems.',
}

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <BlogHero />
      <BlogGrid />
      <Footer />
    </main>
  )
}
