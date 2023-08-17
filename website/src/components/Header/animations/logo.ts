import { useMatchMedia } from '@utils';
import { config, useSpring, useSpringRef } from '@react-spring/web';

export function useLogoAnimation() {
  const { isMobile } = useMatchMedia({
    sizeNames: ['isMobile'],
    queries: ['(max-width: 595px)'],
  });

  const api = useSpringRef();
  const stylesLogo = useSpring({
    ref: api,
    from: {
      opacity: 0,
      transform: `translate(${isMobile ? '-50px' : '-50%'}, ${isMobile ? 0 : -50}px)`,
    },
    to: {
      opacity: 1,
      transform: `translate(${isMobile ? '0px' : '-50%'}, 0px)`,
    },
    config: config.wobbly,
  });

  const startLogoAnimation = () => {
    api.start();
  };

  return { startLogoAnimation, stylesLogo };
}
