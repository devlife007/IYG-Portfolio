import { motion, AnimatePresence } from 'motion/react';
import { X, Download, Maximize2 } from 'lucide-react';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CVModal({ isOpen, onClose }: CVModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-neutral-950/90 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-4xl max-h-full bg-neutral-900 rounded-[2rem] overflow-hidden border border-neutral-800 shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="p-6 flex items-center justify-between border-b border-neutral-800 shrink-0">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-600/10 flex items-center justify-center text-blue-500">
                  <Maximize2 size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Curriculum Vitae</h3>
                  <p className="text-xs text-neutral-400 uppercase tracking-widest font-black">Ishimwe Gisele</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button 
                  className="p-3 rounded-xl bg-neutral-800 text-white hover:bg-neutral-700 transition-colors hidden sm:flex items-center gap-2 text-sm font-bold"
                  onClick={() => window.open('https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=1200', '_blank')}
                >
                  <Download size={18} /> Download
                </button>
                <button 
                  onClick={onClose}
                  className="p-3 rounded-xl bg-neutral-800 text-neutral-400 hover:text-white hover:bg-red-500/20 hover:text-red-500 transition-all"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Scrollable Content */}
            <div className="flex-grow overflow-y-auto p-4 md:p-8 bg-neutral-950/30">
              <div className="max-w-2xl mx-auto shadow-2xl rounded-sm overflow-hidden">
                <img 
                  src="/my-cv.jpeg" 
                  alt="ISHIMWE GISELE Resume" 
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Footer Detail */}
            <div className="p-4 text-center border-t border-neutral-800 shrink-0 md:hidden">
                <button 
                  className="w-full p-4 rounded-xl bg-blue-600 text-white hover:bg-blue-500 transition-colors flex items-center justify-center gap-2 text-sm font-bold"
                  onClick={() => window.open('https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=1200', '_blank')}
                >
                  <Download size={18} /> Download CV
                </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
