'use client'

import { useState } from 'react'
import { CheckCircle, XCircle, Trophy, Brain, Zap, Lightbulb } from 'lucide-react'

const MiniQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const [quizCompleted, setQuizCompleted] = useState(false)

  const questions = [
    {
      question: "What does 'Arduino' primarily help with?",
      options: [
        "Web Development",
        "Microcontroller Programming",
        "Database Management",
        "Graphic Design"
      ],
      correct: 1,
      explanation: "Arduino is a platform for programming microcontrollers used in robotics and embedded systems!"
    },
    {
      question: "Which sensor is commonly used for obstacle detection in robots?",
      options: [
        "Temperature Sensor",
        "Ultrasonic Sensor",
        "Light Sensor",
        "Humidity Sensor"
      ],
      correct: 1,
      explanation: "Ultrasonic sensors use sound waves to measure distance, perfect for obstacle detection!"
    },
    {
      question: "What does 'PWM' stand for in robotics?",
      options: [
        "Power Wave Modulation",
        "Pulse Width Modulation",
        "Programmable Wire Management",
        "Precision Weight Measurement"
      ],
      correct: 1,
      explanation: "PWM controls motor speed and LED brightness by varying the pulse width of signals!"
    },
    {
      question: "Which programming language is most commonly used with Arduino?",
      options: [
        "Python",
        "JavaScript",
        "C/C++",
        "Java"
      ],
      correct: 2,
      explanation: "Arduino IDE uses C/C++ syntax for programming microcontrollers!"
    }
  ]

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex)
  }

  const handleNextQuestion = () => {
    if (selectedAnswer === questions[currentQuestion].correct) {
      setScore(score + 1)
    }
    
    setShowResult(true)
    
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
        setSelectedAnswer(null)
        setShowResult(false)
      } else {
        setQuizCompleted(true)
      }
    }, 2000)
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setScore(0)
    setShowResult(false)
    setQuizCompleted(false)
  }

  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100
    if (percentage >= 75) return "🏆 Robotics Genius! You're ready for RoboCell!"
    if (percentage >= 50) return "⚡ Great job! You have solid robotics knowledge!"
    if (percentage >= 25) return "🤖 Good start! Keep learning and join us!"
    return "🚀 No worries! Everyone starts somewhere. Join us to learn!"
  }

  if (quizCompleted) {
    return (
      <section className="section-padding bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-robocell-yellow/10 to-robocell-orange/10 rounded-2xl p-8 border border-robocell-yellow/30 backdrop-blur-sm">
            <Trophy className="h-16 w-16 text-robocell-yellow mx-auto mb-4 animate-bounce" />
            <h2 className="font-tech text-3xl font-bold text-white mb-4">Quiz Complete!</h2>
            <div className="text-6xl font-bold text-robocell-yellow mb-4">{score}/{questions.length}</div>
            <p className="text-xl text-gray-300 mb-6">{getScoreMessage()}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={resetQuiz}
                className="px-6 py-3 bg-gradient-to-r from-robocell-yellow to-robocell-orange text-white font-tech font-bold rounded-lg hover:scale-105 transition-all duration-300 shadow-lg"
              >
                🔄 Try Again
              </button>
              <a
                href="/join"
                className="px-6 py-3 bg-gradient-to-r from-neon-blue to-robocell-yellow text-white font-tech font-bold rounded-lg hover:scale-105 transition-all duration-300 shadow-lg"
              >
                🚀 Join RoboCell
              </a>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="section-padding bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
      <div className="max-w-4xl mx-auto">
        {/* Quiz Header */}
        <div className="text-center mb-8">
          <h2 className="font-tech text-3xl md:text-5xl font-bold text-white mb-6">
            🧠 <span className="bg-gradient-to-r from-robocell-yellow to-robocell-orange bg-clip-text text-transparent">Mini Quiz</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-4">
            Test your robotics knowledge! 🤖⚡
          </p>
          <div className="flex justify-center items-center space-x-4 text-sm text-gray-400">
            <span>Question {currentQuestion + 1} of {questions.length}</span>
            <div className="w-32 bg-gray-700 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-robocell-yellow to-robocell-orange h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              />
            </div>
            <span>Score: {score}</span>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-gradient-to-br from-dark-800/50 to-dark-900/50 rounded-2xl p-8 border border-robocell-yellow/30 backdrop-blur-sm">
          <div className="flex items-center mb-6">
            <Brain className="h-8 w-8 text-robocell-yellow mr-3" />
            <h3 className="font-tech text-xl font-bold text-white">
              {questions[currentQuestion].question}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                disabled={showResult}
                className={`p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                  selectedAnswer === index
                    ? showResult
                      ? index === questions[currentQuestion].correct
                        ? 'border-green-400 bg-green-400/20 text-green-400'
                        : 'border-red-400 bg-red-400/20 text-red-400'
                      : 'border-robocell-yellow bg-robocell-yellow/20 text-robocell-yellow'
                    : showResult && index === questions[currentQuestion].correct
                    ? 'border-green-400 bg-green-400/20 text-green-400'
                    : 'border-gray-600 bg-gray-800/50 text-gray-300 hover:border-robocell-yellow/50 hover:bg-robocell-yellow/10'
                }`}
              >
                <div className="flex items-center">
                  <span className="w-8 h-8 rounded-full bg-current/20 flex items-center justify-center mr-3 text-sm font-bold">
                    {String.fromCharCode(65 + index)}
                  </span>
                  {option}
                  {showResult && (
                    <div className="ml-auto">
                      {index === questions[currentQuestion].correct ? (
                        <CheckCircle className="h-5 w-5 text-green-400" />
                      ) : selectedAnswer === index ? (
                        <XCircle className="h-5 w-5 text-red-400" />
                      ) : null}
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>

          {showResult && (
            <div className="bg-gradient-to-r from-robocell-yellow/10 to-robocell-orange/10 rounded-xl p-4 border border-robocell-yellow/30 mb-6">
              <div className="flex items-center mb-2">
                <Lightbulb className="h-5 w-5 text-robocell-yellow mr-2" />
                <span className="font-tech text-robocell-yellow font-bold">Explanation:</span>
              </div>
              <p className="text-gray-300">{questions[currentQuestion].explanation}</p>
            </div>
          )}

          <div className="text-center">
            <button
              onClick={handleNextQuestion}
              disabled={selectedAnswer === null || showResult}
              className={`px-8 py-3 font-tech font-bold rounded-lg transition-all duration-300 ${
                selectedAnswer !== null && !showResult
                  ? 'bg-gradient-to-r from-robocell-yellow to-robocell-orange text-white hover:scale-105 shadow-lg'
                  : 'bg-gray-600 text-gray-400 cursor-not-allowed'
              }`}
            >
              {showResult ? (
                <div className="flex items-center">
                  <Zap className="h-5 w-5 mr-2 animate-pulse" />
                  {currentQuestion < questions.length - 1 ? 'Next Question...' : 'Finishing...'}
                </div>
              ) : (
                'Submit Answer'
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MiniQuiz
