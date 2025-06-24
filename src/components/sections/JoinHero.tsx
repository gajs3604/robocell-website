import { Rocket, Users, Star, Zap } from 'lucide-react'

const JoinHero = () => {
  return (
    <section className="section-padding pt-24 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 animate-float opacity-20">
        <Rocket className="h-16 w-16 text-neon-blue" />
      </div>
      <div className="absolute bottom-20 right-10 animate-float opacity-20" style={{ animationDelay: '1s' }}>
        <Star className="h-20 w-20 text-neon-green" />
      </div>
      <div className="absolute top-1/2 right-1/4 animate-float opacity-10" style={{ animationDelay: '2s' }}>
        <Zap className="h-12 w-12 text-neon-purple" />
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h1 className="font-tech text-4xl md:text-6xl font-bold text-white mb-6">
          Join <span className="text-neon-blue text-glow">RoboCell</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
          Ready to embark on an exciting journey in robotics and automation? 
          Join our passionate community of innovators and shape the future of technology.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
          <div className="card text-center">
            <Rocket className="h-8 w-8 text-neon-blue mx-auto mb-3" />
            <div className="font-tech text-lg font-bold text-white mb-1">Launch</div>
            <div className="text-gray-400 text-sm">Your Career</div>
          </div>
          <div className="card text-center">
            <Users className="h-8 w-8 text-neon-green mx-auto mb-3" />
            <div className="font-tech text-lg font-bold text-white mb-1">Connect</div>
            <div className="text-gray-400 text-sm">With Experts</div>
          </div>
          <div className="card text-center">
            <Star className="h-8 w-8 text-neon-purple mx-auto mb-3" />
            <div className="font-tech text-lg font-bold text-white mb-1">Excel</div>
            <div className="text-gray-400 text-sm">In Innovation</div>
          </div>
          <div className="card text-center">
            <Zap className="h-8 w-8 text-neon-orange mx-auto mb-3" />
            <div className="font-tech text-lg font-bold text-white mb-1">Impact</div>
            <div className="text-gray-400 text-sm">The Future</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16">
          <div className="card bg-gradient-to-r from-neon-blue/10 via-neon-purple/10 to-neon-green/10 border-neon-blue/30 max-w-4xl mx-auto">
            <h2 className="font-tech text-2xl font-bold text-white mb-4">
              🚀 Applications Open for 2025!
            </h2>
            <p className="text-gray-300 mb-6">
              We're looking for passionate students who want to make a difference in robotics. 
              No prior experience required - just enthusiasm and willingness to learn!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#application" className="btn-primary">
                Apply Now
              </a>
              <a href="#benefits" className="btn-secondary">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default JoinHero
