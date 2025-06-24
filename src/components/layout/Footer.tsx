import Link from 'next/link'
import Image from 'next/image'
import { Github, Instagram, Linkedin, Mail, MapPin, Zap } from 'lucide-react'

const Footer = () => {
  const quickLinks = [
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Events', href: '/events' },
    { name: 'Team', href: '/team' },
    { name: 'Join Us', href: '/join' },
    { name: 'Contact', href: '/contact' },
  ]

  const socialLinks = [
    { name: 'Instagram', href: 'https://www.instagram.com/robocell.cca.nitdgp/', icon: Instagram },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/centre-for-cognitive-activities-nit-durgapur/', icon: Linkedin },
    { name: 'Facebook', href: 'https://www.facebook.com/ccanitd.in/', icon: Github },
    { name: 'Email', href: 'mailto:robocell.cca@nitdgp.ac.in', icon: Mail },
  ]

  return (
    <footer className="bg-dark-950 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src="/image.png"
                alt="RoboCell Logo"
                width={32}
                height={32}
                className="transition-all duration-300"
              />
              <span className="font-tech text-2xl font-bold text-white">RoboCell</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              "Ideate, Innovate, Inspire!" - The heart of robotics at NIT Durgapur.
              From Robocon championships to cutting-edge research, we're building the future of automation.
            </p>
            <div className="flex items-center text-gray-400 mb-2">
              <MapPin className="h-4 w-4 mr-2" />
              <span className="text-sm">Centre for Cognitive Activities, NIT Durgapur</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-tech text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-neon-blue transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-tech text-lg font-semibold text-white mb-4">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="text-gray-400 hover:text-neon-blue transition-colors duration-300 hover-glow"
                    aria-label={social.name}
                  >
                    <Icon className="h-6 w-6" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 RoboCell, NIT Durgapur. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-2 md:mt-0">
            Built with ❤️ by RoboCell Team
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
