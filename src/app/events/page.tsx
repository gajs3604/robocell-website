import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import EventsHero from '@/components/sections/EventsHero'
import EventsTimeline from '@/components/sections/EventsTimeline'
import UpcomingEvents from '@/components/sections/UpcomingEvents'

export const metadata = {
  title: 'Events | RoboCell NIT Durgapur',
  description: 'Explore our robotics events including the famous Robozido workshop series and upcoming technical sessions.',
}

export default function EventsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <EventsHero />
      <UpcomingEvents />
      <EventsTimeline />
      <Footer />
    </main>
  )
}
