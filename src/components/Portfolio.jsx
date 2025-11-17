const items = [
  { title: 'Passion Immigration Services', link: 'https://passionims.org', desc: 'Immigration consulting website', img: '' },
  { title: 'Noeltech Solutions', link: 'https://noeltechsolutions.com', desc: 'IT & software solutions firm', img: '' },
  { title: 'Valiant Engineering', link: 'https://valiantlimited.co', desc: 'Engineering services', img: '' },
  { title: 'AHFoH', link: 'https://ahfoh.org', desc: 'Non-profit organization', img: '' },
  { title: 'AMACCUL', link: 'https://amaccul.com', desc: 'Cooperative credit union', img: '' },
  { title: 'OffiZone by Cirronyx', link: 'https://office-rentals.onrender.com', desc: 'Office rentals platform', img: '' },
  { title: 'SIGALIX', link: 'https://sigalix.com', desc: 'Technology company site', img: '' },
  { title: 'EXHIST University', link: 'https://exhist.onrender.com', desc: 'Educational platform', img: '' },
  { title: 'INNOS Douala', link: 'https://innosdouala.com', desc: 'Institutional website', img: '' },
  { title: 'MYCARA', link: 'https://mycara.org', desc: 'Healthcare NGO', img: '' },
  { title: 'Cirronyx', link: 'https://cirronyx.com', desc: 'Technology & consulting', img: '' },
  { title: 'JoySun Printing', link: 'https://joysun.onrender.com', desc: 'Printing services', img: '' },
  { title: 'Gogetters Women Africa', link: 'https://gowafrica.org', desc: 'Women empowerment NGO', img: '' },
  { title: 'IT Pro Solutions', link: 'https://itprocameroon.com', desc: 'IT services provider', img: '' },
  { title: 'Charmi Touch Braids', link: 'https://charmitouch.onrender.com', desc: 'Salon portfolio', img: '' },
  { title: 'HealHub Health', link: 'https://healhubhealth.com', desc: 'Health tech services', img: '' },
  { title: 'BEDCA Yaoundé', link: 'https://bedca-yaounde.org', desc: 'Business association', img: '' },
  { title: 'PISA AI chatbot', link: '#', desc: 'Portfolio AI project demo', img: '' },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Portfolio</h2>
          <p className="mt-3 text-slate-300">A selection of projects delivered for clients and internal initiatives.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((p) => (
            <a key={p.title} href={p.link} target="_blank" rel="noreferrer" className="group rounded-2xl border border-white/10 bg-slate-900/60 hover:bg-slate-900 ring-1 ring-white/5 overflow-hidden transition-colors">
              <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-700 grid place-items-center text-slate-300">
                <span className="text-sm">Screenshot coming soon</span>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">{p.title}</h3>
                <p className="mt-1 text-sm text-slate-300">{p.desc}</p>
                <p className="mt-3 text-xs text-blue-300">{p.link}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
