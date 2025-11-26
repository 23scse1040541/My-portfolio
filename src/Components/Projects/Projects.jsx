import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiActivity, FiDroplet } from 'react-icons/fi';

const Projects = ({ setActiveSection }) => {
  const projects = [
    {
      title: 'NeuroVerse 2.0',
      description: 'A comprehensive mental health monitoring web application with mood tracking, journaling, analytics, and AI assistance features.',
      tags: ['React', 'Tailwind CSS', 'Node.js', 'MongoDB', 'Zustand', 'Framer Motion'],
      thumbnailGradient: 'from-indigo-500 via-purple-600 to-sky-500',
      thumbnailIcon: <FiActivity className="w-10 h-10 text-white" />, 
      github: 'https://github.com/23scse1040541/neuroverse-2.0',
      demo: 'https://www.google.com',
      features: [
        'Mood tracking and journaling functionality',
        'Interactive analytics dashboard with Recharts',
        'AI-powered mental health assistance',
        'JWT authentication system',
        'Responsive design for all devices'
      ]
    },
    {
      title: 'Laundry Service Booking',
      description: 'A responsive website for booking laundry services online with real-time order tracking and management.',
      tags: ['HTML', 'CSS', 'JavaScript', 'EmailJS'],
      thumbnailGradient: 'from-cyan-500 via-sky-500 to-emerald-400',
      thumbnailIcon: <FiDroplet className="w-10 h-10 text-white" />, 
      github: 'https://github.com/23scse1040541/Complete_laundry_website',
      demo: 'https://feverwashingcenter.netlify.app/',
      features: [
        'User-friendly booking interface',
        'Order status tracking',
        'Email notifications',
        'Responsive design',
        'Service selection and scheduling'
      ]
    },
    // Add more projects as needed
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section 
      id="projects" 
      className="section"
      onViewportEnter={() => setActiveSection('projects')}
    >
      <div className="container">
        <motion.h2 
          className="section-title text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 gap-12"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              variants={item}
            >
              <div className="relative h-64 lg:h-full group overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${
                    project.thumbnailGradient ||
                    (index % 2 === 0
                      ? 'from-blue-500 via-purple-600 to-sky-400'
                      : 'from-emerald-500 via-teal-500 to-cyan-400')
                  }`}
                ></div>
                <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_20%_20%,white,transparent_60%),radial-gradient(circle_at_80%_80%,white,transparent_55%)]"></div>
                <div className="relative z-10 flex flex-col justify-between h-full p-6 text-white">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/15 shadow-lg shadow-black/20">
                        {project.thumbnailIcon}
                      </div>
                      <div className="text-left">
                        <p className="text-xs uppercase tracking-[0.2em] text-white/80">
                          Featured Project
                        </p>
                        <h3 className="text-2xl font-bold leading-tight">{project.title}</h3>
                      </div>
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-white/70">
                      {index + 1 < 10 ? `0${index + 1}` : index + 1}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map((tag, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 text-xs font-medium bg-white/15 text-white backdrop-blur-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="p-8 flex flex-col">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {project.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
                    Key Features:
                  </h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span className="text-gray-600 dark:text-gray-400 text-sm">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-auto pt-4 flex flex-wrap gap-4 border-t border-gray-100 dark:border-gray-700">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-700 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    >
                      <FiGithub className="mr-2" />
                      Code
                    </a>
                  )}
                  
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-primary-dark transition-colors"
                    >
                      <FiExternalLink className="mr-2" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <a
            href="https://github.com/23scse1040541"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 text-sm font-medium text-primary border border-primary rounded-md hover:bg-primary hover:text-white transition-colors"
          >
            <FiGithub className="mr-2" />
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
