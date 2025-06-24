'use client'

import { useState } from 'react'
import { Github, Linkedin, Mail, Filter } from 'lucide-react'
import Card from '@/components/ui/Card'

interface TeamMember {
  id: number
  name: string
  role: string
  category: string
  image: string
  bio: string
  skills: string[]
  social: {
    github?: string
    linkedin?: string
    email?: string
  }
  year: string
}

const TeamGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', 'Core Team', 'Mentors', 'Seniors', 'Juniors']

  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Arjun Sharma",
      role: "Club President",
      category: "Core Team",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300",
      bio: "Leading RoboCell with vision for innovation in AI and robotics. Passionate about autonomous systems.",
      skills: ["Leadership", "AI/ML", "Python", "ROS"],
      social: {
        github: "#",
        linkedin: "#",
        email: "arjun@robocell.com"
      },
      year: "4th Year, CSE"
    },
    {
      id: 2,
      name: "Priya Patel",
      role: "Technical Lead",
      category: "Core Team",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300",
      bio: "Expert in embedded systems and IoT. Leads technical workshops and project development.",
      skills: ["Embedded Systems", "IoT", "C/C++", "Arduino"],
      social: {
        github: "#",
        linkedin: "#",
        email: "priya@robocell.com"
      },
      year: "4th Year, ECE"
    },
    {
      id: 3,
      name: "Dr. Rajesh Kumar",
      role: "Faculty Mentor",
      category: "Mentors",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300",
      bio: "Professor of Electronics Engineering with 15+ years experience in robotics research.",
      skills: ["Robotics", "Control Systems", "Research", "Mentoring"],
      social: {
        linkedin: "#",
        email: "rajesh.kumar@nitdgp.ac.in"
      },
      year: "Faculty"
    },
    {
      id: 4,
      name: "Rohit Singh",
      role: "Hardware Specialist",
      category: "Core Team",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300",
      bio: "Specializes in PCB design and hardware integration for robotics projects.",
      skills: ["PCB Design", "Hardware", "CAD", "3D Printing"],
      social: {
        github: "#",
        linkedin: "#",
        email: "rohit@robocell.com"
      },
      year: "3rd Year, EE"
    },
    {
      id: 5,
      name: "Sneha Gupta",
      role: "Software Developer",
      category: "Seniors",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300",
      bio: "Full-stack developer working on web platforms and mobile apps for robotics control.",
      skills: ["Web Development", "React", "Node.js", "Mobile Apps"],
      social: {
        github: "#",
        linkedin: "#",
        email: "sneha@robocell.com"
      },
      year: "3rd Year, CSE"
    },
    {
      id: 6,
      name: "Amit Verma",
      role: "AI Research Lead",
      category: "Seniors",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300",
      bio: "Researching computer vision and machine learning applications in autonomous robotics.",
      skills: ["Computer Vision", "TensorFlow", "OpenCV", "Deep Learning"],
      social: {
        github: "#",
        linkedin: "#",
        email: "amit@robocell.com"
      },
      year: "3rd Year, CSE"
    },
    {
      id: 7,
      name: "Kavya Reddy",
      role: "Event Coordinator",
      category: "Core Team",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300",
      bio: "Organizes workshops and events, manages community outreach and partnerships.",
      skills: ["Event Management", "Communication", "Marketing", "Leadership"],
      social: {
        linkedin: "#",
        email: "kavya@robocell.com"
      },
      year: "2nd Year, ME"
    },
    {
      id: 8,
      name: "Vikash Kumar",
      role: "Junior Developer",
      category: "Juniors",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300",
      bio: "Enthusiastic about robotics programming and eager to contribute to innovative projects.",
      skills: ["Python", "Arduino", "Basic Robotics", "Learning"],
      social: {
        github: "#",
        email: "vikash@robocell.com"
      },
      year: "2nd Year, CSE"
    }
  ]

  const filteredMembers = teamMembers.filter(member => 
    selectedCategory === 'All' || member.category === selectedCategory
  )

  return (
    <section className="section-padding bg-dark-800/30">
      <div className="max-w-7xl mx-auto">
        {/* Category Filter */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <Filter className="h-5 w-5 text-gray-400" />
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-neon-blue text-white'
                    : 'glass text-gray-300 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>

        {filteredMembers.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-400 text-lg">No team members found in this category.</p>
          </div>
        )}

        {/* Join Team CTA */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-neon-blue/10 via-neon-purple/10 to-neon-green/10 border-neon-blue/30">
            <h3 className="font-tech text-2xl font-bold text-white mb-4">
              Want to Join Our Team?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              We're always looking for passionate individuals who want to make a difference in robotics. 
              Join us and be part of something extraordinary!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/join"
                className="btn-primary"
              >
                Apply Now
              </a>
              <a
                href="/contact"
                className="btn-secondary"
              >
                Get in Touch
              </a>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}

interface TeamMemberCardProps {
  member: TeamMember
}

const TeamMemberCard = ({ member }: TeamMemberCardProps) => {
  return (
    <Card className="group text-center hover:scale-105 transition-all duration-300">
      <div className="relative mb-4">
        <img
          src={member.image}
          alt={member.name}
          className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-gray-700 group-hover:border-neon-blue transition-colors duration-300"
        />
        <div className="absolute inset-0 w-24 h-24 rounded-full mx-auto bg-neon-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <h3 className="font-tech text-lg font-bold text-white mb-1 group-hover:text-neon-blue transition-colors">
        {member.name}
      </h3>
      
      <p className="text-neon-blue font-semibold mb-1">{member.role}</p>
      <p className="text-gray-400 text-sm mb-3">{member.year}</p>
      
      <p className="text-gray-300 text-sm mb-4 leading-relaxed">
        {member.bio}
      </p>
      
      <div className="flex flex-wrap gap-1 mb-4 justify-center">
        {member.skills.slice(0, 3).map((skill) => (
          <span
            key={skill}
            className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded"
          >
            {skill}
          </span>
        ))}
        {member.skills.length > 3 && (
          <span className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded">
            +{member.skills.length - 3}
          </span>
        )}
      </div>
      
      <div className="flex justify-center space-x-3">
        {member.social.github && (
          <a
            href={member.social.github}
            className="text-gray-400 hover:text-neon-blue transition-colors duration-300"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
        )}
        {member.social.linkedin && (
          <a
            href={member.social.linkedin}
            className="text-gray-400 hover:text-neon-blue transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        )}
        {member.social.email && (
          <a
            href={`mailto:${member.social.email}`}
            className="text-gray-400 hover:text-neon-blue transition-colors duration-300"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
        )}
      </div>
    </Card>
  )
}

export default TeamGrid
