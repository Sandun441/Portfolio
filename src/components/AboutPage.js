import React from 'react';
import {
  FaReact, FaNodeJs, FaJava, FaHtml5, FaCss3, FaPhp, FaGitAlt,
  FaWhatsapp, FaLinkedin, FaGithub, FaTwitter, FaVuejs, FaBootstrap, FaFigma
} from 'react-icons/fa';
import {
  SiJavascript, SiPython, SiCplusplus, SiC, SiMysql, SiTailwindcss, SiExpress,
  SiAdobephotoshop, SiIntellijidea, SiAndroidstudio, SiVisualstudiocode,
  SiPostman, SiMongodb, SiFirebase
} from 'react-icons/si';
import { motion } from 'framer-motion';

const CV = '/cv.png';

const AboutPage = () => {
  const languages = [
    { name: "Python", icon: <SiPython /> },
    { name: "Java", icon: <FaJava /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "SQL", icon: <SiMysql /> },
    { name: "C", icon: <SiC /> },
    { name: "C++", icon: <SiCplusplus /> },
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "PHP", icon: <FaPhp /> },
    { name: "CSS", icon: <FaCss3 /> },
  ];

  const frameworks = [
    { name: "React", icon: <FaReact /> },
    { name: "React Native", icon: <FaReact /> },
    { name: "Vue.js", icon: <FaVuejs /> },
    { name: "Tailwind", icon: <SiTailwindcss /> },
    { name: "Bootstrap", icon: <FaBootstrap /> },
    { name: "Express.js", icon: <SiExpress /> },
  ];

  const tools = [
    { name: "Git", icon: <FaGitAlt /> },
    { name: "Figma", icon: <FaFigma /> },
    { name: "Photoshop", icon: <SiAdobephotoshop /> },
    { name: "IntelliJ IDEA", icon: <SiIntellijidea /> },
    { name: "Android Studio", icon: <SiAndroidstudio /> },
    { name: "VS Code", icon: <SiVisualstudiocode /> },
    { name: "Postman", icon: <SiPostman /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Firebase", icon: <SiFirebase /> },
    { name: "Node.js", icon: <FaNodeJs /> },
  ];

  const renderSkills = (title, skillsArray) => (
    <div className="mb-8">
      <h3 className="text-2xl font-semibold text-white mb-4">{title}</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {skillsArray.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.1,
              type: "spring",
              stiffness: 100,
            }}
            whileHover={{
              scale: 1.05,
              backgroundColor: "#3b82f6",
              boxShadow: "0px 4px 20px rgba(59, 130, 246, 0.5)",
              transition: { duration: 0.3 }
            }}
            className="bg-gray-800 p-3 rounded-lg text-center cursor-pointer flex items-center justify-center space-x-2"
          >
            <span className="text-xl">{skill.icon}</span>
            <span>{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white p-8">
      {/* Header Section */}
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
      <div className="grid grid-cols-1 gap-12 max-w-7xl mx-auto">
        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-8"
        >
          <h2 className="text-3xl font-bold text-blue-500">Software Engineer | Full-Stack Developer</h2>
          <p className="text-lg text-gray-300">
            I have skills as a full stack developer. I have programming knowledge about the
            languages that I mentioned below, and I have the ability to quickly learn new and
            emerging technologies. Especially, I am good at finding innovative solutions to
            complex problems. I can work with any type of partners or group. I also use AI
            tools where they make sense, mainly to speed things up. But I do not depend on
            them entirely. My goal is to contribute to cutting-edge projects that make a positive
            impact on society through technology.
          </p>

          {/* Skills */}
          <div className="mt-8 ">
            <h2 className="text-3xl font-bold text-blue-500 mb-6">Technical Skills</h2>
            {renderSkills("Languages", languages)}
            {renderSkills("Frameworks", frameworks)}
            {renderSkills("Tools", tools)}
          </div>
          
          <p className="text-2xl font-bold text-gray-300">
            Explore my CV to learn more about my education, skills, and project experience as a full-stack software engineer.
          </p>
          {/* CV Section */}
         
          <div className="mt-12">
          <h2 className="text-3xl font-bold text-blue-500 mb-6 text-center">My CV</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative w-full md:w-[400px] lg:w-[450px] rounded-xl overflow-hidden shadow-lg hover:shadow-blue-500/50 transition-shadow duration-300"
          >
            <a
              href="https://drive.google.com/file/d/1DsUkFU_8zacu9eF7-1-HmSvJNaRCIoLI/view"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
          <img
              src={CV}
              alt="CV Preview"
              className="w-full h-[520px] object-cover transition-transform duration-300 hover:scale-105"
          />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 text-white text-lg font-semibold opacity-0 hover:opacity-100 transition-opacity duration-300">
          Click to View Full CV
        </div>
      </a>
    </motion.div>
  </div>
</div>
         
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
