import { BookOpen, PenTool, Users, TrendingUp } from 'lucide-react'

const BlogHero = () => {
  return (
    <section className="section-padding pt-24 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 animate-float opacity-20">
        <BookOpen className="h-16 w-16 text-neon-blue" />
      </div>
      <div className="absolute bottom-20 right-10 animate-float opacity-20" style={{ animationDelay: '1s' }}>
        <PenTool className="h-20 w-20 text-neon-green" />
      </div>
      <div className="absolute top-1/2 right-1/4 animate-float opacity-10" style={{ animationDelay: '2s' }}>
        <TrendingUp className="h-12 w-12 text-neon-purple" />
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h1 className="font-tech text-4xl md:text-6xl font-bold text-white mb-6">
          RoboCell <span className="text-neon-blue text-glow">Blog</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
          Dive into the world of robotics, AI, and embedded systems through technical articles, 
          tutorials, and insights from our community of innovators.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
          <div className="card text-center">
            <BookOpen className="h-8 w-8 text-neon-blue mx-auto mb-3" />
            <div className="font-tech text-2xl font-bold text-neon-blue mb-1">50+</div>
            <div className="text-gray-400 text-sm">Articles Published</div>
          </div>
          <div className="card text-center">
            <PenTool className="h-8 w-8 text-neon-green mx-auto mb-3" />
            <div className="font-tech text-2xl font-bold text-neon-green mb-1">15+</div>
            <div className="text-gray-400 text-sm">Contributors</div>
          </div>
          <div className="card text-center">
            <Users className="h-8 w-8 text-neon-purple mx-auto mb-3" />
            <div className="font-tech text-2xl font-bold text-neon-purple mb-1">5K+</div>
            <div className="text-gray-400 text-sm">Monthly Readers</div>
          </div>
          <div className="card text-center">
            <TrendingUp className="h-8 w-8 text-neon-orange mx-auto mb-3" />
            <div className="font-tech text-2xl font-bold text-neon-orange mb-1">10+</div>
            <div className="text-gray-400 text-sm">Categories</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogHero
