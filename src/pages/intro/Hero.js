import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

function Hero() {
  return (
    <motion.section
      className="hero"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1>Welcome to My Portfolio</h1>
      <p>I'm a Full-Stack Developer</p>
      <a href="#projects" className="cta-button">View Projects</a>
    </motion.section>
  );
}

export default Hero;
