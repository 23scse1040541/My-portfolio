import { motion } from 'framer-motion';
import { FiAward } from 'react-icons/fi';

const Certifications = ({ setActiveSection }) => {
  const certifications = [
    {
      id: 1,
      title: 'Full Stack Web Development',
      issuer: 'EduSkills',
      date: '2024',
      credential: 'Credential ID: ESF12345',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB'],
      link: 'https://linkedin.com/in/utkarshpandey9'
    },
    {
      id: 2,
      title: 'Java Programming',
      issuer: 'OnWingspan',
      date: '2023',
      credential: 'Credential ID: OWS67890',
      skills: ['Java', 'OOP', 'Data Structures', 'Algorithms'],
      link: 'https://linkedin.com/in/utkarshpandey9'
    },
    {
      id: 3,
      title: 'Machine Learning with Python',
      issuer: 'Coursera',
      date: '2023',
      credential: 'Credential ID: CML45678',
      skills: ['Python', 'Machine Learning', 'Data Analysis', 'Scikit-learn'],
      link: 'https://linkedin.com/in/utkarshpandey9'
    },
    {
      id: 4,
      title: 'CCNA: Introduction to Networks',
      issuer: 'Cisco Networking Academy',
      date: '2022',
      credential: 'Credential ID: CNA90123',
      skills: ['Networking', 'TCP/IP', 'Routing', 'Switching'],
      link: 'https://linkedin.com/in/utkarshpandey9'
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
      id="certifications" 
      className="section bg-gray-50 dark:bg-gray-900/50"
      onViewportEnter={() => setActiveSection('certifications')}
    >
      <div className="container">
        <motion.h2 
          className="section-title text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Certifications
        </motion.h2>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {certifications.map((cert) => (
            <motion.div 
              key={cert.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden group"
              variants={item}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="p-6">
                <div className="flex items-start">
                  <div className="p-2 bg-primary/10 rounded-lg mr-4">
                    <FiAward className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      {cert.issuer} • {cert.date}
                    </p>
                    {cert.credential && (
                      <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                        {cert.credential}
                      </p>
                    )}
                    
                    <div className="mt-4">
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill, index) => (
                          <span 
                            key={index}
                            className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {cert.link && (
                      <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                        <a 
                          href={cert.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                        >
                          View Credential
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            For a complete list of my certifications, visit my LinkedIn profile.
          </p>
          <a
            href="https://linkedin.com/in/utkarshpandey9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            View LinkedIn Profile
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
