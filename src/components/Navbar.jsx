import { useState } from 'react'
import logo from '../../assets/logo-text.png'

const navigationLinks = [
  { label: 'Home', href: '#home', isActive: true },
  { label: 'Technologies', href: '#technologies' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

function Brand() {
  return (
    <a href="#home" className="shrink-0" aria-label="Dev Stack home">
      <img src={logo} alt="Dev Stack" className="h-8 w-auto md:h-9" />
    </a>
  )
}

function AccountActions({ compact = false }) {
  return (
    <div className="flex shrink-0 items-center gap-1 sm:gap-2">
      <button
        type="button"
        className={`${compact ? 'px-1.5 text-xs sm:px-2 sm:text-sm' : 'px-3 text-sm'} appearance-none cursor-pointer rounded-full py-2 font-medium leading-5 text-zinc-700 transition-colors hover:text-violet-600`}
      >
        Sign In
      </button>
      <button
        type="button"
        className={`${compact ? 'px-2.5 py-2 text-xs sm:px-4 sm:text-sm' : 'px-5 py-2.5 text-sm'} brand-gradient-bg appearance-none cursor-pointer rounded-full font-medium leading-5 text-white transition-opacity hover:opacity-90`}
      >
        Sign Up
      </button>
    </div>
  )
}

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white">
      <nav
        className="mx-auto flex h-16 max-w-[82rem] items-center px-3 sm:px-6 md:h-20 lg:px-8"
        aria-label="Main navigation"
      >
        <div className="hidden w-full items-center justify-between md:flex">
          <Brand />

          <div className="flex items-center gap-6 lg:gap-8">
            {navigationLinks.map(({ label, href, isActive }) => (
              <a
                key={label}
                href={href}
                aria-current={isActive ? 'page' : undefined}
                className={`text-sm font-medium leading-5 transition-colors hover:text-violet-600 ${
                  isActive ? 'brand-gradient-text font-semibold' : 'text-zinc-600'
                }`}
              >
                {label}
              </a>
            ))}
          </div>

          <AccountActions />
        </div>

        <div className="grid w-full grid-cols-[auto_1fr_auto] items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
            className="grid size-9 cursor-pointer place-items-center rounded-lg text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-violet-600"
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-controls="mobile-navigation"
            aria-expanded={isMobileMenuOpen}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
              className="size-5"
            >
              {isMobileMenuOpen ? (
                <path d="M6 6l12 12M18 6 6 18" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          <div className="flex justify-center">
            <Brand />
          </div>

          <AccountActions compact />
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="absolute inset-x-0 top-full border-t border-slate-100 bg-white shadow-lg md:hidden"
        >
          <div className="mx-auto max-w-[82rem] space-y-1 px-3 py-3 sm:px-6">
            {navigationLinks.map(({ label, href, isActive }) => (
              <a
                key={label}
                href={href}
                onClick={() => setIsMobileMenuOpen(false)}
                aria-current={isActive ? 'page' : undefined}
                className={`block rounded-lg px-4 py-2.5 text-sm font-medium leading-5 transition-colors hover:bg-slate-50 hover:text-violet-600 ${
                  isActive ? 'brand-gradient-text font-semibold' : 'text-zinc-600'
                }`}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
