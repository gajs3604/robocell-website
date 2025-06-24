import { Mail, MessageCircle, Phone, MapPin } from 'lucide-react'

const ContactHero = () => {
  return (
    <section className="section-padding pt-24 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 animate-float opacity-20">
        <Mail className="h-16 w-16 text-neon-blue" />
      </div>
      <div className="absolute bottom-20 right-10 animate-float opacity-20" style={{ animationDelay: '1s' }}>
        <MessageCircle className="h-20 w-20 text-neon-green" />
      </div>
      <div className="absolute top-1/2 right-1/4 animate-float opacity-10" style={{ animationDelay: '2s' }}>
        <Phone className="h-12 w-12 text-neon-purple" />
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h1 className="font-tech text-4xl md:text-6xl font-bold text-white mb-6">
          Get In <span className="text-neon-blue text-glow">Touch</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
          Have questions about RoboCell? Want to collaborate or join our community? 
          We'd love to hear from you!
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
          <div className="card text-center">
            <Mail className="h-8 w-8 text-neon-blue mx-auto mb-3" />
            <div className="font-tech text-lg font-bold text-white mb-1">Email</div>
            <div className="text-gray-400 text-sm">Quick Response</div>
          </div>
          <div className="card text-center">
            <MessageCircle className="h-8 w-8 text-neon-green mx-auto mb-3" />
            <div className="font-tech text-lg font-bold text-white mb-1">Social</div>
            <div className="text-gray-400 text-sm">Stay Connected</div>
          </div>
          <div className="card text-center">
            <MapPin className="h-8 w-8 text-neon-purple mx-auto mb-3" />
            <div className="font-tech text-lg font-bold text-white mb-1">Visit</div>
            <div className="text-gray-400 text-sm">CCA Block</div>
          </div>
          <div className="card text-center">
            <Phone className="h-8 w-8 text-neon-orange mx-auto mb-3" />
            <div className="font-tech text-lg font-bold text-white mb-1">Call</div>
            <div className="text-gray-400 text-sm">Direct Contact</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactHero
