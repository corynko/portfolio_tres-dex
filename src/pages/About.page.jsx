import { Helmet } from '@dr.pogodin/react-helmet';
import { useMantineTheme } from '@mantine/core';
import { About } from '../components/About/About';

export function AboutPage() {
  const theme = useMantineTheme();
  return (
    <>
      <Helmet>
        <title>Contact | Progressive Pedals</title>
        <meta name="description" content="Ethan Kotel - About Me" />
        <meta name="keywords" content="ethan kotel, about me, about, information, bio" />
        <meta property="og:title" content="About | Ethan Kotel" />
        <meta property="og:description" content="Ethan Kotel - About Me" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ethankotel.dev/about" />
        <meta name="twitter:title" content="About | Ethan Kotel" />
        <meta name="twitter:description" content="Ethan Kotel - About Me" />
      </Helmet>
      <About theme={theme} />
    </>
  );
}
