import React from 'react';
import { motion } from 'framer-motion';
import { typography } from '../styles/typography';

export const AboutUs = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-black">
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-70 mix-blend-multiply" />
      </div>
      
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className={`${typography.semibold} mb-8 text-white`}>
            Артисты, бренды, кино!
          </h2>
          <h3 className={`${typography.bold} text-white mb-6`}>
            Мы для вас!
          </h3>
          <div className="space-y-6">
            <p className="text-white text-lg leading-relaxed">
              V4U — аудио-продакшн полного цикла, нацеленный на разработку и создание аудио-контента любой сложности для личностей, кино и брендов.
            </p>
            <p className="text-white text-lg leading-relaxed">
              Саунд-дизайн и аудио айдентика ваших проектов в опытной звуковой лаборатории.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};