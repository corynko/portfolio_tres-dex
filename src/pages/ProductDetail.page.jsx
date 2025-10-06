import { Helmet } from '@dr.pogodin/react-helmet';
import { ProjectDetail } from '../components/Projects/ProductDetail';
import { ProjectCardArray } from '../components/Projects/ProjectCardArray';

export function ProductDetailPage() {
  const projectCardArray = ProjectCardArray;
  const slug = projectCardArray.slug;
  const url = `https://progpedals.com/products/${slug}`;
  return (
    <>
      <Helmet>
        <title>{ProjectCardArray.slug} | Progressive Pedals</title>
        <meta name="description" content={ProjectCardArray.description} />
        <meta
          name="keywords"
          content="fuzz pedal, custom guitar pedals, about, boutique stompboxes"
        />
        <meta property="og:title" content={ProjectCardArray.title} />
        <meta property="og:description" content="Pedal Details | Progressive Pedals" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta name="twitter:title" content={ProjectCardArray.title} />
        <meta name="twitter:description" content={ProjectCardArray.description} />
      </Helmet>
      <ProductDetail />
    </>
  );
}
