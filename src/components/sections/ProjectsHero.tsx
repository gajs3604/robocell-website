import { Code, Cpu, Zap } from 'lucide-react'

const ProjectsHero = () => {
  return (
    <section className="section-padding pt-24 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 animate-float opacity-20">
        <Code className="h-16 w-16 text-neon-blue" />
      </div>
      <div className="absolute bottom-20 right-10 animate-float opacity-20" style={{ animationDelay: '1s' }}>
        <Cpu className="h-20 w-20 text-neon-green" />
      </div>
      <div className="absolute top-1/2 left-1/4 animate-float opacity-10" style={{ animationDelay: '2s' }}>
        <Zap className="h-12 w-12 text-neon-purple" />
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h1 className="font-tech text-4xl md:text-6xl font-bold text-white mb-6">
          Our <span className="text-neon-blue text-glow">Projects</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
          Discover the innovative robotics and embedded systems projects created by our talented team. 
          From AI-powered autonomous bots to sensor-based automation systems.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="card text-center">
            <div className="font-tech text-3xl font-bold text-neon-blue mb-2">25+</div>
            <div className="text-gray-400">Completed Projects</div>
          </div>
          <div className="card text-center">
            <div className="font-tech text-3xl font-bold text-neon-green mb-2">10+</div>
            <div className="text-gray-400">Technologies Used</div>
          </div>
          <div className="card text-center">
            <div className="font-tech text-3xl font-bold text-neon-purple mb-2">50+</div>
            <div className="text-gray-400">Contributors</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectsHero
