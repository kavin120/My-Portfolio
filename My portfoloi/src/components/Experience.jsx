import useScrollAnimation from '../hooks/useScrollAnimation'

const experiences = [
  {
    role: 'AI/ML Intern',
    company: 'Tech AI Labs',
    period: 'Jul 2025 – Sep 2025',
    type: 'Internship',
    color: 'blue',
    bullets: [
      'Developed machine learning models for predictive analytics and data classification',
      'Built deep learning neural networks using TensorFlow and PyTorch for image recognition',
      'Implemented data preprocessing pipelines for training ML models with 95% accuracy',
      'Deployed AI models to production and optimized inference time by 40%',
    ],
  },
  {
    role: 'Data Science Intern',
    company: 'DataMind Analytics',
    period: 'May 2025 – Jun 2025',
    type: 'Internship',
    color: 'purple',
    bullets: [
      'Built predictive models using Python, Scikit-learn, and Pandas for business insights',
      'Created data visualizations and dashboards for stakeholder decision-making',
      'Performed exploratory data analysis on large datasets to identify trends and patterns',
      'Developed NLP applications for text classification and sentiment analysis',
    ],
  },
  {
    role: 'Python Developer Intern',
    company: 'CodeCraft Solutions',
    period: 'Aug 2024 – Sep 2024',
    type: 'Internship',
    color: 'green',
    bullets: [
      'Developed automation scripts using Python for data processing and analysis',
      'Built REST APIs for machine learning model deployment and integration',
      'Applied object-oriented programming principles to design modular and maintainable code',
      'Implemented data pipelines and worked with SQL databases for data management',
    ],
  },
];

const achievements = [
  { title: 'National Level Karate Championship', desc: 'Participated in national-level competition held in Haryana (2023)', color: 'yellow' },
  { title: 'State Level Karate Championship', desc: 'Competed in state-level karate championship in Chennai (2022)', color: 'blue' },
  { title: 'President - Tamil Association', desc: 'Led events and coordinated team activities, improving student engagement', color: 'green' },
  { title: 'AI/ML Projects', desc: 'Developed multiple ML models including image classification, NLP, and predictive analytics', color: 'purple' },
  { title: 'Internship Experience', desc: 'Completed internships in AI/ML and data science, building real-world AI solutions', color: 'indigo' },
];

const colorMap = {
  blue: { dot: 'bg-blue-500', line: 'bg-blue-500/30', badge: 'bg-blue-500/15 text-blue-300', border: 'border-blue-500/20', icon: 'text-blue-400', bg: 'bg-blue-500/10' },
  purple: { dot: 'bg-purple-500', line: 'bg-purple-500/30', badge: 'bg-purple-500/15 text-purple-300', border: 'border-purple-500/20', icon: 'text-purple-400', bg: 'bg-purple-500/10' },
  yellow: { icon: 'text-yellow-400', bg: 'bg-yellow-500/10', border: 'border-yellow-500/20' },
  green: { icon: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20' },
  red: { icon: 'text-red-400', bg: 'bg-red-500/10', border: 'border-red-500/20' },
  indigo: { icon: 'text-indigo-400', bg: 'bg-indigo-500/10', border: 'border-indigo-500/20' },
}

export default function Experience() {
  const ref = useScrollAnimation()

  return (
    <section id="experience" ref={ref} className="py-28 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Experience */}
        <div className="text-center mb-16 fade-in">
          <span className="tag mb-4 inline-block">Experience</span>
          <h2 className="section-title mt-3">
            Professional{' '}
            <span className="gradient-text">Journey</span>
          </h2>
        </div>

        <div className="relative mb-20">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-transparent hidden md:block" />

          <div className="flex flex-col gap-12">
            {experiences.map((exp, idx) => {
              const c = colorMap[exp.color]
              return (
                <div
                  key={exp.role}
                  className={`fade-in md:grid md:grid-cols-2 gap-8 items-start ${idx % 2 === 1 ? 'md:text-right' : ''}`}
                  style={{ transitionDelay: `${idx * 0.15}s` }}
                >
                  {/* Content */}
                  <div className={`${idx % 2 === 1 ? 'md:order-1' : 'md:order-2'}`}>
                    <div className="glass rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-all duration-300 hover:-translate-y-1">
                      <div className={`flex items-center gap-2 mb-2 ${idx % 2 === 1 ? 'md:justify-end' : ''}`}>
                        <span className={`text-xs font-semibold px-3 py-1 rounded-full ${c.badge}`}>
                          {exp.type}
                        </span>
                        <span className="text-slate-500 text-xs">{exp.period}</span>
                      </div>
                      <h3 className="text-white font-bold text-lg mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        {exp.role}
                      </h3>
                      <p className={`font-medium text-sm mb-4 ${c.icon}`}>{exp.company}</p>
                      <ul className="space-y-2">
                        {exp.bullets.map((b, i) => (
                          <li key={i} className={`text-slate-400 text-sm leading-relaxed flex gap-2 ${idx % 2 === 1 ? 'md:flex-row-reverse md:text-right' : ''}`}>
                            <span className={`w-1.5 h-1.5 ${c.dot} rounded-full mt-2 shrink-0`} />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className={`hidden md:flex items-start justify-center pt-8 ${idx % 2 === 1 ? 'md:order-2' : 'md:order-1'}`}>
                    <div className={`w-4 h-4 rounded-full ${c.dot} ring-4 ring-[#040d1f] ring-offset-2 shadow-lg`} />
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Achievements */}
        <div className="text-center mb-12 fade-in">
          <span className="tag mb-4 inline-block">Achievements</span>
          <h2 className="section-title mt-3">
            Leadership &{' '}
            <span className="gradient-text">Recognition</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map((ach, idx) => {
            const c = colorMap[ach.color]
            return (
              <div
                key={ach.title}
                className={`fade-in glass glass-hover rounded-2xl p-5 border ${c.border}`}
                style={{ transitionDelay: `${idx * 0.08}s` }}
              >
                <div className={`w-12 h-12 ${c.bg} rounded-xl flex items-center justify-center text-2xl mb-4`}>
                  {ach.icon}
                </div>
                <h4 className="font-bold text-white mb-1 text-sm" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {ach.title}
                </h4>
                <p className="text-slate-500 text-xs leading-relaxed">{ach.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
