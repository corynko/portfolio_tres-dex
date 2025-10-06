import { useState } from 'react';
import { Github } from 'feather-icons-react';
import {
  ActionIcon,
  Anchor,
  Box,
  Burger,
  Container,
  Drawer,
  Flex,
  Text,
  Title,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { usePrimaryColor } from '../../theme/usePrimaryColor';
import { ColorSchemeToggle } from './ColorSchemeToggle';
import LogoDraw from './logoDraw';
import classes from './NavBar.module.css';

export function Navbar() {
  const theme = useMantineTheme();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';
  const [drawerOpened, { open, close }] = useDisclosure(false);
  const links = ['about', 'products', 'contact'];

  const navColor = usePrimaryColor(8, 1);

  const buttonArray = [
    { label: 'who i am', link: 'about' },
    { label: 'what i do', link: 'projects' },
    { label: 'contact me', link: 'contact' },
  ];

  return (
    <Container fluid className={classes.navbarContainer}>
      <div className={classes.navbarInner}>
        <Title order={2}>
          {/* <Image className={classes.logo} src={logo} /> */}

          <Anchor className={classes.navLink} c={navColor} href={`/`} size="md">
            <LogoDraw />
          </Anchor>
        </Title>

        {/* Desktop Links */}
        <div className={classes.desktopLinks}>
          {buttonArray.map((i) => {
            const [isHovered, setIsHovered] = useState(false);

            const linkColor = isHovered
              ? isDark
                ? theme.colors.transBlue[4]
                : theme.colors.transPink[2]
              : navColor;

            return (
              <Anchor
                key={i.label}
                href={`/${i.link}`}
                size="md"
                className={classes.navLink}
                style={{ color: linkColor, transition: 'all 0.3s ease-in-out' }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {i.label}
              </Anchor>
            );
          })}

          <ColorSchemeToggle
            navColor={navColor}
            isDark={isDark}
            toggleColorScheme={toggleColorScheme}
          />

          <Anchor target="_blank" href="https://github.com/corynko/portfolio_tres-dex/tree/main">
            <Github
              color={navColor}
              style={{ alignContent: 'center', justifyContent: 'center', paddingTop: '3px' }}
              viewBox="0 0 50 50"
              size="65"
            />
          </Anchor>
        </div>

        {/* Mobile Burger */}
        <Burger
          className={classes.mobileBurger}
          opened={drawerOpened}
          onClick={open}
          size="sm"
          aria-label="Toggle navigation"
        />
      </div>

      {/* Mobile Drawer */}
      <Drawer
        opened={drawerOpened}
        onClose={close}
        size="60%"
        title="Menu"
        position="bottom"
        offset={12}
        className={classes.mobileDrawer}
      >
        <Flex direction="column" gap="md">
          {buttonArray.map((i) => (
            <Anchor
              key={i.label}
              href={`/${i.link}`}
              size="md"
              className={classes.navLink}
              style={{ color: navColor, transition: 'all 0.3s ease-in-out' }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {i.label}
            </Anchor>
          ))}

          <ColorSchemeToggle
            navColor={navColor}
            isDark={isDark}
            toggleColorScheme={toggleColorScheme}
          />

          <Anchor target="_blank" href="https://github.com/corynko/portfolio_tres-dux">
            <Github
              color={navColor}
              style={{ alignContent: 'center', justifyContent: 'center', paddingTop: '3px' }}
              viewBox="0 0 50 50"
              size="65"
            />
          </Anchor>
        </Flex>
      </Drawer>
    </Container>
  );
}
