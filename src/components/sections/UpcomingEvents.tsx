import { Calendar, Clock, MapPin, Users, ArrowRight } from 'lucide-react'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'

const UpcomingEvents = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Robozido 4.0: Advanced AI Robotics",
      description: "The next evolution of our flagship workshop series, focusing on AI integration in robotics and autonomous systems.",
      date: "2025-03-15",
      time: "10:00 AM - 6:00 PM",
      location: "CCA Block, NIT Durgapur",
      capacity: "100 participants",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500",
      status: "upcoming",
      featured: true
    },
    {
      id: 2,
      title: "IoT Workshop: Smart Systems",
      description: "Learn to build connected devices and smart automation systems using ESP32 and cloud platforms.",
      date: "2025-02-20",
      time: "2:00 PM - 5:00 PM",
      location: "Electronics Lab, NIT Durgapur",
      capacity: "50 participants",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500",
      status: "upcoming",
      featured: false
    },
    {
      id: 3,
      title: "Drone Programming Bootcamp",
      description: "Hands-on experience with autonomous drone programming, GPS navigation, and mission planning.",
      date: "2025-04-10",
      time: "9:00 AM - 4:00 PM",
      location: "Open Ground, NIT Durgapur",
      capacity: "30 participants",
      image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=500",
      status: "upcoming",
      featured: false
    }
  ]

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <section className="section-padding bg-dark-800/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-tech text-3xl md:text-5xl font-bold text-white mb-6">
            Upcoming <span className="text-neon-green">Events</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't miss out on these exciting opportunities to learn, build, and connect with fellow robotics enthusiasts.
          </p>
        </div>

        {/* Featured Event */}
        <div className="mb-16">
          {upcomingEvents.filter(event => event.featured).map((event) => (
            <Card key={event.id} variant="neon" className="overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="relative">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-64 lg:h-full object-cover rounded-lg"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-neon-green/20 text-neon-green px-3 py-1 rounded-full text-sm font-semibold">
                      Featured Event
                    </span>
                  </div>
                </div>
                
                <div className="flex flex-col justify-center">
                  <h3 className="font-tech text-3xl font-bold text-white mb-4">
                    {event.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {event.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-300">
                      <Calendar className="h-5 w-5 text-neon-blue mr-3" />
                      <span>{formatDate(event.date)}</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Clock className="h-5 w-5 text-neon-green mr-3" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <MapPin className="h-5 w-5 text-neon-purple mr-3" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Users className="h-5 w-5 text-neon-orange mr-3" />
                      <span>{event.capacity}</span>
                    </div>
                  </div>
                  
                  <Button className="w-fit">
                    Register Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Other Upcoming Events */}
        <div>
          <h3 className="font-tech text-2xl font-bold text-white mb-8">
            More <span className="text-neon-blue">Upcoming Events</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingEvents.filter(event => !event.featured).map((event) => (
              <Card key={event.id} className="group">
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <h4 className="font-tech text-xl font-bold text-white mb-3 group-hover:text-neon-blue transition-colors">
                  {event.title}
                </h4>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {event.description}
                </p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-400">
                    <Calendar className="h-4 w-4 text-neon-blue mr-2" />
                    <span>{formatDate(event.date)}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <Clock className="h-4 w-4 text-neon-green mr-2" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <MapPin className="h-4 w-4 text-neon-purple mr-2" />
                    <span>{event.location}</span>
                  </div>
                </div>
                
                <Button variant="outline" size="sm" className="w-full">
                  Learn More
                </Button>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-neon-blue/10 via-neon-purple/10 to-neon-green/10 border-neon-blue/30">
            <h3 className="font-tech text-2xl font-bold text-white mb-4">
              Want to Stay Updated?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join our mailing list to get notified about upcoming events, workshops, and exclusive opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 glass-dark rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neon-blue"
              />
              <Button>Subscribe</Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default UpcomingEvents
