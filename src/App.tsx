import Navbar from '@/components/layout/Navbar'
import Hero from '@/components/sections/Hero'
import SocialProof from '@/components/sections/SocialProof'
import Benefits from '@/components/sections/Benefits'
import Features from '@/components/sections/Features'
import FAQ from '@/components/sections/FAQ'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/layout/Footer'

function App() {
  return (
    <div className="bg-black min-h-screen w-full overflow-x-hidden">
      {/* Navigation */}
      <Navbar />

      {/* Main sections */}
      <Hero />
      <SocialProof />
      <Benefits />
      <Features />
      <FAQ />
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
