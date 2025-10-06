import React, { useEffect } from 'react';
import cx from 'clsx';
import { motion } from 'motion/react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Anchor,
  Button,
  Card,
  Container,
  Image,
  Paper,
  Text,
  Title,
  useMantineColorScheme,
} from '@mantine/core';
import darkBg from '../../assets/png/EKP_F-E-15.jpg';
import lightBg from '../../assets/png/EKP_L-W-37.jpg';
import { useBackground } from '../../contexts/backgroundContext';
import { usePrimaryColor } from '../../theme/usePrimaryColor';
import { ProjectCardArray } from './ProjectCardArray';
import classes from './Projects.module.css';

export function Products() {
  const navColor = usePrimaryColor(9, 3);
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';
  const { setBackgrounds } = useBackground();
  const navigate = useNavigate();

  const headerVariants = {
    start: {
      opacity: 0,
    },
    finish: {
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.75,
        ease: 'easeInOut',
      },
    },
  };

  useEffect(() => {
    setBackgrounds({
      light: lightBg,
      dark: darkBg,
    });
  }, [setBackgrounds]);

  const cardVariants = {
    start: { opacity: 0, y: 20 },
    finish: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeInOut' },
    },
  };

  return (
    <div className={classes.content}>
      <motion.div variants={headerVariants} initial="start" animate="finish">
        <Title className={classes.titleLocation}>
          <div className={classes.projectTitleDiv}>
            <Text className={classes.smolTitle} component="span">
              selected
            </Text>
            <Text className={classes.title} component="span">
              projects
            </Text>
          </div>
        </Title>
      </motion.div>
      <Container className={classes.paperContainer}>
        {/* <Paper className={classes.comingSoon}>
          <Text c={navColor} className={classes.comingSoonH1}>
            first drop coming soon
          </Text>
          <Text c={navColor} className={classes.comingSoonH3}>
            stay tuned
          </Text>
        </Paper> */}
        {ProjectCardArray.map((project) => (
          <motion.div
            key={project.slug}
            variants={cardVariants}
            initial="start"
            animate="finish"
            whileHover={{ scale: 1.02 }}
          >
            <Card className={classes.projectCard} withBorder padding="md" shadow="md">
              <Card.Section>
                <Image src={project.image} alt={project.title} className={classes.projectCardImg} />
              </Card.Section>

              <div className={classes.projectCardContent}>
                <Title order={4} className={classes.paperHeadline} c={navColor}>
                  {project.title}
                </Title>
                <Text className={classes.paperText} c={navColor}>
                  {project.description}
                </Text>
                <Text className={classes.paperText} c={navColor}>
                  {project.price}
                </Text>
                <Link
                  target={project.target}
                  to={project.link}
                  className={cx(
                    classes.projectDownloadButton,
                    'hvr-glow',
                    classes.hvr_underline_from_center,
                    {
                      [classes.dark]: isDark,
                    }
                  )}
                  style={{ textDecoration: 'none', textAlign: 'center' }}
                  onMouseDown={(e) => {
                    e.preventDefault();
                    e.currentTarget.blur();
                  }}
                >
                  {project.buttonText}
                </Link>
                {project.secondButton && (
                  <Link
                    target={project.secondTarget}
                    to={project.secondLink}
                    className={cx(
                      classes.projectDownloadButton,
                      'hvr-glow',
                      classes.hvr_underline_from_center,
                      {
                        [classes.dark]: isDark,
                      }
                    )}
                    style={{ textDecoration: 'none', textAlign: 'center' }}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      e.currentTarget.blur();
                    }}
                  >
                    {project.secondButtonText}
                  </Link>
                )}
              </div>
            </Card>
          </motion.div>
        ))}
      </Container>
    </div>
  );
}
