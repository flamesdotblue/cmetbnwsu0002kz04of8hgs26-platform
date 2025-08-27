import React from 'react'

export default function Footer() {
  return (
    <footer id="contact" className="mt-24 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-5 py-12 grid gap-6 sm:grid-cols-2 items-end">
        <div>
          <h3 className="text-2xl font-extrabold">Let’s collaborate.</h3>
          <p className="text-white/70 mt-2 max-w-md">
            Available for commissions, title sequences, stage visuals, and experimental R&D.
          </p>
        </div>
        <div className="sm:text-right">
          <a href="mailto:hello@ivyr.studio" className="text-xl font-medium underline decoration-fuchsia-400/60 decoration-2 underline-offset-4 hover:decoration-fuchsia-300">hello@ivyr.studio</a>
          <div className="mt-3 flex sm:justify-end gap-4 text-white/70 text-sm">
            <a href="#" className="hover:text-white">Instagram</a>
            <a href="#" className="hover:text-white">Behance</a>
            <a href="#" className="hover:text-white">Vimeo</a>
          </div>
        </div>
        <div className="sm:col-span-2 text-xs text-white/40">© {new Date().getFullYear()} Ivy R. All rights reserved.</div>
      </div>
    </footer>
  )
}
