import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Code, 
  Database, 
  Globe, 
  GitBranch, 
  Container, 
  Cloud, 
  BarChart3, 
  FileSpreadsheet, 
  Brain, 
  Layers,
  Terminal,
  Palette,
  FileCode,
  Code2,
  Cpu,
  Server,
  Table,
  Zap,
  Monitor,
  PieChart,
  Calculator,
  MessageSquare,
  Lightbulb,
  GraduationCap,
  TrendingUp
} from 'lucide-react';

interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  gradient: string;
  hoverGradient: string;
}

interface SkillWithProgress {
  icon: React.ComponentType<{ className?: string }>;
  name: string;
  percentage: number;
  description: string;
  color: string;
}

interface SkillSectionProps {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  skills: SkillWithProgress[];
  sectionColor: string;
  gradientText: string;
}

const AnimatedProgressBar: React.FC<{ percentage: number; color: string; delay?: number }> = ({ 
  percentage, 
  color, 
  delay = 0 
}) => {
  const [animatedPercentage, setAnimatedPercentage] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        const duration = 2000; // 2 seconds
        const steps = 60; // 60 FPS
        const increment = percentage / steps;
        let current = 0;
        
        const interval = setInterval(() => {
          current += increment;
          if (current >= percentage) {
            current = percentage;
            clearInterval(interval);
          }
          setAnimatedPercentage(Math.round(current));
        }, duration / steps);

        return () => clearInterval(interval);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [isInView, percentage, delay]);

  return (
    <div ref={ref} className="w-full bg-slate-700/50 rounded-full h-2 mb-4">
      <div 
        className={`h-2 rounded-full transition-all duration-100 ease-out ${color}`}
        style={{ width: `${animatedPercentage}%` }}
      />
    </div>
  );
};

const SkillSection: React.FC<SkillSectionProps> = ({ title, icon: IconComponent, skills, sectionColor, gradientText }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mb-20"
    >
      <div className="flex items-center gap-4 mb-12">
        <div className={`p-3 rounded-xl ${sectionColor}`}>
          <IconComponent className="w-6 h-6 text-white" />
        </div>
        <h3 className={`text-3xl font-bold bg-gradient-to-r ${gradientText} bg-clip-text text-transparent`}>
          {title}
        </h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill, index) => {
          const SkillIcon = skill.icon;
          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-lg ${skill.color}`}>
                  <SkillIcon className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-white font-semibold">{skill.name}</h4>
                  <span className={`text-sm font-medium bg-gradient-to-r ${gradientText} bg-clip-text text-transparent`}>
                    {skill.percentage}%
                  </span>
                </div>
              </div>
              
              <AnimatedProgressBar 
                percentage={skill.percentage} 
                color={skill.color}
                delay={index * 100}
              />
              
              <p className="text-slate-400 text-sm">{skill.description}</p>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

const skills: Skill[] = [
  {
    name: 'Java',
    icon: Code,
    gradient: 'from-orange-400 to-red-600',
    hoverGradient: 'from-orange-500 to-red-700'
  },
  {
    name: 'Python',
    icon: Terminal,
    gradient: 'from-blue-400 to-blue-600',
    hoverGradient: 'from-blue-500 to-blue-700'
  },
  {
    name: 'C/C++',
    icon: Code,
    gradient: 'from-indigo-400 to-purple-600',
    hoverGradient: 'from-indigo-500 to-purple-700'
  },
  {
    name: 'JavaScript',
    icon: Code,
    gradient: 'from-yellow-400 to-orange-500',
    hoverGradient: 'from-yellow-500 to-orange-600'
  },
  {
    name: 'React',
    icon: Globe,
    gradient: 'from-cyan-400 to-blue-500',
    hoverGradient: 'from-cyan-500 to-blue-600'
  },
  {
    name: 'HTML/CSS',
    icon: Palette,
    gradient: 'from-red-400 to-pink-600',
    hoverGradient: 'from-red-500 to-pink-700'
  },
  {
    name: 'Bootstrap',
    icon: Layers,
    gradient: 'from-purple-400 to-indigo-600',
    hoverGradient: 'from-purple-500 to-indigo-700'
  },
  {
    name: 'MongoDB',
    icon: Database,
    gradient: 'from-green-400 to-emerald-600',
    hoverGradient: 'from-green-500 to-emerald-700'
  },
  {
    name: 'Git',
    icon: GitBranch,
    gradient: 'from-orange-400 to-red-500',
    hoverGradient: 'from-orange-500 to-red-600'
  },
  {
    name: 'Docker',
    icon: Container,
    gradient: 'from-blue-400 to-cyan-600',
    hoverGradient: 'from-blue-500 to-cyan-700'
  },
  {
    name: 'AWS',
    icon: Cloud,
    gradient: 'from-amber-400 to-orange-500',
    hoverGradient: 'from-amber-500 to-orange-600'
  },
  {
    name: 'SQL',
    icon: Database,
    gradient: 'from-teal-400 to-blue-600',
    hoverGradient: 'from-teal-500 to-blue-700'
  },
  {
    name: 'Power BI',
    icon: BarChart3,
    gradient: 'from-yellow-400 to-amber-500',
    hoverGradient: 'from-yellow-500 to-amber-600'
  },
  {
    name: 'Excel',
    icon: FileSpreadsheet,
    gradient: 'from-green-400 to-teal-600',
    hoverGradient: 'from-green-500 to-teal-700'
  },
  {
    name: 'AI/ML',
    icon: Brain,
    gradient: 'from-pink-400 to-rose-600',
    hoverGradient: 'from-pink-500 to-rose-700'
  },
  {
    name: 'ETL',
    icon: Layers,
    gradient: 'from-violet-400 to-purple-600',
    hoverGradient: 'from-violet-500 to-purple-700'
  }
];

const Skills: React.FC = () => {
  const technologyStack = [
    { name: 'Java', icon: Code, color: 'bg-orange-600' },
    { name: 'Python', icon: Terminal, color: 'bg-blue-600' },
    { name: 'C/C++', icon: Cpu, color: 'bg-indigo-600' },
    { name: 'JavaScript', icon: Code2, color: 'bg-yellow-600' },
    { name: 'React', icon: Globe, color: 'bg-cyan-600' },
    { name: 'HTML/CSS', icon: Palette, color: 'bg-red-600' },
    { name: 'Bootstrap', icon: Layers, color: 'bg-purple-600' },
    { name: 'MongoDB', icon: Database, color: 'bg-green-600' },
    { name: 'Git', icon: GitBranch, color: 'bg-orange-600' },
    { name: 'Docker', icon: Container, color: 'bg-blue-600' },
    { name: 'AWS', icon: Cloud, color: 'bg-amber-600' },
    { name: 'SQL', icon: Table, color: 'bg-teal-600' },
    { name: 'Power BI', icon: BarChart3, color: 'bg-yellow-600' },
    { name: 'Excel', icon: Calculator, color: 'bg-green-600' },
    { name: 'AI/ML', icon: Brain, color: 'bg-pink-600' },
    { name: 'ETL', icon: TrendingUp, color: 'bg-violet-600' }
  ];

  const languages = [
    {
      icon: FileCode,
      name: 'Java',
      percentage: 90,
      description: 'Object-oriented programming & enterprise development',
      color: 'bg-blue-600'
    },
    {
      icon: Code2,
      name: 'Python',
      percentage: 85,
      description: 'Data analysis, automation & backend development',
      color: 'bg-blue-600'
    },
    {
      icon: Cpu,
      name: 'C/C++',
      percentage: 80,
      description: 'System programming & competitive programming',
      color: 'bg-blue-600'
    }
  ];

  const webTechnologies = [
    {
      icon: FileCode,
      name: 'HTML/CSS',
      percentage: 95,
      description: 'Semantic markup & modern styling',
      color: 'bg-green-600'
    },
    {
      icon: Layers,
      name: 'Bootstrap',
      percentage: 88,
      description: 'Responsive framework & component library',
      color: 'bg-green-600'
    },
    {
      icon: Code2,
      name: 'JavaScript',
      percentage: 92,
      description: 'Modern ES6+ features & DOM manipulation',
      color: 'bg-green-600'
    },
    {
      icon: Globe,
      name: 'React',
      percentage: 95,
      description: 'Component architecture & modern hooks',
      color: 'bg-green-600'
    },
    {
      icon: Database,
      name: 'MongoDB',
      percentage: 85,
      description: 'NoSQL database management & aggregation',
      color: 'bg-green-600'
    },
    {
      icon: TrendingUp,
      name: 'ETL',
      percentage: 82,
      description: 'Extract, Transform, Load data processes',
      color: 'bg-green-600'
    }
  ];

  const cloudDatabase = [
    {
      icon: GitBranch,
      name: 'Git',
      percentage: 95,
      description: 'Version control & collaborative development',
      color: 'bg-purple-600'
    },
    {
      icon: Container,
      name: 'Docker',
      percentage: 78,
      description: 'Containerization & deployment',
      color: 'bg-purple-600'
    },
    {
      icon: Server,
      name: 'AWS',
      percentage: 75,
      description: 'Cloud infrastructure & services',
      color: 'bg-purple-600'
    },
    {
      icon: Table,
      name: 'SQL',
      percentage: 88,
      description: 'Database design & query optimization',
      color: 'bg-purple-600'
    }
  ];

  const courseWorksTools = [
    {
      icon: Zap,
      name: 'OOPs',
      percentage: 90,
      description: 'Object-oriented programming principles',
      color: 'bg-orange-600'
    },
    {
      icon: Monitor,
      name: 'Operating System',
      percentage: 85,
      description: 'System architecture & process management',
      color: 'bg-orange-600'
    },
    {
      icon: Database,
      name: 'DBMS',
      percentage: 88,
      description: 'Database management systems & design',
      color: 'bg-orange-600'
    },
    {
      icon: Brain,
      name: 'AI',
      percentage: 80,
      description: 'Artificial intelligence & machine learning',
      color: 'bg-orange-600'
    },
    {
      icon: PieChart,
      name: 'Data Visualization',
      percentage: 85,
      description: 'Visual representation of data insights',
      color: 'bg-orange-600'
    },
    {
      icon: BarChart3,
      name: 'Power BI',
      percentage: 82,
      description: 'Business intelligence & reporting',
      color: 'bg-orange-600'
    },
    {
      icon: Calculator,
      name: 'Excel',
      percentage: 90,
      description: 'Advanced spreadsheet analysis & automation',
      color: 'bg-orange-600'
    },
    {
      icon: MessageSquare,
      name: 'LLM',
      percentage: 75,
      description: 'Large Language Models & NLP',
      color: 'bg-orange-600'
    },
    {
      icon: Lightbulb,
      name: 'Critical Thinking',
      percentage: 95,
      description: 'Problem-solving & analytical reasoning',
      color: 'bg-orange-600'
    }
  ];

  return (
    <section id="skills" className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent text-sm font-medium uppercase tracking-wider">
              Skills & Expertise
            </span>
          </div>
          <h1 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Technical Arsenal
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            A comprehensive toolkit for building modern applications and solving complex problems
          </p>
        </motion.div>

        {/* Technology Stack Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Technology Stack
            </span>
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            The essential tools and technologies I use to build exceptional digital experiences
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-16">
            {technologyStack.map((tech, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-4 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 hover:shadow-xl group flex flex-col items-center"
              >
                <div className={`p-3 rounded-lg ${tech.color} mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  <tech.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-white font-medium text-sm text-center group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Languages Section */}
        <SkillSection
          title="Languages"
          icon={Code2}
          skills={languages}
          sectionColor="bg-blue-600"
          gradientText="from-blue-400 to-cyan-400"
        />

        {/* Web Technologies Section */}
        <SkillSection
          title="Web Technologies"
          icon={Globe}
          skills={webTechnologies}
          sectionColor="bg-green-600"
          gradientText="from-green-400 to-emerald-400"
        />

        {/* Cloud & Database Section */}
        <SkillSection
          title="Cloud & Database"
          icon={Cloud}
          skills={cloudDatabase}
          sectionColor="bg-purple-600"
          gradientText="from-purple-400 to-pink-400"
        />

        {/* Course Works & Tools Section */}
        <SkillSection
          title="Course Works & Tools"
          icon={GraduationCap}
          skills={courseWorksTools}
          sectionColor="bg-orange-600"
          gradientText="from-orange-400 to-red-400"
        />

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg">
            <span className="bg-gradient-to-r from-slate-400 to-slate-300 bg-clip-text text-transparent">
              Always learning and exploring new technologies to stay ahead in the ever-evolving tech landscape
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
