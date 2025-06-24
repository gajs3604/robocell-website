import { Eye, Target, Heart, Gamepad2, Users, Zap } from 'lucide-react'

const Mission = () => {
  return (
    <section className="section-padding bg-dark-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-tech text-3xl md:text-5xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-robocell-yellow to-robocell-orange bg-clip-text text-transparent">Purpose</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Driven by passion, guided by innovation, and committed to excellence in robotics and automation! 🚀⚡
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Mission */}
          <div className="card text-center group">
            <div className="relative mb-6">
              <Target className="h-16 w-16 text-robocell-yellow mx-auto group-hover:animate-pulse" />
              <div className="absolute inset-0 h-16 w-16 text-robocell-yellow opacity-30 mx-auto group-hover:animate-ping" />
            </div>
            <h3 className="font-tech text-2xl font-bold text-white mb-4">Mission</h3>
            <p className="text-gray-300 leading-relaxed">
              To be the coolest robotics club at NIT Durgapur! 🤖 We turn classroom theory into
              epic robot builds, dominate competitions like Robocon, and create tech that makes
              people go "How did they even do that?!" 🔥
            </p>
          </div>

          {/* Vision */}
          <div className="card text-center group">
            <div className="relative mb-6">
              <Eye className="h-16 w-16 text-robocell-orange mx-auto group-hover:animate-pulse" />
              <div className="absolute inset-0 h-16 w-16 text-robocell-orange opacity-30 mx-auto group-hover:animate-ping" />
            </div>
            <h3 className="font-tech text-2xl font-bold text-white mb-4">Vision</h3>
            <p className="text-gray-300 leading-relaxed">
              To create a squad of robot-building legends who crush competitions, invent
              mind-blowing tech, and become the engineers everyone wants to hire! 🚀
              From campus to global stage - we're building the future! ⚡
            </p>
          </div>

          {/* Values */}
          <div className="card text-center group">
            <div className="relative mb-6">
              <Heart className="h-16 w-16 text-electric-amber mx-auto group-hover:animate-pulse" />
              <div className="absolute inset-0 h-16 w-16 text-electric-amber opacity-30 mx-auto group-hover:animate-ping" />
            </div>
            <h3 className="font-tech text-2xl font-bold text-white mb-4">Values</h3>
            <p className="text-gray-300 leading-relaxed">
              Innovation, teamwork, excellence, and never-stop-learning vibes! 💡 We share
              knowledge like memes, support each other through debugging nightmares, and
              push boundaries like there's no tomorrow! 🔥
            </p>
          </div>
        </div>

        {/* Journey section removed - replaced with Memories component */}
      </div>
    </section>
  )
}

export default Mission
