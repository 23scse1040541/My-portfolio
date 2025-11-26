import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi';
import profileImage from './image.png';

const Hero = ({ setActiveSection }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const socialLinks = [
    {
      icon: <FiGithub className="w-5 h-5" />,
      url: 'https://github.com/23scse1040541',
      label: 'GitHub',
    },
    {
      icon: <FiLinkedin className="w-5 h-5" />,
      url: 'https://linkedin.com/in/utkarshpandey9',
      label: 'LinkedIn',
    },
    {
      icon: <FiMail className="w-5 h-5" />,
      url: 'mailto:utkarshpandey7392@gmail.com',
      label: 'Email',
    },
  ];

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center pt-20 md:pt-0 px-4"
      onViewportEnter={() => setActiveSection('home')}
    >
      <div className="container mx-auto">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Text Content */}
          <motion.div className="text-center lg:text-left" variants={itemVariants}>
            <motion.p 
              className="text-primary text-lg font-medium mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Hi, I'm
            </motion.p>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Utkarsh Pandey
            </motion.h1>
            
            <motion.h2 
              className="text-2xl md:text-3xl font-semibold mb-6 text-gray-700 dark:text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Frontend Developer
            </motion.h2>
            
            <motion.p 
              className="text-gray-600 dark:text-gray-400 mb-8 max-w-lg mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              I build exceptional digital experiences with modern web technologies. 
              Focused on creating clean, efficient, and user-friendly interfaces.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <a
                href="#contact"
                className="btn btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  setActiveSection('contact');
                }}
              >
                Get In Touch
              </a>
              
              <a
                href="#projects"
                className="btn btn-outline"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                  setActiveSection('projects');
                }}
              >
                View My Work
              </a>
            </motion.div>
            
            <motion.div 
              className="mt-12 flex items-center justify-center lg:justify-start space-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors duration-200"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
              
              <a
                href="/resume.pdf"
                download
                className="flex items-center text-sm font-medium text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors duration-200"
              >
                <FiDownload className="mr-2" />
                Download CV
              </a>
            </motion.div>
          </motion.div>
          
          {/* Image/Illustration */}
          <motion.div 
            className="relative"
            variants={itemVariants}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-600/20 rounded-full filter blur-3xl opacity-70 dark:opacity-30"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
                <img
                  src={profileImage}
                  alt="Utkarsh Pandey"
                  className="w-full h-full object-cover object-[50%_30%]"
                />
              </div>
              
              {/* Decorative elements */}
              <motion.div 
                className="absolute -bottom-4 -right-4 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, type: 'spring', stiffness: 300, damping: 20 }}
              >
                <span className="relative flex h-3 w-3 mr-1 inline-block">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                </span>
                Available for work
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
