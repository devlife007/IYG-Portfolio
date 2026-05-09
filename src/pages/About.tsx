import { motion } from 'motion/react';
import { 
  GraduationCap, 
  Award, 
  Target, 
  Briefcase, 
  Terminal, 
  Cpu, 
  Globe, 
  Shield, 
  CheckCircle2,
  Users
} from 'lucide-react';
import { SKILLS, EDUCATION, CERTIFICATIONS } from '../constants';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="pt-24 pb-32"
    >
      {/* Header */}
      <section className="px-4 py-20 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-blue-600/5 blur-[120px] -z-10" />
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-black tracking-tight mb-6"
        >
          Beyond the <span className="text-blue-500 italic">Console.</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-neutral-400 text-lg max-w-2xl mx-auto"
        >
          Discover the journey of an IT specialist dedicated to engineering digital excellence and securing the future of connectivity.
        </motion.p>
      </section>

      {/* About Me Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-[3rem] overflow-hidden border border-neutral-800 bg-neutral-900 group">
              <img 
                src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=800" 
                alt="Ishimwe Yarabikoze Gisele" 
                className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-blue-600 rounded-3xl -z-10 blur-2xl opacity-20" />
          </motion.div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-blue-500 mb-4">The Person</h2>
            <h3 className="text-4xl font-black tracking-tight mb-8">Ishimwe Yarabikoze Gisele</h3>
            <div className="space-y-6 text-neutral-400 leading-relaxed text-lg">
              <p>
                I am a highly motivated IT professional with a deep-rooted dedicated for understanding how systems work and how they can be improved through innovative technology. My background is uniquely balanced between infrastructure and development.
              </p>
              <p>
                With a <span className="text-white font-bold">Bachelor’s Degree in Information Technology</span> from the University of Kigali, I've spent years mastering the complexities of modern computing environments from localized networks to globally distributed cloud clusters.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                {[
                  { label: "Location", value: "Kigali, Rwanda" },
                  { label: "Availability", value: "Full-time / Project" },
                  { label: "Interests", value: "IoT, AI, CyberSec" },
                  { label: "Languages", value: "English, Kinyarwanda" }
                ].map((info, i) => (
                  <div key={i} className="p-4 rounded-xl bg-neutral-900 border border-neutral-800">
                    <p className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-1">{info.label}</p>
                    <p className="text-white font-bold">{info.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Experience */}
      <section className="bg-neutral-900/50 py-32 mb-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-purple-500 mb-4">Academic Background</h2>
            <h3 className="text-4xl font-black tracking-tight">Education & Journey</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {EDUCATION.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-10 rounded-3xl bg-neutral-950 border border-neutral-800 flex items-start gap-8"
              >
                <div className="w-16 h-16 shrink-0 rounded-2xl bg-purple-600/10 flex items-center justify-center text-purple-500">
                  <GraduationCap size={32} />
                </div>
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs font-bold uppercase tracking-widest mb-4">
                    {edu.period}
                  </span>
                  <h4 className="text-2xl font-bold mb-2">{edu.degree}</h4>
                  <p className="text-neutral-300 font-medium mb-4">{edu.institution}</p>
                  <p className="text-neutral-500 leading-relaxed">{edu.description}</p>
                </div>
              </motion.div>
            ))}
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-10 rounded-3xl bg-neutral-950 border border-neutral-800 flex items-start gap-8"
            >
              <div className="w-16 h-16 shrink-0 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-500">
                <Users size={32} />
              </div>
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest mb-4">
                  Leadership
                </span>
                <h4 className="text-2xl font-bold mb-2">Student Union Member</h4>
                <p className="text-neutral-300 font-medium mb-4">University of Kigali</p>
                <p className="text-neutral-500 leading-relaxed">Organized tech workshops and networking events for IT students, fostering a collaborative learning environment.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technical Skills - Progress Bars & Icons */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-40">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-1">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-teal-500 mb-4">Skillsets</h2>
            <h3 className="text-4xl font-black tracking-tight mb-6">Technical Arsenal</h3>
            <p className="text-neutral-400 mb-8 leading-relaxed">
              My technical proficiency spans across various domains, allowing me to approach problems with a holistic architectural perspective.
            </p>
            <div className="flex flex-wrap gap-3">
              {SKILLS.map((skill, index) => (
                <div key={index} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-300 hover:border-teal-500/30 transition-all cursor-default">
                  <skill.icon size={16} className="text-teal-500" />
                  <span className="text-sm font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { label: "Networking (Cisco)", val: 92 },
              { label: "Full-Stack Dev", val: 88 },
              { label: "Cybersecurity", val: 85 },
              { label: "System Administration", val: 90 },
              { label: "Cloud Computing", val: 82 },
              { label: "Database Management", val: 86 }
            ].map((skill, i) => (
              <div key={i} className="space-y-4">
                <div className="flex justify-between items-end">
                  <span className="font-bold text-white">{skill.label}</span>
                  <span className="text-neutral-500 text-sm">{skill.val}%</span>
                </div>
                <div className="h-2 w-full bg-neutral-900 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.val}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-blue-600 to-teal-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Goals */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Certs */}
          <div className="p-12 rounded-[2.5rem] bg-neutral-900 border border-neutral-800">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-xl bg-blue-600/10 text-blue-500">
                <Award size={24} />
              </div>
              <h3 className="text-2xl font-black tracking-tight uppercase italic text-neutral-300">Professional Certifications</h3>
            </div>
            <div className="space-y-4">
              {CERTIFICATIONS.map((cert, i) => (
                <div key={i} className="group flex items-center justify-between p-4 rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-blue-500/30 transition-all">
                  <div>
                    <p className="font-bold text-white group-hover:text-blue-400 transition-colors">{cert.name}</p>
                    <p className="text-xs text-neutral-500 uppercase font-black">{cert.issuer}</p>
                  </div>
                  <CheckCircle2 size={20} className="text-blue-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </div>

          {/* Career Goals */}
          <div className="p-12 rounded-[2.5rem] bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-xl bg-teal-600/10 text-teal-500">
                <Target size={24} />
              </div>
              <h3 className="text-2xl font-black tracking-tight uppercase italic text-neutral-300">Future Milestones</h3>
            </div>
            <div className="space-y-6">
              {[
                { title: "Mastering Cloud Architecture", desc: "Achieving AWS Solutions Architect Professional certification to design web-scale infrastructures." },
                { title: "IoT Innovation", desc: "Leading a smart city initiative leveraging LoRaWAN technology for sustainable resource management." },
                { title: "Cyber Defense", desc: "Specializing in proactive threat hunting and automated Incident Response systems." }
              ].map((goal, i) => (
                <div key={i} className="relative pl-10">
                  <div className="absolute top-1 left-0 w-6 h-[2px] bg-teal-500" />
                  <h4 className="font-bold text-white mb-2">{goal.title}</h4>
                  <p className="text-neutral-500 text-sm leading-relaxed">{goal.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
