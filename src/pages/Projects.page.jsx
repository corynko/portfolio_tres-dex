import { Helmet } from '@dr.pogodin/react-helmet';
import { useMantineTheme } from '@mantine/core';
import { Projects } from '../components/Projects/Projects';

export function ProductsPage() {
  const theme = useMantineTheme();
  return (
    <>
      <Helmet>
        <title>Projects | Ethan Kotel</title>
        <meta name="description" content="Selected projects by Ethan Kotel" />
        <meta
          name="keywords"
          content="ethan kotel, projects, portfolio, samples, marketing, copywriting, website design"
        />
        <meta property="og:title" content="Products | Ethan Kotel" />
        <meta property="og:description" content="Selected projects by Ethan Kotel" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ethankotel.dev/projects" />
        <meta name="twitter:title" content="Products | Ethan Kotel" />
        <meta name="twitter:description" content="Selected projects by Ethan Kotel" />
      </Helmet>
      <Projects theme={theme} />
    </>
  );
}
