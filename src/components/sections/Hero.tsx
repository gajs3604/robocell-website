'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { ArrowRight, Play, Cpu, Zap, Cog, Sparkles, Trophy, Target, Gamepad2, Star, Rocket, Brain, Code, Wrench } from 'lucide-react'

const HomeSection = () => {
  const [currentText, setCurrentText] = useState(0)
  const [score, setScore] = useState(0)
  const [level, setLevel] = useState(1)
  const [clickStreak, setClickStreak] = useState(0)
  const [achievements, setAchievements] = useState<string[]>([])
  const [showAchievement, setShowAchievement] = useState<string | null>(null)
  const [gameElements, setGameElements] = useState<Array<{id: number, x: number, y: number, type: string, points: number}>>([])
  const [powerUps, setPowerUps] = useState<Array<{id: number, x: number, y: number, type: string}>>([])
  const [multiplier, setMultiplier] = useState(1)
  const [timeLeft, setTimeLeft] = useState(30)
  const [gameActive, setGameActive] = useState(false)
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, vx: number, vy: number}>>([])

  const heroTexts = [
    "🎮 Ready to Level Up Your Skills?",
    "🚀 Join the Ultimate Tech Adventure!",
    "⚡ Unlock Your Robotics Potential!",
    "🏆 Become a RoboCell Legend!"
  ]

  const skillIcons = [Cpu, Zap, Code, Wrench, Brain, Rocket]

  // Game mechanics
  const startGame = () => {
    setGameActive(true)
    setTimeLeft(30)
    setScore(0)
    setClickStreak(0)
    setMultiplier(1)
    generateGameElements()
  }

  const generateGameElements = useCallback(() => {
    if (!gameActive) return

    const newElement = {
      id: Date.now(),
      x: Math.random() * 80 + 10, // 10% to 90% of screen width
      y: Math.random() * 60 + 20, // 20% to 80% of screen height
      type: skillIcons[Math.floor(Math.random() * skillIcons.length)].name,
      points: Math.floor(Math.random() * 50) + 10
    }

    setGameElements(prev => [...prev, newElement])

    // Remove element after 3 seconds if not clicked
    setTimeout(() => {
      setGameElements(prev => prev.filter(el => el.id !== newElement.id))
    }, 3000)
  }, [gameActive])

  const handleElementClick = (element: any) => {
    setScore(prev => prev + (element.points * multiplier))
    setClickStreak(prev => prev + 1)
    setGameElements(prev => prev.filter(el => el.id !== element.id))

    // Create particle effect
    const newParticles = Array.from({length: 5}, (_, i) => ({
      id: Date.now() + i,
      x: element.x,
      y: element.y,
      vx: (Math.random() - 0.5) * 10,
      vy: (Math.random() - 0.5) * 10
    }))
    setParticles(prev => [...prev, ...newParticles])

    // Check for achievements
    checkAchievements()

    // Increase multiplier on streak
    if (clickStreak > 0 && clickStreak % 5 === 0) {
      setMultiplier(prev => Math.min(prev + 0.5, 5))
    }
  }

  const checkAchievements = () => {
    const newAchievements = []

    if (score >= 100 && !achievements.includes('First Century')) {
      newAchievements.push('First Century')
    }
    if (clickStreak >= 10 && !achievements.includes('Streak Master')) {
      newAchievements.push('Streak Master')
    }
    if (score >= 500 && !achievements.includes('Robot Overlord')) {
      newAchievements.push('Robot Overlord')
    }

    if (newAchievements.length > 0) {
      setAchievements(prev => [...prev, ...newAchievements])
      setShowAchievement(newAchievements[0])
      setTimeout(() => setShowAchievement(null), 3000)
    }
  }

  // Game timer
  useEffect(() => {
    if (gameActive && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(prev => prev - 1), 1000)
      return () => clearTimeout(timer)
    } else if (timeLeft === 0) {
      setGameActive(false)
      setGameElements([])
    }
  }, [gameActive, timeLeft])

  // Generate game elements
  useEffect(() => {
    if (gameActive) {
      const interval = setInterval(generateGameElements, 1500)
      return () => clearInterval(interval)
    }
  }, [gameActive, generateGameElements])

  // Text rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % heroTexts.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  // Particle animation
  useEffect(() => {
    const interval = setInterval(() => {
      setParticles(prev => prev.filter(p => Date.now() - p.id < 1000))
    }, 100)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-dark-800 via-dark-900 to-dark-950 pt-32">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-circuit-pattern opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-robocell-yellow/5 via-transparent to-robocell-orange/5" />

      {/* Game HUD */}
      {gameActive && (
        <div className="absolute top-20 left-4 right-4 z-20">
          <div className="flex justify-between items-center bg-black/50 backdrop-blur-md rounded-xl p-4 border border-robocell-yellow/30">
            <div className="flex space-x-6">
              <div className="text-center">
                <div className="text-robocell-yellow font-tech text-sm">SCORE</div>
                <div className="text-white font-bold text-xl">{score.toLocaleString()}</div>
              </div>
              <div className="text-center">
                <div className="text-robocell-orange font-tech text-sm">STREAK</div>
                <div className="text-white font-bold text-xl">{clickStreak}</div>
              </div>
              <div className="text-center">
                <div className="text-electric-amber font-tech text-sm">MULTIPLIER</div>
                <div className="text-white font-bold text-xl">{multiplier}x</div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-red-400 font-tech text-sm">TIME</div>
              <div className="text-white font-bold text-2xl">{timeLeft}s</div>
            </div>
          </div>
        </div>
      )}

      {/* Achievement Notification */}
      {showAchievement && (
        <div className="absolute top-32 left-1/2 transform -translate-x-1/2 z-30 animate-bounce">
          <div className="bg-gradient-to-r from-robocell-yellow to-robocell-orange rounded-xl p-4 border-2 border-white shadow-2xl">
            <div className="flex items-center space-x-2">
              <Trophy className="h-6 w-6 text-white" />
              <span className="text-white font-tech font-bold">Achievement Unlocked: {showAchievement}!</span>
            </div>
          </div>
        </div>
      )}

      {/* Game Elements */}
      {gameElements.map((element) => {
        const IconComponent = skillIcons.find(icon => icon.name === element.type) || Cpu
        return (
          <div
            key={element.id}
            className="absolute z-10 cursor-pointer transform hover:scale-110 transition-all duration-200"
            style={{ left: `${element.x}%`, top: `${element.y}%` }}
            onClick={() => handleElementClick(element)}
          >
            <div className="relative group">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-robocell-yellow to-robocell-orange flex items-center justify-center animate-pulse hover:animate-bounce shadow-lg shadow-robocell-yellow/50">
                <IconComponent className="h-8 w-8 text-white" />
              </div>
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-robocell-yellow text-xs px-2 py-1 rounded font-tech opacity-0 group-hover:opacity-100 transition-opacity">
                +{element.points}
              </div>
              <div className="absolute inset-0 w-16 h-16 rounded-full bg-robocell-yellow/30 animate-ping" />
            </div>
          </div>
        )
      })}

      {/* Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-2 h-2 bg-robocell-yellow rounded-full animate-ping z-10"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            transform: `translate(${particle.vx}px, ${particle.vy}px)`
          }}
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="font-tech text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              <span className="block bg-gradient-to-r from-robocell-yellow via-robocell-orange to-electric-amber bg-clip-text text-transparent">
                RoboCell
              </span>
              <span className="block text-2xl md:text-3xl lg:text-4xl font-normal text-gray-300 mt-2">
                NIT Durgapur
              </span>
            </h1>

            {/* Animated Tagline */}
            <div className="h-16 md:h-20 flex items-center justify-center">
              <h2 className="font-tech text-xl md:text-3xl lg:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-electric-yellow via-robocell-orange to-electric-amber animate-pulse">
                {heroTexts[currentText]}
              </h2>
            </div>
          </div>

          {/* Interactive Game Description */}
          <div className="max-w-4xl mx-auto">
            {!gameActive ? (
              <div className="space-y-6">
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                  🎮 Welcome to RoboCell's Interactive Challenge! Test your reflexes and unlock achievements while learning about our amazing robotics journey.
                  Click the floating tech icons to score points and discover what makes us the ultimate robotics club! 🚀
                </p>

                {/* Stats Display */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                  <div className="bg-gradient-to-br from-robocell-yellow/20 to-robocell-orange/20 rounded-xl p-4 border border-robocell-yellow/30 backdrop-blur-sm">
                    <div className="text-2xl mb-2">🏆</div>
                    <div className="text-robocell-yellow font-tech text-sm">ACHIEVEMENTS</div>
                    <div className="text-white font-bold text-xl">{achievements.length}/10</div>
                  </div>
                  <div className="bg-gradient-to-br from-robocell-orange/20 to-electric-amber/20 rounded-xl p-4 border border-robocell-orange/30 backdrop-blur-sm">
                    <div className="text-2xl mb-2">⚡</div>
                    <div className="text-robocell-orange font-tech text-sm">HIGH SCORE</div>
                    <div className="text-white font-bold text-xl">{Math.max(score, 0)}</div>
                  </div>
                  <div className="bg-gradient-to-br from-electric-amber/20 to-robocell-yellow/20 rounded-xl p-4 border border-electric-amber/30 backdrop-blur-sm">
                    <div className="text-2xl mb-2">🎯</div>
                    <div className="text-electric-amber font-tech text-sm">BEST STREAK</div>
                    <div className="text-white font-bold text-xl">{Math.max(clickStreak, 0)}</div>
                  </div>
                  <div className="bg-gradient-to-br from-neon-blue/20 to-robocell-yellow/20 rounded-xl p-4 border border-neon-blue/30 backdrop-blur-sm">
                    <div className="text-2xl mb-2">🚀</div>
                    <div className="text-neon-blue font-tech text-sm">LEVEL</div>
                    <div className="text-white font-bold text-xl">{level}</div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center">
                <p className="text-xl text-robocell-yellow font-tech animate-pulse">
                  🎯 Click the floating icons to score points! 🎯
                </p>
                <p className="text-gray-300 mt-2">
                  Build streaks for multipliers • Unlock achievements • Become a RoboCell legend!
                </p>
              </div>
            )}
          </div>

          {/* Game Control Center */}
          <div className="mt-12 relative">
            <div className="flex justify-center items-center space-x-8">
              {!gameActive ? (
                /* Start Game Button */
                <div className="relative group cursor-pointer" onClick={startGame}>
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-robocell-yellow bg-gradient-to-br from-robocell-yellow via-robocell-orange to-electric-amber flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-2xl animate-pulse hover:animate-bounce">
                    <div className="text-center">
                      <Gamepad2 className="h-12 w-12 md:h-16 md:w-16 text-white mx-auto mb-2" />
                      <div className="text-white font-tech font-bold text-sm md:text-base">START GAME</div>
                    </div>
                  </div>
                  <div className="absolute inset-0 w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-robocell-yellow to-robocell-orange opacity-0 group-hover:opacity-30 group-hover:animate-ping" />

                  <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-robocell-yellow text-sm font-tech opacity-0 group-hover:opacity-100 transition-opacity text-center">
                    🎮 Click to start the challenge!
                  </div>
                </div>
              ) : (
                /* Game Active Display */
                <div className="text-center">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-green-400 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center animate-pulse shadow-2xl">
                    <Target className="h-12 w-12 md:h-16 md:w-16 text-white animate-spin" />
                  </div>
                  <div className="mt-4 text-green-400 font-tech font-bold animate-bounce">
                    GAME ACTIVE!
                  </div>
                </div>
              )}
            </div>

            {/* Achievement Showcase */}
            {achievements.length > 0 && (
              <div className="mt-8">
                <h3 className="text-robocell-yellow font-tech text-lg mb-4">🏆 Your Achievements</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="bg-gradient-to-r from-robocell-yellow/20 to-robocell-orange/20 backdrop-blur-sm rounded-full px-4 py-2 border border-robocell-yellow/50">
                      <span className="text-robocell-yellow font-tech text-sm">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Floating Info Badges */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
              <div className="absolute top-4 left-1/4 animate-float bg-robocell-yellow/20 backdrop-blur-sm rounded-full px-3 py-1 text-robocell-yellow text-xs font-bold">
                🏆 Robocon Champions
              </div>
              <div className="absolute top-8 right-1/4 animate-float bg-robocell-orange/20 backdrop-blur-sm rounded-full px-3 py-1 text-robocell-orange text-xs font-bold" style={{ animationDelay: '1s' }}>
                ⚡ 587+ Active Members
              </div>
              <div className="absolute bottom-4 left-1/3 animate-float bg-electric-amber/20 backdrop-blur-sm rounded-full px-3 py-1 text-electric-amber text-xs font-bold" style={{ animationDelay: '2s' }}>
                🚀 30+ Live Projects
              </div>
              <div className="absolute bottom-8 right-1/3 animate-float bg-neon-blue/20 backdrop-blur-sm rounded-full px-3 py-1 text-neon-blue text-xs font-bold" style={{ animationDelay: '3s' }}>
                🎯 Join the Adventure!
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-robocell-yellow rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gradient-to-b from-robocell-yellow to-robocell-orange rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}

export default HomeSection
