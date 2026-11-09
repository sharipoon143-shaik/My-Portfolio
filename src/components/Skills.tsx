interface SkillsProps {
  isModal?: boolean;
}

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'Java', level: 80 },
    ]
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'React.js', level: 90 },
      { name: 'HTML5/CSS3', level: 95 },
      { name: 'Bootstrap/Tailwind', level: 85 },
    ]
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'FastAPI', level: 80 },
      { name: 'REST APIs', level: 90 },
    ]
  },
  {
    title: 'Database & Cloud',
    skills: [
      { name: 'MongoDB Atlas', level: 85 },
      { name: 'AWS', level: 75 },
      { name: 'GitHub Actions', level: 80 },
    ]
  },
  {
    title: 'Core Concepts',
    skills: [
      { name: 'Data Structures', level: 85 },
      { name: 'Algorithms', level: 80 },
      { name: 'DBMS / OOP', level: 90 },
    ]
  }
];

export default function Skills({ isModal = false }: SkillsProps) {
  return (
    <section id="skills" className={`w-full relative z-10 ${isModal ? 'py-2 px-2' : 'py-20 px-6'}`}>
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 text-slate-900">Technical <span className="text-gradient">Skills</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-slate-50 border border-slate-200 p-6 rounded-2xl hover:border-blue-400 hover:shadow-md transition-all shadow-sm"
            >
              <h3 className="text-lg font-bold text-slate-900 mb-5 border-b border-slate-200 pb-3">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-slate-800 font-medium">{skill.name}</span>
                      <span className="text-slate-500 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-blue-600 to-indigo-600 h-full rounded-full transition-all duration-700"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
