'use client'

import { useState } from 'react'
import { Send, User, Mail, Phone, GraduationCap, Code, FileText } from 'lucide-react'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'

const JoinForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    year: '',
    branch: '',
    rollNumber: '',
    interests: [],
    experience: '',
    motivation: '',
    portfolio: '',
    availability: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const interests = [
    'Robotics Programming',
    'Embedded Systems',
    'AI/Machine Learning',
    'Computer Vision',
    'IoT Development',
    'Hardware Design',
    'Web Development',
    'Mobile Apps',
    'Event Management',
    'Content Creation',
    'Research & Documentation',
    'Teaching & Mentoring'
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleInterestChange = (interest: string) => {
    const currentInterests = formData.interests as string[]
    if (currentInterests.includes(interest)) {
      setFormData({
        ...formData,
        interests: currentInterests.filter(i => i !== interest)
      })
    } else {
      setFormData({
        ...formData,
        interests: [...currentInterests, interest]
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    alert('Application submitted successfully! We\'ll review your application and get back to you soon.')
  }

  return (
    <section id="application" className="section-padding bg-gradient-to-br from-dark-950 via-dark-900 to-dark-800">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-tech text-3xl md:text-5xl font-bold text-white mb-6">
            Submit Your <span className="text-neon-blue">Application</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to join our amazing community? Fill out the application form below and take the first step 
            towards an exciting journey in robotics and innovation.
          </p>
        </div>

        <Card className="bg-gradient-to-br from-dark-800/50 to-dark-900/50 border-neon-blue/30">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <div>
              <h3 className="font-tech text-xl font-bold text-white mb-6 flex items-center">
                <User className="h-6 w-6 text-neon-blue mr-2" />
                Personal Information
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 glass-dark rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neon-blue"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 glass-dark rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neon-blue"
                    placeholder="your.email@nitdgp.ac.in"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 glass-dark rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neon-blue"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Roll Number *
                  </label>
                  <input
                    type="text"
                    name="rollNumber"
                    value={formData.rollNumber}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 glass-dark rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neon-blue"
                    placeholder="Your NIT Durgapur roll number"
                  />
                </div>
              </div>
            </div>

            {/* Academic Information */}
            <div>
              <h3 className="font-tech text-xl font-bold text-white mb-6 flex items-center">
                <GraduationCap className="h-6 w-6 text-neon-green mr-2" />
                Academic Information
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Current Year *
                  </label>
                  <select
                    name="year"
                    value={formData.year}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 glass-dark rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-neon-blue"
                  >
                    <option value="">Select your year</option>
                    <option value="1st">1st Year</option>
                    <option value="2nd">2nd Year</option>
                    <option value="3rd">3rd Year</option>
                    <option value="4th">4th Year</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Branch *
                  </label>
                  <select
                    name="branch"
                    value={formData.branch}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 glass-dark rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-neon-blue"
                  >
                    <option value="">Select your branch</option>
                    <option value="CSE">Computer Science & Engineering</option>
                    <option value="ECE">Electronics & Communication</option>
                    <option value="EE">Electrical Engineering</option>
                    <option value="ME">Mechanical Engineering</option>
                    <option value="CE">Civil Engineering</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Interests */}
            <div>
              <h3 className="font-tech text-xl font-bold text-white mb-6 flex items-center">
                <Code className="h-6 w-6 text-neon-purple mr-2" />
                Areas of Interest
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {interests.map((interest) => (
                  <label
                    key={interest}
                    className={`flex items-center p-3 rounded-lg cursor-pointer transition-all duration-300 ${
                      (formData.interests as string[]).includes(interest)
                        ? 'bg-neon-blue/20 border-neon-blue text-neon-blue'
                        : 'glass-dark text-gray-300 hover:bg-white/10'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={(formData.interests as string[]).includes(interest)}
                      onChange={() => handleInterestChange(interest)}
                      className="sr-only"
                    />
                    <span className="text-sm">{interest}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Experience & Motivation */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Previous Experience (Optional)
                </label>
                <textarea
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 glass-dark rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neon-blue resize-none"
                  placeholder="Tell us about any relevant experience in robotics, programming, or related fields..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Why do you want to join RoboCell? *
                </label>
                <textarea
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 glass-dark rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neon-blue resize-none"
                  placeholder="Share your motivation and what you hope to achieve by joining RoboCell..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Portfolio/GitHub (Optional)
                </label>
                <input
                  type="url"
                  name="portfolio"
                  value={formData.portfolio}
                  onChange={handleChange}
                  className="w-full px-4 py-3 glass-dark rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neon-blue"
                  placeholder="https://github.com/yourusername or your portfolio link"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <Button
                type="submit"
                disabled={isSubmitting}
                size="lg"
                className="w-full md:w-auto"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                    Submitting Application...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    Submit Application
                  </>
                )}
              </Button>
              
              <p className="text-gray-400 text-sm mt-4">
                We'll review your application and get back to you within 1-2 weeks.
              </p>
            </div>
          </form>
        </Card>

        {/* Application Process */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center">
            <div className="w-12 h-12 bg-neon-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="h-6 w-6 text-neon-blue" />
            </div>
            <h3 className="font-tech text-lg font-bold text-white mb-2">1. Apply</h3>
            <p className="text-gray-300 text-sm">Submit your application with all required information</p>
          </Card>
          
          <Card className="text-center">
            <div className="w-12 h-12 bg-neon-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="h-6 w-6 text-neon-green" />
            </div>
            <h3 className="font-tech text-lg font-bold text-white mb-2">2. Interview</h3>
            <p className="text-gray-300 text-sm">Participate in a friendly interview with our team</p>
          </Card>
          
          <Card className="text-center">
            <div className="w-12 h-12 bg-neon-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="h-6 w-6 text-neon-purple" />
            </div>
            <h3 className="font-tech text-lg font-bold text-white mb-2">3. Welcome</h3>
            <p className="text-gray-300 text-sm">Join our orientation and start your RoboCell journey</p>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default JoinForm
