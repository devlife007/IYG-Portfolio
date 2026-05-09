import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, Mail, ExternalLink, Terminal, FileText } from 'lucide-react';
import { useCV } from '../context/CVContext';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { openCV } = useCV();

  return (
    <footer className="bg-neutral-950 border-t border-neutral-900 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <div className="relative w-10 h-10 flex items-center justify-center">
                <div className="absolute inset-0 bg-blue-600 rounded-lg rotate-6 transition-transform group-hover:scale-110" />
                <div className="absolute inset-0 bg-neutral-900 rounded-lg border border-neutral-800 -rotate-3" />
                <span className="relative text-lg font-black text-white italic">i.</span>
              </div>
              <span className="text-xl font-black tracking-tight">ISHIMWE.</span>
            </Link>
            <p className="text-neutral-400 max-w-sm mb-6 leading-relaxed">
              Professional IT specialist focused on building secure, scalable, and innovative digital solutions. Engineering the future with passion and precision.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center text-neutral-400 hover:bg-blue-600/20 hover:text-blue-400 transition-all">
                <Github size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center text-neutral-400 hover:bg-blue-600/20 hover:text-blue-400 transition-all">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center text-neutral-400 hover:bg-blue-600/20 hover:text-blue-400 transition-all">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-neutral-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-neutral-400 hover:text-white transition-colors">About Me</Link></li>
              <li><Link to="/projects" className="text-neutral-400 hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link to="/contact" className="text-neutral-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="mailto:gishimwe002gmail.com" 
                  className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors"
                >
                  <Mail size={16} className="text-blue-500" />
                  <span>gishimwe002gmail.com</span>
                </a>
              </li>
              <li>
                <button 
                  onClick={openCV}
                  className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors group"
                >
                  <FileText size={16} className="text-blue-500" />
                  <span>View My CV</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-500">
          <p>© {currentYear} Ishimwe Yarabikoze Gisele. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
