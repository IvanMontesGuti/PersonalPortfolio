import { Navigation } from "../components/navigation.jsx"
import { Hero } from "../components/hero.jsx"
import { Projects } from "../components/projects.jsx"
import { Technologies } from "../components/technologies.jsx"
import { Studies } from "../components/studies.jsx"
import { Contact } from "../components/contact.jsx"
import { WorldMap } from "../components/world-map.jsx"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0c0e0f] text-white">
      <Navigation />
      <div className="container mx-auto px-4 py-8 space-y-24">
        <Hero />
        <WorldMap />
        <Projects />
        <Technologies />
        <Studies />
        <Contact />
      </div>
    </main>
  )
}

