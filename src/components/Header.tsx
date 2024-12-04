import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { typography } from '../styles/typography';

const menuItems = [
  { label: 'Проекты', href: '#portfolio' },
  { label: 'Команда', href: '#team' },
  { label: 'Услуги', href: '#services' },
  { label: 'Контакты', href: '#contact' }
];

export const Header = () => {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed w-full top-0 z-50 bg-black/80 backdrop-blur-sm"
    >
      <div className="container mx-auto px-4 sm:px-6 py-4 max-w-[1920px]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a 
              href="#"
              className="text-white text-4xl font-bold"
            >
              V4U
            </a>
            <div className="flex flex-col justify-center leading-tight">
              <span className="text-white text-sm font-donpoligrafbum">ЗВУКОВАЯ</span>
              <span className="text-white text-sm font-donpoligrafbum">ЛАБОРАТОРИЯ</span>
            </div>
          </div>
          
          <nav className="hidden lg:flex items-center gap-12">
            {menuItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                className={`${typography.medium} text-white hover:text-gray-200 transition-colors`}
                whileHover={{ scale: 1.05 }}
              >
                {item.label}
              </motion.a>
            ))}
          </nav>
        </div>
      </div>
    </motion.header>
  );
};