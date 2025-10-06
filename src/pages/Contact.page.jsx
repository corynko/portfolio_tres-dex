import { Helmet } from '@dr.pogodin/react-helmet';
import { useMantineTheme } from '@mantine/core';
import { Contact } from '../components/Contact/Contact';

export function ContactPage() {
  const theme = useMantineTheme();
  return (
    <>
      <Helmet>
        <title>Contact | Ethan Kotel</title>
        <meta name="description" content="Contact Me - Ethan Kotel" />
        <meta
          name="keywords"
          content="contact, contact me, ethan kotel, get in touch, form, submit"
        />
        <meta property="og:title" content="Contact | Ethan Kotel" />
        <meta property="og:description" content="Get in touch for custom projects or questions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ethankotel.dev/contact" />
        <meta name="twitter:title" content="Contact | Ethan Kotel" />
        <meta name="twitter:description" content="Ethan Kotel - Contact Me | Get In Touch" />
      </Helmet>
      <Contact theme={theme} />
    </>
  );
}
