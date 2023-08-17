import { config, useSpring, useSpringRef } from '@react-spring/web';

export function useHeaderAnimation(height: number, setPosition: (isReverse: boolean) => void) {
  const api = useSpringRef();
  const stylesHeader = useSpring({
    ref: api,
    from: { bottom: '0px' },
    to: {
      bottom: `${height}px`,
    },
    config: config.slow,
  });

  const startHeaderAnimation = () => {
    api.start();

    setTimeout(() => {
      setPosition(false);
    }, 1300);
  };
  const reverseHeaderAnimation = () => {
    setPosition(true);

    api.start({ reverse: true });
  };

  return { startHeaderAnimation, reverseHeaderAnimation, stylesHeader };
}
