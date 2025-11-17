import { Mail, Phone, MessageSquare, ArrowRight } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Contact</h2>
          <p className="mt-3 text-slate-300">Reach out to start your project or request a consultation.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
            <h3 className="text-white font-semibold">Get in touch</h3>
            <div className="mt-4 space-y-3 text-slate-300 text-sm">
              <a href="tel:+237679690703" className="flex items-center gap-3 hover:text-white"><Phone size={18} /> +237 679 690 703</a>
              <a href="https://wa.me/237679690703" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-white"><MessageSquare size={18} /> WhatsApp</a>
              <a href="mailto:elisbrown@sigalix.com" className="flex items-center gap-3 hover:text-white"><Mail size={18} /> elisbrown@sigalix.com</a>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="https://wa.me/237679690703" target="_blank" rel="noreferrer" className="inline-flex items-center rounded-md bg-blue-600 px-5 py-3 text-white shadow-lg shadow-blue-600/30 hover:bg-blue-700 transition-colors">
                Request a Quote <ArrowRight className="ml-2" size={16} />
              </a>
              <a href="mailto:elisbrown@sigalix.com" className="inline-flex items-center rounded-md bg-slate-800/60 px-5 py-3 text-slate-100 ring-1 ring-white/10 hover:bg-slate-800">
                Book a Consultation
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
            <h3 className="text-white font-semibold">Quick message</h3>
            <form onSubmit={(e) => e.preventDefault()} className="mt-4 grid gap-4">
              <input className="rounded-md bg-slate-800/60 px-4 py-3 text-white placeholder-slate-400 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your name" />
              <input type="email" className="rounded-md bg-slate-800/60 px-4 py-3 text-white placeholder-slate-400 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Email" />
              <textarea rows="4" className="rounded-md bg-slate-800/60 px-4 py-3 text-white placeholder-slate-400 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="How can I help?" />
              <button className="inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-3 text-white hover:bg-blue-700">Send</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
