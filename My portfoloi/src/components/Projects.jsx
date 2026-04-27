import { useState } from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation'

const projects = [
  {
    id: 1,
    title: 'AI-Powered Learning Platform',
    emoji: '🤖',
    description:
      'Architected a personalized RL-based learning system that dynamically adapts educational content to individual student needs. Implements Q-Learning to optimize learning paths, boosting engagement and knowledge retention.',
    impact: '40% improvement in student engagement metrics',
    tech: ['Python', 'TensorFlow', 'Scikit-learn', 'Reinforcement Learning', 'FastAPI', 'OpenCV'],
    category: 'AI / ML',
    color: 'purple',
    gradient: 'from-purple-600/20 to-blue-600/20',
    link: '#',
  },
  {
    id: 2,
    title: 'Computer Vision Object Detection',
    emoji: '👁️',
    description:
      'Built a deep learning-based object detection system using YOLO and Faster R-CNN architectures. Trained custom models for real-time object recognition with 95% accuracy on custom datasets.',
    impact: '95% accuracy in real-time object detection',
    tech: ['Python', 'PyTorch', 'OpenCV', 'YOLO', 'NumPy', 'Matplotlib'],
    category: 'Computer Vision',
    color: 'blue',
    gradient: 'from-blue-600/20 to-cyan-600/20',
    link: '#',
  },
  {
    id: 3,
    title: 'NLP Sentiment Analysis Engine',
    emoji: '📊',
    description:
      'Developed a natural language processing system for sentiment analysis using BERT and LSTM models. Processed large text datasets to classify sentiment with 92% accuracy for business insights.',
    impact: '92% sentiment classification accuracy',
    tech: ['Python', 'TensorFlow', 'NLTK', 'BERT', 'Pandas', 'Flask'],
    category: 'NLP',
    color: 'green',
    gradient: 'from-emerald-600/20 to-teal-600/20',
    link: '#',
  },
  {
    id: 4,
    title: 'Predictive Analytics Dashboard',
    emoji: '📈',
    description:
      'Engineered a machine learning-powered analytics dashboard for business forecasting. Implemented regression models, time-series analysis, and data visualization for strategic decision-making.',
    impact: '30% improvement in forecast accuracy',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib', 'Flask', 'SQL'],
    category: 'Data Science',
    color: 'blue',
    gradient: 'from-sky-600/20 to-blue-600/20',
    link: '#',
  },
  {
    id: 5,
    title: 'Image Classification with CNN',
    emoji: '🖼️',
    description:
      'Designed a convolutional neural network for multi-class image classification. Built custom CNN architectures with data augmentation and transfer learning for improved model performance.',
    impact: 'Achieved 94% classification accuracy on test data',
    tech: ['Python', 'Keras', 'TensorFlow', 'OpenCV', 'NumPy'],
    category: 'Deep Learning',
    color: 'purple',
    gradient: 'from-violet-600/20 to-purple-600/20',
    link: '#',
  },
  {
    id: 6,
    title: 'AI Chatbot with Language Model',
    emoji: '💬',
    description:
      'Developed an intelligent chatbot using transformer-based language models for natural conversation. Implemented fine-tuned models for domain-specific responses and intent recognition.',
    impact: '85% intent recognition accuracy with natural responses',
    tech: ['Python', 'PyTorch', 'Hugging Face', 'FastAPI', 'NLP'],
    category: 'AI / ML',
    color: 'green',
    gradient: 'from-teal-600/20 to-emerald-600/20',
    link: '#',
  },
  {
    id: 7,
    title: 'Keystroke Dynamics Auth System',
    emoji: '🔐',
    description:
      'Implemented biometric authentication using keystroke dynamics and Cosine Similarity analysis. The system creates user typing profiles and rejects login attempts that deviate from the stored behavioral pattern.',
    impact: 'Blocked 100% of unauthorized access in testing',
    tech: ['Python', 'Machine Learning', 'Cosine Similarity', 'REST API', 'React.js'],
    category: 'AI / ML',
    color: 'purple',
    gradient: 'from-pink-600/20 to-purple-600/20',
    link: '#',
  },
  {
    id: 8,
    title: 'Hospital Management System',
    emoji: '🏥',
    description:
      'Built a comprehensive hospital management platform to streamline patient registration, appointment scheduling, doctor management, and billing. Features role-based access control for admins, doctors, and patients with a clean, responsive UI.',
    impact: 'Reduced administrative overhead with automated scheduling & billing',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'REST APIs'],
    category: 'Healthcare',
    color: 'blue',
    gradient: 'from-blue-600/20 to-cyan-600/20',
    link: '#',
  },
  {
    id: 9,
    title: 'Interactive Map Application',
    emoji: '🗺️',
    description:
      'Developed a feature-rich map application enabling real-time location tracking, route planning, and place search using Google Maps / Leaflet integration. Supports geolocation, custom markers, and distance calculations between points.',
    impact: 'Delivered real-time navigation with sub-second location updates',
    tech: ['React.js', 'Google Maps API', 'Geolocation API', 'Node.js', 'REST APIs'],
    category: 'Full Stack',
    color: 'green',
    gradient: 'from-teal-600/20 to-green-600/20',
    link: '#',
  },
]

const categoryFilters = {
  All: null,
  'Full Stack': ['Full Stack'],
  'AI / ML': ['AI / ML', 'Computer Vision', 'NLP', 'Data Science', 'Deep Learning'],
  Healthcare: ['Healthcare'],
  Backend: ['Backend'],
  Simulation: ['Simulation'],
}

const categories = Object.keys(categoryFilters).filter((cat) => {
  const matches = categoryFilters[cat]
  return !matches || projects.some((project) => matches.includes(project.category))
})

const colorMap = {
  blue: { border: 'hover:border-blue-500/40', badge: 'bg-blue-500/15 text-blue-300 border border-blue-500/30', impact: 'text-blue-400', dot: 'bg-blue-400' },
  purple: { border: 'hover:border-purple-500/40', badge: 'bg-purple-500/15 text-purple-300 border border-purple-500/30', impact: 'text-purple-400', dot: 'bg-purple-400' },
  green: { border: 'hover:border-emerald-500/40', badge: 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30', impact: 'text-emerald-400', dot: 'bg-emerald-400' },
}

function ProjectCard({ project }) {
  const c = colorMap[project.color]
  return (
    <div className={`fade-in glass rounded-2xl overflow-hidden border border-white/5 ${c.border} transition-all duration-400 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/30 flex flex-col`}>
      {/* Card Header */}
      <div className={`bg-gradient-to-br ${project.gradient} p-6 flex items-start justify-between`}>
        <div>
          <span className="text-3xl mb-3 block">{project.emoji}</span>
          <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full ${c.badge}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${c.dot}`} />
            {project.category}
          </span>
        </div>
        <a
          href={project.link}
          className="w-9 h-9 glass rounded-xl flex items-center justify-center text-slate-400 hover:text-white transition-colors"
          title="View Project"
        >
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>

      {/* Card Body */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-white mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          {project.title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">{project.description}</p>

        {/* Impact */}
        <div className={`flex items-center gap-2 text-sm font-medium ${c.impact} mb-4`}>
          <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {project.impact}
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span key={t} className="tag text-xs">{t}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const ref = useScrollAnimation([filter])

  const activeCategories = categoryFilters[filter]
  const filtered = activeCategories ? projects.filter((p) => activeCategories.includes(p.category)) : projects

  return (
    <section id="projects" ref={ref} className="py-28 px-6 relative">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 fade-in">
          <span className="tag mb-4 inline-block">Projects</span>
          <h2 className="section-title mt-3">
            Things I've{' '}
            <span className="gradient-text">Built</span>
          </h2>
          <p className="text-slate-500 mt-4 max-w-lg mx-auto">
            Each project is a story of problem-solving, learning, and impact.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 fade-in">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${filter === cat
                  ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30'
                  : 'glass text-slate-400 hover:text-white hover:bg-white/10'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
