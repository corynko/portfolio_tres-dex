import { Helmet } from '@dr.pogodin/react-helmet';
import { useMantineTheme } from '@mantine/core';
import { Welcome } from '../components/Welcome/Welcome.jsx';

export function HomePage() {
  const theme = useMantineTheme();
  return (
    <>
      <Helmet>
        <title>Ethan Kotel</title>
        <meta name="description" content="The home of Ethan Kotel's online portfolio." />
        <meta
          name="keywords"
          content="ethan kotel, digital marketing, denver marketing, music, photography, development"
        />
        <meta property="og:title" content="Ethan Kotel" />
        <meta property="og:description" content="Get in touch for custom projects or questions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ethankotel.dev" />
        <meta name="twitter:title" content="EthanKotel.dev" />
        <meta
          name="twitter:description"
          content="Online home of Ethan Kotel, Digital Professional"
        />
      </Helmet>
      <Welcome theme={theme} />
    </>
  );
}
