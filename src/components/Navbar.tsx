import { useState } from 'react'
import logo from '../../assets/logo-text.png'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white">
      <div className="mx-auto max-w-7xl px-4">

        {/* Navbar Main */}
        <div className="flex h-16 items-center justify-between gap-2">

          {/* Mobile Hamburger */}
          <button
            className="text-2xl text-gray-700 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Open menu"
          >
            ☰
          </button>

          {/* Logo */}
          <a href="#" className="flex shrink-0 items-center">
            <img
              src={logo}
              alt="Dev Stack"
              className="w-28 md:w-32 lg:w-40"
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-4 md:flex lg:gap-6">

            <a
              href="#"
              className="whitespace-nowrap font-medium text-pink-500"
            >
              Home
            </a>

            <a
              href="#technologies"
              className="whitespace-nowrap text-gray-700 hover:text-pink-500"
            >
              Technologies
            </a>

            <a
              href="#"
              className="whitespace-nowrap text-gray-700 hover:text-pink-500"
            >
              Projects
            </a>

            <a
              href="#"
              className="whitespace-nowrap text-gray-700 hover:text-pink-500"
            >
              About
            </a>

            <a
              href="#"
              className="whitespace-nowrap text-gray-700 hover:text-pink-500"
            >
              Contact
            </a>

          </div>

          {/* Desktop Buttons */}
          <div className="hidden shrink-0 items-center gap-2 md:flex lg:gap-4">

            <button className="whitespace-nowrap text-sm text-gray-700 hover:text-pink-500">
              Sign In
            </button>

            <button className="whitespace-nowrap rounded-full bg-pink-500 px-4 py-2 text-sm text-white hover:bg-pink-600">
              Sign Up
            </button>

          </div>

          {/* Mobile Right Buttons */}
          <div className="flex shrink-0 items-center gap-2 md:hidden">

            <button className="whitespace-nowrap text-sm text-gray-700">
              Sign In
            </button>

            <button className="whitespace-nowrap rounded-full bg-pink-500 px-3 py-1.5 text-xs text-white">
              Sign Up
            </button>

          </div>

        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="border-t border-gray-100 py-4 md:hidden">
            <div className="flex flex-col gap-4">

              <a
                href="#"
                className="font-medium text-pink-500"
              >
                Home
              </a>

              <a
                href="#technologies"
                className="text-gray-700"
              >
                Technologies
              </a>

              <a
                href="#"
                className="text-gray-700"
              >
                Projects
              </a>

              <a
                href="#"
                className="text-gray-700"
              >
                About
              </a>

              <a
                href="#"
                className="text-gray-700"
              >
                Contact
              </a>

            </div>
          </div>
        )}

      </div>
    </nav>
  )
}

export default Navbar