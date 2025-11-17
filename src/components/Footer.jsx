import { Mail, MessageSquare } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div>
            <p className="text-white font-semibold">Sunyin Elisbrown</p>
            <p className="text-slate-400 text-sm mt-1">Software Engineer & IT Specialist</p>
          </div>
          <div className="text-slate-300 text-sm">
            <p className="text-white font-semibold">Quick Links</p>
            <div className="mt-3 flex flex-col gap-2">
              <a href="#services" className="hover:text-white">Services</a>
              <a href="#portfolio" className="hover:text-white">Portfolio</a>
              <a href="#contact" className="hover:text-white">Contact</a>
            </div>
          </div>
          <div className="text-slate-300 text-sm">
            <p className="text-white font-semibold">Connect</p>
            <div className="mt-3 flex gap-3">
              <a href="https://wa.me/237679690703" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md bg-green-600/20 px-3 py-2 text-green-300 ring-1 ring-green-400/20 hover:bg-green-600/30">
                <MessageSquare size={16} /> WhatsApp
              </a>
              <a href="mailto:elisbrown@sigalix.com" className="inline-flex items-center gap-2 rounded-md bg-blue-600/20 px-3 py-2 text-blue-300 ring-1 ring-blue-400/20 hover:bg-blue-600/30">
                <Mail size={16} /> Email
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-xs text-slate-500">© {new Date().getFullYear()} Sunyin Elisbrown. All rights reserved.</div>
      </div>
    </footer>
  )
}
