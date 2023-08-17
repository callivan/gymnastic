import { useLocation } from 'react-router-dom';
import * as S from './Error.styles';

export default function PageError() {
  const state = useLocation().state as string;

  const code = state.replace(/[^0-9]/g, '');
  return (
    <S.Wrapper>
      <S.Container>
        <S.Error>{code ? code : state}</S.Error>
        <S.Text>{state}</S.Text>
      </S.Container>
    </S.Wrapper>
  );
}
