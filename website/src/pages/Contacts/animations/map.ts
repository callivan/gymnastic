import { config, useSpring, useSpringRef } from '@react-spring/web';

export function useMapAnimation() {
  const api = useSpringRef();
  const styleMap = useSpring({
    ref: api,
    from: { opacity: 0, transform: 'translateX(50px)' },
    to: { opacity: 1, transform: 'translateX(0px)' },
    config: config.stiff,
  });

  const startMapAnimation = () => {
    api.start();
  };
  const reverseMapAnimation = () => {
    api.start({ reverse: true });
  };

  return { startMapAnimation, reverseMapAnimation, styleMap };
}
