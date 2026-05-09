import { motion } from 'motion/react';
import { ArrowRight, Download, Terminal, Network, ShieldCheck, Code, ArrowUpRight, Github, ExternalLink, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SKILLS, PROJECTS, SERVICES } from '../constants';
import { useCV } from '../context/CVContext';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { type: 'spring', stiffness: 100 }
  }
};

export default function Home() {
  const featuredProjects = PROJECTS.slice(0, 3);
  const featuredSkills = SKILLS.slice(0, 4);
  const { openCV } = useCV();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="relative pt-20"
    >
      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center overflow-hidden px-4 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative z-10 text-left order-2 lg:order-1">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Infrastructure & Systems Engineer
            </motion.div>

            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter mb-6 leading-[0.85]"
            >
              GISELE <br />
              <span className="text-blue-500 italic">ISHIMWE.</span>
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-neutral-400 max-w-lg mb-10 leading-relaxed font-medium"
            >
              Architecting secure networks and high-performance digital systems. Bridging <span className="text-white">Cybersecurity</span> with <span className="text-white">Full-Stack Innovation</span>.
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <Link 
                to="/projects" 
                className="w-full sm:w-auto px-8 py-4 bg-white text-neutral-950 rounded-xl font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-blue-500 hover:text-white transition-all group scale-100 hover:scale-105"
              >
                View Works <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <button 
                onClick={openCV}
                className="w-full sm:w-auto px-8 py-4 bg-neutral-900 text-white rounded-xl font-bold border border-neutral-800 flex items-center justify-center gap-2 hover:bg-neutral-800 transition-colors"
              >
                View My CV <FileText size={18} />
              </button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-12 pt-8 border-t border-neutral-900 flex items-center gap-8"
            >
              <div>
                <p className="text-4xl font-black text-white italic">4+</p>
                <p className="text-xs font-bold text-neutral-500 uppercase tracking-widest">Years Exp.</p>
              </div>
              <div className="w-[1px] h-12 bg-neutral-900" />
              <div>
                <p className="text-4xl font-black text-white italic">15+</p>
                <p className="text-xs font-bold text-neutral-500 uppercase tracking-widest">Projects Done</p>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: 'spring' }}
            className="relative z-10 order-1 lg:order-2"
          >
            <div className="relative aspect-square max-w-[500px] mx-auto">
              {/* Abstract decorative elements */}
              <div className="absolute -inset-4 bg-blue-600/20 blur-3xl rounded-full animate-pulse" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-neutral-800 rounded-full opacity-20 animate-[spin_20s_linear_infinite]" />
              
              <div className="relative w-full h-full rounded-[3rem] overflow-hidden border-4 border-neutral-900 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 group">
                <img 
                  src="/me.jpeg" 
                  alt="Ishimwe Gisele" 
                  className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 to-transparent" />
              </div>
              
              {/* Floating Tech Badges */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 p-4 rounded-2xl bg-neutral-900 border border-neutral-800 shadow-xl backdrop-blur-xl"
              >
                <ShieldCheck className="text-blue-500" size={32} />
              </motion.div>
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 p-4 rounded-2xl bg-neutral-900 border border-neutral-800 shadow-xl backdrop-blur-xl"
              >
                <Network className="text-purple-500" size={32} />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Overview */}
      <section className="py-24 bg-neutral-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 opacity-50">
            {featuredSkills.map((skill, index) => (
              <div key={index} className="flex items-center gap-3">
                <skill.icon size={24} className="text-neutral-400" />
                <span className="text-xl font-bold tracking-tight text-neutral-400 uppercase italic">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-blue-500 mb-4">Core Expertise</h2>
            <h3 className="text-4xl md:text-6xl font-black tracking-tight">Specialized Services</h3>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {SERVICES.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group p-8 rounded-3xl bg-neutral-900 border border-neutral-800 hover:border-blue-500/50 transition-all hover:-translate-y-2 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 blur-3xl group-hover:bg-blue-600/10 transition-all" />
                <div className="w-16 h-16 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 transition-transform">
                  <service.icon size={32} />
                </div>
                <h4 className="text-2xl font-bold mb-4">{service.title}</h4>
                <p className="text-neutral-400 leading-relaxed mb-6">
                  {service.description}
                </p>
                <Link to="/contact" className="inline-flex items-center gap-2 text-blue-500 font-bold group/link">
                  Learn more <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Highlight */}
      <section className="py-32 px-4 bg-neutral-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-purple-500 mb-4">Portfolio</h2>
              <h3 className="text-4xl md:text-6xl font-black tracking-tight">Selected Projects</h3>
            </div>
            <Link 
              to="/projects" 
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-neutral-900 border border-neutral-800 font-bold hover:bg-neutral-800 transition-colors"
            >
              See All Projects <ArrowUpRight size={20} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group flex flex-col h-full bg-neutral-900 rounded-3xl overflow-hidden border border-neutral-800"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 to-transparent flex items-end p-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 2).map((tech, i) => (
                        <span key={i} className="text-[10px] font-black uppercase tracking-widest px-2 py-1 bg-white/10 backdrop-blur-md rounded-md text-white border border-white/10">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl font-bold group-hover:text-blue-400 transition-colors">{project.title}</h4>
                    <div className="flex items-center gap-2">
                       <a 
                        href={project.githubUrl} 
                        target="_blank"
                        rel="noreferrer"
                        className="text-neutral-500 hover:text-white transition-colors"
                      >
                        <Github size={18} />
                      </a>
                      <a 
                        href={project.liveUrl} 
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-500 hover:text-blue-400 transition-colors"
                      >
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  </div>
                  <p className="text-neutral-400 text-sm leading-relaxed mb-6 line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Highlights */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-teal-500 mb-4">Track Record</h2>
              <h3 className="text-4xl md:text-6xl font-black tracking-tight mb-8">Academic & Professional Journey</h3>
              <p className="text-neutral-400 text-lg leading-relaxed mb-8">
                Graduated with a Bachelor’s Degree in Information Technology from the <span className="text-white font-bold">University of Kigali (UoK)</span>. My journey has been defined by a relentless pursuit of technical excellence across mobile, web, and infrastructure engineering.
              </p>
              <div className="space-y-6">
                {[
                  { label: "Success Rate", value: "98%" },
                  { label: "Years Experience", value: "4+" },
                  { label: "Systems Built", value: "15+" }
                ].map((stat, i) => (
                  <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-neutral-900 border border-neutral-800">
                    <span className="text-neutral-400 font-bold">{stat.label}</span>
                    <span className="text-2xl font-black text-white italic">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600/20 blur-3xl -z-10 rounded-full scale-75" />
              <div className="p-8 md:p-12 rounded-[2.5rem] bg-neutral-900 border border-neutral-800 shadow-2xl">
                <blockquote className="text-2xl font-serif italic text-white mb-8">
                  "Technology is not just about solving problems; it's about imagining new possibilities and building the infrastructure to make them real."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500" />
                  <div>
                    <p className="font-bold">Ishimwe Yarabikoze Gisele</p>
                    <p className="text-neutral-500 text-sm">IT Specialist & Founder</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="relative p-12 md:p-24 rounded-[3rem] bg-gradient-to-br from-blue-600 to-purple-700 overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_50%)]" />
            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-7xl font-black tracking-tight text-white mb-8">Ready to bring your vision to life?</h2>
              <p className="text-white/80 text-xl mb-12 leading-relaxed">
                Whether you need a robust network, a secure cloud infrastructure, or a high-performance web application, I'm here to help.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/contact#contact-form" className="w-full sm:w-auto px-10 py-5 bg-white text-neutral-900 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-neutral-100 transition-colors">
                  Let's Talk <Mail size={20} className="ml-1" />
                </Link>
                <Link to="/projects" className="w-full sm:w-auto px-10 py-5 bg-blue-700/30 text-white border border-white/20 backdrop-blur-md rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-white/10 transition-colors">
                  Explore Portfolio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

function Mail(props: any) {
  return (
    <svg 
      {...props}
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}
