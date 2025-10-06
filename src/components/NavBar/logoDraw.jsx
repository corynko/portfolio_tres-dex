import { motion } from 'motion/react';
import { useMantineColorScheme } from '@mantine/core';
import classes from './NavBar.module.css';

const pathData = [
  {
    type: 'path',
    props: {
      d: 'm321.07 390.28h68.8v-55.93h-72.74v-19.17h95.58v176.98h-99.52v-19.17h76.68v-63.81h-68.8v-18.91z',
    },
  },
  {
    type: 'path',
    props: {
      d: 'M389.96,315.19h22.84v85.34h.79c4.73-6.83,9.45-13.13,13.92-18.91l54.09-66.43h28.36l-64.07,75.1,69.06,101.88h-27.05l-58.29-86.92-16.81,19.43v67.48h-22.84v-176.98Z',
    },
  },
  {
    type: 'rect',
    props: {
      transform: 'translate(403.99 967.34) rotate(225)',
      x: '136.09',
      y: '133.76',
      width: '532.49',
      height: '532.49',
    },
    keepTransparent: true,
  },
  {
    type: 'rect',
    props: {
      x: '510',
      y: '396',
      width: '205',
      height: '8',
    },
  },
  {
    type: 'rect',
    props: {
      x: '88',
      y: '396',
      width: '205',
      height: '8',
    },
  },
];

export default function LogoDraw() {
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';

  const strokeColorInitial = isDark ? '#777777' : '#333333';
  const fillColorInitial = isDark ? '#ffffff00' : '#00000000';
  const fillColorAfter = isDark ? '#ffffff' : '#000000';
  const strokeColorAfter = isDark ? '#333333' : '#777777';

  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const drawVariants = {
    initial: {
      pathLength: 0,
      strokeDasharray: 1,
      strokeDashoffset: 1,
      stroke: strokeColorInitial,
      fill: fillColorInitial,
    },
    animate: {
      pathLength: 1,
      strokeDashoffset: 0,
      stroke: strokeColorAfter,
      fill: fillColorAfter,
      transition: {
        duration: 1.25,
        ease: 'easeIn',
        fill: {
          delay: 1.25,
          duration: 0.75,
          ease: 'easeInOut',
        },
        stroke: {
          delay: 1.25,
          duration: 0.75,
          ease: 'easeInOut',
        },
      },
    },
  };

  const rectVariants = {
    initial: {
      opacity: 0,
      stroke: strokeColorInitial,
      fill: fillColorInitial,
    },
    animate: {
      opacity: 1,
      stroke: strokeColorAfter,
      fill: fillColorAfter,
      transition: {
        duration: 1.25,
        ease: 'easeIn',
        fill: {
          delay: 1.25,
          duration: 0.75,
          ease: 'easeInOut',
        },
        stroke: {
          delay: 1.25,
          duration: 0.75,
          ease: 'easeInOut',
        },
      },
    },
  };

  const transVariants = {
    initial: {
      opacity: 0,
      stroke: strokeColorAfter,
      fill: 'transparent',
    },
    animate: {
      opacity: 1,
      stroke: strokeColorInitial,
      fill: 'transparent',
      transition: {
        duration: 1.25,
        ease: 'easeIn',
        stroke: {
          delay: 1.25,
          duration: 0.75,
          ease: 'easeInOut',
        },
      },
    },
  };

  return (
    <motion.svg
      width="75px"
      height="75px"
      viewBox="0 0 800 800"
      xmlns="http://www.w3.org/2000/svg"
      className={classes.logo}
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      {pathData.map((el, i) => {
        if (el.type === 'circle') {
          return (
            <motion.circle
              key={i}
              {...el.props}
              className={classes.cls1}
              variants={drawVariants}
              initial="initial"
              animate="animate"
            />
          );
        } else if (el.type === 'rect') {
          return (
            <motion.rect
              key={i}
              {...el.props}
              className={classes.cls1}
              variants={el.keepTransparent ? transVariants : rectVariants}
              initial="initial"
              animate="animate"
            />
          );
        } else {
          return (
            <motion.path
              key={i}
              {...el.props}
              className={classes.cls1}
              variants={drawVariants}
              initial="initial"
              animate="animate"
            />
          );
        }
      })}
    </motion.svg>
  );
}
