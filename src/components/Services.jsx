import { Code, Cloud, Workflow, Database, Headphones, GraduationCap, Smartphone, FileCog, Bot, Search } from 'lucide-react'

const services = [
  {
    icon: Code,
    title: 'Web & Application Development',
    features: [
      'User-friendly websites & web apps',
      'Responsive design',
      'Custom software (CRM, inventory tools, business apps)',
    ],
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    features: [
      'Cloud migration',
      'Cloud backups, storage & computing',
      'Cloud-based process automation',
    ],
  },
  {
    icon: Workflow,
    title: 'DevOps & Automation',
    features: [
      'Automated tasks (reports, data entry, maintenance)',
      'CI/CD, automated testing',
      'Cloud infrastructure management',
    ],
  },
  {
    icon: Database,
    title: 'Data Management & Reporting',
    features: [
      'Data cleaning & organization',
      'Dashboards & reporting',
      'KPI tracking systems',
    ],
  },
  {
    icon: Headphones,
    title: 'IT Support & Network Solutions',
    features: [
      'PC & IT Support',
      'Network & security setup',
      'WiFi & infrastructure optimization',
    ],
  },
  {
    icon: GraduationCap,
    title: 'Technical Consulting & Training',
    features: [
      'IT system optimization',
      'Technology selection',
      'Staff training on tools & software',
    ],
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    features: [
      'Android & iOS apps',
      'Backend integration',
      'Industry-specific mobile solutions',
    ],
  },
  {
    icon: FileCog,
    title: 'Microsoft Suite & Google Workspace',
    features: [
      'Proficiency in MS Office & Google Workspace',
      'Customization & optimization for businesses',
    ],
  },
  {
    icon: Bot,
    title: 'AI & Technology Integration',
    features: [
      'Automation using AI',
      'Data insights & predictions',
      'AI chatbots & customer engagement tools',
    ],
  },
  {
    icon: Search,
    title: 'SEO & Digital Marketing',
    features: [
      'Organic SEO',
      'Keyword research & content optimization',
      'Website performance optimization',
    ],
  },
]

export default function Services() {
  return (
    <section id="services" className="relative bg-slate-900 py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-600/5 to-transparent pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Services</h2>
          <p className="mt-3 text-slate-300">Modern, reliable, business-focused solutions.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, features }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-slate-800/40 p-6 hover:bg-slate-800/60 transition-colors">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-blue-600/20 p-2 ring-1 ring-blue-400/20">
                  <Icon className="text-blue-400" size={22} />
                </div>
                <h3 className="text-lg font-semibold text-white">{title}</h3>
              </div>
              <ul className="mt-4 space-y-2 text-slate-300 text-sm">
                {features.map((f) => (
                  <li key={f} className="leading-relaxed">• {f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
