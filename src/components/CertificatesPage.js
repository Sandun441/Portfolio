import React from 'react';
import { motion } from 'framer-motion';

const certificates = [
  {
    title: "Certificate in Cyber Security",
    description: "I participated a cyber security bootcamp and I got this certificate",
    link: "https://example.com/certificate-web-development",
    image: "https://example.com/certificate-image1.png" // Replace with your actual image link
  },
  {
    title: "Certificate in Data Science",
    description: "Achieved proficiency in data science and analytics.",
    link: "https://example.com/certificate-data-science",
    image: "https://example.com/certificate-image2.png" // Replace with your actual image link
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
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-800 p-6 rounded-lg"
          >
            <img src={cert.image} alt={cert.title} className="w-full h-40 object-cover rounded-lg mb-4" />
            <h2 className="text-2xl font-bold text-blue-500">{cert.title}</h2>
            <p className="mt-2 text-gray-300">{cert.description}</p>
            <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline mt-4 inline-block">
              View Certificate
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CertificatesPage;