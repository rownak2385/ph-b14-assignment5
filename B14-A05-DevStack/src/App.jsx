import { useState } from 'react'
import Hero from './components/Hero.jsx'
import Navbar from './components/Navbar.jsx'
import StackSidebar from './components/StackSidebar.jsx'
import TechnologyGrid from './components/TechnologyGrid.jsx'
import technologies from './data/technologies.json'

function App() {
  const [selectedStack, setSelectedStack] = useState([])

  function addToStack(technology) {
    setSelectedStack((currentStack) => {
      const isAlreadySelected = currentStack.some((item) => item.id === technology.id)
      return isAlreadySelected ? currentStack : [...currentStack, technology]
    })
  }

  function removeFromStack(technologyId) {
    setSelectedStack((currentStack) =>
      currentStack.filter((technology) => technology.id !== technologyId),
    )
  }

  function removeAllStack() {
    setSelectedStack([])
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <section id="technologies" className="bg-white pb-24 sm:pb-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Explore the <span className="brand-gradient-text">Technologies</span>
              </h2>
              <p className="mt-2 text-base text-slate-500">
                Pick one technology per category to build your ideal stack.
              </p>
            </div>

            <div className="mt-10 grid gap-6 xl:grid-cols-[minmax(0,1fr)_18rem] xl:items-start">
              <TechnologyGrid
                technologies={technologies}
                addToStack={addToStack}
                selectedStack={selectedStack}
              />
              <StackSidebar
                selectedStack={selectedStack}
                removeFromStack={removeFromStack}
                removeAllStack={removeAllStack}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
