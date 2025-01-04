import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import { ContactInfo } from './contact/ContactInfo';

export function Contact() {
  return (
    <section id="contact" className="py-20 px-8 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-400">Let's work together on your next project</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <ContactInfo
            icon={Mail}
            title="Email"
            content="Godarshourya@gmail.com"
            href="mailto:godarshourya@gmail.com"
          />
          <ContactInfo
            icon={Phone}
            title="Phone"
            content="+91 823939-9092"
            href="tel:+918239399092"
          />
          <ContactInfo
            icon={MapPin}
            title="Location"
            content="Jaipur, Rajasthan, India"
          />
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 bg-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 bg-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="w-full p-3 bg-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <textarea
            placeholder="Message"
            rows={6}
            className="w-full p-3 bg-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3 px-6 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}