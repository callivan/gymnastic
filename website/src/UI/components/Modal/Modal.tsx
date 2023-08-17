import { animated } from '@react-spring/web';
import { forwardRef, useImperativeHandle, useLayoutEffect, useRef, useState } from 'react';
import { useShowAnimation } from './animations/show';
import { Portal } from './components';
import * as S from './Modal.styles';
import { IModalProps, IModalRefProps } from './types/component';
import { theme } from '@ui';

export const Modal = forwardRef<IModalRefProps, IModalProps>(function Modal(
  {
    id,
    children,
    isOffBlur = false,
    isStopESCEvent = false,
    isStopOutsideEvent = false,
    animationDelay = 0,

    onESC,
    onOutside,
  },
  ref,
) {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [isInit, setInit] = useState<boolean>(true);

  const modalRef = useRef<HTMLDivElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const transition = useShowAnimation({ isOpen, delay: animationDelay });

  useImperativeHandle(
    ref,
    () => ({
      onToggle(value) {
        setOpen((prev) => (value === undefined ? !prev : value));
      },
    }),
    [],
  );

  useLayoutEffect(() => {
    setTimeout(() => {
      setInit(!isOpen);
    }, 0);

    const handleESC = (e: KeyboardEvent) => {
      if (isStopESCEvent || !isOpen) return;

      const isESC = e.code === 'Escape';

      isESC && setOpen(false);
      onESC && onESC();
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (!modalRef.current || isInit || isStopOutsideEvent || !isOpen) return;

      const target = e.target;
      const modal = modalRef.current;

      if (!target || !(target instanceof HTMLElement) || modal.contains(target)) return;

      setOpen(false);
      onOutside && onOutside();
    };

    document.addEventListener('keydown', handleESC);
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('keydown', handleESC);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [modalRef.current, isInit, isOpen]);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (!wrapperRef.current || !modalRef.current) return;

      const modal = modalRef.current;

      const modalHeight = modal.getBoundingClientRect().height;
      const wrapperHeight = wrapperRef.current.getBoundingClientRect().height - 5;

      if (wrapperHeight <= modalHeight) {
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
  }, [wrapperRef.current, modalRef.current]);

  useLayoutEffect(() => {
    if (!wrapperRef.current) return;

    const wrapper = wrapperRef.current;

    wrapper.style.overflow = 'hidden';

    setTimeout(() => {
      wrapper.style.overflow = 'visible';
    }, 300);
  }, [isOpen, wrapperRef.current]);

  return transition(
    (style, open) =>
      open && (
        <Portal id={id}>
          <animated.div
            style={{
              pointerEvents: 'visible',

              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',

              width: '100%',
              height: '100dvh',

              opacity: style.opacity,

              backgroundColor: isOffBlur ? 'transparent' : theme.colors.black_dark_50,
              backdropFilter: `blur(${isOffBlur ? 0 : 2}px)`,
            }}
          >
            <S.Wrapper ref={wrapperRef}>
              <animated.div
                ref={modalRef}
                style={{
                  pointerEvents: 'visible',

                  width: 'max-content',
                  height: 'max-content',

                  transform: style.transform,

                  padding: '16px',
                  marginInline: 'auto',
                }}
              >
                {children}
              </animated.div>
            </S.Wrapper>
          </animated.div>
        </Portal>
      ),
  );
});
