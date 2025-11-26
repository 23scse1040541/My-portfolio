import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowUp, FiPhone } from 'react-icons/fi';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
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

  const footerLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <motion.div 
            className="md:col-span-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
              Utkarsh Pandey
            </h3>
            <p className="text-gray-400 mb-6">
              A passionate Frontend Developer dedicated to building exceptional digital experiences 
              that make a difference.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  whileHover={{ y: -3 }}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="md:col-span-3 md:col-start-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div 
            className="md:col-span-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-white">Contact Info</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <FiMail className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                <a href="mailto:utkarshpandey7392@gmail.com" className="hover:text-white transition-colors">
                  utkarshpandey7392@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <FiPhone className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                <a href="tel:+917392010409" className="hover:text-white transition-colors">
                  +91 7392010409
                </a>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Delhi, India</span>
              </li>
            </ul>
          </motion.div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Utkarsh Pandey. All rights reserved.
          </p>
          
          <motion.button
            onClick={scrollToTop}
            className="flex items-center text-sm text-gray-400 hover:text-white transition-colors"
            whileHover={{ y: -2 }}
            aria-label="Back to top"
          >
            Back to top
            <FiArrowUp className="ml-2" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
