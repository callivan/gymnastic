import * as S from './Hover.styles';
import { IHoverProps } from './types/component';

export function Hover({ text }: IHoverProps) {
  return (
    <S.Container>
      <S.Text className="is-absolute">{text}</S.Text>
      <S.Text className="text">{text}</S.Text>
    </S.Container>
  );
}
