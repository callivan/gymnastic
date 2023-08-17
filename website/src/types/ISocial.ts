export enum ESocialIcon {
  TELEGRAM = 'telegram',
  WHATSAPP = 'whatsapp',
  INSTAGRAM = 'instagram',
  VK = 'vk',
}

interface ISocialAttributes {
  id: string;
  attributes: {
    social: string;
    link: string;
    icon: ESocialIcon;
  };
}

export interface ISocialResponseAttributes {
  data: ISocialAttributes[];
}
