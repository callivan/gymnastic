import { Fragment, useLayoutEffect, useRef } from 'react';
import * as S from './Price.styles';
import { IPriceProps } from './types/components';
import { useDividerAnimation, usePricesAnimation } from './animations';
import { animated } from '@react-spring/web';
import { useMatchMedia } from '@utils';
import { useAnimationContext } from '@contexts';

export function Price({ prices }: IPriceProps) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const { isMobile } = useMatchMedia({ sizeNames: ['isMobile'], queries: ['(max-width: 595px)'] });

  const formatter = new Intl.NumberFormat('ru', {
    style: 'currency',
    currency: 'RUB',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  let rowFirst = 1;
  let rowSecond = 2;

  const { action } = useAnimationContext();
  const { startPricesAnimation, reversePricesAnimation, stylesPrices } = usePricesAnimation();
  const { startDividerAnimation, reverseDividerAnimation, stylesDivider } = useDividerAnimation();

  useLayoutEffect(() => {
    const handleResize = () => {
      if (!wrapperRef.current) return;

      const container = wrapperRef.current.querySelector('.container');

      if (!container) return;

      const containerHeight = container.getBoundingClientRect().height;
      const wrapperHeight = wrapperRef.current.getBoundingClientRect().height - 5;

      if (wrapperHeight <= containerHeight) {
        wrapperRef.current.style.display = 'block';
      } else {
        wrapperRef.current.style.display = 'flex';
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [wrapperRef.current]);

  useLayoutEffect(() => {
    switch (action) {
      case 'page_start':
        setTimeout(() => {
          if (prices.length) {
            startDividerAnimation();
          }
        }, 500);

        setTimeout(() => {
          if (prices.length) {
            startPricesAnimation();
          }
        }, 800);
        break;
      case 'back_home':
        reversePricesAnimation();

        setTimeout(() => {
          reverseDividerAnimation();
        }, 200);
        break;
    }
  }, [action, prices]);

  return (
    <S.Wrapper ref={wrapperRef}>
      <S.Container className="container">
        {prices.map(({ id, title, price_infos }, index) => {
          rowFirst += index;
          rowSecond += index;

          const t = (
            <animated.div
              key={id}
              style={{
                gridColumn: '1/2',
                gridRow: `${rowFirst}/${rowSecond}`,

                opacity: stylesPrices.opacity,
              }}
            >
              <S.Name>{title}</S.Name>
            </animated.div>
          );

          rowFirst += 1;
          rowSecond += 1;

          const list = (
            <animated.div
              style={{
                gridColumn: isMobile ? '1/2' : '3/4',
                gridRow: `${rowFirst}/${rowSecond}`,

                opacity: stylesPrices.opacity,
              }}
            >
              <S.PricesList>
                {price_infos.map(({ id, price, name }) => (
                  <S.Price key={id}>
                    <S.Text>{formatter.format(price)}</S.Text>
                    <S.Text className="text-light">{name}</S.Text>

                    <S.Divider className="price-divider" />
                  </S.Price>
                ))}
              </S.PricesList>
            </animated.div>
          );

          return (
            <Fragment key={index}>
              {t}
              {list}
            </Fragment>
          );
        })}

        <animated.div
          style={{
            gridColumn: '2/3',
            gridRow: '1/5',

            display: isMobile ? 'none' : 'block',

            width: '1px',
            height: 'calc(100% + 30px)',

            transformOrigin: 'top',

            ...stylesDivider,
          }}
        >
          <S.Divider />
        </animated.div>
      </S.Container>
    </S.Wrapper>
  );
}
