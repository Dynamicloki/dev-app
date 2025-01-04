import { motion } from 'framer-motion';
import { ProjectCard } from './projects/ProjectCard';

const projects = [
  {
    title: 'Project One',
    description: 'A full-stack web application built with React and Node.js',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    github: '#',
    live: '#'
  },
  {
    title: 'Project Two',
    description: 'Mobile-first e-commerce platform with real-time updates',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
    github: '#',
    live: '#'
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-8 bg-gray-50">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}