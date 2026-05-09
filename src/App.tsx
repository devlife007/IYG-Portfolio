import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';
import { CVProvider } from './context/CVContext';

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <CVProvider>
        <ScrollToTop />
        <div className="min-h-screen bg-neutral-950 text-neutral-100 selection:bg-blue-500/30">
          {/* Background Gradients */}
          <div className="fixed inset-0 -z-10 overflow-hidden">
            <div className="absolute -top-[10%] -left-[10%] h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[120px]" />
            <div className="absolute top-[20%] -right-[10%] h-[400px] w-[400px] rounded-full bg-purple-500/10 blur-[120px]" />
            <div className="absolute bottom-0 left-[20%] h-[600px] w-[600px] rounded-full bg-teal-500/5 blur-[120px]" />
          </div>

          <Navbar />
          <main>
            <AnimatedRoutes />
          </main>
          <Footer />
        </div>
      </CVProvider>
    </Router>
  );
}
