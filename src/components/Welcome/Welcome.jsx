import { useEffect, useState } from 'react';
import cx from 'clsx'; // for conditional classNames
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Text, Title, useMantineColorScheme } from '@mantine/core';
import { useBackground } from '../../contexts/backgroundContext';
import { useDailyBackground } from '../../contexts/dailyBackgroundContext';
import { usePrimaryColor } from '../../theme/usePrimaryColor';
import classes from './Welcome.module.css';

export function Welcome() {
  const { setBackgrounds } = useBackground();
  const { light: lightBg, dark: darkBg } = useDailyBackground();

  useEffect(() => {
    setBackgrounds({
      light: lightBg,
      dark: darkBg,
    });
  }, [setBackgrounds, lightBg, darkBg]);

  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';
  const navColor = usePrimaryColor(9, 3);

  const buttonArray = [
    { label: 'who i am', link: 'about' },
    { label: 'what i do', link: 'projects' },
    { label: 'contact me', link: 'contact' },
  ];

  return (
    <>
      <div className={classes.content}>
        <div className={classes.headline}>
          <Text className={classes.title} variant="gradient" component="span">
            ethan
          </Text>

          <Text className={classes.title2} component="span">
            kotel
          </Text>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: 'easeInOut', staggerChildren: 0.3 }}
          className={cx(classes.navButtons, { [classes.dark]: isDark })}
        >
          {buttonArray.map((i) => (
            <Link
              key={i.label}
              to={`/${i.link}`}
              style={{ textDecoration: 'none' }}
              onMouseDown={(e) => {
                e.preventDefault();
                e.currentTarget.blur();
              }}
              className={cx(classes.navButton, 'hvr-glow', classes.hvr_underline_from_center, {
                [classes.dark]: isDark,
              })}
            >
              {i.label}
            </Link>
          ))}
        </motion.div>
        <div className={classes.slogan}>
          <Title c={navColor}>denver-based digital professional</Title>
        </div>
      </div>
    </>
  );
}
