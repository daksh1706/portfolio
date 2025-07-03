import React from 'react';
import { 
  Code2, 
  Globe, 
  Cloud, 
  GraduationCap,
  FileCode,
  Database,
  Layers,
  Cpu,
  BarChart3,
  Brain,
  Monitor,
  Zap,
  GitBranch,
  Container,
  Server,
  Table,
  TrendingUp,
  Bot,
  PieChart,
  Calculator,
  MessageSquare,
  Lightbulb
} from 'lucide-react';

interface Skill {
  icon: React.ComponentType<any>;
  name: string;
  percentage: number;
  description: string;
  color: string;
}

interface SkillCardProps {
  icon: React.ComponentType<any>;
  name: string;
  percentage: number;
  description: string;
  color: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ 
  icon: Icon, 
  name, 
  percentage, 
  description, 
  color 
}) => {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 hover:shadow-xl group">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-lg ${color}`}>
            <Icon className="w-5 h-5 text-white" />
          </div>
          <span className="text-white font-semibold text-lg">{name}</span>
        </div>
        <span className="text-slate-400 font-medium">{percentage}%</span>
      </div>
      
      <div className="mb-3">
        <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
          <div 
            className={`h-full rounded-full transition-all duration-1000 ease-out group-hover:animate-pulse`}
            style={{ 
              width: `${percentage}%`,
              background: `linear-gradient(90deg, ${color.includes('blue') ? '#3b82f6' : 
                          color.includes('green') ? '#10b981' : 
                          color.includes('purple') ? '#8b5cf6' : 
                          color.includes('orange') ? '#f97316' : 
                          color.includes('amber') ? '#f59e0b' :
                          color.includes('yellow') ? '#eab308' :
                          color.includes('cyan') ? '#06b6d4' :
                          color.includes('red') ? '#ef4444' :
                          color.includes('pink') ? '#ec4899' :
                          color.includes('indigo') ? '#6366f1' : '#3b82f6'} 0%, 
                          ${color.includes('blue') ? '#1d4ed8' : 
                          color.includes('green') ? '#059669' : 
                          color.includes('purple') ? '#7c3aed' : 
                          color.includes('orange') ? '#ea580c' : 
                          color.includes('amber') ? '#d97706' :
                          color.includes('yellow') ? '#ca8a04' :
                          color.includes('cyan') ? '#0891b2' :
                          color.includes('red') ? '#dc2626' :
                          color.includes('pink') ? '#db2777' :
                          color.includes('indigo') ? '#4f46e5' : '#1d4ed8'} 100%)`
            }}
          />
        </div>
      </div>
      
      <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

interface SkillSectionProps {
  title: string;
  icon: React.ComponentType<any>;
  skills: Skill[];
  sectionColor: string;
}

const SkillSection: React.FC<SkillSectionProps> = ({ 
  title, 
  icon: Icon, 
  skills, 
  sectionColor 
}) => {
  return (
    <div className="mb-16">
      <div className="flex items-center gap-4 mb-8">
        <div className={`p-3 rounded-xl ${sectionColor}`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-white">{title}</h2>
          <div className={`h-1 w-16 rounded-full mt-2 ${sectionColor.replace('bg-', 'bg-gradient-to-r from-')}`} />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <SkillCard
            key={index}
            icon={skill.icon}
            name={skill.name}
            percentage={skill.percentage}
            description={skill.description}
            color={skill.color}
          />
        ))}
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  const technologyStack = [
    {
      icon: FileCode,
      name: 'Java',
      percentage: 90,
      description: 'Object-oriented programming & enterprise development',
      color: 'bg-amber-600'
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
      color: 'bg-blue-700'
    },
    {
      icon: Code2,
      name: 'JavaScript',
      percentage: 92,
      description: 'Modern ES6+ features & DOM manipulation',
      color: 'bg-yellow-500'
    },
    {
      icon: Globe,
      name: 'React',
      percentage: 88,
      description: 'Component architecture & modern hooks',
      color: 'bg-cyan-500'
    },
    {
      icon: FileCode,
      name: 'HTML/CSS',
      percentage: 95,
      description: 'Semantic markup & modern styling',
      color: 'bg-orange-600'
    },
    {
      icon: Layers,
      name: 'Bootstrap',
      percentage: 82,
      description: 'Responsive framework & component library',
      color: 'bg-purple-600'
    },
    {
      icon: Database,
      name: 'MongoDB',
      percentage: 85,
      description: 'NoSQL database management & aggregation',
      color: 'bg-green-600'
    },
    {
      icon: GitBranch,
      name: 'Git',
      percentage: 88,
      description: 'Version control & collaborative development',
      color: 'bg-red-600'
    },
    {
      icon: Container,
      name: 'Docker',
      percentage: 78,
      description: 'Containerization & deployment',
      color: 'bg-blue-500'
    },
    {
      icon: Server,
      name: 'AWS',
      percentage: 75,
      description: 'Cloud infrastructure & services',
      color: 'bg-orange-500'
    },
    {
      icon: Table,
      name: 'SQL',
      percentage: 85,
      description: 'Database design & query optimization',
      color: 'bg-indigo-600'
    },
    {
      icon: BarChart3,
      name: 'Power BI',
      percentage: 82,
      description: 'Business intelligence & reporting',
      color: 'bg-yellow-600'
    },
    {
      icon: Calculator,
      name: 'Excel',
      percentage: 90,
      description: 'Advanced spreadsheet analysis & automation',
      color: 'bg-green-700'
    },
    {
      icon: TrendingUp,
      name: 'AI/ML',
      percentage: 80,
      description: 'Artificial intelligence & machine learning',
      color: 'bg-pink-600'
    },
    {
      icon: PieChart,
      name: 'ETL',
      percentage: 82,
      description: 'Extract, Transform, Load data processes',
      color: 'bg-purple-700'
    }
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">Technology Stack</h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            The essential tools and technologies I use to build exceptional digital experiences
          </p>
        </div>

        {/* Technology Stack Grid */}
        <div className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-16">
            {technologyStack.map((tech, index) => (
              <div 
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-4 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 hover:shadow-xl group flex flex-col items-center"
              >
                <div className={`p-3 rounded-lg ${tech.color} mb-3`}>
                  <tech.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-white font-medium text-sm text-center">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Languages Section */}
        <SkillSection
          title="Languages"
          icon={Code2}
          skills={languages}
          sectionColor="bg-blue-600"
        />

        {/* Web Technologies Section */}
        <SkillSection
          title="Web Technologies"
          icon={Globe}
          skills={webTechnologies}
          sectionColor="bg-green-600"
        />

        {/* Cloud & Database Section */}
        <SkillSection
          title="Cloud & Database"
          icon={Cloud}
          skills={cloudDatabase}
          sectionColor="bg-purple-600"
        />

        {/* Course Works & Tools Section */}
        <SkillSection
          title="Course Works & Tools"
          icon={GraduationCap}
          skills={courseWorksTools}
          sectionColor="bg-orange-600"
        />
      </div>
    </div>
  );
};

export default Skills;

export { Skills }
