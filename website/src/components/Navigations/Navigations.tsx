import { useLayoutEffect, useRef, useState } from 'react';
import * as S from './Navigations.styles';
import { INavigationProps } from './types/component';
import { animated } from '@react-spring/web';
import { theme } from '@ui';
import { useItemAnimation } from './animations';
import { useAnimationContext } from '@contexts';
import { Hover } from './components';

export function Navigations({ items }: INavigationProps) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const [overflow, setOverflow] = useState<'hidden' | 'visible'>('hidden');

  // Анимация----------
  const { action } = useAnimationContext();
  const { startItemAnimation, stylesItem } = useItemAnimation(items.length);
  // ----------

  useLayoutEffect(() => {
    switch (action) {
      case 'nav_start':
        startItemAnimation();

        setTimeout(() => {
          setOverflow('visible');
        }, 1200);
        break;
      case 'route':
      case 'back_home':
        setOverflow('hidden');
        break;
    }
  }, [action]);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (!wrapperRef.current) return;

      const list = wrapperRef.current.querySelector('.list');

      if (!list) return;

      const listHeight = list.getBoundingClientRect().height;
      const wrapperHeight = wrapperRef.current.getBoundingClientRect().height - 5;

      if (wrapperHeight <= listHeight) {
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

  return (
    <S.Wrapper ref={wrapperRef} style={{ overflow }}>
      <S.List className="list">
        {stylesItem.map((styleProps, index) => (
          <S.Item key={items[index].id}>
            <animated.div
              style={{
                position: 'absolute',
                top: '0%',
                left: '0%',

                width: '100%',
                height: '1px',

                backgroundColor: theme.colors.white,

                opacity: styleProps.opacity,

                transformOrigin: 'left',
                transform: styleProps.scale.to((value) => `scaleX(${value})`),
              }}
            />

            <animated.div
              style={{
                width: 'max-width',
                height: 'max-width',

                opacity: styleProps.opacity,

                transform: styleProps.translate.to((value) => `translateX(${value}px)`),
              }}
            >
              <S.Button onClick={items[index].onClick}>
                <Hover text={items[index].name} />
              </S.Button>
            </animated.div>

            <animated.div
              style={{
                position: 'absolute',
                top: '100%',
                left: '0%',

                width: '100%',
                height: '1px',

                backgroundColor: theme.colors.white,

                opacity: styleProps.opacity,

                transformOrigin: 'left',
                transform: styleProps.scale.to((value) => `scaleX(${value})`),
              }}
            />
          </S.Item>
        ))}
      </S.List>
    </S.Wrapper>
  );
}
