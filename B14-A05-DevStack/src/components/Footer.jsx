import logo from '../../assets/logo-text.png'

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com' },
  { label: 'Twitter', href: 'https://twitter.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
]

const footerNavigation = [
  {
    title: 'Product',
    links: [
      { label: 'Home', href: '#home' },
      { label: 'Technologies', href: '#technologies' },
      { label: 'Projects', href: '#projects' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#about' },
      { label: 'Contact', href: '#contact' },
      { label: 'Careers', href: '#careers' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '#privacy-policy' },
      { label: 'Terms of Service', href: '#terms-of-service' },
    ],
  },
]

function Footer() {
  return (
    <footer id="contact" className="border-t border-slate-100 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 py-14 sm:grid-cols-2 sm:py-16 lg:grid-cols-[2fr_repeat(3,minmax(0,1fr))] lg:gap-16">
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#home" className="inline-block" aria-label="Dev Stack home">
              <img src={logo} alt="Dev Stack" className="h-8 w-auto" />
            </a>
            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-500">
              Curated tools, technologies, and resources for developers building modern software.
            </p>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2" aria-label="Social links">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-semibold text-slate-600 transition-colors hover:text-pink-500"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {footerNavigation.map((group) => (
            <nav key={group.title} aria-label={`${group.title} links`}>
              <h2 className="text-xs font-bold uppercase tracking-wide text-slate-900">
                {group.title}
              </h2>
              <ul className="mt-5 space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-500 transition-colors hover:text-pink-500"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="flex flex-col gap-4 border-t border-slate-100 py-8 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex items-center gap-8">
            <a href="#privacy-policy" className="transition-colors hover:text-pink-500">
              Privacy
            </a>
            <a href="#terms-of-service" className="transition-colors hover:text-pink-500">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
