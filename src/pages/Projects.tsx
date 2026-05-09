import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { Github, ExternalLink, Filter, Grid, List as ListIcon, Search } from 'lucide-react';
import { PROJECTS } from '../constants';
import { cn } from '../lib/utils';

export default function Projects() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('All');
  const [viewLayout, setViewLayout] = useState<'grid' | 'list'>('grid');

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter(project => {
      const matchesSearch = 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesTab = activeTab === 'All' || 
        project.title.toLowerCase().includes(activeTab.toLowerCase()) ||
        project.description.toLowerCase().includes(activeTab.toLowerCase()) ||
        project.technologies.some(t => t.toLowerCase().includes(activeTab.toLowerCase()));

      return matchesSearch && matchesTab;
    });
  }, [searchQuery, activeTab]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="pt-24 pb-32"
    >
      {/* Header */}
      <section className="px-4 py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 blur-[120px] rounded-full -z-10" />
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center md:text-left max-w-3xl"
          >
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-blue-500 mb-6">Portfolio Index</h2>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-600">
              CRAFTING SOLUTIONS.
            </h1>
            <p className="text-neutral-400 text-lg md:text-xl leading-relaxed">
              A collection of architectural designs and full-stack implementations focusing on IoT, healthcare efficiency, and robust networking.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-16 pb-8 border-b border-neutral-900">
          <div className="flex items-center gap-2 p-1 rounded-xl bg-neutral-900 border border-neutral-800">
            <button 
              onClick={() => setViewLayout('grid')}
              className={cn(
                "p-2 rounded-lg transition-all",
                viewLayout === 'grid' ? "bg-neutral-800 text-white shadow-lg" : "text-neutral-500 hover:text-neutral-300"
              )}
            >
              <Grid size={18} />
            </button>
            <button 
              onClick={() => setViewLayout('list')}
              className={cn(
                "p-2 rounded-lg transition-all",
                viewLayout === 'list' ? "bg-neutral-800 text-white shadow-lg" : "text-neutral-500 hover:text-neutral-300"
              )}
            >
              <ListIcon size={18} />
            </button>
          </div>
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500" size={18} />
            <input 
              type="text" 
              placeholder="Search technologies, systems..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 focus:border-blue-500/50 focus:ring-0 transition-all outline-none text-sm text-white"
            />
          </div>
          <div className="flex items-center gap-4 overflow-x-auto w-full md:w-auto invisible md:visible">
            {['All', 'Web', 'IoT', 'Networking', 'Mobile'].map((tag) => (
              <button 
                key={tag} 
                onClick={() => setActiveTab(tag)}
                className={cn(
                  "px-4 py-2 rounded-full border text-sm font-semibold transition-all whitespace-nowrap",
                  activeTab === tag 
                    ? "bg-blue-600 border-blue-600 text-white" 
                    : "border-neutral-800 text-neutral-400 hover:border-neutral-700 hover:text-white"
                )}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div className={cn(
          "grid gap-12 min-h-[400px]",
          viewLayout === 'grid' ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-2" : "grid-cols-1"
        )}>
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className={cn(
                  "group relative flex bg-neutral-900 rounded-[2.5rem] overflow-hidden border border-neutral-800 hover:border-blue-500/30 transition-all",
                  viewLayout === 'grid' ? "flex-col h-full" : "flex-col md:flex-row md:items-stretch"
                )}
              >
                {/* Project Image */}
                <div className={cn(
                  "relative overflow-hidden",
                  viewLayout === 'grid' ? "aspect-video" : "aspect-video md:aspect-auto md:w-2/5 shrink-0"
                )}>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent flex items-end p-8">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-white/5 backdrop-blur-md rounded-lg border border-white/10 text-white text-[10px] font-black uppercase tracking-widest">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className={cn(
                  "p-10 flex flex-col flex-grow",
                  viewLayout === 'list' && "justify-center"
                )}>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-sm font-black italic tracking-widest text-neutral-600 uppercase">Project 0{index + 1}</span>
                    <div className="flex items-center gap-2">
                      <a 
                        href={project.githubUrl} 
                        target="_blank"
                        rel="noreferrer"
                        className="p-3 rounded-xl bg-neutral-950 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700 transition-all"
                      >
                        <Github size={18} />
                      </a>
                      <a 
                        href={project.liveUrl} 
                        target="_blank"
                        rel="noreferrer"
                        className="p-3 rounded-xl bg-blue-600 text-white hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/20"
                      >
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  </div>
                  <h3 className="text-3xl font-black tracking-tight mb-4 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                  <p className="text-neutral-400 leading-relaxed text-lg">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          
          {filteredProjects.length === 0 && (
            <div className="col-span-full flex flex-col items-center justify-center py-20 text-neutral-500">
              <Search size={48} className="mb-4 opacity-20" />
              <p className="text-xl font-bold">No projects found matching your criteria</p>
              <button 
                onClick={() => { setSearchQuery(''); setActiveTab('All'); }}
                className="mt-4 text-blue-500 font-bold hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA section */}
      <section className="py-40 px-4">
        <div className="max-w-4xl mx-auto text-center">
           <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-teal-500 mb-8 italic">Have a project in mind?</h2>
           <h3 className="text-4xl md:text-7xl font-black tracking-tighter mb-12">LET'S BUILD THE FUTURE TOGETHER.</h3>
           <Link 
             to="/contact"
             className="inline-block px-12 py-6 rounded-full bg-blue-600 text-white font-black text-xl uppercase tracking-widest hover:bg-blue-500 transition-all shadow-2xl shadow-blue-600/40"
           >
             Get in Touch
           </Link>
        </div>
      </section>
    </motion.div>
  );
}
