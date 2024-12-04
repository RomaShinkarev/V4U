import { ServiceType } from '../types';
import { Mic2, WaveformIcon, Scissors, Radio, Music, Sliders, Headphones } from 'lucide-react';
import React from 'react';

export const services: ServiceType[] = [
  {
    icon: React.createElement(Mic2, { size: 48 }),
    title: "Звук на площадке",
    description: "Реализуем запись звука ваших проектов и берём организационные приготовления на себя."
  },
  {
    icon: React.createElement(Music, { size: 48 }),
    title: "Саунд-дизайн",
    description: "Внедряем аудиальную атмосферу ваших проектов с нуля, конструируя звуки всех визуальных элементов в кадре."
  },
  {
    icon: React.createElement(Scissors, { size: 48 }),
    title: "Клин-ап",
    description: "Очищаем исходники для дальнейшей работы с ними."
  },
  {
    icon: React.createElement(Radio, { size: 48 }),
    title: "Аудиобрендинг",
    description: "Создаём узнаваемую аудио-айдентику для продуктов, личностей, шоу."
  },
  {
    icon: React.createElement(Music, { size: 48 }),
    title: "Музыка",
    description: "Продюсируем артистов, пишем музыкальное сопровождение под задачи любой сложности."
  },
  {
    icon: React.createElement(Sliders, { size: 48 }),
    title: "Сведение",
    description: "Анализируем звуковое пространство внутри композиции, акцентируем внимание на самые важные элементы и задаём фундаментальное звучание трека."
  },
  {
    icon: React.createElement(Headphones, { size: 48 }),
    title: "Мастеринг",
    description: "Занимаемся финализацией аудиоконтента и доводим его до стандартов индустриального качества."
  }
];