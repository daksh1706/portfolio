import React, { useState, useEffect } from 'react';
import { Code2, Globe, Database, Layers, Cpu, Zap, FileText, BarChart3, Terminal, Cloud, Target, ChevronDown, ChevronUp } from 'lucide-react';

interface Skill {
  name: string;
  percentage: number;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

interface SkillCategory {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  iconColor: string;
  skills: Skill[];
}

interface TechStackItem {
  name: string;
  icon: string;
  category: string;
}

interface CloudDatabaseSkill {
  name: string;
  level: number;
  description: string;
}

const SkillCard: React.FC<{ skill: Skill; index: number }> = ({ skill, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const IconComponent = skill.icon;
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 200);
    return () => clearTimeout(timer);
  }, [index]);
  
  return (
    <div 
      className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:bg-gray-900/70 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 hover:border-blue-400/50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-lg ${skill.color} transition-all duration-300 ${isHovered ? 'scale-110 shadow-lg' : ''}`}>
            <IconComponent className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-white font-semibold text-lg">{skill.name}</h3>
        </div>
        <span className="text-gray-400 font-medium text-sm bg-gray-700/50 px-3 py-1 rounded-full">
          {skill.percentage}%
        </span>
      </div>
      
      <div className="mb-4">
        <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
          <div 
            className={`h-full ${skill.color} transition-all duration-1000 ease-out rounded-full relative`}
            style={{ width: isVisible ? `${skill.percentage}%` : '0%' }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
          </div>
        </div>
      </div>
      
      <p className="text-gray-400 text-sm leading-relaxed">{skill.description}</p>
    </div>
  );
};

const CloudDatabaseCard: React.FC<{ skill: CloudDatabaseSkill; index: number }> = ({ skill, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 200);
    return () => clearTimeout(timer);
  }, [index]);

  const getColorByLevel = (level: number) => {
    if (level >= 90) return 'from-green-500 to-emerald-500';
    if (level >= 80) return 'from-blue-500 to-cyan-500';
    if (level >= 70) return 'from-yellow-500 to-orange-500';
    return 'from-red-500 to-pink-500';
  };

  return (
    <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-blue-400/50 transition-all duration-300">
      <div className="flex justify-between items-center mb-2">
        <h4 className="text-white font-semibold">{skill.name}</h4>
        <span className="text-gray-400 text-sm">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2 mb-3">
        <div
          className={`bg-gradient-to-r ${getColorByLevel(skill.level)} h-2 rounded-full transition-all duration-1000`}
          style={{ width: isVisible ? `${skill.level}%` : '0%' }}
        />
      </div>
      <p className="text-gray-400 text-sm">{skill.description}</p>
    </div>
  );
};

const Skills: React.FC = () => {
  const [expandedCategories, setExpandedCategories] = useState<number[]>([0, 1]);
  
  const skillCategories: SkillCategory[] = [
    {
      title: "Programming Languages",
      icon: Code2,
      iconColor: "bg-gradient-to-r from-blue-500 to-purple-600",
      skills: [
        {
          name: "Java",
          percentage: 90,
          description: "Object-oriented programming, Spring Boot, enterprise development",
          icon: Code2,
          color: "bg-gradient-to-r from-blue-500 to-blue-600"
        },
        {
          name: "Python",
          percentage: 85,
          description: "Data analysis, automation, machine learning & backend development",
          icon: Code2,
          color: "bg-gradient-to-r from-blue-500 to-blue-600"
        },
        {
          name: "C/C++",
          percentage: 80,
          description: "System programming, competitive programming & performance optimization",
          icon: Cpu,
          color: "bg-gradient-to-r from-blue-500 to-blue-600"
        },
        {
          name: "JavaScript",
          percentage: 92,
          description: "Modern ES6+ features, DOM manipulation & async programming",
          icon: Zap,
          color: "bg-gradient-to-r from-blue-500 to-blue-600"
        }
      ]
    },
    {
      title: "Web Technologies",
      icon: Globe,
      iconColor: "bg-gradient-to-r from-green-500 to-teal-600",
      skills: [
        {
          name: "React",
          percentage: 95,
          description: "Component architecture, modern hooks, context API & state management",
          icon: Globe,
          color: "bg-gradient-to-r from-green-500 to-green-600"
        },
        {
          name: "HTML/CSS",
          percentage: 95,
          description: "Semantic markup, modern CSS3, flexbox & grid layouts",
          icon: FileText,
          color: "bg-gradient-to-r from-green-500 to-green-600"
        },
        {
          name: "Bootstrap",
          percentage: 88,
          description: "Responsive framework, component library & utility classes",
          icon: Layers,
          color: "bg-gradient-to-r from-green-500 to-green-600"
        },
        {
          name: "MongoDB",
          percentage: 85,
          description: "NoSQL database management, aggregation & data modeling",
          icon: Database,
          color: "bg-gradient-to-r from-green-500 to-green-600"
        }
      ]
    }
  ];

  const techStack: TechStackItem[] = [
    { name: 'Java', icon: '☕', category: 'language' },
    { name: 'Python', icon: '🐍', category: 'language' },
    { name: 'C/C++', icon: '⚡', category: 'language' },
    { name: 'JavaScript', icon: '🟨', category: 'language' },
    { name: 'React', icon: '⚛️', category: 'frontend' },
    { name: 'HTML/CSS', icon: '🌐', category: 'frontend' },
    { name: 'Bootstrap', icon: '🅱️', category: 'frontend' },
    { name: 'MongoDB', icon: '🍃', category: 'database' },
  ];

  const cloudDatabase: CloudDatabaseSkill[] = [
    { name: 'Git', level: 95, description: 'Version control & collaborative development' },
    { name: 'Docker', level: 78, description: 'Containerization & deployment' },
    { name: 'AWS', level: 72, description: 'Cloud infrastructure & services' },
    { name: 'SQL', level: 88, description: 'Database design & query optimization' },
  ];

  const courseWorks: CloudDatabaseSkill[] = [
    { name: 'OOPs', level: 98, description: 'Object-oriented programming principles' },
    { name: 'Operating System', level: 93, description: 'System architecture & process management' },
    { name: 'DBMS', level: 88, description: 'Database management systems & design' },
    { name: 'AI', level: 89, description: 'Artificial intelligence & machine learning' },
    { name: 'Data Visualization', level: 83, description: 'Visual representation of data insights' },
    { name: 'Power BI', level: 82, description: 'Business intelligence & reporting' },
    { name: 'Excel', level: 90, description: 'Advanced spreadsheet analysis & automation' },
    { name: 'LLM', level: 74, description: 'Large Language Models & N.L.P' },
    { name: 'Critical Thinking', level: 91, description: 'Problem-solving & analytical reasoning' },
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      language: 'bg-orange-500',
      frontend: 'bg-blue-500',
      database: 'bg-green-500',
    };
    return colors[category as keyof typeof colors] || 'bg-gray-500';
  };

  const toggleCategory = (index: number) => {
    setExpandedCategories(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="skills" className="py-20 bg-gray-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-purple-900/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent)] opacity-50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-1 w-16 bg-gradient-to-r from-blue-400 to-transparent"></div>
            <h2 className="text-lg font-medium text-gray-300 tracking-wider uppercase">
              SKILLS & EXPERTISE
            </h2>
            <div className="h-1 w-16 bg-gradient-to-l from-purple-400 to-transparent"></div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Technical
          </h1>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Arsenal
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mt-6">
            A comprehensive toolkit for building modern applications and solving complex problems
          </p>
        </div>

        {/* Technology Stack */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Technology Stack</h3>
          <p className="text-gray-300 text-center mb-8">
            The essential tools and technologies I use to build exceptional digital experiences
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {techStack.map((tech, index) => (
              <div
                key={tech.name}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-4 text-center hover:border-blue-400/50 transition-all duration-300 group hover:scale-105"
              >
                <div className="text-3xl mb-2">{tech.icon}</div>
                <h4 className="text-white font-medium text-sm">{tech.name}</h4>
                <div className={`w-2 h-2 ${getCategoryColor(tech.category)} rounded-full mx-auto mt-2`}></div>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Skills Categories */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-12 text-center">Detailed Proficiency</h3>
          
          <div className="space-y-12">
            {skillCategories.map((category, categoryIndex) => {
              const CategoryIcon = category.icon;
              const isExpanded = expandedCategories.includes(categoryIndex);
              
              return (
                <div key={categoryIndex} className="space-y-6">
                  <div 
                    className="flex items-center justify-between cursor-pointer group"
                    onClick={() => toggleCategory(categoryIndex)}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-xl ${category.iconColor} shadow-lg group-hover:scale-110 transition-all duration-300`}>
                        <CategoryIcon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                          {category.title}
                        </h4>
                        <div className={`h-1 w-16 ${category.iconColor} rounded-full mt-2`} />
                      </div>
                    </div>
                    
                    <div className="text-gray-400 hover:text-white transition-colors">
                      {isExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                    </div>
                  </div>
                  
                  {isExpanded && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pl-16">
                      {category.skills.map((skill, skillIndex) => (
                        <SkillCard key={skillIndex} skill={skill} index={skillIndex} />
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Cloud & Database */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
              <Cloud className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white">Cloud & Database</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {cloudDatabase.map((skill, index) => (
              <CloudDatabaseCard key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </div>

        {/* Course Works & Tools */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
              <Target className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white">Course Works & Tools</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {courseWorks.map((skill, index) => (
              <CloudDatabaseCard key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </div>

        {/* Continuous Learning */}
        <div className="text-center">
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-700 p-8 max-w-4xl mx-auto hover:border-blue-400/30 transition-all duration-300">
            <h3 className="text-2xl font-bold text-white mb-6">
              Continuous Learning
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              As a final-year CSE student, I'm constantly expanding my knowledge and staying updated with the latest 
              technologies. My academic foundation combined with hands-on project experience allows me to tackle 
              complex challenges and deliver innovative solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['React 18', 'TypeScript 5', 'Next.js 14', 'AI/ML Integration', 'Cloud Computing'].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 text-blue-300 rounded-full text-sm font-medium hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;