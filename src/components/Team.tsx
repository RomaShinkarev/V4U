import React from 'react';
import { motion } from 'framer-motion';
import { typography, spacing } from '../styles/typography';

const teamMembers = [
  {
    name: "Анищенков Елисей",
    image: "/Елисей.png",
    description: "Основатель и координатор команды, композитор и саунд-дизайнер, директор по работе с клиентами."
  },
  {
    name: "Клунный Владислав",
    image: "/Влад.png",
    description: "Композитор, саунд-дизайнер, музыкальный продюсер."
  }
];

export const Team = () => {
  return (
    <section id="team" className={`${spacing.section} relative overflow-hidden`}>
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/noise1.png')] opacity-70 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[url('/noise2.png')] opacity-70 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[url('/noise3.png')] opacity-70 mix-blend-multiply" />
      </div>
      
      <div className="container mx-auto px-6 max-w-[1920px] relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`${typography.bold} text-white ${spacing.large} text-center`}
        >
          Команда
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative group"
            >
              <div className="aspect-[3/4] overflow-hidden rounded-lg relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                  <h3 className={`${typography.semibold} text-white mb-2 relative z-10`}>{member.name}</h3>
                  <p className={`${typography.medium} text-white/80 relative z-10`}>{member.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};