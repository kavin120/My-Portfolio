import useScrollAnimation from '../hooks/useScrollAnimation'

const skillGroups = [
  {
    category: 'Languages',
    icon: '⌨️',
    color: 'blue',
    skills: [
      { name: 'Python', level: 92 },
      { name: 'Java', level: 85 },
      { name: 'JavaScript', level: 80 },
      { name: 'C / C++', level: 75 },
      { name: 'SQL', level: 82 },
      { name: 'R', level: 70 },
    ],
  },
  {
    category: 'AI/ML & Data Science',
    icon: '🧠',
    color: 'purple',
    skills: [
      { name: 'TensorFlow', level: 88 },
      { name: 'PyTorch', level: 85 },
      { name: 'Scikit-learn', level: 90 },
      { name: 'Keras', level: 85 },
      { name: 'Pandas', level: 92 },
      { name: 'NumPy', level: 90 },
    ],
  },
  {
    category: 'Tools & Platforms',
    icon: '🛠️',
    color: 'green',
    skills: [
      { name: 'OpenCV', level: 85 },
      { name: 'NLTK', level: 80 },
      { name: 'Matplotlib', level: 88 },
      { name: 'Git & GitHub', level: 88 },
      { name: 'Jupyter', level: 92 },
      { name: 'Docker', level: 75 },
    ],
  },
]

const colorMap = {
  blue: {
    bar: 'bg-blue-500',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
    text: 'text-blue-400',
    badge: 'bg-blue-500/15 border-blue-500/30 text-blue-300',
  },
  purple: {
    bar: 'bg-purple-500',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/20',
    text: 'text-purple-400',
    badge: 'bg-purple-500/15 border-purple-500/30 text-purple-300',
  },
  green: {
    bar: 'bg-emerald-500',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
    text: 'text-emerald-400',
    badge: 'bg-emerald-500/15 border-emerald-500/30 text-emerald-300',
  },
}

function SkillBar({ name, level, color }) {
  const c = colorMap[color]
  return (
    <div className="mb-3">
      <div className="flex justify-between mb-1">
        <span className="text-slate-300 text-sm font-medium">{name}</span>
        <span className={`text-xs font-semibold ${c.text}`}>{level}%</span>
      </div>
      <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full ${c.bar} transition-all duration-1000 ease-out`}
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const ref = useScrollAnimation()

  return (
    <section id="skills" ref={ref} className="py-28 px-6 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <span className="tag mb-4 inline-block">Technical Skills</span>
          <h2 className="section-title mt-3">
            My{' '}
            <span className="gradient-text">Tech Arsenal</span>
          </h2>
          <p className="text-slate-500 mt-4 max-w-lg mx-auto">
            Proficient across the full development stack — from elegant frontend interfaces to robust backend architectures.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {skillGroups.map((group, idx) => {
            const c = colorMap[group.color]
            return (
              <div
                key={group.category}
                className={`fade-in glass glass-hover rounded-2xl p-6 border ${c.border}`}
                style={{ transitionDelay: `${idx * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-10 h-10 ${c.bg} rounded-xl flex items-center justify-center text-xl`}>
                    {group.icon}
                  </div>
                  <h3 className={`font-bold text-base ${c.text}`} style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {group.category}
                  </h3>
                </div>
                {group.skills.map((skill) => (
                  <SkillBar key={skill.name} {...skill} color={group.color} />
                ))}
              </div>
            )
          })}
        </div>

        {/* Additional skills chips */}
        <div className="mt-10 text-center fade-in">
          <p className="text-slate-500 text-sm mb-4 uppercase tracking-widest">Also familiar with</p>
          <div className="flex flex-wrap justify-center gap-2">
            {['WebSockets', 'Redux', 'Docker', 'AWS EC2', 'Figma', 'Linux', 'Agile / Scrum', 'OOP', 'Data Structures', 'Algorithms'].map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
