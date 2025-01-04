import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { SocialLink } from './shared/SocialLink';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm <span className="text-blue-400">Shaurya Pratap</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Full Stack Developer & UI/UX Enthusiast
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex justify-center gap-6"
        >
          <SocialLink href="#" icon={Github} />
          <SocialLink href="#" icon={Linkedin} />
          <SocialLink href="#" icon={Mail} />
        </motion.div>
      </div>
    </section>
  );
}