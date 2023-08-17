import { config, useSpringRef, useSprings } from '@react-spring/web';

export function useTextAnimation() {
  const api = useSpringRef();
  const [stylesText] = useSprings(2, (i) => ({
    ref: api,
    from: { opacity: 0, transform: 'translateX(50px)' },
    to: { opacity: 1, transform: 'translateX(0px)' },
    delay: 100 * i,
    config: config.wobbly,
  }));

  const startTextAnimation = () => {
    api.start();
  };

  return { startTextAnimation, stylesText };
}
