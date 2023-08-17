import { DefaultTheme } from 'styled-components';

import { theme } from '@ui';

type TIconCircleProps = Omit<React.SVGProps<SVGSVGElement>, 'color'> & {
  color?: keyof DefaultTheme['colors'];
};

export function IconCircle(props: TIconCircleProps) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        cx="16"
        cy="16"
        r="14"
        stroke={props.color ? theme.colors[props.color] : 'currentColor'}
        strokeWidth="4"
      />
    </svg>
  );
}
