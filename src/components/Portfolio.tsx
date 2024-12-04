import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { typography, spacing } from '../styles/typography';
import { projects } from '../data/projects';
import { ProjectModal } from './ProjectModal';

export const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <section id="portfolio" className={`${spacing.section} relative overflow-hidden`}>
      <div className="absolute inset-0 bg-black/50" />
      
      <div className="container mx-auto px-4 sm:px-6 max-w-[1920px] relative z-10">
        <motion.h2 
          className={`${typography.bold} text-center ${spacing.large}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[#7E7CC1]">
            Наши работы
          </span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedProject(index)}
            >
              <div className="aspect-video rounded-lg overflow-hidden">
                <div className="relative h-full">
                  <img 
                    src={project.thumbnail} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-white text-lg font-semibold">Смотреть проект</span>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-white/70 mb-4 text-sm sm:text-base">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedProject !== null && (
        <ProjectModal
          project={projects[selectedProject]}
          isOpen={selectedProject !== null}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}