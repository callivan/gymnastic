import { config, useSpring, useSpringRef } from '@react-spring/web';

export function usePricesAnimation() {
  const api = useSpringRef();
  const stylesPrices = useSpring({
    ref: api,
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
    config: config.stiff,
  });

  const startPricesAnimation = () => {
    api.start();
  };
  const reversePricesAnimation = () => {
    api.start({ reverse: true });
  };

  return { startPricesAnimation, reversePricesAnimation, stylesPrices };
}

export function useDividerAnimation() {
  const api = useSpringRef();
  const stylesDivider = useSpring({
    ref: api,
    from: {
      opacity: 0,
      transform: 'scaleY(0)',
    },
    to: {
      opacity: 1,
      transform: 'scaleY(1)',
    },
    config: config.stiff,
  });

  const startDividerAnimation = () => {
    api.start();
  };
  const reverseDividerAnimation = () => {
    api.start({ reverse: true });
  };

  return { startDividerAnimation, reverseDividerAnimation, stylesDivider };
}
