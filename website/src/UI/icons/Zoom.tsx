import { DefaultTheme } from 'styled-components';

import { theme } from '@ui';

type TIconZoomProps = Omit<React.SVGProps<SVGSVGElement>, 'color'> & {
  color?: keyof DefaultTheme['colors'];
};

export function IconZoom(props: TIconZoomProps) {
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
        d="M20.6667 18.6667L27.3333 25.3333L25.3333 27.3333L18.6667 20.6667V19.6133L18.3067 19.24C16.7387 20.5918 14.7369 21.3348 12.6667 21.3333C10.3681 21.3333 8.16372 20.4202 6.53841 18.7949C4.91309 17.1696 4 14.9652 4 12.6667C4 10.3681 4.91309 8.16372 6.53841 6.53841C8.16372 4.91309 10.3681 4 12.6667 4C14.9652 4 17.1696 4.91309 18.7949 6.53841C20.4202 8.16372 21.3333 10.3681 21.3333 12.6667C21.3333 14.8133 20.5467 16.7867 19.24 18.3067L19.6133 18.6667H20.6667ZM12.6667 18.6667C16 18.6667 18.6667 16 18.6667 12.6667C18.6667 9.33333 16 6.66667 12.6667 6.66667C9.33333 6.66667 6.66667 9.33333 6.66667 12.6667C6.66667 16 9.33333 18.6667 12.6667 18.6667ZM16 13.3333H13.3333V16H12V13.3333H9.33333V12H12V9.33333H13.3333V12H16V13.3333Z"
        fill={props.color ? theme.colors[props.color] : 'currentColor'}
      />
    </svg>
  );
}
