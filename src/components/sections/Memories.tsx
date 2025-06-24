'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Heart, Users, Trophy, Rocket, Camera, Star, Calendar, MapPin } from 'lucide-react'

const Memories = () => {
  const [selectedMemory, setSelectedMemory] = useState<number | null>(null)

  const memories = [
    {
      id: 1,
      title: "Robocon 2024 Victory! 🏆",
      description: "Our team celebrating after winning the national championship. Months of hard work paid off!",
      date: "March 2024",
      location: "IIT Delhi",
      image: "/api/placeholder/400/300",
      category: "Competition",
      likes: 287,
      tags: ["#Robocon2024", "#Champions", "#TeamWork"]
    },
    {
      id: 2,
      title: "Late Night Coding Sessions 💻",
      description: "3 AM debugging sessions with pizza and endless energy drinks. These are the moments that build legends!",
      date: "February 2024",
      location: "RoboCell Lab",
      image: "/api/placeholder/400/300",
      category: "Workshop",
      likes: 156,
      tags: ["#CodingLife", "#TeamBonding", "#NightOwls"]
    },
    {
      id: 3,
      title: "Freshers Welcome Party 🎉",
      description: "Welcoming our new family members with open arms and exciting robotics demos!",
      date: "August 2024",
      location: "NIT Durgapur Campus",
      image: "/api/placeholder/400/300",
      category: "Event",
      likes: 342,
      tags: ["#Freshers2024", "#Welcome", "#NewBeginnings"]
    },
    {
      id: 4,
      title: "Robot Building Marathon 🤖",
      description: "48-hour hackathon where we built our autonomous navigation robot from scratch!",
      date: "January 2024",
      location: "Innovation Lab",
      image: "/api/placeholder/400/300",
      category: "Hackathon",
      likes: 198,
      tags: ["#Hackathon", "#Innovation", "#48Hours"]
    },

    {
      id: 6,
      title: "Alumni Meetup 2024 👥",
      description: "Reconnecting with our amazing alumni who are now working at top tech companies worldwide!",
      date: "May 2024",
      location: "Virtual & Campus",
      image: "/api/placeholder/400/300",
      category: "Networking",
      likes: 267,
      tags: ["#Alumni", "#Networking", "#Success"]
    }
  ]

  const categories = ["All", "Competition", "Workshop", "Event", "Hackathon", "Trip", "Networking"]
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredMemories = activeCategory === "All" 
    ? memories 
    : memories.filter(memory => memory.category === activeCategory)

  return (
    <section className="section-padding bg-gradient-to-br from-dark-800 via-dark-900 to-dark-950">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-tech text-3xl md:text-5xl font-bold text-white mb-6">
            📸 <span className="bg-gradient-to-r from-robocell-yellow to-robocell-orange bg-clip-text text-transparent">Memories</span> We Built
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
            Every moment at RoboCell is special! From late-night coding sessions to championship victories, 
            these memories define who we are. 💫
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full font-tech text-sm transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-robocell-yellow to-robocell-orange text-white shadow-lg'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-robocell-yellow/20 hover:text-robocell-yellow border border-gray-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Memories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMemories.map((memory, index) => (
            <div
              key={memory.id}
              className="group relative bg-gradient-to-br from-dark-800/50 to-dark-900/50 rounded-2xl overflow-hidden border border-gray-700/50 hover:border-robocell-yellow/50 transition-all duration-500 hover:scale-105 cursor-pointer backdrop-blur-sm"
              onClick={() => setSelectedMemory(selectedMemory === memory.id ? null : memory.id)}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-robocell-yellow/20 to-robocell-orange/20 flex items-center justify-center">
                  <Camera className="h-16 w-16 text-robocell-yellow/50" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 bg-robocell-yellow/90 text-black text-xs font-tech font-bold rounded-full">
                    {memory.category}
                  </span>
                </div>

                {/* Likes */}
                <div className="absolute top-3 right-3 flex items-center space-x-1 bg-black/50 backdrop-blur-sm rounded-full px-2 py-1">
                  <Heart className="h-3 w-3 text-red-400 fill-current" />
                  <span className="text-white text-xs font-bold">{memory.likes}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-tech text-lg font-bold text-white mb-2 group-hover:text-robocell-yellow transition-colors">
                  {memory.title}
                </h3>
                
                <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                  {memory.description}
                </p>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-3 w-3" />
                    <span>{memory.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-3 w-3" />
                    <span>{memory.location}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1">
                  {memory.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-robocell-yellow/10 text-robocell-yellow text-xs rounded-full border border-robocell-yellow/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Expanded Content */}
                {selectedMemory === memory.id && (
                  <div className="mt-4 pt-4 border-t border-gray-700 animate-fadeIn">
                    <p className="text-gray-300 text-sm mb-3">
                      {memory.description} This moment represents the spirit of innovation and teamwork that defines RoboCell.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4 text-robocell-yellow" />
                        <span className="text-robocell-yellow text-sm font-tech">Team RoboCell</span>
                      </div>
                      <button className="px-3 py-1 bg-gradient-to-r from-robocell-yellow to-robocell-orange text-white text-xs font-tech rounded-full hover:scale-105 transition-transform">
                        View Full Story
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-robocell-yellow/5 to-robocell-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-robocell-yellow/10 to-robocell-orange/10 rounded-2xl p-8 border border-robocell-yellow/30 backdrop-blur-sm max-w-4xl mx-auto">
            <Star className="h-12 w-12 text-robocell-yellow mx-auto mb-4 animate-pulse" />
            <h3 className="font-tech text-2xl font-bold text-white mb-4">
              Want to be part of these amazing memories?
            </h3>
            <p className="text-gray-300 mb-6">
              Join RoboCell and create unforgettable moments while building the future of robotics!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/join"
                className="px-6 py-3 bg-gradient-to-r from-robocell-yellow to-robocell-orange text-white font-tech font-bold rounded-lg hover:scale-105 transition-all duration-300 shadow-lg"
              >
                🚀 Join Our Family
              </a>
              <a
                href="/events"
                className="px-6 py-3 bg-gradient-to-r from-neon-blue to-robocell-yellow text-white font-tech font-bold rounded-lg hover:scale-105 transition-all duration-300 shadow-lg"
              >
                📅 View Upcoming Events
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Memories
