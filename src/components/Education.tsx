import { GraduationCap, BookOpen, School, Award } from 'lucide-react';

interface EducationProps {
  isModal?: boolean;
}

export default function Education({ isModal = false }: EducationProps) {
  const educationList = [
    {
      degree: 'B.Tech in Computer Science & Engineering',
      institution: 'Sir C V Raman Institute of Technology and Sciences',
      timeline: '2022 – 2026',
      score: '75%',
      scoreLabel: 'Aggregate',
      icon: GraduationCap,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 border-blue-100',
      description: 'Focused on Core Computer Science, Data Structures, Algorithms, Full Stack Development, and AI.'
    },
    {
      degree: 'Intermediate (MPC)',
      institution: 'Sai Siddhartha College, Tadipatri',
      timeline: 'Completed',
      score: '700 / 1000',
      scoreLabel: 'Score: 70%',
      icon: BookOpen,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50 border-purple-100',
      description: 'Stream: Mathematics, Physics, and Chemistry (MPC).'
    },
    {
      degree: 'Secondary School Certificate (SSC)',
      institution: 'Z.P. High School, Sanagala Gudur',
      timeline: 'Completed',
      score: '550 / 600',
      scoreLabel: 'Score: 91.67%',
      icon: School,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50 border-emerald-100',
      description: 'General Academic Curriculum with distinction performance.'
    }
  ];

  return (
    <section id="education" className={`w-full relative z-10 ${isModal ? 'py-2 px-2' : 'py-20 px-6'}`}>
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 text-slate-900">
            My <span className="text-gradient">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full" />
        </div>

        <div className="relative border-l border-slate-200 ml-4 md:ml-32 space-y-8 pb-4">
          {educationList.map((item, idx) => (
            <div key={idx} className="relative pl-8 md:pl-10">
              {/* Timeline Icon Node */}
              <div className={`absolute -left-[17px] top-1 w-8 h-8 rounded-full border flex items-center justify-center shadow-sm ${item.bgColor}`}>
                <item.icon className={`w-4 h-4 ${item.color}`} />
              </div>

              {/* Date tag for desktop */}
              <div className="hidden md:block absolute -left-36 top-1 text-sm font-bold text-slate-500 text-right w-28">
                {item.timeline}
              </div>

              <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl hover:border-blue-400 hover:shadow-md transition-all shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="md:hidden inline-block text-xs font-semibold text-blue-600 px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200">
                    {item.timeline}
                  </span>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-bold text-slate-800 shadow-sm ml-auto md:ml-0">
                    <Award size={13} className={item.color} />
                    <span>{item.score}</span>
                    <span className="text-slate-400 font-normal">({item.scoreLabel})</span>
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1">{item.degree}</h3>
                <h4 className="text-sm font-semibold text-blue-600 mb-2">{item.institution}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

