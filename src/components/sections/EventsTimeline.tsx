'use client'

import { useState } from 'react'
import { Calendar, Users, Award, Cpu, CheckCircle } from 'lucide-react'
import Card from '@/components/ui/Card'

const EventsTimeline = () => {
  const [selectedEvent, setSelectedEvent] = useState(0)

  const pastEvents = [
    {
      id: 1,
      title: "Robozido 3.0: AI & Machine Learning",
      date: "November 2023",
      description: "Advanced workshop on AI integration in robotics with hands-on projects using TensorFlow and computer vision.",
      participants: 120,
      highlights: [
        "AI-powered line following robots",
        "Computer vision workshops",
        "Guest lecture by industry expert",
        "Project showcase and competition"
      ],
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500",
      icon: Cpu,
      color: "neon-blue"
    },
    {
      id: 2,
      title: "Robozido 2.0: Sensor Integration",
      date: "March 2022",
      description: "Comprehensive workshop on sensor-based robotics, covering ultrasonic, IR, and environmental sensors.",
      participants: 85,
      highlights: [
        "Obstacle avoidance robots",
        "Environmental monitoring systems",
        "Sensor calibration techniques",
        "Real-world project implementations"
      ],
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=500",
      icon: Award,
      color: "neon-green"
    },
    {
      id: 3,
      title: "Robozido 1.0: Foundation Workshop",
      date: "September 2021",
      description: "Our inaugural workshop introducing students to the basics of robotics, Arduino programming, and circuit design.",
      participants: 60,
      highlights: [
        "Arduino programming basics",
        "Circuit design fundamentals",
        "First robot building experience",
        "Community formation"
      ],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500",
      icon: Users,
      color: "neon-purple"
    },
    {
      id: 4,
      title: "Club Foundation Event",
      date: "January 2021",
      description: "Official launch of RoboCell under CCA with inaugural ceremony and vision presentation.",
      participants: 40,
      highlights: [
        "Official club inauguration",
        "Vision and mission presentation",
        "First team formation",
        "Future roadmap discussion"
      ],
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=500",
      icon: Calendar,
      color: "neon-orange"
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-dark-950 via-dark-900 to-dark-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-tech text-3xl md:text-5xl font-bold text-white mb-6">
            Event <span className="text-neon-blue">Timeline</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A journey through our most impactful events and milestones in the robotics community.
          </p>
        </div>

        {/* Timeline Navigation */}
        <div className="flex justify-center mb-12 overflow-x-auto">
          <div className="flex space-x-4 glass-dark rounded-full p-2 min-w-max">
            {pastEvents.map((event, index) => {
              const Icon = event.icon
              return (
                <button
                  key={event.id}
                  onClick={() => setSelectedEvent(index)}
                  className={`flex items-center px-4 py-3 rounded-full font-tech font-semibold transition-all duration-300 whitespace-nowrap ${
                    selectedEvent === index
                      ? `text-${event.color} bg-white/20 neon-border`
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <Icon className="h-5 w-5 mr-2" />
                  {event.title.split(':')[0]}
                </button>
              )
            })}
          </div>
        </div>

        {/* Event Details */}
        <div className="relative min-h-[500px]">
          {pastEvents.map((event, index) => {
            const Icon = event.icon
            return (
              <div
                key={event.id}
                className={`transition-all duration-500 ${
                  selectedEvent === index
                    ? 'opacity-100 transform translate-y-0'
                    : 'opacity-0 transform translate-y-8 absolute inset-0'
                }`}
              >
                <Card className="overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="relative">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-64 lg:h-full object-cover rounded-lg"
                      />
                      <div className="absolute top-4 left-4">
                        <div className={`p-3 rounded-full bg-${event.color}/20`}>
                          <Icon className={`h-6 w-6 text-${event.color}`} />
                        </div>
                      </div>
                      <div className="absolute bottom-4 right-4">
                        <div className="glass-dark rounded-lg px-3 py-2">
                          <div className="flex items-center text-white">
                            <Users className="h-4 w-4 mr-2" />
                            <span className="font-semibold">{event.participants}</span>
                            <span className="text-gray-300 ml-1">participants</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col justify-center">
                      <div className="mb-4">
                        <span className={`text-${event.color} font-tech text-sm font-semibold`}>
                          {event.date}
                        </span>
                        <h3 className="font-tech text-3xl font-bold text-white mt-2">
                          {event.title}
                        </h3>
                      </div>
                      
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {event.description}
                      </p>
                      
                      <div>
                        <h4 className="font-tech text-lg font-semibold text-white mb-4">
                          Key Highlights
                        </h4>
                        <div className="space-y-3">
                          {event.highlights.map((highlight, idx) => (
                            <div key={idx} className="flex items-center">
                              <CheckCircle className={`h-5 w-5 text-${event.color} mr-3 flex-shrink-0`} />
                              <span className="text-gray-300">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            )
          })}
        </div>

        {/* Timeline Visualization */}
        <div className="mt-16">
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-2 w-full bg-gradient-to-r from-neon-blue via-neon-green via-neon-purple to-neon-orange opacity-30 rounded-full" />
            <div className="flex justify-between items-center relative">
              {pastEvents.map((event, index) => (
                <div key={event.id} className="flex flex-col items-center">
                  <div
                    className={`w-6 h-6 rounded-full transition-all duration-300 border-4 border-dark-900 ${
                      selectedEvent === index
                        ? `bg-${event.color} animate-pulse shadow-lg`
                        : 'bg-gray-600'
                    }`}
                  />
                  <span className="mt-3 font-tech text-xs text-gray-400 text-center max-w-20">
                    {event.date}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center">
            <div className="font-tech text-4xl font-bold text-neon-blue mb-2">
              {pastEvents.reduce((sum, event) => sum + event.participants, 0)}+
            </div>
            <div className="text-gray-400">Total Participants</div>
          </Card>
          <Card className="text-center">
            <div className="font-tech text-4xl font-bold text-neon-green mb-2">
              {pastEvents.length}
            </div>
            <div className="text-gray-400">Major Events</div>
          </Card>
          <Card className="text-center">
            <div className="font-tech text-4xl font-bold text-neon-purple mb-2">
              100%
            </div>
            <div className="text-gray-400">Success Rate</div>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default EventsTimeline
