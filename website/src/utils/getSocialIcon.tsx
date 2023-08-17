import { ESocialIcon } from '@types';
import { IconInstagram, IconTelegram, IconVK, IconWhatsapp } from '@ui';

export const GET_SOCIAL_ICON: Map<ESocialIcon, JSX.Element> = new Map([
  [ESocialIcon.INSTAGRAM, <IconInstagram />],
  [ESocialIcon.TELEGRAM, <IconTelegram />],
  [ESocialIcon.WHATSAPP, <IconWhatsapp />],
  [ESocialIcon.VK, <IconVK />],
]);
