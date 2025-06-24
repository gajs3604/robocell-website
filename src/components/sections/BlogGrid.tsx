'use client'

import { useState } from 'react'
import { Calendar, Clock, User, ArrowRight, Filter, Search } from 'lucide-react'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

interface BlogPost {
  id: number
  title: string
  excerpt: string
  content: string
  author: string
  authorImage: string
  date: string
  readTime: string
  category: string
  tags: string[]
  image: string
  featured: boolean
}

// Utility function to format dates
const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

const BlogGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  const categories = ['All', 'Tutorials', 'Projects', 'AI/ML', 'Hardware', 'Events', 'Career']

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Getting Started with Arduino: A Beginner's Guide",
      excerpt: "Learn the fundamentals of Arduino programming and build your first robotics project from scratch.",
      content: "Complete guide to Arduino programming...",
      author: "Priya Patel",
      authorImage: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "Tutorials",
      tags: ["Arduino", "Beginner", "Electronics"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500",
      featured: true
    },
    {
      id: 2,
      title: "Building an AI-Powered Line Following Robot",
      excerpt: "Explore how computer vision and machine learning can enhance traditional line following algorithms.",
      content: "Advanced robotics with AI integration...",
      author: "Amit Verma",
      authorImage: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100",
      date: "2024-01-10",
      readTime: "12 min read",
      category: "AI/ML",
      tags: ["AI", "Computer Vision", "Robotics"],
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500",
      featured: true
    },
    {
      id: 3,
      title: "Robozido 3.0: Event Highlights and Learnings",
      excerpt: "A comprehensive recap of our latest workshop series and the amazing projects created by participants.",
      content: "Event recap and highlights...",
      author: "Kavya Reddy",
      authorImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100",
      date: "2024-01-05",
      readTime: "6 min read",
      category: "Events",
      tags: ["Robozido", "Workshop", "Community"],
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=500",
      featured: false
    },
    {
      id: 4,
      title: "PCB Design Best Practices for Robotics",
      excerpt: "Essential tips and techniques for designing efficient and reliable PCBs for your robotics projects.",
      content: "PCB design guidelines and best practices...",
      author: "Rohit Singh",
      authorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
      date: "2023-12-28",
      readTime: "10 min read",
      category: "Hardware",
      tags: ["PCB", "Hardware", "Design"],
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=500",
      featured: false
    },
    {
      id: 5,
      title: "Career Paths in Robotics: Industry Insights",
      excerpt: "Explore different career opportunities in robotics and automation, from startups to tech giants.",
      content: "Career guidance and industry insights...",
      author: "Dr. Rajesh Kumar",
      authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100",
      date: "2023-12-20",
      readTime: "7 min read",
      category: "Career",
      tags: ["Career", "Industry", "Guidance"],
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500",
      featured: false
    },
    {
      id: 6,
      title: "IoT Integration in Modern Robotics",
      excerpt: "Discover how Internet of Things technologies are revolutionizing robotics and automation systems.",
      content: "IoT and robotics integration guide...",
      author: "Sneha Gupta",
      authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100",
      date: "2023-12-15",
      readTime: "9 min read",
      category: "Projects",
      tags: ["IoT", "Connectivity", "Automation"],
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500",
      featured: false
    }
  ]

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
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
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 glass-dark rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-robocell-yellow"
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
                      ? 'bg-gradient-to-r from-robocell-yellow to-robocell-orange text-dark-900'
                      : 'glass text-gray-300 hover:text-robocell-yellow'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Posts */}
        <div className="mb-16">
          <h2 className="font-tech text-3xl font-bold text-white mb-8">
            Featured <span className="bg-gradient-to-r from-robocell-yellow to-robocell-orange bg-clip-text text-transparent">Articles</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredPosts.filter(p => p.featured).slice(0, 2).map((post) => (
              <BlogCard key={post.id} post={post} featured />
            ))}
          </div>
        </div>

        {/* All Posts */}
        <div>
          <h2 className="font-tech text-3xl font-bold text-white mb-8">
            Latest <span className="bg-gradient-to-r from-robocell-orange to-electric-amber bg-clip-text text-transparent">Articles</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-400 text-lg">No articles found matching your criteria.</p>
          </div>
        )}

        {/* Newsletter Signup */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-robocell-yellow/10 via-robocell-orange/10 to-electric-amber/10 border-robocell-yellow/30">
            <h3 className="font-tech text-2xl font-bold text-white mb-4">
              📚 Stay Updated with Our Latest Articles
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter and never miss out on the latest tutorials, 
              project guides, and insights from the robotics world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 glass-dark rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-robocell-yellow"
              />
              <Button>Subscribe</Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}

interface BlogCardProps {
  post: BlogPost
  featured?: boolean
}

const BlogCard = ({ post, featured = false }: BlogCardProps) => {
  return (
    <Card className={`group ${featured ? 'lg:col-span-1' : ''}`}>
      <div className="relative overflow-hidden rounded-lg mb-4">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
            post.category === 'Tutorials' ? 'bg-robocell-yellow/20 text-robocell-yellow' :
            post.category === 'AI/ML' ? 'bg-robocell-orange/20 text-robocell-orange' :
            post.category === 'Hardware' ? 'bg-electric-amber/20 text-electric-amber' :
            post.category === 'Events' ? 'bg-robocell-accent/20 text-robocell-accent' :
            'bg-gray-500/20 text-gray-300'
          }`}>
            {post.category}
          </span>
        </div>
      </div>
      
      <h3 className="font-tech text-xl font-bold text-white mb-3 group-hover:text-robocell-yellow transition-colors">
        {post.title}
      </h3>
      
      <p className="text-gray-300 mb-4 leading-relaxed">
        {post.excerpt}
      </p>
      
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <img
            src={post.authorImage}
            alt={post.author}
            className="w-8 h-8 rounded-full object-cover"
          />
          <div>
            <p className="text-white text-sm font-medium">{post.author}</p>
            <div className="flex items-center text-gray-400 text-xs space-x-2">
              <Calendar className="h-3 w-3" />
              <span>{formatDate(post.date)}</span>
              <Clock className="h-3 w-3 ml-2" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {post.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded"
          >
            #{tag}
          </span>
        ))}
      </div>
      
      <Button variant="outline" size="sm" className="w-full group">
        Read More
        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </Button>
    </Card>
  )
}

export default BlogGrid
