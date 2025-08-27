import React from 'react'
import { motion } from 'framer-motion'

export default function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-black/40 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-5 py-4 flex items-center justify-between">
        <motion.a
          href="#top"
          initial={{ y: -12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 120, damping: 14 }}
          className="font-[\"Mona Sans\",system-ui,sans-serif] tracking-wider text-xl sm:text-2xl font-black"
          style={{ letterSpacing: '0.1em' }}
        >
          <span className="inline-block bg-gradient-to-br from-fuchsia-400 via-purple-400 to-cyan-400 text-transparent bg-clip-text">IVY</span>
          <span className="ml-1"> R.</span>
        </motion.a>
        <nav className="hidden sm:flex items-center gap-6 text-sm">
          <a href="#work" className="text-white/80 hover:text-white transition-colors">Work</a>
          <a href="#about" className="text-white/80 hover:text-white transition-colors">About</a>
          <a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a>
        </nav>
      </div>
    </header>
  )
}
