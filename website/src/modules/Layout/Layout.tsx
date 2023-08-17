import { useLayoutEffect, useMemo, useRef, useState } from 'react';
import * as S from './Layout.styles';
import { Header, Logo, Navigations, TNavigationItemProps } from '@components';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useGradientAnimation, useHeaderAnimation } from './animations';
import { useAnimationContext } from '@contexts';
import { Scroll, Loader, theme } from '@ui';
import { Helmet } from 'react-helmet-async';
import { animated } from '@react-spring/web';

export function Layout() {
  const { pathname } = useLocation();
  const navigation = useNavigate();

  const [headerTop, setHeaderTop] = useState<'auto' | '0px'>('auto');
  const [isInit, setInit] = useState<boolean>(true);

  const headerRef = useRef<HTMLDivElement | null>(null);

  const options = useMemo(() => {
    if (!headerRef.current) return { headerHeight: 0, paddingBlock: '24px 24px', height: 0 };

    const headerHeight = headerRef.current?.getBoundingClientRect().height;
    const documentHeight = document.documentElement.getBoundingClientRect().height;

    return {
      headerHeight: headerHeight - 50,
      paddingBlock: /^\/$/.test(pathname)
        ? `24px ${headerHeight - 50}px`
        : `${headerHeight}px 24px`,
      height: documentHeight - headerHeight,
    };
  }, [headerRef.current, pathname]);

  const navigationItems: TNavigationItemProps[] = [
    { id: '1', name: 'Прайс', onClick: () => handleClickNavigation('/prices') },
    { id: '2', name: 'Тренеры', onClick: () => handleClickNavigation('/coaches') },
    { id: '3', name: 'Медиа', onClick: () => handleClickNavigation('./media') },
    { id: '4', name: 'Контакты', onClick: () => handleClickNavigation('/contacts') },
  ];

  const setPosition = (isReverse: boolean) => {
    setHeaderTop(isReverse ? 'auto' : '0px');
  };

  // Анимация----------
  const { action, setAction } = useAnimationContext();
  const { startGradientAnimation, reverseGradientAnimation, stylesGradient } = useGradientAnimation(
    {
      onEnd: () => {
        setAction('page_start');
      },
    },
  );
  const { startHeaderAnimation, reverseHeaderAnimation, stylesHeader } = useHeaderAnimation(
    options.height,
    setPosition,
  );
  // ----------

  const handleClickNavigation = (link: string) => {
    setAction('route');
    navigation(link);
  };

  useLayoutEffect(() => {
    // eslint-disable-next-line sonarjs/no-small-switch
    switch (action) {
      case 'app_load':
        setTimeout(() => {
          setInit(false);
        }, 1200);
        break;
      case 'route':
        startHeaderAnimation();
        startGradientAnimation();
        break;
      case 'back_home':
        setTimeout(() => {
          reverseHeaderAnimation();
          reverseGradientAnimation();
        }, 500);
        break;
    }
  }, [action]);

  useLayoutEffect(() => {
    if (/(\/\w+)$/.test(pathname)) {
      setTimeout(() => {
        setAction('route');
      }, 2800);
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Вверх | Навигация</title>
        <meta
          name="description"
          content="Вверх учебно-тренировочный центр, акробатика и гимнастика для детей"
        />
        <meta name="keywords" content="Гимнастика, Акробатика, Спорт, Дети, Вверх, Навигация" />

        <meta property="og:title" content="Вверх | Навигация" />
        <meta
          property="og:description"
          content="Вверх учебно-тренировочный центр, акробатика и гимнастика для детей"
        />
      </Helmet>
      <S.Container
        style={{
          paddingBlock: `${options.headerHeight}px`,
        }}
      >
        {isInit ? <Loader className={action === 'app_load' ? 'is-loaded' : ''} /> : null}

        <Logo />

        <Scroll>
          <Navigations items={navigationItems} />
        </Scroll>

        <animated.div
          ref={headerRef}
          style={{
            position: 'fixed',
            top: headerTop,
            left: '0px',

            width: '100%',
            height: 'max-content',

            overflow: 'hidden',

            zIndex: 1,

            ...stylesHeader,
          }}
        >
          <Header />
        </animated.div>

        <animated.div
          style={{
            pointerEvents: action === 'page_start' ? 'visible' : 'none',
            position: 'fixed',
            top: '0px',
            left: '0px',

            width: '100%',
            height: '100%',

            background: `linear-gradient(180deg, ${theme.colors.gray_dark_80} 0%, ${theme.colors.gray_dark} 100%)`,
            backdropFilter: 'blur(2px)',

            paddingBlock: options.paddingBlock,

            ...stylesGradient,
          }}
        >
          <Outlet />
        </animated.div>
      </S.Container>
    </>
  );
}
