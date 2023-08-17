import { useSpring, useSpringRef } from '@react-spring/web';

export function useDividerAnimation() {
  const api = useSpringRef();
  const stylesDivider = useSpring({
    ref: api,
    from: { opacity: 0, transform: 'scaleX(0)' },
    to: { opacity: 1, transform: 'scaleX(1)' },
  });

  const startDividerAnimation = () => {
    api.start();
  };

  return { startDividerAnimation, stylesDivider };
}
