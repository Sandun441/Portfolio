import { motion } from 'framer-motion';

function Contact() {
  return (
    <motion.div
      className="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <h2>Contact Me</h2>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Message..." required></textarea>
        <button type="submit">Send</button>
      </form>
    </motion.div>
  );
}

export default Contact;
