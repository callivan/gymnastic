import * as S from './Scroll.styles';
import { IScrollProps } from './types/component';

export function Scroll({ children, isOff = false }: IScrollProps) {
  return <S.Container className={isOff ? 'is-off' : ''}>{children}</S.Container>;
}
