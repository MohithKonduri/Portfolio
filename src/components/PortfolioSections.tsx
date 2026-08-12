import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Code2, Database, Cloud, Globe, Zap,
  Briefcase, Calendar, MapPin,
  Trophy, Award, Star,
  Users, Crown, Megaphone, GraduationCap,
  BookOpen, Lightbulb, ChevronDown, ChevronUp,
  ExternalLink, Terminal, Layers, Server, Cpu
} from 'lucide-react';

/* ─────────────────── DATA ─────────────────── */

const education = {
  institution: 'Vignan Institute of Technology and Science',
  location: 'Hyderabad, India',
  degree: 'B.Tech in Information Technology',
  period: 'Sep 2023 – May 2027',
  cgpa: '7.71',
};

const skillCategories = [
  {
    label: 'Languages',
    icon: <Terminal size={18} />,
    color: 'from-violet-500 to-purple-600',
    bg: 'bg-violet-50',
    border: 'border-violet-200',
    items: ['JavaScript', 'TypeScript', 'SQL', 'Python'],
  },
  {
    label: 'Frontend',
    icon: <Globe size={18} />,
    color: 'from-sky-500 to-blue-600',
    bg: 'bg-sky-50',
    border: 'border-sky-200',
    items: ['React.js', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Shadcn UI'],
  },
  {
    label: 'Backend',
    icon: <Server size={18} />,
    color: 'from-emerald-500 to-green-600',
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    items: ['Node.js', 'Express.js', 'REST APIs', 'Authentication', 'Payment Integration'],
  },
  {
    label: 'Databases',
    icon: <Database size={18} />,
    color: 'from-amber-500 to-orange-600',
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    items: ['Supabase (PostgreSQL)', 'Firebase', 'MySQL', 'Cloudflare R2'],
  },
  {
    label: 'Cloud & DevOps',
    icon: <Cloud size={18} />,
    color: 'from-rose-500 to-pink-600',
    bg: 'bg-rose-50',
    border: 'border-rose-200',
    items: ['Vercel', 'Cloudflare', 'Git', 'GitHub', 'CI/CD'],
  },
  {
    label: 'Integrations',
    icon: <Layers size={18} />,
    color: 'from-teal-500 to-cyan-600',
    bg: 'bg-teal-50',
    border: 'border-teal-200',
    items: ['Google Authenticator', 'WhatsApp OTP', 'Email Services', 'Razorpay', 'Google OAuth'],
  },
];

const experiences = [
  {
    company: 'WingsnNests Eco Solutions Pvt. Ltd.',
    location: 'Hyderabad, India',
    role: 'Software Development Engineer (SDE) Intern',
    year: '2026',
    color: 'from-emerald-500 to-teal-600',
    accent: '#10b981',
    link: 'https://xplorwing.com',
    linkLabel: 'xplorwing.com',
    highlights: [
      'Designed, developed, and deployed the end-to-end travel platform Xplorwing (xplorwing.com), serving as the complete full-stack developer.',
      'Engineered secure authentication with Google Authenticator, email services, WhatsApp OTP, and integrated online payment gateways.',
      'Built scalable dashboards, booking workflows, KYC verification, role-based access control, and optimized backend APIs.',
    ],
  },
  {
    company: '1M1B',
    location: 'Remote',
    role: 'AI Engineer Intern',
    year: '2025',
    color: 'from-blue-500 to-indigo-600',
    accent: '#6366f1',
    highlights: [
      'Built an AI-based waste classification model with 90%+ accuracy.',
      'Developed data preprocessing pipelines and optimized ML model performance.',
      'Automated classification workflows using feature engineering and evaluation techniques.',
    ],
  },
];

const projects = [
  {
    name: 'Smart Waste Management System',
    tech: ['Deep Learning', 'Python', 'MySQL'],
    year: '2025',
    color: 'from-emerald-500 to-teal-600',
    emoji: '♻️',
    stats: [
      { label: 'Efficiency Gain', value: '+35%' },
      { label: 'Model Accuracy', value: '95.4%' },
      { label: 'Delay Reduction', value: '42%' },
      { label: 'Engagement Boost', value: '2.3×' },
    ],
    highlights: [
      'Integrated IoT sensors and GPS modules into waste collection units for overflow detection and routing.',
      'Applied ResNet-50 deep learning model with moisture sensing for multi-level classification (95.4% accuracy, 12 categories).',
      'Optimized collection routes via Travelling Salesman Problem (TSP) and OpenStreetMap APIs.',
      'Built a reward-based web platform that raised user engagement 2.3× in 3 months.',
    ],
  },
  {
    name: 'IT Services Platform',
    tech: ['React', 'Node.js', 'Express', 'MySQL'],
    year: '2025',
    color: 'from-sky-500 to-blue-600',
    emoji: '🖥️',
    stats: [],
    highlights: [
      'Built scalable backend services with Express.js to handle concurrent user requests.',
      'Implemented optimized CRUD operations with structured database queries.',
      'Designed a modular frontend architecture in React for maintainability.',
    ],
  },
  {
    name: 'Alumni Management Portal',
    tech: ['React', 'Next.js', 'Node.js', 'MongoDB'],
    year: '2025',
    color: 'from-violet-500 to-purple-600',
    emoji: '🎓',
    stats: [],
    highlights: [
      'Built a secure authentication system enabling user registration, login, and profile management.',
      'Designed and implemented RESTful APIs with MongoDB for dynamic scalable data handling.',
      'Developed responsive dashboard interfaces for structured data visualization.',
    ],
  },
  {
    name: 'VITS IT Department Website',
    tech: ['Next.js', 'React', 'Tailwind CSS'],
    year: '2025',
    color: 'from-amber-500 to-orange-600',
    emoji: '🌐',
    stats: [],
    highlights: [
      'Developed and deployed a production-ready responsive website for the department.',
      'Implemented component-based architecture with optimized routing.',
      'Enhanced user experience with responsive design and efficient UI rendering.',
    ],
  },
];

const achievements = [
  {
    text: 'Certified in Pre-MBA Quantitative Methods',
    org: 'IIM Ahmedabad',
    year: '2025',
    emoji: '🏛️',
    color: 'from-amber-400 to-yellow-500',
  },
  {
    text: 'First Prize Winner, Poster Competition',
    org: 'Election Commission of India',
    year: '2025',
    emoji: '🥇',
    color: 'from-emerald-400 to-teal-500',
  },
  {
    text: 'Python Programming Certification',
    org: 'Swayam',
    year: '',
    emoji: '🐍',
    color: 'from-blue-400 to-indigo-500',
  },
];

const leadershipItems = [
  {
    role: 'President, Coding Club',
    desc: 'Led technical workshops and student initiatives',
    icon: Crown,
    color: 'from-amber-500 to-orange-500',
  },
  {
    role: 'Hackathon Coordinator',
    desc: 'Managed 600+ participants in VibeHack 2025',
    icon: Zap,
    color: 'from-violet-500 to-purple-600',
  },
  {
    role: 'Head Organiser',
    desc: 'Directed event execution and team coordination',
    icon: Megaphone,
    color: 'from-rose-500 to-pink-600',
  },
  {
    role: 'Class Representative (CR)',
    desc: 'Coordinated between faculty and 60+ students',
    icon: Users,
    color: 'from-sky-500 to-blue-600',
  },
];

/* ─────────────────── HELPERS ─────────────────── */

const SectionHeader: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="mb-12"
  >
    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: '4rem' }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
      className="h-1.5 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full mb-4"
    />
    <h2 className="text-3xl md:text-5xl font-black text-slate-800 mb-2">{title}</h2>
    <p className="text-slate-500 font-medium">{subtitle}</p>
  </motion.div>
);

/* ─────────────────── EDUCATION ─────────────────── */

const EducationSection: React.FC = () => (
  <section id="education" className="scroll-mt-24">
    <SectionHeader title="Education" subtitle="Academic foundation and credentials" />
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative glass-card rounded-3xl p-8 md:p-10 overflow-hidden group hover:shadow-xl transition-shadow duration-500"
    >
      {/* Background glow */}
      <div className="absolute -top-16 -right-16 w-56 h-56 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500 blur-2xl" />

      <div className="relative flex flex-col md:flex-row md:items-center gap-6">
        {/* Icon */}
        <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-200">
          <GraduationCap className="w-10 h-10 text-white" />
        </div>

        {/* Info */}
        <div className="flex-1">
          <h3 className="text-2xl font-black text-slate-800">{education.institution}</h3>
          <p className="text-slate-500 font-medium flex items-center gap-2 mt-1">
            <MapPin size={14} className="text-emerald-500" />
            {education.location}
          </p>
          <p className="text-lg font-bold text-emerald-700 mt-2">{education.degree}</p>
          <div className="flex flex-wrap gap-3 mt-3">
            <span className="inline-flex items-center gap-1.5 bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-sm font-semibold">
              <Calendar size={13} />
              {education.period}
            </span>
            <span className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-bold">
              <Star size={13} />
              CGPA: {education.cgpa}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);

/* ─────────────────── SKILLS ─────────────────── */

const SkillsSection: React.FC = () => (
  <section id="skills" className="scroll-mt-24">
    <SectionHeader title="Technical Skills" subtitle="Technologies and tools I work with" />
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {skillCategories.map((cat, i) => (
        <motion.div
          key={cat.label}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.08 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl p-6 group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
        >
          {/* Header */}
          <div className="flex items-center gap-3 mb-4">
            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-white shadow-md`}>
              {cat.icon}
            </div>
            <h3 className="text-base font-black text-slate-700">{cat.label}</h3>
          </div>
          {/* Pills */}
          <div className="flex flex-wrap gap-2">
            {cat.items.map(item => (
              <motion.span
                key={item}
                whileHover={{ scale: 1.05 }}
                className={`text-xs font-semibold px-3 py-1.5 rounded-full border ${cat.bg} ${cat.border} text-slate-700 cursor-default transition-all`}
              >
                {item}
              </motion.span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

/* ─────────────────── EXPERIENCE ─────────────────── */

const ExperienceSection: React.FC = () => (
  <section id="experience" className="scroll-mt-24">
    <SectionHeader title="Experience" subtitle="Real-world engineering roles" />
    <div className="relative">
      {/* Timeline spine */}
      <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-400 via-blue-400 to-transparent" />

      <div className="space-y-10">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            viewport={{ once: true }}
            className="relative pl-16 md:pl-20"
          >
            {/* Dot */}
            <div className={`absolute left-3 md:left-5 top-6 w-6 h-6 rounded-full bg-gradient-to-br ${exp.color} shadow-lg flex items-center justify-center`}>
              <div className="w-2 h-2 rounded-full bg-white" />
            </div>

            <div className="glass-card rounded-2xl p-6 md:p-8 group hover:shadow-xl transition-all duration-400 hover:-translate-y-1 overflow-hidden relative">
              {/* Accent bar */}
              <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${exp.color} rounded-l-2xl`} />

              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-5">
                <div>
                  <h3 className="text-xl font-black text-slate-800">{exp.company}</h3>
                  <p className={`text-base font-bold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>
                    {exp.role}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 shrink-0">
                  <span className="inline-flex items-center gap-1.5 bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-semibold">
                    <MapPin size={11} /> {exp.location}
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold">
                    <Calendar size={11} /> {exp.year}
                  </span>
                </div>
              </div>

              {exp.link && (
                <a
                  href={exp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 text-xs font-bold px-4 py-2 rounded-xl bg-gradient-to-r ${exp.color} text-white mb-4 hover:shadow-md hover:scale-105 transition-all duration-200`}
                >
                  <ExternalLink size={12} /> {exp.linkLabel}
                </a>
              )}

              <ul className="space-y-2">
                {exp.highlights.map((h, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-slate-600 font-medium leading-relaxed">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ─────────────────── PROJECTS ─────────────────── */

const ProjectCard: React.FC<{ project: typeof projects[0]; index: number }> = ({ project, index }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="glass-card rounded-2xl overflow-hidden group hover:shadow-2xl transition-all duration-500"
    >
      {/* Header strip */}
      <div className={`bg-gradient-to-r ${project.color} p-6 relative overflow-hidden`}>
        <div className="absolute -top-8 -right-8 w-28 h-28 bg-white/10 rounded-full" />
        <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/10 rounded-full" />
        <div className="relative flex items-start justify-between">
          <div>
            <span className="text-3xl mb-2 block">{project.emoji}</span>
            <h3 className="text-xl font-black text-white leading-tight">{project.name}</h3>
          </div>
          <span className="text-white/70 text-sm font-bold bg-white/20 px-3 py-1 rounded-full">{project.year}</span>
        </div>
        {/* Tech badges */}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tech.map(t => (
            <span key={t} className="text-xs font-bold bg-white/20 text-white px-2.5 py-1 rounded-full">{t}</span>
          ))}
        </div>
      </div>

      {/* Stats row */}
      {project.stats.length > 0 && (
        <div className="grid grid-cols-4 divide-x divide-slate-100 border-b border-slate-100">
          {project.stats.map(stat => (
            <div key={stat.label} className="py-4 px-3 text-center">
              <div className={`text-lg font-black bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
                {stat.value}
              </div>
              <div className="text-[10px] text-slate-400 font-semibold uppercase tracking-wide mt-0.5 leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Highlights */}
      <div className="p-6">
        <ul className="space-y-2">
          {(expanded ? project.highlights : project.highlights.slice(0, 2)).map((h, j) => (
            <li key={j} className="flex items-start gap-3 text-sm text-slate-600 font-medium leading-relaxed">
              <span className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.color} shrink-0`} />
              {h}
            </li>
          ))}
        </ul>
        {project.highlights.length > 2 && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-4 flex items-center gap-1 text-xs font-bold text-slate-400 hover:text-slate-600 transition-colors"
          >
            {expanded ? <><ChevronUp size={14} /> Show less</> : <><ChevronDown size={14} /> +{project.highlights.length - 2} more</>}
          </button>
        )}
      </div>
    </motion.div>
  );
};

const ProjectsSection: React.FC = () => (
  <section id="projects" className="scroll-mt-24">
    <SectionHeader title="Projects" subtitle="Things I've built end-to-end" />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((p, i) => (
        <ProjectCard key={p.name} project={p} index={i} />
      ))}
    </div>
  </section>
);

/* ─────────────────── ACHIEVEMENTS ─────────────────── */

const AchievementsSection: React.FC = () => (
  <section id="achievements" className="scroll-mt-24">
    <SectionHeader title="Achievements" subtitle="Recognition and certifications" />
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {achievements.map((ach, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          viewport={{ once: true }}
          whileHover={{ y: -6, transition: { duration: 0.2 } }}
          className="glass-card rounded-2xl p-7 text-center relative overflow-hidden group cursor-default"
        >
          {/* Background glow */}
          <div className={`absolute inset-0 bg-gradient-to-br ${ach.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${ach.color} flex items-center justify-center mx-auto mb-4 shadow-lg text-3xl`}>
            {ach.emoji}
          </div>
          <h3 className="font-black text-slate-800 text-base leading-snug mb-2">{ach.text}</h3>
          <p className="text-sm font-semibold text-slate-500">{ach.org}</p>
          {ach.year && (
            <span className={`inline-block mt-3 text-xs font-bold px-3 py-1 rounded-full bg-gradient-to-r ${ach.color} text-white`}>
              {ach.year}
            </span>
          )}
        </motion.div>
      ))}
    </div>
  </section>
);

/* ─────────────────── LEADERSHIP ─────────────────── */

const LeadershipSection: React.FC = () => (
  <section id="leadership" className="scroll-mt-24">
    <SectionHeader title="Leadership" subtitle="Roles, impact, and community initiatives" />
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
      {leadershipItems.map((item, i) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={item.role}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-6 flex items-start gap-5 group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-md`}>
              <Icon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-black text-slate-800 text-base">{item.role}</h3>
              <p className="text-sm font-medium text-slate-500 mt-1 leading-relaxed">{item.desc}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  </section>
);

/* ─────────────────── EXPORT ─────────────────── */

export const PortfolioSections: React.FC = () => (
  <div className="container mx-auto px-6 space-y-20 py-8">
    <EducationSection />
    <SkillsSection />
    <ExperienceSection />
    <ProjectsSection />
    <AchievementsSection />
    <LeadershipSection />
  </div>
);
