import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-slate-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="text-xl font-semibold tracking-tight text-slate-900">
            <span className="text-blue-600">Sunyin</span> Elisbrown
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-slate-900 transition-colors">
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-white shadow-sm hover:bg-blue-700 transition-colors"
            >
              Get Started
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:bg-slate-100"
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2 text-slate-700 hover:bg-slate-100"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 bg-blue-600 text-white text-center"
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
