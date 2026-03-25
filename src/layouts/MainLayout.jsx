import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'

export default function MainLayout({ children }) {
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: isHome ? 0 : 72 }} className={isHome ? '' : 'main-offset'}>
        {children}
      </main>
      <Footer/>
    </>
  )
}
