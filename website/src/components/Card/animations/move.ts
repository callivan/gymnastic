import { config, useSpring, useSpringRef } from '@react-spring/web';

export function useMoveAnimation() {
  const api = useSpringRef();
  const stylesMove = useSpring({
    ref: api,
    from: { width: '240px' },
    to: { width: '480px' },
    config: config.slow,
  });

  const startMove = () => {
    api.start();
  };

  const reverseMove = () => {
    api.start({ reverse: true });
  };

  return { startMove, reverseMove, stylesMove };
}

export function useShowAnimation() {
  const api = useSpringRef();
  const stylesShow = useSpring({
    ref: api,
    from: { opacity: 1 },
    to: { opacity: 0 },
    config: config.slow,
  });

  const startShow = () => {
    api.start();
  };

  const reverseShow = () => {
    api.start({ reverse: true });
  };

  return { startShow, reverseShow, stylesShow };
}
