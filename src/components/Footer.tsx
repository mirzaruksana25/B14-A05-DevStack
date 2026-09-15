import logo from '../../assets/logo-text.png'

function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10 md:py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Brand Block */}
          <div className="lg:col-span-1">
            <a href="#" className="inline-flex items-center">
              <img
                src={logo}
                alt="Dev Stack"
                className="w-24 md:w-28"
              />
            </a>

            <p className="mt-4 max-w-xs text-xs leading-5 text-gray-400">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            <div className="mt-5 flex items-center gap-4">
              <a
                href="#"
                className="text-[10px] font-medium text-gray-600 transition hover:text-pink-500"
              >
                GitHub
              </a>

              <a
                href="#"
                className="text-[10px] font-medium text-gray-600 transition hover:text-pink-500"
              >
                Twitter
              </a>

              <a
                href="#"
                className="text-[10px] font-medium text-gray-600 transition hover:text-pink-500"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-wide text-gray-900">
              Product
            </h3>

            <div className="mt-4 flex flex-col gap-3">
              <a
                href="#"
                className="text-[10px] text-gray-500 transition hover:text-pink-500"
              >
                Home
              </a>

              <a
                href="#technologies"
                className="text-[10px] text-gray-500 transition hover:text-pink-500"
              >
                Technologies
              </a>

              <a
                href="#"
                className="text-[10px] text-gray-500 transition hover:text-pink-500"
              >
                Projects
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-wide text-gray-900">
              Company
            </h3>

            <div className="mt-4 flex flex-col gap-3">
              <a
                href="#"
                className="text-[10px] text-gray-500 transition hover:text-pink-500"
              >
                About
              </a>

              <a
                href="#"
                className="text-[10px] text-gray-500 transition hover:text-pink-500"
              >
                Contact
              </a>

              <a
                href="#"
                className="text-[10px] text-gray-500 transition hover:text-pink-500"
              >
                Careers
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-wide text-gray-900">
              Legal
            </h3>

            <div className="mt-4 flex flex-col gap-3">
              <a
                href="#"
                className="text-[10px] text-gray-500 transition hover:text-pink-500"
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="text-[10px] text-gray-500 transition hover:text-pink-500"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 flex flex-col gap-3 border-t border-gray-100 pt-5 md:flex-row md:items-center md:justify-between">
          <p className="text-[9px] text-gray-400">
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <a
              href="#"
              className="text-[9px] text-gray-400 transition hover:text-pink-500"
            >
              Privacy
            </a>

            <a
              href="#"
              className="text-[9px] text-gray-400 transition hover:text-pink-500"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer