import { Github, Linkedin, Mail } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-border/50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl opacity-40 -z-10" />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent mb-3">
              Daksh Maru
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Full Stack Developer & CS Undergraduate, crafting elegant solutions for modern web.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-foreground mb-4 uppercase tracking-wider text-sm">Quick Links</h4>
            <nav className="space-y-3">
              {[
                { href: '#about', label: 'About' },
                { href: '#projects', label: 'Projects' },
                { href: '#skills', label: 'Skills' },
                { href: '#contact', label: 'Contact' },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-300 text-sm font-medium"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-bold text-foreground mb-4 uppercase tracking-wider text-sm">Connect</h4>
            <div className="flex gap-3">
              <a
                href="https://github.com/daksh1706"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-card/50 border border-border/50 text-primary hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/daksh-maru-4b07a5325/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-card/50 border border-border/50 text-primary hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:dakshmaru10@gmail.com"
                className="p-3 rounded-lg bg-card/50 border border-border/50 text-primary hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 hover:scale-110"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border/30 pt-8 flex flex-col sm:flex-row items-center justify-between text-sm text-muted-foreground space-y-4 sm:space-y-0">
          <p>© {currentYear} Daksh Maru. Crafted with passion.</p>
          <p className="text-xs">Built with Next.js, React, and Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}
