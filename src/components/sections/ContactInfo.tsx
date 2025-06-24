import { Mail, MapPin, Clock, Instagram, Linkedin, Github, Phone } from 'lucide-react'
import Card from '@/components/ui/Card'

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: Mail,
      title: "Email",
      primary: "robocell.cca@nitdgp.ac.in",
      secondary: "cca@nitdgp.ac.in",
      color: "neon-blue"
    },
    {
      icon: Phone,
      title: "Phone",
      primary: "+91 98765 43210",
      secondary: "+91 87654 32109",
      color: "neon-green"
    },
    {
      icon: MapPin,
      title: "Address",
      primary: "Centre for Cognitive Activities (CCA)",
      secondary: "NIT Durgapur, West Bengal 713209",
      color: "neon-purple"
    },
    {
      icon: Clock,
      title: "Office Hours",
      primary: "Monday - Friday: 9:00 AM - 6:00 PM",
      secondary: "Saturday: 10:00 AM - 4:00 PM",
      color: "neon-orange"
    }
  ]

  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/robocell.cca.nitdgp/",
      color: "neon-pink",
      followers: "587+"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/company/centre-for-cognitive-activities-nit-durgapur/",
      color: "neon-blue",
      followers: "1.2K+"
    },
    {
      name: "Facebook",
      icon: Github,
      url: "https://www.facebook.com/ccanitd.in/",
      color: "neon-green",
      followers: "CCA Official"
    }
  ]

  return (
    <section className="section-padding bg-dark-900/50">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-tech text-3xl font-bold text-white mb-4">
            Contact <span className="text-neon-green">Information</span>
          </h2>
          <p className="text-gray-300">
            Multiple ways to reach us. Choose what works best for you.
          </p>
        </div>

        {/* Contact Details */}
        <div className="space-y-6 mb-12">
          {contactDetails.map((detail, index) => {
            const Icon = detail.icon
            return (
              <Card key={index} className="flex items-start space-x-4">
                <div className={`p-3 rounded-lg bg-${detail.color}/20 flex-shrink-0`}>
                  <Icon className={`h-6 w-6 text-${detail.color}`} />
                </div>
                <div className="flex-1">
                  <h3 className="font-tech text-lg font-semibold text-white mb-1">
                    {detail.title}
                  </h3>
                  <p className="text-gray-300 mb-1">{detail.primary}</p>
                  <p className="text-gray-400 text-sm">{detail.secondary}</p>
                </div>
              </Card>
            )
          })}
        </div>

        {/* Social Media */}
        <div className="mb-12">
          <h3 className="font-tech text-xl font-bold text-white mb-6 text-center">
            Follow Us on <span className="text-neon-blue">Social Media</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon
              return (
                <a
                  key={index}
                  href={social.url}
                  className="card text-center group hover:scale-105 transition-all duration-300"
                >
                  <Icon className={`h-8 w-8 text-${social.color} mx-auto mb-3 group-hover:animate-pulse`} />
                  <h4 className="font-tech text-lg font-semibold text-white mb-1">
                    {social.name}
                  </h4>
                  <p className="text-gray-400 text-sm">{social.followers} followers</p>
                </a>
              )
            })}
          </div>
        </div>

        {/* Location Map Placeholder */}
        <Card className="text-center">
          <h3 className="font-tech text-xl font-bold text-white mb-4">
            Find Us on <span className="text-neon-purple">Campus</span>
          </h3>
          <div className="bg-gray-800 rounded-lg h-64 flex items-center justify-center mb-4">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-neon-purple mx-auto mb-3" />
              <p className="text-gray-300 mb-2">Interactive Map</p>
              <p className="text-gray-400 text-sm">
                Centre for Cognitive Activities (CCA)<br />
                NIT Durgapur Campus
              </p>
            </div>
          </div>
          <p className="text-gray-300 text-sm">
            Located in the heart of NIT Durgapur campus, CCA is easily accessible 
            from all major campus locations.
          </p>
        </Card>

        {/* Quick Response Promise */}
        <Card className="mt-8 bg-gradient-to-r from-neon-blue/10 via-neon-purple/10 to-neon-green/10 border-neon-blue/30 text-center">
          <h3 className="font-tech text-lg font-bold text-white mb-2">
            🚀 Quick Response Guarantee
          </h3>
          <p className="text-gray-300 text-sm">
            We respond to all inquiries within 24 hours during business days. 
            For urgent matters, please call us directly.
          </p>
        </Card>
      </div>
    </section>
  )
}

export default ContactInfo
