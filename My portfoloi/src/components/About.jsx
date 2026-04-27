import useScrollAnimation from '../hooks/useScrollAnimation'

const highlights = [
  { label: 'B.Tech CSE', sub: 'VIT-AP University' },
  { label: 'AI/ML Engineering', sub: 'Machine Learning & Deep Learning' },
  { label: '6+ Projects', sub: 'AI/ML & Data Science' },
  { label: '3 Internships', sub: 'AI & Web Development' },
];
export default function About() {
  const ref = useScrollAnimation()

  return (
    <section id="about" ref={ref} className="py-28 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <span className="tag mb-4 inline-block">About Me</span>
          <h2 className="section-title mt-3">
            Crafting Code with{' '}
            <span className="gradient-text">Purpose & Passion</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Photo */}
          <div className="fade-in flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-purple-600/30 rounded-2xl blur-2xl transform rotate-3" />
              <div className="relative glass rounded-2xl overflow-hidden border border-white/10 w-full max-w-sm aspect-square">
                <img
                  src="/profile-new.jpg"
                  alt="Kavin T"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: '48% 30%', transform: 'scale(1.7)' }}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#040d1f] via-[#040d1f]/60 to-transparent p-6">
                  <p className="text-white font-bold text-lg" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Kavin T</p>
                  <p className="text-blue-400 text-sm font-medium">AI/ML Engineer</p>
                </div>
              </div>
              {/* Decorative corner */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-blue-500/40 rounded-tr-2xl" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-purple-500/40 rounded-bl-2xl" />
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-slate-300 text-lg leading-relaxed mb-6 fade-in">
              I'm a Computer Science Engineering student with a deep passion for building{' '}
              <span className="text-blue-400 font-semibold">intelligent AI/ML systems</span> and{' '}
              <span className="text-purple-400 font-semibold">data-driven solutions</span> that solve real-world problems.
            </p>
            <p className="text-slate-400 leading-relaxed mb-8 fade-in">
              From developing machine learning models and deep learning architectures to creating computer vision systems and NLP applications, I enjoy turning complex data into intelligent, practical solutions. My work emphasizes clean, maintainable code and delivering impactful, production-ready AI applications.
            </p>

            {/* Highlights grid */}
            <div className="grid grid-cols-2 gap-4 mb-8 fade-in">
              {highlights.map((h) => (
                <div key={h.label} className="glass glass-hover rounded-xl p-4 cursor-default">
                  <span className="text-2xl mb-2 block">{h.icon}</span>
                  <div className="font-semibold text-white text-sm">{h.label}</div>
                  <div className="text-slate-500 text-xs mt-0.5">{h.sub}</div>
                </div>
              ))}
            </div>

            {/* Quick facts */}
            <div className="flex flex-wrap gap-3 fade-in">
              {['Python', 'Machine Learning', 'Deep Learning', 'TensorFlow', 'PyTorch', 'Computer Vision'].map((skill) => (
                <span key={skill} className="tag">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
