import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import NavigationButton from './components/NavigationButton';
import AboutPage from './components/AboutPage';
import ProjectsPage from './components/Projects';
import CertificatesPage from './components/CertificatesPage'; 

const profileBg = process.env.PUBLIC_URL + '/profile-bg.png';

function App() {
  return (
    <Router>
      <div className="relative h-screen bg-black overflow-auto">
        <div className="relative z-10 w-full h-full">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/certificates" element={<CertificatesPage />} />
          </Routes>
        </div>
        <NavigationButton />
      </div>
    </Router>
  );
}
function HomePage() {
  const createBubbles = (count) => {
    return [...Array(count)].map((_, index) => {
      const size = Math.random() * 20 + 10; 
      return (
        <motion.div
          key={index}
          className="absolute bg-blue-500 rounded-full" 
          style={{
            width: `${size}px`, 
            height: `${size}px`, 
            top: `${Math.random() * 100}vh`, 
            left: `${Math.random() * 100}vw`, 
            opacity: Math.random(), 
          }}
          animate={{
            y: [0, -30, 0], 
            transition: {
              duration: Math.random() * 2 + 2, 
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        />
      );
    });
  };

  return (
    <div className="relative h-full w-full overflow-hidden">
        {createBubbles(20)}

<motion.div 
  className="absolute left-0 top-0 w-2/5 h-full bg-cover bg-no-repeat bg-left"
  style={{ backgroundImage: `url(${profileBg})` }} 
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.5 }}
/>
<motion.div
  className="absolute right-44 top-0 w-3/5 h-full flex flex-col items-end justify-start pt-20 pr-20"
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.5, delay: 0.2 }}
>
<motion.h1 
  className="text-5xl font-bold text-white mb-4 text-right"
  initial={{ y: -20, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ delay: 0.3 }}
>
  I am Sandun Liyanage
</motion.h1>
<motion.p 
  className="text-2xl text-gray-300 mb-8 text-right"
  initial={{ y: 20, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ delay: 0.4 }}
>
   Software Engineer | Web Developer | Mobile Developer
  </motion.p>
</motion.div>
</div>

  );
}

export default App;