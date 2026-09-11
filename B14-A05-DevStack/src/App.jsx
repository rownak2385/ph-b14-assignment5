import Navbar from './components/Navbar.jsx'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main id="home" className="grid min-h-[calc(100vh-4rem)] place-items-center px-6">
        <h1 className="brand-gradient-text text-center text-4xl font-bold sm:text-5xl">
          Dev Stack Builder
        </h1>
      </main>
    </div>
  )
}

export default App
