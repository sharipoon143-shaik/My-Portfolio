import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

interface NavbarProps {
  onOpenSection: (section: string) => void;
}

const navItems = [
  { name: 'About', id: 'about' },
  { name: 'Education', id: 'education' },
  { name: 'Skills', id: 'skills' },
  { name: 'Projects', id: 'projects' },
  { name: 'Experience', id: 'experience' },
  { name: 'Contact', id: 'contact' },
];

export default function Navbar({ onOpenSection }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative z-50 w-full py-4 bg-[#F5F5F5]/85 backdrop-blur-xl border-b border-slate-200/80 shadow-sm">
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        <div className="text-xl sm:text-2xl font-display font-bold">
          <a href="#" className="flex items-center gap-2.5">
            <img src="/profile.jpg" alt="Profile" className="w-8 h-8 rounded-lg object-cover border border-slate-300 shadow-sm" />
            <span className="inline-block text-slate-900 font-bold">Shek Haripoon</span>
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          <ul className="flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <button
                  type="button"
                  onClick={() => onOpenSection(item.id)}
                  className="text-slate-600 hover:text-blue-600 transition-colors text-sm font-medium tracking-wide cursor-pointer"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
          
          <div>
            <button
              type="button"
              onClick={() => onOpenSection('contact')}
              className="px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition-all text-sm font-medium shadow-md shadow-blue-500/20 cursor-pointer"
            >
              Hire Me
            </button>
          </div>
        </nav>

        {/* Mobile Nav Toggle */}
        <button 
          type="button"
          className="md:hidden text-slate-800 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 overflow-hidden shadow-lg"
          >
            <ul className="flex flex-col items-center py-6 gap-4">
              {navItems.map((item) => (
                <li key={item.name}>
                  <button 
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenSection(item.id);
                    }}
                    className="text-lg text-slate-700 hover:text-blue-600 font-medium"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
              <div className="flex gap-4 mt-4">
                <a href="https://github.com" target="_blank" rel="noreferrer" className="text-slate-600 hover:text-slate-900"><Github size={20} /></a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-slate-600 hover:text-slate-900"><Linkedin size={20} /></a>
                <a href="mailto:shaikarifoon2609@gmail.com" className="text-slate-600 hover:text-slate-900"><Mail size={20} /></a>
              </div>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
