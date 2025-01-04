import { motion } from 'framer-motion';
import { Code2, Database, Layout } from 'lucide-react';
import { SkillCard } from './skills/SkillCard';

const skills = [
  {
    category: 'Frontend',
    icon: Layout,
    items: ['HTML/CSS', 'React', 'Tailwind CSS']
  },
  {
    category: 'Backend',
    icon: Database,
    items: ['MySQL', 'PostgreSQL']
  },
  {
    category: 'Tools',
    icon: Code2,
    items: ['Git', 'VS Code', 'Figma']
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-20 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Skills & Technologies
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}