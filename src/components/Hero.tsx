import React from 'react';
import { motion } from 'framer-motion';
import { typography } from '../styles/typography';

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#1A1A1A]" />
        <div className="absolute inset-0 bg-[url('/noise1.png')] opacity-30 mix-blend-overlay" />
      </div>
      
      <motion.div 
        className="container mx-auto px-4 sm:px-6 text-center relative z-10 max-w-[1920px] py-20 sm:py-32"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="flex flex-col items-center">
          <motion.h1 
            className={`${typography.black} leading-none mb-4`}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            ЗВУК
          </motion.h1>
          
          <motion.p 
            className={`${typography.medium} text-gray-400 max-w-[500px] mx-auto`}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            который мы делали для себя, чтобы затем он стал вашим!
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};