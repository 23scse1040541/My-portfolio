import { motion } from 'framer-motion';
import { FiBriefcase } from 'react-icons/fi';

const Experience = ({ setActiveSection }) => {
  const experiences = [
    {
      id: 1,
      role: 'Full-Stack Developer Intern',
      company: 'EduSkills Foundation',
      duration: 'Jun 2024 – Jul 2024',
      location: 'New Delhi, India',
      responsibilities: [
        'Built and optimized responsive UI components using React and Tailwind CSS',
        'Debugged and refactored front-end modules to improve performance and maintainability',
        'Collaborated with the team to implement new features and improve user experience',
        'Participated in code reviews and contributed to team knowledge sharing',
        'Worked with RESTful APIs to fetch and display dynamic content'
      ],
      skills: ['React', 'JavaScript', 'Tailwind CSS', 'REST APIs', 'Git']
    },
    // Add more experiences as needed
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
      id="experience" 
      className="section bg-gray-50 dark:bg-gray-900/50"
      onViewportEnter={() => setActiveSection('experience')}
    >
      <div className="container">
        <motion.h2 
          className="section-title text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Work Experience
        </motion.h2>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experiences.map((exp) => (
            <motion.div 
              key={exp.id}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              variants={item}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center">
                  <div className="p-2 bg-primary/10 rounded-full mr-3">
                    <FiBriefcase className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white">{exp.role}</h3>
                    <p className="text-sm text-primary font-semibold">{exp.company}</p>
                  </div>
                </div>
                <div className="text-right text-xs text-gray-500 dark:text-gray-400">
                  <p>{exp.duration}</p>
                  <p>{exp.location}</p>
                </div>
              </div>

              <ul className="space-y-2 mb-4">
                {exp.responsibilities.map((responsibility, i) => (
                  <li key={i} className="flex">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-gray-600 dark:text-gray-400 text-sm">
                      {responsibility}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="pt-3 border-t border-gray-100 dark:border-gray-700">
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
