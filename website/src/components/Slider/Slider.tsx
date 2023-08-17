import { IconChevron, IconPlay, IconZoom } from '@ui';
import * as S from './Slider.styles';
import { useLayoutEffect, useRef, useState } from 'react';
import { IModalPhotoProps, IModalVideoProps, ISliderProps } from './types/component';
import { IModalRefProps, Modal } from '@ui';
import { ModalContent } from './components/Modal/Modal';
import { useAnimationContext } from '@contexts';
import { useControlAnimation, useItemsAnimation } from './animations';
import { animated } from '@react-spring/web';

export function Slider({ slides }: ISliderProps) {
  const MOVE_GAP = 266;

  let firstColumn = 1;
  let secondColumn = 2;
  let isMove = false;

  const [isDisabledPrev, setDisabledPrev] = useState<boolean>(true);
  const [isDisabledNext, setDisabledNext] = useState<boolean>(false);
  const [full, setFull] = useState<IModalPhotoProps | IModalVideoProps | null>(null);

  const listRef = useRef<HTMLUListElement | null>(null);
  const modalRef = useRef<IModalRefProps | null>(null);

  const isVideo = (data: IModalPhotoProps | IModalVideoProps): data is IModalVideoProps => {
    return 'video' in data ? true : false;
  };

  const { action } = useAnimationContext();

  const { startItemsAnimation, reverseItemsAnimation, styleItems } = useItemsAnimation(
    slides.length,
  );
  const { startControlAnimation, reverseControlAnimation, styleControl } = useControlAnimation();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>, isPrev: boolean) => {
    if (!listRef.current) return;

    const target = e.currentTarget;

    if (!target || !(target instanceof HTMLElement)) return;

    const list = listRef.current;
    let listScroll = list.scrollLeft;

    isPrev ? (listScroll -= MOVE_GAP) : (listScroll += MOVE_GAP);
    list.scrollLeft = listScroll;
  };

  const handleScroll = () => {
    if (!listRef.current) return;

    const list = listRef.current;

    const listWidth = list.getBoundingClientRect().width;
    const listSrollWidth = list.scrollWidth;
    const listScroll = list.scrollLeft;

    listScroll === listSrollWidth - listWidth ? setDisabledNext(true) : setDisabledNext(false);
    listScroll === 0 ? setDisabledPrev(true) : setDisabledPrev(false);
  };

  useLayoutEffect(() => {
    switch (action) {
      case 'page_start':
        setTimeout(() => {
          if (slides.length) {
            startItemsAnimation();
            startControlAnimation();
          }
        }, 400);
        break;
      case 'back_home':
        reverseItemsAnimation();
        reverseControlAnimation();
        break;
    }
  }, [action, slides]);

  return (
    <>
      <S.Container>
        <animated.div
          style={{
            opacity: styleControl.opacity,
            transform: styleControl.translate.to((value) => `translateX(${value}px)`),
          }}
        >
          <S.Button disabled={isDisabledPrev} onClick={(e) => handleClick(e, true)}>
            <IconChevron />
          </S.Button>
        </animated.div>

        <S.Wrapper>
          <S.List ref={listRef} onScroll={handleScroll}>
            {styleItems.map((styleProps, index) => {
              if (isMove) {
                firstColumn += 1;
                secondColumn += 1;

                isMove = false;
              }

              if ((index + 1) % 3 === 0) {
                isMove = true;
              }

              return (
                <animated.li
                  key={slides[index].id}
                  style={{
                    scrollSnapAlign: 'center',
                    gridColumn: `${firstColumn}/${secondColumn}`,

                    ...styleProps,
                  }}
                >
                  <S.Button
                    className="is-item"
                    onClick={() => {
                      if (!modalRef.current) return;

                      setFull(slides[index]);
                      modalRef.current.onToggle(true);
                    }}
                  >
                    <S.Img
                      src={
                        isVideo(slides[index])
                          ? import.meta.env.VITE_STRAPI_URL + slides[index].poster
                          : import.meta.env.VITE_STRAPI_URL + slides[index].imgSlider
                      }
                      alt="Фото"
                    />

                    <S.Hover>{slides[index].img ? <IconZoom /> : <IconPlay />}</S.Hover>
                  </S.Button>
                </animated.li>
              );
            })}
          </S.List>
        </S.Wrapper>

        <animated.div
          style={{
            opacity: styleControl.opacity,
            transform: styleControl.translate.to((value) => `translateX(${value * -1}px)`),
          }}
        >
          <S.Button
            className="is-rotate"
            disabled={isDisabledNext}
            onClick={(e) => handleClick(e, false)}
          >
            <IconChevron />
          </S.Button>
        </animated.div>
      </S.Container>

      <Modal ref={modalRef} id="modal">
        {full ? (
          <ModalContent
            onClose={() => {
              if (!modalRef.current) return;
              modalRef.current.onToggle(false);
            }}
            {...full}
          />
        ) : (
          <></>
        )}
      </Modal>
    </>
  );
}
