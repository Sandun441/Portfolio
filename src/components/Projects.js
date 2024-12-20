import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "Travel Agency Website",
      description: "A responsive website for a travel agency that allows users to book trips and view travel packages.",
      link: "https://example.com/travel-agency",
    },
    {
      title: "Online Gift Store",
      description: "An e-commerce platform for buying and selling unique gifts with a user-friendly interface.",
      link: "https://example.com/online-gift-store",
    },
    {
      title: "Social Media Application",
      description: "A social media application that connects users and allows them to share updates and photos.",
      link: "https://example.com/social-media-app",
    },
    {
      title: "Recipe Finder App",
      description: "A mobile application that helps users find recipes based on ingredients they have at home.",
      link: "https://example.com/recipe-finder",
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio website to showcase projects and skills.",
      link: "https://example.com/portfolio-website",
    },
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
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-800 p-6 rounded-lg"
          >
            <h2 className="text-2xl font-bold text-blue-500">{project.title}</h2>
            <p className="mt-2 text-gray-300">{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline mt-4 inline-block">
              View Project
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;