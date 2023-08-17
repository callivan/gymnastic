import { IModalRefProps, Modal } from '@ui';
import { useLayoutEffect, useRef } from 'react';
import * as S from './Empty.styles';
import { IEmptyProps } from './types/component';
import { useNavigate } from 'react-router-dom';

export function Empty({ isEmpty = false }: IEmptyProps) {
  const navigate = useNavigate();

  const modalRef = useRef<IModalRefProps | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useLayoutEffect(() => {
    if (timer.current) {
      clearTimeout(timer.current);
    }

    timer.current = setTimeout(() => {
      if (!modalRef.current) return;

      modalRef.current.onToggle(isEmpty);
    }, 500);
  }, [isEmpty, modalRef.current, timer]);

  return (
    <Modal ref={modalRef} id="modal-empty">
      <S.Wrapper>
        <S.Text>Скоро тут что-то будет! &#128519;</S.Text>
        <S.Button onClick={() => navigate(-1)}>НАЗАД</S.Button>
      </S.Wrapper>
    </Modal>
  );
}
