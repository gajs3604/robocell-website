import { Trophy, Users, Lightbulb, Target, Star, Award } from 'lucide-react'

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "Robozido Success",
      description: "Successfully organized 3 editions of Robozido workshops",
      stats: "300+ participants",
      color: "neon-blue"
    },
    {
      icon: Users,
      title: "Growing Community",
      description: "Built a strong community of robotics enthusiasts",
      stats: "50+ active members",
      color: "neon-green"
    },
    {
      icon: Lightbulb,
      title: "Innovation Projects",
      description: "Completed numerous cutting-edge robotics projects",
      stats: "25+ projects",
      color: "neon-purple"
    },
    {
      icon: Target,
      title: "Skill Development",
      description: "Comprehensive training in robotics and embedded systems",
      stats: "100+ skills taught",
      color: "neon-orange"
    },
    {
      icon: Star,
      title: "Recognition",
      description: "Recognized as premier robotics club in NIT Durgapur",
      stats: "Top-rated club",
      color: "neon-pink"
    },
    {
      icon: Award,
      title: "Industry Connect",
      description: "Established partnerships with leading tech companies",
      stats: "5+ partnerships",
      color: "neon-blue"
    }
  ]

  return (
    <section className="section-padding bg-dark-800/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-tech text-3xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-neon-blue">Achievements</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Celebrating milestones and recognizing the impact we've made in the robotics community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            return (
              <div
                key={index}
                className="card group hover:scale-105 transition-all duration-300"
              >
                <div className="text-center">
                  <div className={`inline-flex p-4 rounded-full bg-${achievement.color}/20 mb-4 group-hover:animate-pulse`}>
                    <Icon className={`h-8 w-8 text-${achievement.color}`} />
                  </div>
                  <h3 className="font-tech text-xl font-bold text-white mb-3">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {achievement.description}
                  </p>
                  <div className={`inline-block px-4 py-2 rounded-full bg-${achievement.color}/10 border border-${achievement.color}/30`}>
                    <span className={`text-${achievement.color} font-semibold text-sm`}>
                      {achievement.stats}
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Special Highlight */}
        <div className="mt-16 card bg-gradient-to-r from-neon-blue/10 via-neon-purple/10 to-neon-green/10 border-neon-blue/30">
          <div className="text-center">
            <h3 className="font-tech text-2xl font-bold text-white mb-4">
              🏆 Flagship Achievement: Robozido Workshop Series
            </h3>
            <p className="text-gray-300 leading-relaxed max-w-4xl mx-auto mb-6">
              Our Robozido workshop series has become the most anticipated robotics event at NIT Durgapur. 
              Starting from basic Arduino programming to advanced AI-integrated robotics, we've successfully 
              trained hundreds of students and created a lasting impact on the technical community.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="font-tech text-3xl font-bold text-neon-blue mb-2">Robozido 1.0</div>
                <div className="text-gray-400">Foundation & Basics</div>
              </div>
              <div className="text-center">
                <div className="font-tech text-3xl font-bold text-neon-green mb-2">Robozido 2.0</div>
                <div className="text-gray-400">Advanced Sensors</div>
              </div>
              <div className="text-center">
                <div className="font-tech text-3xl font-bold text-neon-purple mb-2">Robozido 3.0</div>
                <div className="text-gray-400">AI Integration</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Achievements
