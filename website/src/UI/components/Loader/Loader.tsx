import * as S from './Loader.styles';
import { IconCircle } from '@ui';

export function Loader({ className }: { className?: string }) {
  return (
    <S.Wrapper className={className}>
      <S.Circle className={className} />

      <IconCircle width={48} height={48} />
    </S.Wrapper>
  );
}
