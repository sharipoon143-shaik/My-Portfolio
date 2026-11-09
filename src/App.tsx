import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, Download, FileText } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

type ModalType = 'about' | 'education' | 'contact' | 'projects' | 'skills' | 'experience' | 'resume' | null;

export default function App() {
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  const handleOpenSection = (section: string) => {
    setActiveModal(section as ModalType);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="h-screen w-screen overflow-hidden bg-[#F5F5F5] relative selection:bg-blue-600/20 selection:text-blue-600 flex flex-col justify-between">
      {/* Global Background Effects for Smoke White */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[45%] h-[45%] rounded-full bg-blue-300/20 blur-[130px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[45%] h-[45%] rounded-full bg-indigo-300/20 blur-[130px]" />
      </div>

      {/* Top Navbar */}
      <Navbar onOpenSection={handleOpenSection} />

      {/* Main Single-Screen Hero View - No Scroll */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center w-full overflow-hidden">
        <Hero 
          onOpenProjects={() => handleOpenSection('projects')} 
          onOpenContact={() => handleOpenSection('contact')} 
          onOpenResume={() => setActiveModal('resume')}
        />
      </main>

      {/* Compact Bottom Footer */}
      <Footer onOpenSection={handleOpenSection} />

      {/* Interactive Modal Overlay */}
      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            />

            {/* Modal Dialog Content Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className={`relative w-full ${activeModal === 'resume' ? 'max-w-4xl' : 'max-w-5xl'} max-h-[92vh] overflow-y-auto bg-white/95 backdrop-blur-2xl rounded-3xl p-5 sm:p-7 border border-slate-200/90 shadow-2xl z-10 text-slate-800`}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={closeModal}
                className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 border border-slate-200 transition-all z-20 cursor-pointer"
                aria-label="Close dialog"
              >
                <X size={20} />
              </button>

              {/* Resume Modal View (suppresses the browser PDF viewer's black toolbar) */}
              {activeModal === 'resume' && (
                <div className="flex flex-col">
                  <div className="flex items-center justify-between pb-3.5 border-b border-slate-200 mb-4 pr-12">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                        <FileText size={19} />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-tight">My Resume</h3>
                        <p className="text-xs text-slate-500 font-medium">Shek Haripoon — Software Developer</p>
                      </div>
                    </div>
                    
                    <a
                      href="/haripoonresume.pdf"
                      download="Shek_Haripoon_Resume.pdf"
                      className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold flex items-center gap-2 shadow-sm transition-all cursor-pointer"
                    >
                      <Download size={14} />
                      Download PDF
                    </a>
                  </div>

                  <div className="w-full h-[72vh] rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 shadow-inner">
                    <iframe
                      src="/haripoonresume.pdf#toolbar=0&navpanes=0&statusbar=0&view=FitH"
                      className="w-full h-full border-0"
                      title="Shek Haripoon Resume"
                    >
                      <div className="p-6 text-center text-slate-600">
                        <p className="mb-3">Unable to display PDF directly in your browser.</p>
                        <a 
                          href="/haripoonresume.pdf" 
                          download="Shek_Haripoon_Resume.pdf"
                          className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-semibold inline-block"
                        >
                          Download Resume PDF
                        </a>
                      </div>
                    </iframe>
                  </div>
                </div>
              )}

              {/* Dedicated Modals */}
              {activeModal === 'about' && <About isModal={true} />}
              {activeModal === 'education' && <Education isModal={true} />}
              {activeModal === 'contact' && <Contact isModal={true} />}
              {activeModal === 'projects' && <Projects isModal={true} />}
              {activeModal === 'skills' && <Skills isModal={true} />}
              {activeModal === 'experience' && <Experience isModal={true} />}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
