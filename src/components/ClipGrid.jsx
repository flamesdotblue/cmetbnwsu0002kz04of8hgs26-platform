import React from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'

const clips = [
  {
    id: 'loop-1',
    title: 'Chromatic Flux',
    palette: ['#00e5ff', '#7c3aed', '#ec4899'],
    description: 'Iridescent liquid geometry for music visuals',
  },
  {
    id: 'loop-2',
    title: 'Neon Veil',
    palette: ['#22d3ee', '#a855f7', '#f0abfc'],
    description: 'Silky volumetric waves and refracted light',
  },
  {
    id: 'loop-3',
    title: 'Poly Bloom',
    palette: ['#34d399', '#22d3ee', '#60a5fa'],
    description: 'Procedural petaloids with glossy speculars',
  },
  {
    id: 'loop-4',
    title: 'Toroid Drift',
    palette: ['#f472b6', '#60a5fa', '#a78bfa'],
    description: 'Nested torus fields with soft shadows',
  },
  {
    id: 'loop-5',
    title: 'Radiant Mesh',
    palette: ['#06b6d4', '#818cf8', '#f472b6'],
    description: 'Tessellated membranes in chroma space',
  },
  {
    id: 'loop-6',
    title: 'Prism Mirage',
    palette: ['#67e8f9', '#c084fc', '#fb7185'],
    description: 'Spectral refraction across curved glass',
  },
]

export default function ClipGrid() {
  return (
    <section id="work" className="relative mx-auto max-w-7xl px-5 py-20">
      <header className="flex items-end justify-between mb-8">
        <h2 className="text-2xl sm:text-3xl font-black tracking-tight">Selected Loops</h2>
        <span className="text-white/50 text-sm">Hover to reveal</span>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {clips.map((clip, i) => (
          <ClipCard key={clip.id} index={i} {...clip} />
        ))}
      </div>
    </section>
  )
}

function ClipCard({ title, palette, description, index }) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const mask = useTransform([mouseX, mouseY], ([x, y]) => `radial-gradient(200px at ${x}px ${y}px, rgba(255,255,255,0.18), transparent 70%)`)

  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20% 0px -10% 0px' }}
      transition={{ delay: 0.03 * index, duration: 0.5 }}
      className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02]"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        mouseX.set(e.clientX - rect.left)
        mouseY.set(e.clientY - rect.top)
      }}
    >
      <AnimatedTexture palette={palette} />

      <motion.div
        className="absolute inset-0"
        style={{ WebkitMaskImage: mask, maskImage: mask }}
      >
        <div className="w-full h-full bg-white/[0.03]" />
      </motion.div>

      <div className="absolute inset-0 p-4 sm:p-5 flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <span className="text-[10px] uppercase tracking-[0.25em] text-white/70">Loop</span>
          <span className="text-[10px] text-white/50">00:08</span>
        </div>
        <div>
          <motion.h3
            className="text-xl sm:text-2xl font-extrabold drop-shadow-[0_2px_20px_rgba(255,255,255,0.2)]"
            initial={false}
            animate={{
              letterSpacing: ['0.02em', '0.08em'],
            }}
            transition={{ repeat: Infinity, repeatType: 'reverse', duration: 4, ease: 'easeInOut' }}
          >
            {title}
          </motion.h3>
          <motion.p
            className="text-xs sm:text-sm text-white/70 mt-1 max-w-[28ch] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition"
          >
            {description}
          </motion.p>
        </div>
      </div>

      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 mix-blend-screen">
        <SpecularSheen palette={palette} />
      </div>

      <div className="absolute bottom-4 right-4 text-[10px] font-medium text-black px-2 py-1 rounded-full bg-white/90 group-hover:bg-white transition">
        Hover Reveal
      </div>
    </motion.article>
  )
}

function AnimatedTexture({ palette }) {
  const [a, b, c] = palette
  return (
    <motion.div
      className="relative w-full aspect-[4/3] sm:aspect-video"
      initial={false}
      animate={{
        backgroundPosition: ['0% 0%', '100% 100%'],
        filter: ['saturate(1.1) hue-rotate(0deg)', 'saturate(1.4) hue-rotate(30deg)'],
      }}
      transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      style={{
        backgroundImage: `radial-gradient(60% 80% at 10% 20%, ${a}44 0%, transparent 60%), radial-gradient(70% 90% at 80% 30%, ${b}55 0%, transparent 60%), radial-gradient(60% 80% at 40% 80%, ${c}55 0%, transparent 60%), conic-gradient(from 120deg at 50% 50%, ${a}, ${b}, ${c}, ${a})`,
        backgroundBlendMode: 'screen, screen, screen, normal',
      }}
    >
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0.15 }}
        animate={{ opacity: [0.15, 0.28, 0.15] }}
        transition={{ duration: 6, repeat: Infinity }}
        style={{
          background: 'radial-gradient(closest-side, rgba(255,255,255,0.12), rgba(255,255,255,0) 60%)',
          mixBlendMode: 'overlay',
        }}
      />

      <motion.div
        className="absolute inset-0"
        initial={{ backgroundPosition: '0% 50%' }}
        animate={{ backgroundPosition: ['0% 50%', '200% 50%'] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        style={{
          backgroundImage: 'linear-gradient(110deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.06) 20%, rgba(255,255,255,0) 40%)',
          backgroundSize: '200% 100%',
          mixBlendMode: 'soft-light',
        }}
      />
    </motion.div>
  )
}

function SpecularSheen({ palette }) {
  const [a, b, c] = palette
  return (
    <div className="w-full h-full relative">
      <motion.div
        className="absolute -inset-8 blur-2xl"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        style={{
          background: `conic-gradient(from 0deg at 50% 50%, ${a}00, ${a}66, ${b}66, ${c}66, ${a}00)`,
        }}
      />
      <motion.div
        className="absolute inset-0"
        animate={{ backgroundPosition: ['0% 0%', '120% 120%'] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        style={{
          backgroundImage:
            'radial-gradient(60% 60% at 20% 10%, rgba(255,255,255,0.7), transparent 60%), radial-gradient(60% 60% at 80% 90%, rgba(255,255,255,0.35), transparent 60%)',
          backgroundBlendMode: 'overlay',
        }}
      />
    </div>
  )
}
