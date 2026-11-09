import { Code2, Brain, Cloud, BookOpen } from 'lucide-react';

interface AboutProps {
  isModal?: boolean;
}

export default function About({ isModal = false }: AboutProps) {
  const stats = [
    { label: 'Full Stack Projects', value: '10+', icon: Code2 },
    { label: 'Internships Completed', value: '3', icon: Brain },
    { label: 'Certifications Earned', value: '5+', icon: Cloud },
    { label: 'Technologies Learned', value: '20+', icon: BookOpen },
  ];

  return (
    <section id="about" className={`w-full relative z-10 ${isModal ? 'py-2 px-2' : 'py-20 px-6'}`}>
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 text-slate-900">About <span className="text-gradient">Me</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-5 text-slate-600 text-base sm:text-lg leading-relaxed">
            <p>
              I am a driven <strong className="text-slate-900 font-semibold">Computer Science Engineering student</strong> with a strong foundation in software development and a relentless passion for solving real-world problems through technology.
            </p>
            <p>
              My journey has equipped me with extensive experience in <strong className="text-blue-600 font-semibold">Full Stack Development</strong> and a growing expertise in <strong className="text-purple-600 font-semibold">Artificial Intelligence</strong>. I thrive on building applications that are not just functional, but highly scalable and user-centric.
            </p>
            <p>
              As a <strong className="text-slate-900 font-semibold">Cloud Computing enthusiast</strong> and continuous learner, I actively explore modern architectures and DevOps practices to deliver robust, end-to-end software solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200 p-5 sm:p-6 rounded-2xl flex flex-col items-center text-center group hover:border-blue-400 hover:shadow-md transition-all shadow-sm"
              >
                <div className="w-12 h-12 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <stat.icon className="text-blue-600 w-6 h-6" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-1">{stat.value}</h3>
                <p className="text-xs sm:text-sm text-slate-500 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
