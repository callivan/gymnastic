import { config, useSpringRef, useSprings } from '@react-spring/web';

export function useCardAnimation(count: number) {
  const DELAY = 100;

  const api = useSpringRef();
  const [stylesCard] = useSprings(count, (i) => ({
    ref: api,
    from: { opacity: 0, transform: 'translateX(-50px)' },
    to: { opacity: 1, transform: 'translateX(0px)' },
    config: config.stiff,
    delay: DELAY * i,
  }));

  const startCard = () => {
    api.start();
  };
  const reverseCard = () => {
    const props = (i: number) => ({
      reverse: true,
      delay: DELAY * i,
    });
    api.start(props);
    api.update(props);
  };

  return { startCard, reverseCard, stylesCard };
}
