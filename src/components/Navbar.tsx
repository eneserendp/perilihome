import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-secondary' : 'bg-secondary bg-opacity-90'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-32"> {/* h-40'tan h-32'ye düşürdük */}
          <div className="flex items-center -mt-2">
            <Link to="/" className="flex items-center">
              <img src="/logomuz.png" alt="PeriliHome Logo" className="h-40 md:h-48 w-auto" /> {/* h-44 md:h-56'dan h-40 md:h-48'e düşürdük */}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden flex items-center text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              } />
            </svg>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { text: 'ANA SAYFA', path: '/' },
              { text: 'MENÜ', path: '/menu' },
              { text: 'HAKKIMIZDA', path: '/hakkimizda' },
              { text: 'İLETİŞİM', path: '/iletisim' }
            ].map((item) => (
              <Link 
                key={item.text}
                to={item.path}
                className="font-primary text-white hover:text-primary transition-colors duration-300 menu-item-hover"
              >
                {item.text}
              </Link>
            ))}
            <Link 
              to="/menu"
              className="bg-primary text-white px-6 py-2 font-primary hover:bg-white hover:text-primary transition-colors duration-300"
            >
              ALIŞVERİŞ YAP
            </Link>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-secondary py-4`}>
          <div className="flex flex-col space-y-4">
            {[
              { text: 'ANA SAYFA', path: '/' },
              { text: 'MENÜ', path: '/menu' },
              { text: 'HAKKIMIZDA', path: '/hakkimizda' },
              { text: 'İLETİŞİM', path: '/iletisim' }
            ].map((item) => (
              <Link 
                key={item.text}
                to={item.path}
                className="text-white hover:text-primary transition-colors px-4 py-2 text-lg font-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.text}
              </Link>
            ))}
            <Link 
              to="/menu"
              className="bg-primary text-white mx-4 py-2 font-primary hover:bg-white hover:text-primary transition-colors duration-300 text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              ALIŞVERİŞ YAP
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
