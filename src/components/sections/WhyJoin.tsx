import { BookOpen, Users, Trophy, Briefcase, Code, Heart } from 'lucide-react'
import Card from '@/components/ui/Card'

const WhyJoin = () => {
  const benefits = [
    {
      icon: BookOpen,
      title: "Learn Cutting-Edge Skills",
      description: "Master robotics, AI, embedded systems, and automation technologies through hands-on projects and expert mentorship.",
      color: "neon-blue"
    },
    {
      icon: Users,
      title: "Build Your Network",
      description: "Connect with like-minded peers, industry professionals, and alumni who share your passion for technology.",
      color: "neon-green"
    },
    {
      icon: Trophy,
      title: "Compete & Win",
      description: "Participate in national competitions, hackathons, and showcase your innovations at prestigious events.",
      color: "neon-purple"
    },
    {
      icon: Briefcase,
      title: "Career Opportunities",
      description: "Access exclusive internships, job placements, and startup opportunities through our industry partnerships.",
      color: "neon-orange"
    },
    {
      icon: Code,
      title: "Real-World Projects",
      description: "Work on impactful projects that solve real problems and contribute to open-source robotics community.",
      color: "neon-pink"
    },
    {
      icon: Heart,
      title: "Supportive Community",
      description: "Join a family of passionate innovators who support each other's growth and celebrate collective success.",
      color: "neon-blue"
    }
  ]

  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Alumni, Software Engineer at Tesla",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
      quote: "RoboCell gave me the foundation I needed to land my dream job. The hands-on experience and mentorship were invaluable."
    },
    {
      name: "Ananya Patel",
      role: "Current Member, 3rd Year CSE",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150",
      quote: "Being part of RoboCell has been the highlight of my college experience. I've grown both technically and personally."
    },
    {
      name: "Karthik Reddy",
      role: "Alumni, Robotics Startup Founder",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
      quote: "The entrepreneurial spirit and technical skills I developed at RoboCell helped me start my own robotics company."
    }
  ]

  const roles = [
    {
      title: "Technical Developer",
      description: "Work on robotics projects, embedded systems, and AI implementations",
      skills: ["Programming", "Hardware", "Problem Solving"]
    },
    {
      title: "Design & Media",
      description: "Create visual content, manage social media, and design promotional materials",
      skills: ["Graphic Design", "Video Editing", "Social Media"]
    },
    {
      title: "Event Management",
      description: "Organize workshops, competitions, and community outreach programs",
      skills: ["Organization", "Communication", "Leadership"]
    },
    {
      title: "Research & Documentation",
      description: "Conduct research, write technical blogs, and maintain project documentation",
      skills: ["Research", "Writing", "Documentation"]
    }
  ]

  return (
    <section id="benefits" className="section-padding bg-dark-800/30">
      <div className="max-w-7xl mx-auto">
        {/* Why Join Section */}
        <div className="text-center mb-16">
          <h2 className="font-tech text-3xl md:text-5xl font-bold text-white mb-6">
            Why Join <span className="text-neon-blue">RoboCell?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the amazing benefits and opportunities that await you as a RoboCell member.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <Card key={index} className="text-center group hover:scale-105 transition-all duration-300">
                <div className={`inline-flex p-4 rounded-full bg-${benefit.color}/20 mb-4 group-hover:animate-pulse`}>
                  <Icon className={`h-8 w-8 text-${benefit.color}`} />
                </div>
                <h3 className="font-tech text-xl font-bold text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {benefit.description}
                </p>
              </Card>
            )
          })}
        </div>

        {/* Available Roles */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="font-tech text-3xl font-bold text-white mb-4">
              Find Your <span className="text-neon-green">Perfect Role</span>
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We have opportunities for everyone, regardless of your background or experience level.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {roles.map((role, index) => (
              <Card key={index} className="group">
                <h4 className="font-tech text-xl font-bold text-white mb-3 group-hover:text-neon-blue transition-colors">
                  {role.title}
                </h4>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {role.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {role.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-neon-blue/20 text-neon-blue text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <div className="text-center mb-12">
            <h3 className="font-tech text-3xl font-bold text-white mb-4">
              What Our <span className="text-neon-purple">Members Say</span>
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Hear from current members and alumni about their RoboCell experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="text-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mx-auto mb-4 object-cover border-2 border-neon-blue/50"
                />
                <blockquote className="text-gray-300 italic mb-4 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <div className="font-tech font-semibold text-white">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">{testimonial.role}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyJoin
