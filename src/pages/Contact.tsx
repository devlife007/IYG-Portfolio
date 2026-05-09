import { motion } from 'motion/react';
import { 
  Mail, 
  MapPin, 
  Phone, 
  Send, 
  Github, 
  Linkedin, 
  Twitter, 
  Clock,
  ChevronDown,
  MessageSquare
} from 'lucide-react';
import { useState } from 'react';
import { FAQS } from '../constants';

export default function Contact() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="pt-24 pb-32"
    >
      {/* Hero */}
      <section className="px-4 py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[600px] bg-purple-600/5 blur-[120px] rounded-full -z-10" />
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-purple-500 mb-6">Connect</h2>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600">
              SAY HELLO.
            </h1>
            <p className="text-neutral-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              Have a question, a proposal, or just want to discuss the latest in IT? My inbox is always open.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Info & Socials */}
          <div className="space-y-12">
            <div>
              <h3 className="text-3xl font-black mb-8">Contact Information</h3>
              <div className="space-y-6">
                {[
                  { icon: Mail, label: "Email", value: "gishimwe002gmail.com" },
                  { icon: Phone, label: "Phone", value: "+250 785 565 470" },
                  { icon: MapPin, label: "Location", value: "Kigali, Rwanda" },
                  { icon: Clock, label: "Availability", value: "Mon - Fri, 9:00 - 18:00" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-6 p-6 rounded-3xl bg-neutral-900 border border-neutral-800 hover:border-purple-500/30 transition-all group">
                    <div className="w-12 h-12 rounded-2xl bg-purple-600/10 flex items-center justify-center text-purple-500 group-hover:scale-110 transition-transform">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-1">{item.label}</p>
                      <p className="text-lg font-bold text-white">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-black mb-6 uppercase italic text-neutral-500">Social Ecosystem</h3>
              <div className="flex gap-4">
                {[
                  { icon: Github, href: "#", label: "GitHub" },
                  { icon: Linkedin, href: "#", label: "LinkedIn" },
                  { icon: Twitter, href: "#", label: "Twitter" }
                ].map((social, i) => (
                  <a 
                    key={i} 
                    href={social.href}
                    className="flex-1 p-6 rounded-3xl bg-neutral-900 border border-neutral-800 flex flex-col items-center gap-3 hover:bg-neutral-800 hover:border-blue-500/30 transition-all group"
                  >
                    <social.icon size={24} className="text-neutral-400 group-hover:text-blue-400 transition-colors" />
                    <span className="text-xs font-bold text-neutral-500 uppercase tracking-widest">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div id="contact-form" className="p-8 md:p-12 rounded-[3rem] bg-neutral-900 border border-neutral-800 shadow-2xl relative scroll-mt-24">
            <div className="absolute top-0 right-0 p-8">
              <MessageSquare size={48} className="text-neutral-800" />
            </div>
            <h3 className="text-3xl font-black mb-10">Send a Message</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-neutral-500 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="your name"
                    className="w-full px-6 py-4 rounded-2xl bg-neutral-950 border border-neutral-800 focus:border-purple-500/50 outline-none transition-all text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-neutral-500 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="email@example.com"
                    className="w-full px-6 py-4 rounded-2xl bg-neutral-950 border border-neutral-800 focus:border-purple-500/50 outline-none transition-all text-white"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-neutral-500 ml-1">Subject</label>
                  <input 
                    type="text" 
                    placeholder="Networking Quote"
                    className="w-full px-6 py-4 rounded-2xl bg-neutral-950 border border-neutral-800 focus:border-purple-500/50 outline-none transition-all text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-neutral-500 ml-1">Company</label>
                  <input 
                    type="text" 
                    placeholder="Tech Corp"
                    className="w-full px-6 py-4 rounded-2xl bg-neutral-950 border border-neutral-800 focus:border-purple-500/50 outline-none transition-all text-white"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-neutral-500 ml-1">Your Message</label>
                <textarea 
                  rows={6}
                  placeholder="How can I help you today?"
                  className="w-full px-6 py-4 rounded-2xl bg-neutral-950 border border-neutral-800 focus:border-purple-500/50 outline-none transition-all text-white resize-none"
                />
              </div>
              <button 
                type="submit"
                className="w-full py-5 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-black uppercase tracking-[0.2em] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-blue-600/20 flex items-center justify-center gap-3"
              >
                Launch Message <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-teal-500 mb-4">Inquiries</h2>
          <h3 className="text-4xl font-black tracking-tight">Frequently Asked Questions</h3>
        </div>
        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <div 
              key={i} 
              className="rounded-3xl bg-neutral-900 border border-neutral-800 overflow-hidden"
            >
              <button 
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full p-8 flex items-center justify-between text-left"
              >
                <span className="text-lg font-bold text-white">{faq.question}</span>
                <ChevronDown 
                  className={`text-neutral-500 transition-transform ${openFaq === i ? 'rotate-180 text-blue-500' : ''}`} 
                  size={24} 
                />
              </button>
              {openFaq === i && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  className="px-8 pb-8 text-neutral-400 leading-relaxed border-t border-neutral-950 pt-6"
                >
                  {faq.answer}
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
