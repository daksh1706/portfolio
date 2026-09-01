export function Skills() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Java', 'Python', 'JavaScript', 'HTML & CSS'],
    },
    {
      title: 'Web Technologies',
      skills: ['React.js', 'Next.js', 'Node.js', 'REST APIs'],
    },
    {
      title: 'Databases & Tools',
      skills: ['MongoDB', 'Git & GitHub', 'VS Code', 'Postman'],
    },
    {
      title: 'Core Concepts',
      skills: ['Data Structures', 'Algorithms', 'OOP', 'SDLC'],
    },
  ]

  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-3xl opacity-40 -z-10" />

      <div className="max-w-6xl mx-auto">
        <div className="mb-4 inline-block">
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">
            Expertise
          </span>
        </div>
        <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-16">
          Technical Arsenal
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="group relative p-8 rounded-2xl bg-gradient-to-br from-card/60 to-card/30 border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 backdrop-blur-sm overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              
              <div className="relative z-10">
                <h3 className="text-lg font-bold text-foreground mb-6 uppercase tracking-wide">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-lg bg-gradient-to-r from-primary/20 to-primary/10 text-primary border border-primary/30 text-sm font-medium hover:border-primary/60 hover:from-primary/30 hover:to-primary/15 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-20">
          <div className="mb-4 inline-block">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">
              Achievements
            </span>
          </div>
          <h3 className="text-3xl font-bold text-foreground mb-8">Certifications</h3>
          <div className="grid grid-cols-1 gap-4">
            {[
              {
                title: 'The Bits and Bytes of Computer Networking',
                issuer: 'Coursera',
              },
              {
                title: 'Deep Learning with Keras and TensorFlow',
                issuer: 'Coursera',
              },
              {
                title: 'Introduction to Artificial Intelligence',
                issuer: 'Coursera',
              },
            ].map((cert, index) => (
              <div
                key={index}
                className="group relative p-6 rounded-xl bg-gradient-to-r from-card/50 to-card/30 border border-border/50 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 backdrop-blur-sm"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                
                <div className="relative z-10 flex items-start justify-between">
                  <div>
                    <p className="text-foreground font-semibold text-base">{cert.title}</p>
                    <p className="text-muted-foreground text-sm mt-1">{cert.issuer}</p>
                  </div>
                  <div className="ml-4 flex-shrink-0 text-primary opacity-60 group-hover:opacity-100 transition-opacity">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 3.062v6.218c0 1.264-.586 2.459-1.596 3.228a3.05 3.05 0 01-3.037.518 3.05 3.05 0 01-1.906.5 3.05 3.05 0 01-1.906-.5 3.05 3.05 0 01-3.037-.518c-1.01-.769-1.596-1.964-1.596-3.228V6.517a3.066 3.066 0 012.812-3.062z" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
