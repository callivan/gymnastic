import { useLayoutEffect } from 'react';
import * as S from './Header.styles';
import { IconLogo, theme } from '@ui';
import { animated } from '@react-spring/web';
import {
  useDividerAnimation,
  useLogoAnimation,
  useNavAnimation,
  useSloganAnimation,
  useTextAnimation,
} from './animations';
import { useAnimationContext } from '@contexts';
import { useLocation, useNavigate } from 'react-router-dom';

export function Header() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const navName = () => {
    switch (pathname) {
      case '/prices':
        return 'Прайс';
      case '/coaches':
        return 'Тренеры';
      case '/media':
        return 'Медиа';
      case '/contacts':
        return 'Контакты';
    }
  };

  const { action, setAction } = useAnimationContext();

  const { startDividerAnimation, stylesDivider } = useDividerAnimation();
  const { startSloganAnimation, stylesSlogan } = useSloganAnimation();
  const { startTextAnimation, stylesText } = useTextAnimation();
  const { startLogoAnimation, stylesLogo } = useLogoAnimation();
  const { startNavAnimation, reverseNavAnimation, stylesNav } = useNavAnimation();

  const handleClickBack = () => {
    setAction('back_home');

    setTimeout(() => {
      navigate(-1);
    }, 500);
  };

  useLayoutEffect(() => {
    switch (action) {
      case 'nav_start':
        startDividerAnimation();
        startLogoAnimation();

        setTimeout(() => {
          startSloganAnimation();
          startTextAnimation();
        }, 200);
        break;
      case 'route':
        startNavAnimation();
        break;
      case 'back_home':
        reverseNavAnimation();
    }
  }, [action]);

  return (
    <S.Container>
      <S.TopContainer>
        <animated.div
          style={{
            transform: stylesNav.transform.to((value) => `translateX(${value}px)`),
            opacity: stylesNav.opacity,
          }}
        >
          <S.Text>{navName()}</S.Text>
        </animated.div>

        <animated.div
          style={{
            transform: stylesNav.transform.to((value) => `translateX(${value * -1}px)`),
            opacity: stylesNav.opacity,
          }}
        >
          <S.Button onClick={handleClickBack}>Назад</S.Button>
        </animated.div>
      </S.TopContainer>

      <animated.div
        style={{
          width: '100%',
          height: '1px',

          backgroundColor: theme.colors.white,

          ...stylesDivider,
        }}
      />

      <S.TextContainer>
        <S.SloganContainer>
          <animated.div style={stylesSlogan}>
            <S.Slogan>Спорт как образ жизни</S.Slogan>
          </animated.div>

          <animated.div className="header-logo" style={stylesLogo}>
            <IconLogo width="24px" height="24px" />

            <S.Text className="logo-text">Вверх</S.Text>
          </animated.div>
        </S.SloganContainer>

        <S.TextWrapper>
          {stylesText.map((styleProps, index) => (
            <animated.div key={index} style={styleProps}>
              <S.Text>
                {index === 0 ? 'Акробатика и гимнастика' : 'Учебно-тренировочный центр'}
              </S.Text>
            </animated.div>
          ))}
        </S.TextWrapper>
      </S.TextContainer>
    </S.Container>
  );
}
