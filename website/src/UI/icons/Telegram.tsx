import { DefaultTheme } from 'styled-components';

import { theme } from '@ui';

type TIconTelegramProps = Omit<React.SVGProps<SVGSVGElement>, 'color'> & {
  color?: keyof DefaultTheme['colors'];
};

export function IconTelegram(props: TIconTelegramProps) {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.78807 14.02C5.83104 14.0343 5.87522 14.0447 5.92007 14.051C6.20299 14.7176 6.48433 15.385 6.76407 16.053C7.26707 17.255 7.77407 18.493 7.88507 18.849C8.02407 19.287 8.17007 19.585 8.33007 19.789C8.41307 19.893 8.50807 19.985 8.62007 20.055C8.67842 20.0915 8.74084 20.121 8.80607 20.143C9.12607 20.263 9.41807 20.213 9.60107 20.152C9.70846 20.1153 9.81064 20.0649 9.90507 20.002L9.91007 20L12.7361 18.238L16.0011 20.74C16.0491 20.777 16.1011 20.808 16.1571 20.833C16.5491 21.003 16.9291 21.063 17.2871 21.015C17.6431 20.965 17.9261 20.816 18.1371 20.647C18.3794 20.4517 18.5725 20.2024 18.7011 19.919L18.7101 19.897L18.7131 19.889L18.7151 19.885V19.883L18.7161 19.882C18.7335 19.839 18.7468 19.7945 18.7561 19.749L21.7361 4.72399C21.7455 4.67589 21.7502 4.62699 21.7501 4.57799C21.7501 4.13799 21.5841 3.71899 21.1951 3.46599C20.8611 3.24899 20.4901 3.23899 20.2551 3.25699C20.0031 3.27699 19.7691 3.33899 19.6121 3.38899C19.5242 3.41684 19.4374 3.4482 19.3521 3.48299L19.3411 3.48799L2.62707 10.044L2.62507 10.045C2.56852 10.0658 2.51281 10.0888 2.45807 10.114C2.32553 10.1736 2.19839 10.2445 2.07807 10.326C1.85107 10.481 1.32807 10.907 1.41707 11.611C1.48707 12.171 1.87107 12.516 2.10607 12.682C2.23407 12.773 2.35607 12.838 2.44607 12.881C2.48607 12.901 2.57207 12.935 2.60907 12.951L2.61907 12.954L5.78807 14.02ZM19.9261 4.86799H19.9241C19.9155 4.87181 19.9068 4.87548 19.8981 4.87899L3.16407 11.444C3.15546 11.4475 3.14679 11.4508 3.13807 11.454L3.12807 11.457C3.0975 11.469 3.06747 11.4823 3.03807 11.497C3.0659 11.5129 3.09462 11.5273 3.12407 11.54L6.26607 12.598C6.32222 12.6169 6.37593 12.6424 6.42607 12.674L16.8031 6.59899L16.8131 6.59399C16.8534 6.56949 16.8947 6.5468 16.9371 6.52599C17.0091 6.48899 17.1241 6.43499 17.2541 6.39499C17.3441 6.36699 17.6111 6.28799 17.8991 6.38099C18.0518 6.42914 18.188 6.51927 18.2919 6.64111C18.3959 6.76294 18.4635 6.91156 18.4871 7.06999C18.5243 7.20874 18.5253 7.35472 18.4901 7.49399C18.4201 7.76899 18.2281 7.98299 18.0521 8.14699C17.9021 8.28699 15.9571 10.163 14.0381 12.015L11.4251 14.535L10.9601 14.985L16.8321 19.487C16.9113 19.5203 16.9974 19.534 17.0831 19.527C17.1262 19.5211 17.1668 19.5031 17.2001 19.475C17.2406 19.4408 17.2754 19.4002 17.3031 19.355L17.3051 19.354L20.1951 4.78099C20.104 4.80288 20.0148 4.83163 19.9281 4.86699L19.9261 4.86799ZM11.4651 17.262L10.2931 16.364L10.0091 18.169L11.4651 17.262ZM9.21807 14.582L10.3831 13.457L12.9961 10.935L13.9691 9.99699L7.44907 13.814L7.48407 13.896C7.89528 14.8674 8.30195 15.8408 8.70407 16.816L8.98707 15.016C9.01268 14.849 9.09411 14.6967 9.21807 14.582Z"
        fill={props.color ? theme.colors[props.color] : 'currentColor'}
      />
    </svg>
  );
}
