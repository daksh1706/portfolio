export function Education() {
  const educationPath = [
    {
      year: '2024-2028',
      institution: 'VIT Bhopal University',
      degree: 'B.Tech in Computer Science & Engineering',
      description: 'Building expertise in full-stack development, data structures, algorithms, and software engineering principles through hands-on projects and coursework.',
      status: 'In Progress',
    },
    {
      year: '2024',
      institution: 'Birla Shiksha Kendra',
      degree: 'Class XII (CBSE)',
      description: 'Foundation in science and mathematics with focus on analytical and problem-solving skills.',
    },
    {
      year: '2022',
      institution: 'Central Academy',
      degree: 'Class X (CBSE)',
      description: 'Comprehensive education across core subjects with emphasis on logical reasoning and academics.',
    },
  ]

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-16">
          Education
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden sm:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-primary/20" />

          <div className="space-y-12">
            {educationPath.map((edu, index) => (
              <div key={index} className="relative sm:pl-24">
                {/* Timeline dot */}
                <div className="hidden sm:block absolute left-0 top-2 w-16 h-16 bg-card border-2 border-primary rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-primary rounded-full" />
                </div>

                {/* Content card */}
                <div className="p-6 sm:p-8 rounded-xl bg-card/50 border border-border/50 hover:border-primary/40 hover:bg-card transition-all duration-300">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="text-sm font-semibold text-primary uppercase tracking-widest">
                        {edu.year}
                      </p>
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground mt-2">
                        {edu.degree}
                      </h3>
                    </div>
                    {edu.status && (
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                        {edu.status}
                      </span>
                    )}
                  </div>

                  <p className="text-primary/90 font-medium mb-3">{edu.institution}</p>
                  <p className="text-muted-foreground leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
