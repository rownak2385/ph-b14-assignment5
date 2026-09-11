import { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Footer from './components/Footer.jsx'
import Hero from './components/Hero.jsx'
import Navbar from './components/Navbar.jsx'
import StackSidebar from './components/StackSidebar.jsx'
import TechnologyGrid from './components/TechnologyGrid.jsx'
import technologyData from './data/technologies.json'

function App() {
  const [technologies, setTechnologies] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedStack, setSelectedStack] = useState([])

  // Load technology data when the page starts
  useEffect(() => {
    setTechnologies(technologyData)
    setLoading(false)
  }, [])

  function addToStack(technology) {
    const isAlreadySelected = selectedStack.some((item) => item.id === technology.id)

    if (isAlreadySelected) {
      toast.warning(`${technology.name} is already in your stack`)
      return
    }

    setSelectedStack((currentStack) => [...currentStack, technology])
    toast.success(`${technology.name} added to your stack`)
  }

  function removeFromStack(technologyId) {
    const technologyToRemove = selectedStack.find(
      (technology) => technology.id === technologyId,
    )

    if (!technologyToRemove) return

    setSelectedStack((currentStack) =>
      currentStack.filter((technology) => technology.id !== technologyId),
    )
    toast.info(`${technologyToRemove.name} removed from your stack`)
  }

  function removeAllStack() {
    if (selectedStack.length === 0) return

    setSelectedStack([])
    toast.info('Your stack has been cleared')
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <section id="technologies" className="scroll-mt-20 bg-slate-50/40 pb-20 md:bg-white sm:pb-24">
          <div className="mx-auto max-w-[82rem] px-6 lg:px-8">
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl md:text-4xl">
                Explore the <span className="brand-gradient-text">Technologies</span>
              </h2>
              <p className="mt-1.5 text-xs text-slate-500 md:text-base">
                Pick one technology per category to build your ideal stack.
              </p>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1fr)_16.5rem] lg:items-start xl:grid-cols-[minmax(0,1fr)_18rem]">
              {loading ? (
                <div
                  className="grid min-h-72 place-items-center rounded-2xl border border-slate-200 bg-white"
                  role="status"
                >
                  <div className="flex flex-col items-center gap-3 text-slate-500">
                    <span className="size-8 animate-spin rounded-full border-4 border-slate-200 border-t-pink-500" />
                    <span className="text-sm font-medium">Loading technologies...</span>
                  </div>
                </div>
              ) : (
                <TechnologyGrid
                  technologies={technologies}
                  addToStack={addToStack}
                  selectedStack={selectedStack}
                />
              )}
              <StackSidebar
                selectedStack={selectedStack}
                removeFromStack={removeFromStack}
                removeAllStack={removeAllStack}
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ToastContainer position="bottom-right" autoClose={2500} closeOnClick pauseOnHover />
    </div>
  )
}

export default App
