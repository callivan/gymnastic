import { config, useSpring, useSpringRef } from '@react-spring/web';

export function useControlAnimation() {
  const api = useSpringRef();
  const styleControl = useSpring({
    ref: api,
    from: { opacity: 0, translate: -50 },
    to: { opacity: 1, translate: 0 },
    config: config.stiff,
  });

  const startControlAnimation = () => {
    api.start();
  };
  const reverseControlAnimation = () => {
    api.start({ reverse: true });
  };

  return { startControlAnimation, reverseControlAnimation, styleControl };
}
