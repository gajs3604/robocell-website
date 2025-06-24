import { Calendar, Users, Award, Zap } from 'lucide-react'

const EventsHero = () => {
  return (
    <section className="section-padding pt-24 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 animate-float opacity-20">
        <Calendar className="h-16 w-16 text-neon-blue" />
      </div>
      <div className="absolute bottom-20 right-10 animate-float opacity-20" style={{ animationDelay: '1s' }}>
        <Award className="h-20 w-20 text-neon-green" />
      </div>
      <div className="absolute top-1/2 right-1/4 animate-float opacity-10" style={{ animationDelay: '2s' }}>
        <Zap className="h-12 w-12 text-neon-purple" />
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h1 className="font-tech text-4xl md:text-6xl font-bold text-white mb-6">
          Our <span className="text-neon-blue text-glow">Events</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
          From hands-on workshops to competitive challenges, discover the exciting events that bring 
          the robotics community together at NIT Durgapur.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
          <div className="card text-center">
            <Calendar className="h-8 w-8 text-neon-blue mx-auto mb-3" />
            <div className="font-tech text-2xl font-bold text-neon-blue mb-1">15+</div>
            <div className="text-gray-400 text-sm">Events Organized</div>
          </div>
          <div className="card text-center">
            <Users className="h-8 w-8 text-neon-green mx-auto mb-3" />
            <div className="font-tech text-2xl font-bold text-neon-green mb-1">500+</div>
            <div className="text-gray-400 text-sm">Participants</div>
          </div>
          <div className="card text-center">
            <Award className="h-8 w-8 text-neon-purple mx-auto mb-3" />
            <div className="font-tech text-2xl font-bold text-neon-purple mb-1">3</div>
            <div className="text-gray-400 text-sm">Robozido Editions</div>
          </div>
          <div className="card text-center">
            <Zap className="h-8 w-8 text-neon-orange mx-auto mb-3" />
            <div className="font-tech text-2xl font-bold text-neon-orange mb-1">100%</div>
            <div className="text-gray-400 text-sm">Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EventsHero
