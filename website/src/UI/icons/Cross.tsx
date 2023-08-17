import { DefaultTheme } from 'styled-components';

import { theme } from '@ui';

type TIconCrossProps = Omit<React.SVGProps<SVGSVGElement>, 'color'> & {
  color?: keyof DefaultTheme['colors'];
};

export function IconCross(props: TIconCrossProps) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M24.778 21.42L19.276 15.917L24.776 10.415L21.949 7.58502L16.446 13.087L10.944 7.58502L8.11603 10.415L13.616 15.917L8.11603 21.419L10.946 24.247L16.446 18.745L21.946 24.247L24.778 21.42Z"
        fill={props.color ? theme.colors[props.color] : 'currentColor'}
      />
    </svg>
  );
}
