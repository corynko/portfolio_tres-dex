import astrodash from '../../assets/png/projects/astrodash.png';
import cWScrnShot from '../../assets/png/projects/CW_ScrnShot.png';
import ekDev from '../../assets/png/projects/EK_dev.png';
import evergroove from '../../assets/png/projects/evergroove.png';
import insight from '../../assets/png/projects/insight.png';
import oPaP from '../../assets/png/projects/opap.png';

export const ProjectCardArray = [
  {
    slug: 'Copywriting Samples',
    title: `Copywriting Samples`,
    description: (
      <>
        Samples from Ethan Kotel's Copywriting Portfolio, containing website examples, emails, and
        blog articles written for inbound and outbound marketing purposes.
      </>
    ),
    buttonText: 'Download',
    // price: 'pay what you want, minimum $120',
    image: cWScrnShot,
    link: 'https://u.pcloud.link/publink/show?code=XZ6D5n5ZwVLnVbCNT24wUxrMQHVx3ffTFsyX',
    target: '_blank',
  },
  {
    slug: 'This Site',
    title: `EthanKotel.dev`,
    description: (
      <>
        This site is open source! Coded by me using React and Mantine in JavaScript, HTML, and CSS,
        this site stands as an example of my eye for design and love of smooth user experiences.
      </>
    ),
    buttonText: 'GitHub',
    // price: 'pay what you want, minimum $120',
    image: ekDev,
    link: 'https://github.com/corynko/portfolio_tres-dux',
    target: '_blank',
  },
  {
    slug: 'Of Pens and Poems',
    title: `Of Pens and Poems (.com)`,
    description: (
      <>
        Still in development, oPaP is a site for reviews of fountain pens, inks, papers, and for
        sharing poetry. It is also an experiment in shoving as much functionality as possible into a
        front-end-only site.
      </>
    ),
    buttonText: 'Live Site',
    // price: 'pay what you want, minimum $120',
    image: oPaP,
    link: 'https://ofpensandpoems.com',
    target: '_blank',
    secondButton: true,
    secondLink: 'https://github.com/corynko/ofpoemsandpens',
    secondTarget: '_blank',
    secondButtonText: 'GitHub',
  },
  {
    slug: 'Evergroove',
    title: `Evergroove Studio`,
    description: (
      <>
        Evergroove's website was designed and written by me (with some content revisions since my
        time there). One of Colorado's pre-eminent recording studios.
      </>
    ),
    buttonText: 'Live Site',
    // price: 'pay what you want, minimum $120',
    image: evergroove,
    link: 'https://evergroove.com',
    target: '_blank',
  },
  {
    slug: 'InSight Consultation',
    title: `In Sight Consultation`,
    description: (
      <>
        Designed, built, and written by me, In Sight Consultation is a Denver-local provider of
        resources and education for parents to help navigate the challenges of raising gifted and
        neurodivergent children.
      </>
    ),
    buttonText: 'Live Site',
    // price: 'pay what you want, minimum $120',
    image: insight,
    link: 'https://insightconsultation.com/',
    target: '_blank',
  },

  {
    slug: 'astroDash',
    title: `astroDash (.space)`,
    description: (
      <>
        A data aggregator for planning astrophotography shoots using purpose-collected APIs.
        Currently on hold as more API's switch to high-base-price models. Built in React.
      </>
    ),
    buttonText: 'Live Site',
    // price: 'pay what you want, minimum $120',
    image: astrodash,
    link: 'https://astrodash.space/',
    target: '_blank',
    secondButton: true,
    secondLink: 'https://github.com/corynko/astrodash',
    secondTarget: '_blank',
    secondButtonText: 'GitHub',
  },
];
