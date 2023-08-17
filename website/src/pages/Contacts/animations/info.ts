import { config, useSpring, useSpringRef } from '@react-spring/web';

export function useInfoAnimation() {
  const api = useSpringRef();
  const styleInfo = useSpring({
    ref: api,
    from: { opacity: 0, transform: 'translateX(-50px)' },
    to: { opacity: 1, transform: 'translateX(0px)' },
    config: config.stiff,
  });

  const startInfoAnimation = () => {
    api.start();
  };
  const reverseInfoAnimation = () => {
    api.start({ reverse: true });
  };

  return { startInfoAnimation, reverseInfoAnimation, styleInfo };
}
