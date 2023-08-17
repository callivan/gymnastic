import { config, useSpring, useSpringRef } from '@react-spring/web';

export function useSloganAnimation() {
  const api = useSpringRef();
  const styleSlogan = useSpring({
    ref: api,
    from: { opacity: 0, transform: 'translate(-50px, 100%)' },
    to: { opacity: 1, transform: 'translate(0px, 100%)' },
    config: config.stiff,
  });

  const startSloganAnimation = () => {
    api.start();
  };

  return { startSloganAnimation, styleSlogan };
}
