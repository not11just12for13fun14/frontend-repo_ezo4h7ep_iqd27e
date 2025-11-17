import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] grid place-items-center overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900 text-white">
      <div className="absolute inset-0 opacity-80">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/70 to-slate-900/95 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight"
          >
            Sunyin Elisbrown
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-3 text-xl text-slate-200"
          >
            Software Engineer & IT Specialist
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 text-slate-300 max-w-2xl"
          >
            Tailored IT solutions for your business — from web & mobile development to cloud, DevOps, automation, and AI integration.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#contact"
              className="inline-flex items-center rounded-md bg-blue-600 px-5 py-3 text-white shadow-lg shadow-blue-600/30 hover:bg-blue-700 transition-colors"
            >
              Get Started
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center rounded-md bg-slate-800/60 px-5 py-3 text-slate-100 ring-1 ring-white/10 hover:bg-slate-800"
            >
              See My Portfolio
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
