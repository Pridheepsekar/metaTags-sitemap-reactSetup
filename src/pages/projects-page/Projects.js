import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

function Projects() {
  const projects = [
    { id: 1, title: 'Project 1', description: 'Description of Project 1', link: '#' },
    { id: 2, title: 'Project 2', description: 'Description of Project 2', link: '#' },
    { id: 3, title: 'Project 3', description: 'Description of Project 3', link: '#' },
  ];

  return (
    <motion.section
      className="projects"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2>My Projects</h2>
      <div className="projects-list">
        {projects.map(project => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: project.id * 0.3, duration: 0.7 }}
            className="project-card"
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link}>View Project</a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Projects;
