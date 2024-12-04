export const typography = {
  // Text sizes with corresponding weights
  black: 'font-montserrat font-black text-4xl sm:text-6xl md:text-[64px] lg:text-[128px]', // weight 900
  bold: 'font-montserrat font-bold text-2xl sm:text-3xl md:text-[32px] lg:text-[48px]',    // weight 700
  semibold: 'font-montserrat font-semibold text-xl sm:text-2xl md:text-[24px] lg:text-[32px]', // weight 600
  medium: 'font-montserrat font-medium text-base sm:text-lg md:text-[18px] lg:text-[24px]'  // weight 500
} as const;

export const spacing = {
  section: 'py-16 md:py-24', // Responsive padding
  large: 'mb-16 md:mb-24',   // Responsive margin
  medium: 'mb-8 md:mb-12'    // Responsive margin
} as const;