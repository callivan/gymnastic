import { config, useSpring, useSpringRef, useSprings } from '@react-spring/web';

export function useLogoAnimation({
  onMiddle,
  onEnd,
}: {
  onMiddle?: () => void;
  onEnd?: () => void;
}) {
  const api = useSpringRef();
  const stylesLogo = useSpring({
    ref: api,
    from: { opacity: 0, transform: 'translate(105px, 0px)' },
    to: async (next) => {
      await next({
        opacity: 1,
      });
      await next({
        transform: 'translate(0px, 0px)',
        onStart: onMiddle,
        onRest: onEnd,
      });
      await next({ opacity: 0, transform: 'translate(0px, 150px)' });
    },
    config: config.slow,
  });

  const startLogoAnimation = () => {
    api.start();
  };

  return { startLogoAnimation, stylesLogo };
}

export function useLogoNameAnimation() {
  const api = useSpringRef();
  const [stylesLogoName] = useSprings(5, (i) => ({
    ref: api,
    from: { opacity: 0, transform: 'translateX(-20px)' },
    to: { opacity: 1, transform: 'translateX(0px)' },
    delay: 50 * i,
    config: config.stiff,
  }));

  const startLogoNameAnimation = () => {
    api.start();
  };

  return { startLogoNameAnimation, stylesLogoName };
}
