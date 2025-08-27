import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ClipGrid from './components/ClipGrid'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-fuchsia-500 selection:text-black">
      <Header />
      <main>
        <Hero />
        <ClipGrid />
      </main>
      <Footer />
    </div>
  )
}
