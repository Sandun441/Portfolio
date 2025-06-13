import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';

const certificates = [
  {
    title: "GeSSoMI-2024 Cybersecurity Bootcamp Certificate",
    description: "Completed a Cyber Security Bootcamp and earned a certificate in recognition of participation and achievement.",
    link: "https://drive.google.com/file/d/1jUJfNDyxuW9DAaJJu7pcrzWmPBmlQOO2/view?usp=sharing",
    image: "cyber.png" 
  },
  {
    title: "Nanasala Certificate Course in English",
    description: "Successfully completed the Nanasala Certificate Course in English, demonstrating proficiency in English language communication and comprehension.",
    link: "https://drive.google.com/file/d/1jzR0iLw2wz7GIclFBgGLDOfVTM2UTlGx/view?usp=sharing",
    image: "english.png" 
  },
    {
    title: "Introduction to Java",
    description: "Completed Introduction to JAVA course in Sololearn",
    link: "https://www.sololearn.com/certificates/CC-EQCLHE7E",
    image: "java.png" 
  },
    {
    title: "Introduction to Python",
    description: "Completed Introduction to Python course in Sololearn",
    link: "https://www.sololearn.com/certificates/CC-X8PNC0NV",
    image: "python.png" 
  },
    {
    title: "Introduction to SQL",
    description: "Completed Introduction to SQL course in Sololearn",
    link: "https://www.sololearn.com/certificates/CC-OPWPYDQV",
    image: "sql.png" 
  },
    {
    title: "Introduction to JavaScript",
    description: "Completed Introduction to JavaScript course in Sololearn",
    link: "https://www.sololearn.com/certificates/CC-RZQT18KX",
    image: "js.png" 
  },
   {
    title: "API Test Automation with Postman",
    description: "Completed I Test Automation with Postman Test in Automation University",
    link: "https://testautomationu.applitools.com/certificate/?id=0d4516fc",
    image: "api.png" 
  },
    {
    title: "Codeless Test Automation with Selenium IDE",
    description: "Completed Codeless Test Automation with Selenium IDE in Test Automation University",
    link: "https://testautomationu.applitools.com/certificate/?id=52f3ed20",
    image: "test.png" 
  },
    {
    title: "Web Element Locator Strategies",
    description: "Completed Codeless Test Automation with Selenium IDE in Test Automation University",
    link: "https://testautomationu.applitools.com/certificate/?id=30673ca9",
    image: "web.png" 
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
