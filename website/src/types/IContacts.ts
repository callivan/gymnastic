export interface ISocialAttributes {
  id: number;
  social: string;
  link: string;
  icon: ESocialIcon;
}

export interface IPhoneAttributes {
  id: number;
  phone: string;
}

export interface IAddressAttributes {
  id: number;
  address: string;
  latitude: number;
  longitude: number;
}

export enum ESocialIcon {
  TELEGRAM = 'telegram',
  WHATSAPP = 'whatsapp',
  INSTAGRAM = 'instagram',
  VK = 'vk',
}

export interface IContactsResponseAttributes {
  data: {
    id: number;
    attributes: {
      addresses: IAddressAttributes[];
      socials: ISocialAttributes[];
      phones: IPhoneAttributes[];
    };
  };
}
