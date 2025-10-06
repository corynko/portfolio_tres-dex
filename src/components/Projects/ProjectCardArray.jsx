import acabImgLight from '../../assets/pedals/1312/1312_black_wordless.jpg';
import acabImgDark from '../../assets/pedals/1312/1312_red_wordless.jpg';
import fRWDark from '../../assets/pedals/fuckRW/fuckRW_black.jpg';
import fRWLight from '../../assets/pedals/fuckRW/fuckRW_white.jpg';
import harveyImgDark from '../../assets/pedals/harvey/harveyBlack@3x.png';
import harveyImgLight from '../../assets/pedals/harvey/harveyWhite@3x.png';
import cWScrnShot from '../../assets/png/projects/CW_ScrnShot.png';
import classes from './ProductDetail.module.css';

export const ProjectCardArray = [
  {
    slug: 'Copywriting Portfolio',
    title: `Copywriting Potfolio`,
    description: (
      <>
        Ethan Kotel's Copywriting Portfolio, containing website examples, emails, and blog articles
        written for inbound and outbound marketing purposes.
      </>
    ),
    // price: 'pay what you want, minimum $120',
    imageLight: cWScrnShot,
    imageDark: cWScrnShot,
    longText: (
      <>
        <span style={{ fontFamily: 'Gotham Medium' }}>f.RW</span> is a fuzz modeled on one of the
        most famous boxes of all time, with several mods to capture one of its most famous user's
        tonal palette. Four gain stages powered by USA-made silicon transistors join two,
        symmetrical, germanium diode clipping stages for plenty of gain tempered with a sweet,
        singing high end. The added "(breathe)" knob interacts heavily with the tone knob to allow
        granular control over the response of both the high and low-mids, letting you dial in
        anything from the rolled off compression of{' '}
        <span style={{ fontFamily: 'Gotham Light Italic' }}>Echoes</span> to the grit-forward
        harshness of <span style={{ fontFamily: 'Gotham Light Italic' }}>Dogs</span>. f.RW is
        available for Pay What You Want, minimum $120 -{' '}
        <span style={{ fontFamily: 'Gotham Medium' }}>
          every dollar above the minimum will be donated to the{' '}
          <a
            className={classes.detailA}
            style={{ fontFamily: 'Gotham Black' }}
            target="_blank"
            href="https://jwa.org/"
          >
            Jewish Women's Archive
          </a>
          , dedicated to documenting and sharing the stories of Jewish women's contributions to
          progressive causes throughout history.
        </span>{' '}
        f(ck).RW - just because your bassist is a cunt, doesn't mean you have to be.
      </>
    ),
    li1: (
      <>
        <div className={classes.detail1312Li}>
          point-to-point hand soldered, hand assembled, and hand painted
        </div>
      </>
    ),
    li2: (
      <>
        <div className={classes.detail1312Li}>
          all pedals are tested for durability and expected functionality
        </div>
      </>
    ),
    li3: (
      <>
        <div className={classes.detail1312Li}>
          built with high quality components including tested and <br />
          matched transistors, oversized capacitors, and metal film resistors
        </div>
      </>
    ),
    li4: (
      <>
        <div className={classes.detail1312Li}>limited to 10, individually numbered pedals</div>
      </>
    ),
    li5: (
      <>
        <div className={classes.detail1312Li}>
          benefits the documenting and sharing of stories of Jewish women and gender-expansive
          peoples via the JWA
        </div>
      </>
    ),
    minimumPrice: 120,
    charity: {
      name: `Jewish Women's Archive`,
      url: 'https://jwa.org/',
    },
  },
];
