import Link from 'next/link'
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Gradient Background Elements */}
      <div className="absolute top-20 right-10 w-80 h-80 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full blur-3xl opacity-40 animate-pulse" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-tr from-primary/15 to-transparent rounded-full blur-3xl opacity-30" />

      <div className="relative max-w-4xl w-full text-center z-10">
        <div className="mb-8 inline-block">
          <span className="px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/40 text-sm text-primary font-medium">
            Full Stack Developer
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
            Daksh Maru
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
          Computer Science undergraduate at VIT Bhopal crafting modern web applications.
          Passionate about full-stack development, clean code, and solving real-world problems.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link
            href="#projects"
            className="relative group px-8 py-3 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 inline-flex items-center gap-2 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              View Projects
              <ArrowRight size={20} />
            </span>
          </Link>
          <a
            href="mailto:dakshmaru10@gmail.com"
            className="px-8 py-3 border border-primary/50 text-primary rounded-lg font-semibold hover:bg-primary/10 hover:border-primary transition-all duration-300 inline-flex items-center gap-2 backdrop-blur-sm"
          >
            Get in Touch
            <Mail size={20} />
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-8">
          <a
            href="https://github.com/daksh1706"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-card/50 border border-border hover:border-primary/50 text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all duration-300 backdrop-blur-sm"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/daksh-maru-4b07a5325/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-card/50 border border-border hover:border-primary/50 text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all duration-300 backdrop-blur-sm"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:dakshmaru10@gmail.com"
            className="p-3 rounded-lg bg-card/50 border border-border hover:border-primary/50 text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all duration-300 backdrop-blur-sm"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>
    </section>
  )
}
