import React from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <BackgroundAura />
      <div className="mx-auto max-w-7xl px-5 py-24 sm:py-32 relative">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-7xl md:text-8xl font-black leading-[0.95] tracking-tight"
          style={{ fontFamily: 'Mona Sans, Inter, system-ui, sans-serif' }}
        >
          Abstract 3D Motion
          <br />
          by <span className="italic bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-400 text-transparent bg-clip-text">Ivy R.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-6 max-w-2xl text-white/70 text-base sm:text-lg"
        >
          Explorations in motion, texture, and light. Short, seamless loops designed for identity systems, music visuals, and immersive installations.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#work"
            className="px-5 py-3 rounded-full bg-white text-black font-medium hover:bg-neutral-200 transition"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="px-5 py-3 rounded-full border border-white/20 hover:border-white/40 text-white/90 font-medium transition"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  )
}

function BackgroundAura() {
  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-32 -left-24 h-[40rem] w-[40rem] rounded-full blur-3xl opacity-40"
        style={{
          background: 'conic-gradient(from 180deg at 50% 50%, #00e5ff, #b5179e, #6d28d9, #00e5ff)'
        }}
      />
      <div className="absolute -bottom-24 -right-24 h-[34rem] w-[34rem] rounded-full blur-3xl opacity-30"
        style={{
          background: 'radial-gradient(closest-side, rgba(168,85,247,0.6), rgba(0,0,0,0))'
        }}
      />
      <GridNoise />
    </div>
  )
}

function GridNoise() {
  return (
    <svg className="absolute inset-0 w-full h-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
          <path d="M 32 0 L 0 0 0 32" fill="none" stroke="white" strokeWidth="0.6" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  )
}
