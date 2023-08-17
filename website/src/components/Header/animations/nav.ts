import { config, useSpring, useSpringRef } from '@react-spring/web';

export function useNavAnimation() {
  const api = useSpringRef();
  const stylesNav = useSpring({
    ref: api,
    from: {
      opacity: 0,
      transform: -50,
    },
    to: {
      opacity: 1,
      transform: 0,
    },
    config: config.stiff,
  });

  const startNavAnimation = () => {
    api.start();
  };
  const reverseNavAnimation = () => {
    api.start({ reverse: true });
  };

  return { startNavAnimation, reverseNavAnimation, stylesNav };
}
