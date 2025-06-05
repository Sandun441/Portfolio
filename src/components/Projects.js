import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

const Projects = () => {
  const projects = [
    {
      title: "Social Media Application",
      description: "My first full-stack web application, built using the MERN stack.",
      plink: "https://open-social-m.vercel.app/",
      glink: "https://github.com/Sandun441/OpenSocialM",
    },
    // Add more projects here if needed
  ];

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-bold mb-4">My Projects</h1>
        <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="relative w-full md:w-[400px] lg:w-[450px] bg-gray-800 p-6 rounded-xl overflow-hidden shadow-md hover:shadow-blue-500/50 transition-shadow duration-300"
          >
            <h2 className="text-2xl font-bold text-blue-500">{project.title}</h2>
            <p className="mt-2 text-gray-300">{project.description}</p>
            <div className="flex gap-10 mt-4">
              <a
                href={project.plink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline flex items-center gap-2"
              >
                <FiExternalLink /> View Project
              </a>
              <a
                href={project.glink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline flex items-center gap-2"
              >
                <FaGithub /> View in GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
