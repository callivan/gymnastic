import { config, useSpringRef, useSprings } from '@react-spring/web';

export function useItemAnimation(count: number) {
  const DELAY = 100;

  const api = useSpringRef();
  const [stylesItem] = useSprings(count, (i) => ({
    ref: api,
    from: { opacity: 0, scale: 0, translate: -100 },
    to: { opacity: 1, scale: 1, translate: 0 },
    delay: DELAY * i,
    config: config.stiff,
  }));

  const startItemAnimation = () => {
    api.start();
  };
  const reverseItemAnimation = () => {
    const props = (i: number) => ({
      reverse: true,
      delay: DELAY * i,
    });

    api.start(props);
    api.update(props);
  };

  return { startItemAnimation, reverseItemAnimation, stylesItem };
}
