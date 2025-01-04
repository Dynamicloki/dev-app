import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface SkillCardProps {
  category: string;
  icon: LucideIcon;
  items: string[];
  index: number;
}

export function SkillCard({ category, icon: Icon, items, index }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-gray-50 p-6 rounded-lg shadow-md"
    >
      <div className="flex items-center gap-3 mb-4">
        <Icon className="w-6 h-6 text-blue-500" />
        <h3 className="text-xl font-semibold">{category}</h3>
      </div>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="text-gray-600">{item}</li>
        ))}
      </ul>
    </motion.div>
  );
}