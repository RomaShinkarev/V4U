import React from 'react';
import { motion } from 'framer-motion';
import { typography, spacing } from '../styles/typography';
import { Volume2 } from 'lucide-react';

export const SoundPower = () => {
  return (
    <section className={`${spacing.section} relative overflow-hidden`}>
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/noise3.png')] opacity-70 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#1D1D4D]/80 to-transparent" />
      </div>

      <div className="container mx-auto px-6 max-w-[1920px] relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <h2 className={`${typography.bold} text-secondary ${spacing.large} text-center`}>
            Сила звука
          </h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: <Volume2 className="w-12 h-12 text-secondary" />,
                title: "Качество",
                description: "Профессиональное оборудование и опытные специалисты"
              },
              {
                icon: <Volume2 className="w-12 h-12 text-secondary" />,
                title: "Креативность",
                description: "Уникальный подход к каждому проекту"
              },
              {
                icon: <Volume2 className="w-12 h-12 text-secondary" />,
                title: "Инновации",
                description: "Современные технологии и методы работы"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="flex justify-center mb-6">{item.icon}</div>
                <h3 className={`${typography.semibold} text-light ${spacing.medium}`}>
                  {item.title}
                </h3>
                <p className={`${typography.medium} text-secondary`}>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};