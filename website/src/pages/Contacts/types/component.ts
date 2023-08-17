import { ESocialIcon } from '@types';

export interface IAddressProps {
  id: string;
  address: string;
  latitude: number;
  longitude: number;
}
export interface IPhonsProps {
  id: string;
  phone: string;
}

export interface ISocialProps {
  id: string;
  social: string;
  link: string;
  icon: ESocialIcon;
}
