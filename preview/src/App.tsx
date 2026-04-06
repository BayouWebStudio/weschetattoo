import { useState } from 'react'
import './index.css'

// CTA - Sparkles
import { SparklesCore } from './components/ui/sparkles'

function App() {
  const [showSparkles, setShowSparkles] = useState(true)

  return (
    <div className="min-h-screen bg-[#0e0a0a] text-[#e8d8d8]">
      {/* Navbar placeholder */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-12 py-5 bg-[rgba(10,5,5,0.92)] backdrop-blur-xl border-b border-[#383030]">
        <span className="text-sm tracking-widest uppercase">Eterno Preview</span>
        <div className="flex gap-8 text-xs tracking-widest uppercase text-white/60">
          <span className="text-white cursor-pointer">Home</span>
          <span className="cursor-pointer">Work</span>
          <span className="cursor-pointer">About</span>
          <span className="cursor-pointer">Contact</span>
        </div>
      </nav>

      {/* Hero placeholder */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0e0a0a]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1212] to-[#0e0a0a]" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-7xl font-light italic mb-6 text-white">
            Designs That Speak<br />Louder Than Words
          </h1>
          <p className="text-white/50 text-lg mb-12 max-w-md mx-auto">
            We craft stunning visuals and user-friendly experiences that help your brand stand out.
          </p>
          <button className="border border-[#c0392b] text-[#c0392b] px-8 py-4 text-xs font-medium tracking-widest uppercase hover:bg-[#c0392b] hover:text-black transition-all cursor-pointer">
            View Portfolio
          </button>
        </div>
      </section>

      {/* CTA - Sparkles */}
      {showSparkles && (
        <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0e0a0a]">
          <SparklesCore
            id="tsparticles"
            className="absolute inset-0"
            background="transparent"
            particleSize={3}
            speed={0.6}
            particleColor="#c0392b"
            particleDensity={80}
          />
          <div className="relative z-10 text-center">
            <h2 className="text-6xl font-bold mb-4 text-white">Ready to stand out?</h2>
            <p className="text-white/60 text-lg mb-8">Join thousands of artists who trust Eterno Web Studio</p>
            <button className="bg-[#c0392b] text-black px-8 py-4 text-sm font-medium tracking-widest uppercase hover:bg-[#a03020] transition-colors cursor-pointer">
              Get Started
            </button>
          </div>
        </section>
      )}

      {/* Footer placeholder */}
      <footer className="bg-[#0e0a0a] border-t border-[#383030] py-12 text-center">
        <p className="text-xs text-white/40 tracking-widest uppercase">Eterno Web Studio Preview — Components from 21st.dev</p>
      </footer>

      {/* Toggle button */}
      <button
        onClick={() => setShowSparkles(v => !v)}
        className="fixed bottom-6 right-6 z-50 bg-[#1a1212] border border-[#383030] text-[#e8d8d899] px-4 py-3 text-xs uppercase tracking-widest hover:text-white cursor-pointer"
      >
        {showSparkles ? 'Hide' : 'Show'} Sparkles CTA
      </button>
    </div>
  )
}

export default App
