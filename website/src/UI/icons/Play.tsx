import { DefaultTheme } from 'styled-components';

import { theme } from '@ui';

type TIconPlayProps = Omit<React.SVGProps<SVGSVGElement>, 'color'> & {
  color?: keyof DefaultTheme['colors'];
};

export function IconPlay(props: TIconPlayProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M22.5 12C22.5006 12.2546 22.4353 12.5051 22.3105 12.727C22.1856 12.949 22.0055 13.1348 21.7875 13.2665L8.28 21.5297C8.05227 21.6691 7.79144 21.7452 7.52445 21.7502C7.25746 21.7551 6.99399 21.6887 6.76125 21.5578C6.53073 21.4289 6.3387 21.2409 6.2049 21.0132C6.07111 20.7855 6.00039 20.5263 6 20.2622V3.73779C6.00039 3.47368 6.07111 3.21445 6.2049 2.98673C6.3387 2.75902 6.53073 2.57106 6.76125 2.44217C6.99399 2.31124 7.25746 2.24482 7.52445 2.24977C7.79144 2.25471 8.05227 2.33084 8.28 2.47029L21.7875 10.7334C22.0055 10.8651 22.1856 11.051 22.3105 11.2729C22.4353 11.4949 22.5006 11.7453 22.5 12Z"
        fill={props.color ? theme.colors[props.color] : 'currentColor'}
      />
    </svg>
  );
}
