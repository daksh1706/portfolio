'use client'

import Link from 'next/link'
import { Github, ExternalLink } from 'lucide-react'

export function Projects() {
  const projects = [
    {
      title: 'Campus Course & Records Manager (CCRM)',
      description:
        'A comprehensive software solution for managing academic courses and student records. Features modular backend components, structured data models, and clean architecture with a focus on maintainability and extensibility.',
      technologies: ['Java', 'Backend Architecture', 'Data Models'],
      github: 'https://github.com/daksh1706/CCRM-starter',
      highlights: [
        'Modular backend design',
        'Structured data management',
        'Debugging & optimization',
      ],
    },
    {
      title: 'CareSphere - AI for Chronic Disease Management',
      description:
        'An in-progress full-stack platform dedicated to chronic disease monitoring and management. Integrates secure health data storage with RESTful APIs to provide patients with comprehensive care tracking.',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'REST APIs'],
      github: 'https://github.com/daksh1706/caresphere',
      highlights: [
        'Health data security',
        'RESTful API design',
        'Full-stack integration',
      ],
      status: 'In Progress',
    },
    {
      title: 'SnapCart - Online Grocery Delivery Platform',
      description:
        'A role-based e-commerce platform with distinct interfaces for Users, Delivery Partners, and Admins. Complete implementation of cart management, order processing, and comprehensive admin dashboards for platform oversight.',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
      github: 'https://github.com/daksh1706/SnapCart',
      highlights: [
        'Multi-role system',
        'Cart & order management',
        'Admin dashboard',
      ],
    },
  ]

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
      
      <div className="relative max-w-6xl mx-auto">
        <div className="mb-4 inline-block">
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">
            Featured Work
          </span>
        </div>
        <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-16">
          Projects & Creations
        </h2>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative p-8 sm:p-10 rounded-2xl bg-card/40 border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 backdrop-blur-sm"
            >
              {/* Gradient accent on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
                      {project.title}
                    </h3>
                    {project.status && (
                      <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-primary/30 to-primary/10 text-primary text-sm font-semibold border border-primary/40">
                        {project.status}
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed text-balance">
                  {project.description}
                </p>

                <div className="grid sm:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="text-sm font-bold text-foreground mb-3 uppercase tracking-wider">
                      Key Highlights
                    </h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="text-muted-foreground text-sm flex items-start gap-2"
                        >
                          <span className="text-primary font-bold mt-1">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="text-sm font-bold text-foreground mb-3 uppercase tracking-wider">
                      Tech Stack
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-2 rounded-lg bg-gradient-to-r from-primary/20 to-primary/10 text-primary text-sm font-medium border border-primary/30 hover:border-primary/60 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary font-semibold group/link hover:gap-4 transition-all duration-300"
                >
                  <Github size={20} className="group-hover/link:scale-110 transition-transform" />
                  <span>View on GitHub</span>
                  <ExternalLink size={18} className="opacity-0 group-hover/link:opacity-100 transition-opacity" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
