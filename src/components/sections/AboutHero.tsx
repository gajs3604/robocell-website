import { Cpu, Users, Target, Lightbulb } from 'lucide-react'

const AboutHero = () => {
  return (
    <section className="section-padding pt-24 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-tech text-4xl md:text-6xl font-bold text-white mb-6">
            About <span className="text-neon-blue text-glow">RoboCell</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            "Ideate, Innovate, Inspire!" - The heart of robotics at NIT Durgapur, where cutting-edge technology meets passionate innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h2 className="font-tech text-3xl font-bold text-white">
              Who We Are
            </h2>
            <p className="text-gray-300 leading-relaxed">
              RoboCell is the premier robotics and embedded systems club operating under the 
              Centre for Cognitive Activities (CCA) at NIT Durgapur. Founded with a vision to 
              bridge the gap between theoretical knowledge and practical implementation, we are 
              a community of passionate engineers, innovators, and dreamers.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Our club serves as a platform for students to explore the fascinating world of 
              robotics, automation, and embedded systems. From sensor-based bots to AI-powered 
              autonomous systems, we work on projects that challenge conventional thinking and 
              push the boundaries of what's possible.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="card text-center">
              <Users className="h-12 w-12 text-neon-blue mx-auto mb-4" />
              <h3 className="font-tech text-xl font-semibold text-white mb-2">Community</h3>
              <p className="text-gray-400 text-sm">Building a strong network of tech enthusiasts</p>
            </div>
            <div className="card text-center">
              <Cpu className="h-12 w-12 text-neon-green mx-auto mb-4" />
              <h3 className="font-tech text-xl font-semibold text-white mb-2">Innovation</h3>
              <p className="text-gray-400 text-sm">Creating cutting-edge technological solutions</p>
            </div>
            <div className="card text-center">
              <Target className="h-12 w-12 text-neon-purple mx-auto mb-4" />
              <h3 className="font-tech text-xl font-semibold text-white mb-2">Excellence</h3>
              <p className="text-gray-400 text-sm">Striving for perfection in every project</p>
            </div>
            <div className="card text-center">
              <Lightbulb className="h-12 w-12 text-neon-orange mx-auto mb-4" />
              <h3 className="font-tech text-xl font-semibold text-white mb-2">Learning</h3>
              <p className="text-gray-400 text-sm">Continuous growth through hands-on experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutHero
