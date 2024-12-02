import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

function About() {
  return (
    <motion.section
      className="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2>About Me</h2>
      <p>I am a passionate developer with experience in web technologies like React, Node.js, and more.</p>
    </motion.section>
  );
}

export default About;
