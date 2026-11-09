import { ArrowRight, Eye } from 'lucide-react';

interface HeroProps {
  onOpenProjects?: () => void;
  onOpenContact?: () => void;
  onOpenResume?: () => void;
}

export default function Hero({ onOpenProjects, onOpenResume }: HeroProps) {
  return (
    <section id="hero" className="relative w-full min-h-[calc(100vh-76px)] flex items-center justify-center px-6 py-12 lg:py-16">
      <div className="container mx-auto max-w-7xl relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

        {/* Left Content */}
        <div className="flex flex-col gap-4 lg:gap-5">
          <div className="flex flex-col gap-1.5 sm:gap-2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-slate-900">
              Hi, I'm <br />
              <span className="text-gradient">Shek Haripoon</span>
            </h1>
            <p className="text-xl sm:text-2xl font-bold text-slate-700 tracking-tight">
              Full Stack &amp; Python Developer
            </p>
          </div>

          <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
            Passionate Computer Science Engineering student specializing in Full Stack Development, AI-powered applications, cloud technologies, and scalable software solutions.
          </p>
          <p className="text-sm sm:text-base text-slate-500 max-w-xl leading-relaxed hidden sm:block">
            I'm an AI enthusiast with a strong foundation in software engineering, experienced in building modern, scalable web applications with seamless user experiences.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-2">
            <button 
              type="button"
              onClick={onOpenProjects}
              className="px-7 py-3.5 rounded-full bg-primary hover:bg-blue-700 text-white font-semibold transition-all flex items-center gap-2 group shadow-lg shadow-blue-500/25 cursor-pointer"
            >
              View Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              type="button"
              onClick={onOpenResume}
              className="px-7 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-800 font-semibold transition-all flex items-center gap-2 border border-slate-300 shadow-sm hover:border-slate-400 cursor-pointer"
            >
              View My Resume
              <Eye size={18} className="text-slate-600" />
            </button>
          </div>
        </div>

        {/* Right Content / Visuals - Profile Picture with Adjusted Height & Framing */}
        <div className="relative h-[440px] lg:h-[500px] hidden lg:flex items-center justify-center">
          {/* Subtle light background glow */}
          <div className="absolute inset-0 bg-gradient-radial from-blue-200/50 via-purple-100/30 to-transparent blur-3xl rounded-full opacity-70" />

          {/* Center Profile Picture - Increased Height/Scale & Adjusted Vertical Crop */}
          <div className="relative z-10 w-80 h-80 xl:w-96 xl:h-96 rounded-full border-4 border-white bg-white shadow-2xl shadow-slate-300/60 flex items-center justify-center">
            <div className="w-72 h-72 xl:w-88 xl:h-88 rounded-full border border-slate-200 overflow-hidden flex items-center justify-center shadow-inner">
              <img 
                src="/profile.jpg" 
                alt="Shek Haripoon" 
                className="w-full h-full object-cover" 
                style={{ objectPosition: 'center 12%' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Subtle background grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlPSIjM0I4MkY2IiBzdHJva2Utb3BhY2l0eT0iMC4wNSIgZmlsbD0ibm9uZSI+PHBhdGggZD0iTTAgNjBoNjBNNjAgMGYtNjAgNjAiLz48L2c+PC9zdmc+')] z-0 opacity-40 pointer-events-none" />
    </section>
  );
}
