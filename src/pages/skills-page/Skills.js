import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

function Skills() {
  return (
    <motion.section
      className="skills"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2>My Skills</h2>
      <div className="skills-list">
        <motion.div className="skill-item" whileHover={{ scale: 1.1 }}>
          <span>React</span>
        </motion.div>
        <motion.div className="skill-item" whileHover={{ scale: 1.1 }}>
          <span>Node.js</span>
        </motion.div>
        <motion.div className="skill-item" whileHover={{ scale: 1.1 }}>
          <span>JavaScript</span>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Skills;
