import { config, useSpring, useSpringRef } from '@react-spring/web';

export function useGradientAnimation({ onEnd }: { onEnd?: () => void }) {
  const api = useSpringRef();
  const stylesGradient = useSpring({
    ref: api,
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
    onRest: (r) => {
      if (r.value.opacity === 1) {
        onEnd && onEnd();
      }
    },
    config: config.slow,
  });

  const startGradientAnimation = () => {
    api.start();
  };

  const reverseGradientAnimation = () => {
    api.start({
      reverse: true,
    });
  };

  return { startGradientAnimation, reverseGradientAnimation, stylesGradient };
}
