import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ContactInfoProps {
  icon: LucideIcon;
  title: string;
  content: string;
  href?: string;
}

export function ContactInfo({ icon: Icon, title, content, href }: ContactInfoProps) {
  const Content = () => (
    <div className="text-center">
      <div className="inline-block p-3 bg-gray-800 rounded-full mb-4">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{content}</p>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {href ? (
        <a href={href} className="block hover:text-blue-400 transition-colors">
          <Content />
        </a>
      ) : (
        <Content />
      )}
    </motion.div>
  );
}