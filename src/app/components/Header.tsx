'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu } from 'lucide-react'

const menuItems = ['Home', 'About', 'Skills', 'Projects', 'Contact']

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)

    // Prevent scroll when menu is open
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const handleLinkClick = () => {
    setIsMenuOpen(false)
    document.body.style.overflow = 'unset'
  }

  return (
    <>
      <motion.header
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100 }}
      >
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.a 
              href="#"
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent z-50"
              whileHover={{ scale: 1.05 }}
            >
              RG
            </motion.a>

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex items-center space-x-8">
              {menuItems.map((item) => (
                <motion.li key={item}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-lg font-semibold hover:text-blue-400 transition-colors"
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden relative z-50 w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle menu"
            >
              <motion.div
                animate={isMenuOpen ? { rotate: 180 } : { rotate: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Menu className={`h-6 w-6 ${isMenuOpen ? 'text-blue-400' : 'text-white'}`} />
              </motion.div>
            </motion.button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-gray-900/98 backdrop-blur-md z-40 lg:hidden flex flex-col"
          >
            <div className="flex-1 flex items-center justify-center">
              <motion.ul 
                className="flex flex-col items-center justify-center space-y-6 p-4"
                initial="closed"
                animate="open"
                exit="closed"
                variants={{
                  open: {
                    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
                  },
                  closed: {
                    transition: { staggerChildren: 0.05, staggerDirection: -1 }
                  }
                }}
              >
                {menuItems.map((item) => (
                  <motion.li 
                    key={item}
                    variants={{
                      open: { 
                        y: 0, 
                        opacity: 1,
                        transition: {
                          y: { stiffness: 1000, velocity: -100 }
                        }
                      },
                      closed: {
                        y: 50,
                        opacity: 0,
                        transition: {
                          y: { stiffness: 1000 }
                        }
                      }
                    }}
                    className="w-full"
                  >
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-2xl font-semibold text-white hover:text-blue-400 transition-colors block py-3 px-8 rounded-xl hover:bg-blue-500/10 text-center"
                      onClick={handleLinkClick}
                    >
                      {item}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
            
            {/* Mobile Footer */}
            <motion.div 
              className="p-6 text-center text-sm text-gray-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <p>© 2024 Rakesh GR. All rights reserved.</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

