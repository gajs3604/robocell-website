'use client'

import { useState, useEffect } from 'react'
import { Bot, Zap, Cpu, Cog, Code, Wrench, Trophy, Users, Rocket, Brain } from 'lucide-react'

const InteractiveShowcase = () => {
  const [activeSkill, setActiveSkill] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const skills = [
    { icon: Code, name: "Programming", description: "Python, C++, Arduino", color: "from-robocell-yellow to-robocell-orange" },
    { icon: Wrench, name: "Hardware", description: "PCB Design, 3D Printing", color: "from-robocell-orange to-electric-amber" },
    { icon: Brain, name: "AI/ML", description: "Computer Vision, Robotics", color: "from-electric-amber to-robocell-yellow" },
    { icon: Trophy, name: "Competitions", description: "Robocon, Hackathons", color: "from-robocell-yellow to-robocell-orange" }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setActiveSkill((prev) => (prev + 1) % skills.length)
      }
    }, 2000)
    return () => clearInterval(interval)
  }, [isHovered, skills.length])

  return (
    <section className="section-padding bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 animate-float">
          <Cpu className="h-8 w-8 text-robocell-yellow" />
        </div>
        <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '1s' }}>
          <Cog className="h-12 w-12 text-robocell-orange animate-spin-slow" />
        </div>
        <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: '2s' }}>
          <Zap className="h-6 w-6 text-electric-yellow" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Interactive Skills Showcase */}
        <div className="mb-16">
          <h2 className="font-tech text-3xl md:text-5xl font-bold text-white mb-4">
            What You'll <span className="bg-gradient-to-r from-robocell-yellow to-robocell-orange bg-clip-text text-transparent">Master</span>
          </h2>
          <p className="text-lg text-gray-300 mb-12">
            Hover over the skills to see what awaits you in RoboCell! 🚀
          </p>

          {/* Interactive Skills Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon
              return (
                <div
                  key={index}
                  className={`relative p-6 rounded-xl cursor-pointer transition-all duration-500 transform hover:scale-105 ${
                    activeSkill === index ? 'bg-gradient-to-br from-robocell-yellow/20 to-robocell-orange/20 border-2 border-robocell-yellow' : 'bg-dark-800/50 border border-gray-700'
                  }`}
                  onMouseEnter={() => {
                    setActiveSkill(index)
                    setIsHovered(true)
                  }}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${skill.color} flex items-center justify-center mx-auto mb-4 transition-all duration-300 ${
                    activeSkill === index ? 'animate-pulse' : ''
                  }`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-tech text-lg font-bold text-white mb-2">{skill.name}</h3>
                  <p className="text-sm text-gray-300">{skill.description}</p>

                  {activeSkill === index && (
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-robocell-yellow/10 to-robocell-orange/10 animate-pulse" />
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Challenge section removed - replaced with MiniQuiz component */}
      </div>
    </section>
  )
}

export default InteractiveShowcase
