const navigationLinks = [
  { label: 'Home', href: '#home', isActive: true },
  { label: 'Technologies', href: '#technologies' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

function Brand() {
  return (
    <a href="#home" className="flex shrink-0 items-center gap-2" aria-label="Dev Stack home">
      <span className="brand-gradient-bg grid size-9 place-items-center rounded-xl text-sm font-bold text-white shadow-sm">
        DS
      </span>
      <span className="whitespace-nowrap text-base font-bold tracking-tight text-zinc-900 sm:text-lg">
        Dev Stack
      </span>
    </a>
  )
}

function AccountActions({ compact = false }) {
  return (
    <div className="flex shrink-0 items-center gap-1 sm:gap-2">
      <button
        type="button"
        className={`${compact ? 'px-1.5 text-xs sm:px-2 sm:text-sm' : 'px-3 text-sm'} rounded-full py-2 font-semibold text-zinc-700 transition-colors hover:text-violet-600`}
      >
        Sign In
      </button>
      <button
        type="button"
        className={`${compact ? 'px-2.5 text-xs sm:px-4 sm:text-sm' : 'px-5 text-sm'} brand-gradient-bg rounded-full py-2 font-semibold text-white shadow-sm transition-opacity hover:opacity-90`}
      >
        Sign Up
      </button>
    </div>
  )
}

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white">
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center px-3 sm:px-6 lg:px-8"
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
                className={`text-sm font-medium transition-colors hover:text-violet-600 ${
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
            className="grid size-9 place-items-center rounded-lg text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-violet-600"
            aria-label="Open navigation menu"
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
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <div className="flex justify-center">
            <Brand />
          </div>

          <AccountActions compact />
        </div>
      </nav>
    </header>
  )
}

export default Navbar
