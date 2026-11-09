import { Briefcase, Cloud, Award } from 'lucide-react';

interface ExperienceProps {
  isModal?: boolean;
}

export default function Experience({ isModal = false }: ExperienceProps) {
  const experiences = [
    {
      type: 'work',
      title: 'Full Stack Development Intern',
      company: 'Spheronix',
      date: 'Recent',
      description: 'Web application development with AI integration, API connectivity, database management, and UI/UX improvements.',
      icon: Briefcase,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 border-blue-100'
    },
    {
      type: 'work',
      title: 'Python Developer Intern',
      company: 'Saraj Infotech',
      date: 'Past',
      description: 'Focused on Python development, debugging, testing, and script optimization for internal processes.',
      icon: Briefcase,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50 border-purple-100'
    },
    {
      type: 'work',
      title: 'AWS Cloud Intern',
      company: 'Saraj Infotech',
      date: 'Past',
      description: 'Learned cloud services, deployment concepts, and infrastructure fundamentals on Amazon Web Services.',
      icon: Cloud,
      color: 'text-orange-500',
      bgColor: 'bg-orange-50 border-orange-100'
    },
    {
      type: 'certification',
      title: 'Cloud Computing — NPTEL Online Certification (Elite)',
      company: 'IIT Kharagpur | Swayam (MoE, Govt. of India)',
      date: 'Jan - Apr 2025',
      description: 'Successfully completed the 12-week comprehensive Cloud Computing course. Awarded the prestigious Elite certificate with a consolidated score of 63%.',
      icon: Award,
      color: 'text-amber-600',
      bgColor: 'bg-amber-50 border-amber-200'
    }
  ];

  return (
    <section id="experience" className={`w-full relative z-10 ${isModal ? 'py-2 px-2' : 'py-20 px-6'}`}>
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 text-slate-900">Experience &amp; <span className="text-gradient">Certifications</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full" />
        </div>

        <div className="relative border-l border-slate-200 ml-4 md:ml-32 space-y-8 pb-4">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative pl-8 md:pl-10">
              {/* Timeline Node */}
              <div className={`absolute -left-[17px] top-1 w-8 h-8 rounded-full border flex items-center justify-center shadow-sm ${exp.bgColor}`}>
                <exp.icon className={`w-4 h-4 ${exp.color}`} />
              </div>

              {/* Date tag for desktop */}
              <div className="hidden md:block absolute -left-36 top-1 text-sm font-bold text-slate-500 text-right w-28">
                {exp.date}
              </div>

              <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl hover:border-blue-400 hover:shadow-md transition-all shadow-sm">
                <span className="md:hidden inline-block text-xs font-semibold text-blue-600 mb-2 px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200">
                  {exp.date}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1">{exp.title}</h3>
                <h4 className="text-sm font-semibold text-blue-600 mb-3">{exp.company}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
