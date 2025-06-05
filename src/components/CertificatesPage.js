import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';

const certificates = [
  {
    title: "GeSSoMI-2024 Cybersecurity Bootcamp Certificate",
    description: "I participated in a cyber security bootcamp and received this certificate.",
    link: "https://drive.google.com/file/d/1jUJfNDyxuW9DAaJJu7pcrzWmPBmlQOO2/view?usp=sharing",
    image: "cyber.png" // Replace with real image
  },
  {
    title: "Nanasala Certificate Course in English",
    description: "Achieved proficiency in data science and analytics.",
    link: "https://drive.google.com/file/d/1jzR0iLw2wz7GIclFBgGLDOfVTM2UTlGx/view?usp=sharing",
    image: "english.png" // Replace with real image
  },
  // Add more certificates as needed
];

const CertificatesPage = () => {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-bold mb-4">My Certificates</h1>
        <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative w-full md:w-[400px] lg:w-[450px] bg-gray-800 p-6 rounded-xl overflow-hidden shadow-md hover:shadow-blue-500/50 transition-shadow duration-300"
          >
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold text-blue-500">{cert.title}</h2>
            <p className="mt-2 text-gray-300">{cert.description}</p>
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-blue-400 hover:underline"
            >
              <FiExternalLink /> View Certificate
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CertificatesPage;
