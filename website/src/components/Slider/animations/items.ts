import { config, useSpringRef, useSprings } from '@react-spring/web';

export function useItemsAnimation(count: number) {
  const DELAY = 50;

  const api = useSpringRef();
  const [styleItems] = useSprings(count, (i) => ({
    ref: api,
    from: { opacity: 0, transform: 'translateY(-50px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: config.stiff,
    delay: DELAY * i,
  }));

  const startItemsAnimation = () => {
    api.start();
  };
  const reverseItemsAnimation = () => {
    const props = (i: number) => ({ reverse: true, delay: DELAY * i });

    api.start(props);
    api.update(props);
  };

  return { startItemsAnimation, reverseItemsAnimation, styleItems };
}
