export interface IModalRefProps {
  // eslint-disable-next-line no-unused-vars
  onToggle: (value?: boolean) => void;
}

export interface IModalProps {
  id: string;
  children: React.ReactElement;

  isStopESCEvent?: boolean;
  isStopOutsideEvent?: boolean;
  isOffBlur?: boolean;
  animationDelay?: number;

  onESC?: () => void;
  onOutside?: () => void;
}
