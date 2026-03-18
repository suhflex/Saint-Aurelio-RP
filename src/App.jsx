import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Socials from './components/Socials'
import Gallery from './components/Gallery'
import Comments from './components/Comments'
import Footer from './components/Footer'

function App() {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem('theme')
    if (saved) return saved === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Navbar dark={dark} setDark={setDark} />
      <Hero />
      <Stats />
      <Socials />
      <Gallery />
      <Comments dark={dark} />
      <Footer />
    </div>
  )
}

export default App
