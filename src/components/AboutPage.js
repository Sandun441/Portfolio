import React from 'react';
import { FaReact, FaNodeJs, FaJava, FaHtml5, FaCss3, FaPhp, FaGitAlt, FaWhatsapp, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { SiJavascript, SiPython, SiCplusplus, SiC, SiMysql } from 'react-icons/si';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; 

const CV = 'https://Sandun441.github.io/Portfolio/cv.png';

const AboutPage = () => {
  const skills = [
    { name: "React", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "Python", icon: <SiPython /> },
    { name: "Java", icon: <FaJava /> },
    { name: "SQL", icon: <SiMysql /> },
    { name: "C", icon: <SiC /> },
    { name: "C++", icon: <SiCplusplus /> },
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3 /> },
    { name: "PHP", icon: <FaPhp /> },
    { name: "Git", icon: <FaGitAlt /> },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-8">
      {/* Header Section with Animation */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-bold mb-4">About Me</h1>
        <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
      </motion.div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="w-full h-[500px] relative">
            <motion.a
              href="https://drive.google.com/file/d/1DsUkFU_8zacu9eF7-1-HmSvJNaRCIoLI/view" // Replace with your actual link
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }} // Scale up on hover
              whileTap={{ scale: 0.95 }} // Scale down on tap
              className="relative block" // Make the anchor block-level for positioning
            >
              <motion.img
                src={CV}
                alt="CV"
                className="w-full h-[530px] object-cover cursor-pointer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }} // Fade in animation
              />
              
              {/* Tooltip Overlay */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 text-white text-lg font-bold opacity-0 hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0 }}
                whileHover={{ opacity: 1 }} // Show on hover
              >
                Click to View CV
              </motion.div>
            </motion.a>
          </div>
        </motion.div>

        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} // Start slightly below
          animate={{ opacity: 1, y: 0 }} // Fade in and move to original position
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold text-blue-500">Software Engineer & Web Developer</h2>
          <p className="text-lg text-gray-300">
            I am Sandun Liyanage, a passionate second-year undergraduate 
            software engineer at the Open University of Sri Lanka. With 
            hands-on experience in web and mobile development, I enjoy building projects that solve real-world problems, such as developing a website for a travel agency and creating a unique online gift store platform. Committed to continuous learning, I use GitHub to showcase my work, and I leverage platforms like LinkedIn and Twitter for professional growth and networking.
          </p>
          
          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-semibold">Technical Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: 0.8 + index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "#3b82f6",
                    boxShadow: "0px 4px 20px rgba(59, 130, 246, 0.5)",
                    transition: { duration: 0.3 }
                  }} 
                  className="bg-gray-800 p-3 rounded-lg text-center transition-colors cursor-pointer flex items-center justify-center space-x-2"
                >
                  <span className="text-xl">{skill.icon}</span>
                  <span>{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Experience Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-16"
      >
        <h2 className="text-3xl font-bold text-blue-500">Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          {[
            {
              title: "Social Media Application & Website",
              period: "2024 - Present",
              description: "We created our own social media application and website with a new idea."
            },
            {
              title: "Travel Companions Finder",
              period: "2024 - Present",
              description: "Developed a mobile application for finding travel companions."
            }
          ].map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }} // Start from the left
              animate={{ opacity: 1, x: 0 }} // Slide in to the center
              transition={{ delay: 1.2 + index * 0.2 }}
              className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <h3 className="text-xl font-bold text-blue-500">{exp.title}</h3>
              <p className="text-gray-400">{exp.period}</p>
              <p className="mt-2 text-gray-300">{exp.description}</p>
            </motion.div>
          ))}
        </div>

        {/* See More Link */}
        <div className="mt-4 text-center">
          <Link to="/Projects" className="text-blue-500 hover:underline">
            See More...
          </Link>
        </div>
      </motion.div>

      {/* Contact CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }} // Start slightly below
        animate={{ opacity: 1, y: 0 }} // Fade in and move to original position
        transition={{ duration: 0.8, delay: 0.4 }}
        className="space-y-6 text-center mt-16"
      >
        <h2 className="text-3xl font-bold">Contact Me</h2>
        <p className="mt-4">Get in touch with me at: <strong>+94764378286</strong></p> {/* Your mobile number */}

        {/* Social Media Links */}
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://www.linkedin.com/in/sandun-bandara-1477212a7/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue- 400">
            <FaLinkedin size={30} />
          </a>
          <a href="https://github.com/Sandun441" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-400">
            <FaGithub size={30} />
          </a>
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
            <FaTwitter size={30} />
          </a>
          <a href="tel:+94764378286" className="text-green-500 hover:text-green-400">
            <FaWhatsapp size={30} />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutPage;