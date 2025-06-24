'use client'

import { useState } from 'react'
import { Github, ExternalLink, Filter, Search } from 'lucide-react'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

interface Project {
  id: number
  title: string
  description: string
  image: string
  category: string
  technologies: string[]
  githubUrl?: string
  demoUrl?: string
  featured: boolean
}

const ProjectsGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  const categories = ['All', 'AI/ML', 'Sensors', 'Autonomous', 'IoT', 'Embedded']

  const projects: Project[] = [
    {
      id: 1,
      title: "Robocon 2025 Competition Bot",
      description: "Advanced autonomous robot designed for Robocon 2025 competition with precision navigation and task execution capabilities.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500",
      category: "AI/ML",
      technologies: ["Python", "OpenCV", "TensorFlow", "Arduino", "Raspberry Pi"],
      githubUrl: "#",
      demoUrl: "#",
      featured: true
    },
    {
      id: 2,
      title: "Smart Home Automation System",
      description: "IoT-based home automation with voice control, mobile app integration, and energy monitoring capabilities.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500",
      category: "IoT",
      technologies: ["ESP32", "Node.js", "React Native", "Firebase", "Alexa SDK"],
      githubUrl: "#",
      demoUrl: "#",
      featured: true
    },
    {
      id: 3,
      title: "Obstacle Avoidance Robot",
      description: "Autonomous robot with ultrasonic sensors and servo motors for real-time obstacle detection and avoidance.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=500",
      category: "Sensors",
      technologies: ["Arduino", "Ultrasonic Sensors", "Servo Motors", "C++"],
      githubUrl: "#",
      featured: false
    },
    {
      id: 4,
      title: "Gesture Controlled Robotic Arm",
      description: "Robotic arm controlled by hand gestures using computer vision and servo motor control systems.",
      image: "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?w=500",
      category: "AI/ML",
      technologies: ["Python", "MediaPipe", "Arduino", "Servo Motors", "OpenCV"],
      githubUrl: "#",
      demoUrl: "#",
      featured: true
    },
    {
      id: 5,
      title: "Weather Monitoring Station",
      description: "Comprehensive weather monitoring system with real-time data collection and web dashboard visualization.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500",
      category: "IoT",
      technologies: ["ESP8266", "DHT22", "BMP180", "Node.js", "Chart.js"],
      githubUrl: "#",
      featured: false
    },
    {
      id: 6,
      title: "Autonomous Delivery Drone",
      description: "GPS-guided delivery drone with payload management and automated landing capabilities.",
      image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=500",
      category: "Autonomous",
      technologies: ["Pixhawk", "GPS", "Telemetry", "Mission Planner", "C++"],
      githubUrl: "#",
      featured: true
    }
  ]

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  return (
    <section className="section-padding bg-dark-800/30">
      <div className="max-w-7xl mx-auto">
        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 glass-dark rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neon-blue"
            />
          </div>
          
          {/* Category Filter */}
          <div className="flex items-center gap-2">
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
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h2 className="font-tech text-3xl font-bold text-white mb-8">
            Featured <span className="text-neon-blue">Projects</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.filter(p => p.featured).slice(0, 2).map((project) => (
              <ProjectCard key={project.id} project={project} featured />
            ))}
          </div>
        </div>

        {/* All Projects */}
        <div>
          <h2 className="font-tech text-3xl font-bold text-white mb-8">
            All <span className="text-neon-green">Projects</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-400 text-lg">No projects found matching your criteria.</p>
          </div>
        )}
      </div>
    </section>
  )
}

interface ProjectCardProps {
  project: Project
  featured?: boolean
}

const ProjectCard = ({ project, featured = false }: ProjectCardProps) => {
  return (
    <Card className={`group ${featured ? 'lg:col-span-1' : ''}`}>
      <div className="relative overflow-hidden rounded-lg mb-4">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
            project.category === 'AI/ML' ? 'bg-neon-blue/20 text-neon-blue' :
            project.category === 'IoT' ? 'bg-neon-green/20 text-neon-green' :
            project.category === 'Sensors' ? 'bg-neon-purple/20 text-neon-purple' :
            project.category === 'Autonomous' ? 'bg-neon-orange/20 text-neon-orange' :
            'bg-gray-500/20 text-gray-300'
          }`}>
            {project.category}
          </span>
        </div>
      </div>
      
      <h3 className="font-tech text-xl font-bold text-white mb-3 group-hover:text-neon-blue transition-colors">
        {project.title}
      </h3>
      
      <p className="text-gray-300 mb-4 leading-relaxed">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.slice(0, 3).map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded"
          >
            {tech}
          </span>
        ))}
        {project.technologies.length > 3 && (
          <span className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded">
            +{project.technologies.length - 3} more
          </span>
        )}
      </div>
      
      <div className="flex gap-3">
        {project.githubUrl && (
          <Button variant="outline" size="sm" className="flex-1">
            <Github className="h-4 w-4 mr-2" />
            Code
          </Button>
        )}
        {project.demoUrl && (
          <Button variant="primary" size="sm" className="flex-1">
            <ExternalLink className="h-4 w-4 mr-2" />
            Demo
          </Button>
        )}
      </div>
    </Card>
  )
}

export default ProjectsGrid
