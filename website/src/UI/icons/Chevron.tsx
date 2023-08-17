import { DefaultTheme } from 'styled-components';

import { theme } from '@ui';

type TIconChevronProps = Omit<React.SVGProps<SVGSVGElement>, 'color'> & {
  color?: keyof DefaultTheme['colors'];
};

export function IconChevron(props: TIconChevronProps) {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M30.82 33.18L21.66 24L30.82 14.82L28 12L16 24L28 36L30.82 33.18Z"
        fill={props.color ? theme.colors[props.color] : 'currentColor'}
      />
    </svg>
  );
}
