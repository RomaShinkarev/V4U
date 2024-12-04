import React from 'react';
import { motion } from 'framer-motion';
import { typography, spacing } from '../styles/typography';
import { services } from '../data/services';

export const Services = () => {
  return (
    <section id="services" className={`${spacing.section} relative overflow-hidden`}>
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/noise1.png')] opacity-30 mix-blend-overlay" />
        <div className="absolute inset-0 bg-[url('/noise2.png')] opacity-20 mix-blend-overlay" />
        <div className="absolute inset-0 bg-[url('/noise3.png')] opacity-25 mix-blend-overlay" />
      </div>
      
      <div className="container mx-auto px-6 max-w-[1920px] relative z-10">
        <motion.h2
          className={`${typography.bold} text-white ${spacing.large} text-center`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Услуги
        </motion.h2>

        <div className="flex flex-col space-y-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div className="flex items-start gap-6 group">
                <div className="text-white group-hover:text-secondary transition-colors">
                  {service.icon}
                </div>
                <div>
                  <h3 className={`${typography.semibold} text-white mb-4`}>{service.title}</h3>
                  <p className={`${typography.medium} text-white/80`}>{service.description}</p>
                </div>
              </div>
              {index !== services.length - 1 && (
                <div className="absolute -bottom-6 left-0 right-0 h-px bg-white/10" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};