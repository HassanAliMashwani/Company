import { Variants } from 'framer-motion';

export const EASE_CUSTOM = [0.25, 0.1, 0.25, 1.0] as const;
export const EASE_SPRING = { type: 'spring', stiffness: 300, damping: 30 };

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: EASE_CUSTOM },
  },
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE_CUSTOM },
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

export const cardHover: Variants = {
  initial: { scale: 1, y: 0 },
  hover: {
    scale: 1.02,
    y: -4,
    transition: { duration: 0.3, ease: EASE_CUSTOM },
  },
  tap: { scale: 0.98 },
};

export const buttonHover: Variants = {
  initial: { scale: 1 },
  hover: { scale: 1.04 },
  tap: { scale: 0.96 },
};
