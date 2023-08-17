import { DefaultTheme } from 'styled-components';

import { theme } from '@ui';

type TIconLogoProps = Omit<React.SVGProps<SVGSVGElement>, 'color'> & {
  color?: keyof DefaultTheme['colors'];
};

export function IconLogo(props: TIconLogoProps) {
  return (
    <svg
      width="70"
      height="70"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40C0 62.0914 17.9086 80 40 80ZM51.25 13.3333H36.6667V36.6667H51.25C52.7083 36.6667 60 33.75 60 25C60 16.25 52.7083 13.3333 51.25 13.3333ZM36.6667 40H51.4815C54.4444 40 63.3333 42.963 63.3333 53.3333C63.3333 63.7037 54.4444 66.6667 51.4815 66.6667H36.6667V40ZM33.3333 56.6667V13.3333C33.3333 13.3333 20 11.6667 20 23.3333V66.6667C20 66.6667 33.3333 68.3334 33.3333 56.6667Z"
        fill={props.color ? theme.colors[props.color] : 'currentColor'}
      />
    </svg>
  );
}
