'use client'

import { useState } from 'react'
import { Calendar, Users, Award, Rocket } from 'lucide-react'

const Timeline = () => {
  const [activeYear, setActiveYear] = useState(2023)

  const timelineData = [
    {
      year: 2020,
      title: "Foundation",
      icon: Rocket,
      color: "neon-blue",
      events: [
        "RoboCell officially established under CCA",
        "First core team formation",
        "Initial workshop planning"
      ]
    },
    {
      year: 2021,
      title: "Growth",
      icon: Users,
      color: "neon-green",
      events: [
        "Robozido 1.0 - First major workshop",
        "50+ students participated",
        "Basic robotics and Arduino workshops"
      ]
    },
    {
      year: 2022,
      title: "Expansion",
      icon: Award,
      color: "neon-purple",
      events: [
        "Robozido 2.0 - Advanced workshops",
        "Sensor-based bot competitions",
        "Collaboration with other technical clubs"
      ]
    },
    {
      year: 2023,
      title: "Innovation",
      icon: Calendar,
      color: "neon-orange",
      events: [
        "Robozido 3.0 - AI and ML integration",
        "Advanced embedded systems projects",
        "Industry partnerships established"
      ]
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-dark-950 via-dark-900 to-dark-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-tech text-3xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-neon-blue">Journey</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From humble beginnings to becoming a leading robotics community - here's our story.
          </p>
        </div>

        {/* Timeline Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-4 glass-dark rounded-full p-2">
            {timelineData.map((item) => (
              <button
                key={item.year}
                onClick={() => setActiveYear(item.year)}
                className={`px-6 py-3 rounded-full font-tech font-semibold transition-all duration-300 ${
                  activeYear === item.year
                    ? `text-${item.color} bg-white/20 neon-border`
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {item.year}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline Content */}
        <div className="relative">
          {timelineData.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.year}
                className={`transition-all duration-500 ${
                  activeYear === item.year
                    ? 'opacity-100 transform translate-y-0'
                    : 'opacity-0 transform translate-y-8 absolute inset-0'
                }`}
              >
                <div className="card max-w-4xl mx-auto">
                  <div className="flex items-center mb-6">
                    <div className={`p-4 rounded-full bg-${item.color}/20 mr-6`}>
                      <Icon className={`h-8 w-8 text-${item.color}`} />
                    </div>
                    <div>
                      <h3 className="font-tech text-3xl font-bold text-white">
                        {item.year} - {item.title}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {item.events.map((event, index) => (
                      <div key={index} className="glass rounded-lg p-4">
                        <p className="text-gray-300">{event}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Timeline Visualization */}
        <div className="mt-16">
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-neon-blue via-neon-green to-neon-purple opacity-50" />
            <div className="flex justify-between items-center">
              {timelineData.map((item, index) => (
                <div key={item.year} className="flex flex-col items-center">
                  <div
                    className={`w-4 h-4 rounded-full transition-all duration-300 ${
                      activeYear === item.year
                        ? `bg-${item.color} animate-pulse`
                        : 'bg-gray-600'
                    }`}
                  />
                  <span className="mt-2 font-tech text-sm text-gray-400">{item.year}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Timeline
