import { config, useSpring, useSpringRef } from '@react-spring/web';

export function useSloganAnimation() {
  const api = useSpringRef();
  const stylesSlogan = useSpring({
    ref: api,
    from: { opacity: 0, transform: 'translateX(-50px)' },
    to: { opacity: 1, transform: 'translateX(0px)' },
    config: config.wobbly,
  });

  const startSloganAnimation = () => {
    api.start();
  };

  return { startSloganAnimation, stylesSlogan };
}
