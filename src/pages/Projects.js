import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

function Projects() {
  const projects = [
    { title: 'GiftBox Store', description: 'Online customizable gift store' },
    { title: 'Social Media App', description: 'A platform for university students' },
  ];

  return (
    <motion.div
      className="projects"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <h2>My Projects</h2>
      {projects.map((project, i) => (
        <motion.div
          key={i}
          className="project-card"
          variants={item}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default Projects;
