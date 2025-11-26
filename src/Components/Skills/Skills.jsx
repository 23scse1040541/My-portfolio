import { motion } from 'framer-motion';
import { FiCode, FiLayers, FiCpu, FiDatabase, FiGitBranch, FiTool } from 'react-icons/fi';

const Skills = ({ setActiveSection }) => {
  const skills = [
    {
      category: 'Frontend',
      icon: <FiCode className="w-6 h-6 text-primary" />,
      items: [
        { name: 'HTML5', level: 90 },
        { name: 'CSS3', level: 85 },
        { name: 'JavaScript (ES6+)', level: 85 },
        { name: 'React.js', level: 80 },
        { name: 'Redux Toolkit', level: 75 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'Bootstrap', level: 80 },
      ],
    },
    {
      category: 'Backend',
      icon: <FiCpu className="w-6 h-6 text-primary" />,
      items: [
        { name: 'Node.js', level: 75 },
        { name: 'Express.js', level: 70 },
        { name: 'RESTful APIs', level: 80 },
        { name: 'MongoDB', level: 70 },
        { name: 'SQL', level: 65 },
      ],
    },
    {
      category: 'Tools & Others',
      icon: <FiTool className="w-6 h-6 text-primary" />,
      items: [
        { name: 'Git & GitHub', level: 85 },
        { name: 'VS Code', level: 90 },
        { name: 'NPM/Yarn', level: 80 },
        { name: 'Vite', level: 75 },
        { name: 'Responsive Design', level: 85 },
        { name: 'Chrome DevTools', level: 80 },
      ],
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
      id="skills" 
      className="section bg-gray-50 dark:bg-gray-900/50"
      onViewportEnter={() => setActiveSection('skills')}
    >
      <div className="container">
        <motion.h2 
          className="section-title text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My Skills
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div 
              key={index} 
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              variants={item}
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold ml-3 text-gray-800 dark:text-white">
                  {skill.category}
                </h3>
              </div>
              
              <div className="space-y-4 mt-4">
                {skill.items.map((item, i) => (
                  <div key={i} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium text-gray-700 dark:text-gray-300">{item.name}</span>
                      <span className="text-gray-500">{item.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                      <div 
                        className="bg-primary h-2 rounded-full" 
                        style={{ width: `${item.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Additional Skills */}
        <motion.div 
          className="mt-16 bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center mb-6">
            <div className="p-2 bg-primary/10 rounded-lg">
              <FiLayers className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold ml-3 text-gray-800 dark:text-white">
              Additional Skills
            </h3>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {[
              'Problem Solving', 'Responsive Design', 'UI/UX Principles',
              'Cross-browser Compatibility', 'Performance Optimization',
              'Version Control', 'Agile/Scrum', 'Team Collaboration',
              'Debugging', 'Code Review', 'Technical Documentation'
            ].map((skill, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-sm font-medium text-gray-700 dark:text-gray-300 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
