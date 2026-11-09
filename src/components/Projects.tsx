import { Sparkles } from 'lucide-react';

interface ProjectsProps {
  isModal?: boolean;
}

export default function Projects({ isModal = false }: ProjectsProps) {
  return (
    <section id="projects" className={`w-full relative z-10 ${isModal ? 'py-2 px-2' : 'py-20 px-6'}`}>
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 text-slate-900"><span className="text-gradient">Projects</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full" />
        </div>

        {/* Flagship Project */}
        <div className="relative rounded-3xl bg-slate-50 border border-slate-200 overflow-hidden shadow-md group">
          <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/70 border border-blue-200 text-blue-700 w-fit mb-4 font-semibold">
              <Sparkles size={16} />
              <span className="text-xs font-bold tracking-widest uppercase">Featured Project</span>
            </div>
            
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Intelligent Crop Recommendation System
            </h3>
            
            <p className="text-slate-600 text-sm sm:text-base mb-6 leading-relaxed">
              A highly accurate Machine Learning-based prediction engine designed to enhance agricultural analytics by recommending the most suitable crops based on rainfall, humidity, temperature, and soil nutrient data.
            </p>
            
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {['Data Preprocessing', 'ML Prediction', 'Recommendation Engine', 'Agricultural Analytics'].map((feature) => (
                  <span key={feature} className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs text-slate-700 font-medium shadow-sm">
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
