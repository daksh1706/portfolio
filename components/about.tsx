export function About() {
  const highlights = [
    { label: 'Full-stack Projects', value: '3+' },
    { label: 'Professional Certifications', value: '3' },
    { label: 'Years of Learning', value: '2+' },
  ]

  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-3xl opacity-40" />

      <div className="relative max-w-4xl mx-auto">
        <div className="mb-4 inline-block">
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">
            About Me
          </span>
        </div>
        <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-10">
          Building the Future, One Line at a Time
        </h2>

        <div className="space-y-6 text-muted-foreground leading-relaxed text-lg mb-12">
          <p className="text-balance">
            I'm a Computer Science undergraduate at VIT Bhopal with a passion for crafting elegant solutions to complex problems. 
            I thrive on the intersection of design and engineering, building full-stack applications that are both beautiful and functional.
          </p>

          <p className="text-balance">
            My coding journey began with curiosity and has evolved through countless projects—from academic ventures to personal creations. 
            I specialize in modern web technologies like React, Next.js, and Node.js, and I'm obsessed with writing clean, maintainable code.
          </p>

          <p className="text-balance">
            Beyond code, I'm committed to continuous learning. I believe in the power of collaboration, attention to detail, and shipping products 
            that users love. Currently hunting for a Full Stack Development internship where I can make a real impact.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {highlights.map((stat, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-gradient-to-br from-card/50 to-card/30 border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-lg hover:shadow-primary/10 backdrop-blur-sm"
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <p className="text-muted-foreground text-sm font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
