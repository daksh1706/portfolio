import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Code, Zap, Lightbulb, Target, Heart, Rocket, Users, Palette } from 'lucide-react';

const About = () => {
  const statsCards = [
    {
      icon: GraduationCap,
      title: 'B. Tech.',
      subtitle: 'CSE Student at VIT',
      color: 'blue',
    },
    {
      icon: Code,
      title: '7+',
      subtitle: 'Major Projects',
      color: 'purple',
    },
    {
      icon: MapPin,
      title: 'India',
      subtitle: 'Based in',
      color: 'pink',
    },
    {
      icon: Zap,
      title: '24/7',
      subtitle: 'Learning Mode',
      color: 'orange',
    },
  ];

  const driveCards = [
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Building end-to-end solutions with modern technologies and best practices.',
      color: 'blue',
    },
    {
      icon: Lightbulb,
      title: 'Problem Solving',
      description: 'Turning complex challenges into elegant, scalable solutions.',
      color: 'yellow',
    },
    {
      icon: Heart,
      title: 'User-Centric Design',
      description: 'Creating intuitive experiences that users love to interact with.',
      color: 'pink',
    },
    {
      icon: Zap,
      title: 'Performance Focus',
      description: 'Optimizing applications for speed, efficiency, and scalability.',
      color: 'purple',
    },
    {
      icon: Target,
      title: 'Goal-Oriented',
      description: 'Focused on delivering results that make a real impact.',
      color: 'green',
    },
    {
      icon: Rocket,
      title: 'Innovation Driven',
      description: 'Always exploring new technologies and pushing boundaries.',
      color: 'blue',
    },
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: {
        text: 'text-blue-400',
        bg: 'bg-blue-500/20',
        border: 'hover:border-blue-400/50',
        icon: 'bg-blue-500',
      },
      purple: {
        text: 'text-purple-400',
        bg: 'bg-purple-500/20',
        border: 'hover:border-purple-400/50',
        icon: 'bg-purple-500',
      },
      pink: {
        text: 'text-pink-400',
        bg: 'bg-pink-500/20',
        border: 'hover:border-pink-400/50',
        icon: 'bg-pink-500',
      },
      orange: {
        text: 'text-orange-400',
        bg: 'bg-orange-500/20',
        border: 'hover:border-orange-400/50',
        icon: 'bg-orange-500',
      },
      yellow: {
        text: 'text-yellow-400',
        bg: 'bg-yellow-500/20',
        border: 'hover:border-yellow-400/50',
        icon: 'bg-yellow-500',
      },
      green: {
        text: 'text-green-400',
        bg: 'bg-green-500/20',
        border: 'hover:border-green-400/50',
        icon: 'bg-green-500',
      },
    };
    return colorMap[color as keyof typeof colorMap];
  };

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-1 w-16 bg-gradient-to-r from-blue-400 to-transparent"></div>
            <h2 className="text-lg font-medium text-gray-300 tracking-wider uppercase">
              ABOUT ME
            </h2>
            <div className="h-1 w-16 bg-gradient-to-l from-purple-400 to-transparent"></div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            My
          </h1>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Journey
          </h1>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 items-start mb-20">
          {/* Left side - Who I Am */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="border-l-4 border-blue-400 pl-6">
              <h3 className="text-2xl font-bold text-white mb-6">Who I Am</h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Hi, I'm Daksh Maru — a developer passionate about building intelligent, well-designed 
                  digital experiences. I love working at the intersection of AI/ML and design, where 
                  data-driven insights meet clean, intuitive interfaces. Whether it's developing 
                  predictive systems or crafting user-friendly applications, I strive to make 
                  technology not just smart, but beautifully usable.
                </p>
                <p>
                  I love turning ideas into real-world applications. I'm always exploring new 
                  technologies and looking for meaningful projects that challenge me to grow.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right side - Stats Cards in 2x2 Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* 2x2 Grid for Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              {statsCards.map((card, index) => {
                const colors = getColorClasses(card.color);
                return (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-4 ${colors.border} transition-all duration-300`}
                  >
                    <div className="text-center space-y-2">
                      <div className={`inline-flex p-2 ${colors.bg} rounded-lg mb-2`}>
                        <card.icon size={20} className={colors.text} />
                      </div>
                      <h4 className={`text-lg font-bold ${colors.text}`}>{card.title}</h4>
                      <p className="text-gray-300 text-xs leading-tight">{card.subtitle}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Available Status */}
            <div className="flex items-center justify-center gap-3 pt-4">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 font-medium text-sm">Available for new projects</span>
            </div>
          </motion.div>
        </div>

        {/* What Drives Me Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Drives Me
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            These core principles guide every project I work on, ensuring exceptional results every time.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {driveCards.map((card, index) => {
            const colors = getColorClasses(card.color);
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6 ${colors.border} transition-all duration-300 hover:bg-gray-800/50`}
              >
                <div className={`inline-flex p-3 ${colors.icon} rounded-xl mb-4`}>
                  <card.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
                <p className="text-gray-300 leading-relaxed">{card.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;