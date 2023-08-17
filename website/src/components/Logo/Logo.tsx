import { IconLogo } from '@ui';
import { animated } from '@react-spring/web';
import { useLayoutEffect } from 'react';
import * as S from './Logo.styles';
import { useLogoAnimation, useLogoNameAnimation, useSloganAnimation } from './animations';
import { useAnimationContext } from '@contexts';

export function Logo() {
  const LOGO_NAME = 'ВВЕРХ';

  const { action, setAction } = useAnimationContext();

  const { startLogoNameAnimation, stylesLogoName } = useLogoNameAnimation();
  const { startLogoAnimation, stylesLogo } = useLogoAnimation({
    onMiddle: () => {
      startLogoNameAnimation();
      startSloganAnimation();
    },
    onEnd: () => {
      setAction('nav_start');
    },
  });
  const { startSloganAnimation, styleSlogan } = useSloganAnimation();

  useLayoutEffect(() => {
    if (action === 'app_load') {
      setTimeout(() => {
        startLogoAnimation();
      }, 1000);
    }
  }, [action]);

  return (
    <animated.div
      style={{
        pointerEvents: 'none',

        position: 'fixed',

        width: 'max-content',
        height: 'max-content',

        display: 'flex',
        gap: '8px',
        alignItems: 'flex-end',

        ...stylesLogo,
      }}
    >
      <IconLogo color="white" />

      <S.Wrapper>
        {stylesLogoName.map((styleProps, index) => (
          <animated.div key={index} style={styleProps}>
            <S.Text>{LOGO_NAME[index]}</S.Text>
          </animated.div>
        ))}
      </S.Wrapper>

      <animated.div
        style={{
          position: 'absolute',
          bottom: '6px',
          left: '80px',

          ...styleSlogan,
        }}
      >
        <S.Text className="slogan">Спорт как образ жизни</S.Text>
      </animated.div>
    </animated.div>
  );
}
