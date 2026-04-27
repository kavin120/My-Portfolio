import { useEffect, useRef, useState } from 'react'

const roles = [
  'AI/ML Engineer',
  'Data Scientist',
  'Machine Learning Engineer',
  'Deep Learning Specialist',
  'Computer Vision Engineer',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [imgLoaded, setImgLoaded] = useState(false)

  // Typewriter effect
  useEffect(() => {
    const current = roles[roleIndex]
    let timeout

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 40)
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false)
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, isDeleting, roleIndex])

  const handleNav = (href) => {
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-20"
    >
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-3xl" />
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <div className="order-2 lg:order-1">
          <div className="inline-flex items-center glass px-4 py-2 rounded-full text-sm text-blue-300 font-medium mb-6">
            Available for Work
          </div>

          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-4 tracking-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Hi,I'm{' '}
            <span className="gradient-text">Kavin T</span>
          </h1>

          <div className="flex items-center gap-3 mb-6 h-10">
            <span className="text-xl md:text-2xl text-slate-300 font-medium">
              {displayed}
            </span>
            <span className="w-0.5 h-7 bg-blue-400 animate-pulse rounded-full" />
          </div>

          <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-xl">
            AI/ML developer specializing in{' '}
            <span className="text-blue-400 font-medium">Python, TensorFlow & PyTorch</span>, passionate about building intelligent AI systems,{' '}
            <span className="text-purple-400 font-medium">Machine Learning & Deep Learning</span>, and real-time systems.
            I enjoy transforming complex problems into clean, efficient solutions.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <button
              onClick={() => handleNav('#projects')}
              className="btn-primary text-white font-semibold px-8 py-4 rounded-xl text-base shadow-lg shadow-blue-500/25"
            >
              <span>View My Work</span>
            </button>
            <button
              onClick={() => handleNav('#contact')}
              className="btn-outline text-white font-semibold px-8 py-4 rounded-xl text-base"
            >
              Get In Touch
            </button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8">
            {[
              { value: '6+', label: 'Projects Built' },
              { value: '4+', label: 'Tech Stacks' },
              { value: '2+', label: 'Internships' },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  className="text-3xl font-bold gradient-text-blue"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {stat.value}
                </div>
                <div className="text-slate-500 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Profile Photo */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
          <div className="relative">
            {/* Rotating border */}
            <div
              className="absolute inset-0 rounded-full animate-spin"
              style={{
                background: 'conic-gradient(from 0deg, #3b82f6, #8b5cf6, #34d399, #3b82f6)',
                padding: '2px',
                borderRadius: '9999px',
                animationDuration: '8s',
              }}
            />
            {/* Glow */}
            <div className="absolute inset-4 rounded-full bg-blue-500/20 blur-2xl" />

            {/* Photo container */}
            <div
              className="relative rounded-full overflow-hidden border-4 border-transparent"
              style={{
                background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                padding: '3px',
                borderRadius: '9999px',
              }}
            >
              <div className="rounded-full overflow-hidden w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
                <img
                  src="/profile-new.jpg"
                  alt="Kavin T - AI/ML Engineer"
                  className={`w-full h-full object-cover transition-opacity duration-500 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
                  style={{ objectPosition: '48% 30%', transform: 'scale(1.85)' }}
                  onLoad={() => setImgLoaded(true)}
                />
                {!imgLoaded && (
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center">
                    <span className="text-6xl font-bold text-white">KT</span>
                  </div>
                )}
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -top-2 -right-2 glass px-3 py-2 rounded-xl text-xs font-semibold text-blue-300 animate-float">
              ⚡ TensorFlow
            </div>
            <div className="absolute -bottom-2 -left-2 glass px-3 py-2 rounded-xl text-xs font-semibold text-green-300 animate-float" style={{ animationDelay: '1s' }}>
              🚀 PyTorch
            </div>
            <div className="absolute top-1/2 -right-8 glass px-3 py-2 rounded-xl text-xs font-semibold text-purple-300 animate-float" style={{ animationDelay: '0.5s' }}>
              🧠 AI/ML
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-0.5 h-8 bg-gradient-to-b from-slate-600 to-transparent rounded-full animate-bounce" />
      </div>
    </section>
  )
}
