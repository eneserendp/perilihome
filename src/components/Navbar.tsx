import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)

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
        <div className="flex justify-between h-24">
          <div className="flex items-center">
            <Link to="/" className="text-3xl font-primary font-bold text-white">
              PERİLİHOME
            </Link>
          </div>
          <div className="flex items-center space-x-8">
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
            <button className="bg-primary text-white px-6 py-2 font-primary hover:bg-white hover:text-primary transition-colors duration-300">
              REZERVASYON
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
