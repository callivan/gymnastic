import { IModalPhotoProps, IModalVideoProps } from 'src/components/Slider/types/component';

interface IModalCommonProps {
  onClose: () => void;
}

export type TModalProps = IModalCommonProps & (IModalPhotoProps | IModalVideoProps);
