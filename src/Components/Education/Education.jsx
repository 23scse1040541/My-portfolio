import { motion } from 'framer-motion';
import { FiBookOpen } from 'react-icons/fi';

const Education = ({ setActiveSection }) => {
  const education = [
    {
      id: 1,
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'Galgotias University',
      duration: '2023 - Present',
      location: 'Greater Noida, India',
      cgpa: 'CGPA: 8.5/10',
      description: 'Currently pursuing a degree in Computer Applications with a focus on software development, algorithms, and computer systems.',
      courses: [
        'Data Structures & Algorithms',
        'Database Management Systems',
        'Web Development',
        'Object-Oriented Programming',
        'Computer Networks',
        'Operating Systems'
      ]
    },
    // Add more education entries as needed
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
      id="education" 
      className="section"
      onViewportEnter={() => setActiveSection('education')}
    >
      <div className="container">
        <motion.h2 
          className="section-title text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Education
        </motion.h2>

        <motion.div 
          className="grid grid-cols-1 gap-8 max-w-4xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {education.map((edu) => (
            <motion.div 
              key={edu.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden"
              variants={item}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="p-6 md:p-8">
                <div className="flex items-start">
                  <div className="p-3 bg-primary/10 rounded-lg mr-4">
                    <FiBookOpen className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">{edu.degree}</h3>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-1">
                      <h4 className="text-lg font-semibold text-primary">{edu.institution}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{edu.duration}</p>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{edu.location}</p>
                    
                    {edu.cgpa && (
                      <div className="mt-2">
                        <span className="inline-block px-3 py-1 text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 rounded-full">
                          {edu.cgpa}
                        </span>
                      </div>
                    )}
                    
                    <p className="mt-4 text-gray-600 dark:text-gray-300">
                      {edu.description}
                    </p>
                    
                    <div className="mt-6">
                      <h5 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                        Relevant Coursework:
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {edu.courses.map((course, index) => (
                          <span 
                            key={index}
                            className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
