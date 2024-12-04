import React from 'react';
import { motion } from 'framer-motion';
import { typography } from '../styles/typography';

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className={`${typography.bold} text-black mb-16 text-center`}>
            Связь
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-12">
              <div>
                <h3 className={`${typography.semibold} text-black mb-6`}>
                  Мы на связи с вами!
                </h3>
                <div className="space-y-4">
                  <a 
                    href="https://t.me/ministorEly" 
                    className={`block ${typography.semibold} text-black hover:text-gray-600 transition-colors underline`}
                  >
                    Телеграмм
                  </a>
                  <a 
                    href="https://vk.com/ifeelate" 
                    className={`block ${typography.semibold} text-black hover:text-gray-600 transition-colors underline`}
                  >
                    ВК
                  </a>
                  <a 
                    href="mailto:eliseypai@yandex.ru" 
                    className={`block ${typography.semibold} text-black hover:text-gray-600 transition-colors underline`}
                  >
                    Ящик
                  </a>
                </div>
              </div>

              <div className="space-y-4">
                <p className={`${typography.semibold} text-black`}>8 (926)-875-60-34 | Елисей</p>
                <p className="text-gray-600 text-sm md:text-base">
                  Наша команда уделяет большое внимание креативной задачи проекта и его направленности. Мы считаем, что звук — это не только ключ к выходу на новый уровень качества контента, но и полноценная творческая единица, которая наполняет проект новыми красками и смыслами. Мы занимаемся аудио для того, чтобы у вас оставалось больше времени на создание визуала, поэтому Мы не только генерируем,но и курируем аудио задачу, расставляем дедлайны и ведём аудиопроект за вас.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <img 
                src="/logo.png" 
                alt="V4U Logo" 
                className="w-64 h-64 md:w-128 lg:w-256 md:h-128 lg:h-256 object-contain mb-4" 
              />
              <span className={`${typography.black} text-[#020041] text-3xl`}>V4U</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};