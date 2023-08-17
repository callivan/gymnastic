import { useLayoutEffect, useRef, useState } from 'react';
import * as S from './Card.styles';
import { TCardProps } from './types/component';
import { animated } from '@react-spring/web';
import { useMoveAnimation, useShowAnimation } from './animations/move';
import { useMatchMedia } from '@utils';
import { Scroll, Img } from '@ui';

export function Card({ id, imgUrl, imgPreviewUrl, firstname, lastname, coach_infos }: TCardProps) {
  const [isOpen, setOpen] = useState<boolean>(false);

  const containerRef = useRef<HTMLButtonElement | null>(null);

  const { isTablet } = useMatchMedia({ sizeNames: ['isTablet'], queries: ['(max-width: 1343px)'] });

  const { startMove, reverseMove, stylesMove } = useMoveAnimation();
  const { startShow, reverseShow, stylesShow } = useShowAnimation();

  useLayoutEffect(() => {
    const handleClickOutside = ({ target }: MouseEvent) => {
      if (!containerRef.current) return;

      const container = containerRef.current;

      if (!target || !(target instanceof HTMLElement) || container.contains(target) || !isOpen)
        return;

      isTablet ? reverseShow() : reverseMove();
      setOpen(false);
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [containerRef.current, isOpen]);

  return (
    <animated.div key={id} style={{ height: '500px', ...(!isTablet ? stylesMove : {}) }}>
      <S.Container
        ref={containerRef}
        onClick={() => {
          isTablet ? startShow() : startMove();

          setOpen(true);
        }}
      >
        <S.Wrapper>
          <Scroll>
            <S.Info>
              <S.NameContainer>
                <S.Text>{lastname}</S.Text>
                <S.Text>{firstname}</S.Text>
              </S.NameContainer>

              <S.InfoContainer>
                {coach_infos.map(({ id, title, description }) => (
                  <S.InfoBlock key={id}>
                    <S.Section>
                      <S.Text className="section-text">{title}</S.Text>
                      <S.Divider />
                    </S.Section>

                    <S.Text className="section-text">{description}</S.Text>
                  </S.InfoBlock>
                ))}
              </S.InfoContainer>
            </S.Info>
          </Scroll>
        </S.Wrapper>

        <animated.div
          style={{
            pointerEvents: 'none',

            position: 'absolute',
            top: '0px',
            right: '0px',
            width: '240px',
            height: '100%',

            ...(isTablet ? stylesShow : {}),
          }}
        >
          <Img
            src={imgUrl}
            srcPreview={imgPreviewUrl}
            externalUrl={import.meta.env.VITE_STRAPI_URL}
            alt={`Тренер ${lastname} ${firstname}`}
          />
        </animated.div>
      </S.Container>
    </animated.div>
  );
}
