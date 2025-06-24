import { Users, Heart, Lightbulb, Target } from 'lucide-react'

const TeamHero = () => {
  return (
    <section className="section-padding pt-24 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 animate-float opacity-20">
        <Users className="h-16 w-16 text-neon-blue" />
      </div>
      <div className="absolute bottom-20 right-10 animate-float opacity-20" style={{ animationDelay: '1s' }}>
        <Heart className="h-20 w-20 text-neon-green" />
      </div>
      <div className="absolute top-1/2 right-1/4 animate-float opacity-10" style={{ animationDelay: '2s' }}>
        <Lightbulb className="h-12 w-12 text-neon-purple" />
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h1 className="font-tech text-4xl md:text-6xl font-bold text-white mb-6">
          Meet Our <span className="text-neon-blue text-glow">Team</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
          The passionate minds behind RoboCell - a diverse group of engineers, innovators, 
          and dreamers working together to shape the future of robotics.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
          <div className="card text-center">
            <Users className="h-8 w-8 text-neon-blue mx-auto mb-3" />
            <div className="font-tech text-2xl font-bold text-neon-blue mb-1">50+</div>
            <div className="text-gray-400 text-sm">Active Members</div>
          </div>
          <div className="card text-center">
            <Target className="h-8 w-8 text-neon-green mx-auto mb-3" />
            <div className="font-tech text-2xl font-bold text-neon-green mb-1">15+</div>
            <div className="text-gray-400 text-sm">Core Team</div>
          </div>
          <div className="card text-center">
            <Lightbulb className="h-8 w-8 text-neon-purple mx-auto mb-3" />
            <div className="font-tech text-2xl font-bold text-neon-purple mb-1">5+</div>
            <div className="text-gray-400 text-sm">Mentors</div>
          </div>
          <div className="card text-center">
            <Heart className="h-8 w-8 text-neon-orange mx-auto mb-3" />
            <div className="font-tech text-2xl font-bold text-neon-orange mb-1">100+</div>
            <div className="text-gray-400 text-sm">Alumni Network</div>
          </div>
        </div>

        {/* Team Values */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card text-center">
            <div className="w-16 h-16 bg-neon-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-neon-blue" />
            </div>
            <h3 className="font-tech text-xl font-bold text-white mb-2">Collaboration</h3>
            <p className="text-gray-300 text-sm">Working together to achieve extraordinary results</p>
          </div>
          <div className="card text-center">
            <div className="w-16 h-16 bg-neon-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lightbulb className="h-8 w-8 text-neon-green" />
            </div>
            <h3 className="font-tech text-xl font-bold text-white mb-2">Innovation</h3>
            <p className="text-gray-300 text-sm">Pushing boundaries and exploring new possibilities</p>
          </div>
          <div className="card text-center">
            <div className="w-16 h-16 bg-neon-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8 text-neon-purple" />
            </div>
            <h3 className="font-tech text-xl font-bold text-white mb-2">Passion</h3>
            <p className="text-gray-300 text-sm">Driven by love for robotics and technology</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TeamHero
