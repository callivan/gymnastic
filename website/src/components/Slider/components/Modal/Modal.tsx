import { IconCross, Img } from '@ui';
import * as S from './Modal.styles';
import { TModalProps } from './types/component';
import { IModalPhotoProps, IModalVideoProps } from '../../types/component';

export function ModalContent(props: TModalProps) {
  const isVideo = (data: IModalPhotoProps | IModalVideoProps): data is IModalVideoProps => {
    return 'video' in data ? true : false;
  };

  return (
    <S.ModalContent>
      {isVideo(props) ? (
        <S.Video autoPlay poster={import.meta.env.VITE_STRAPI_URL + props.poster} controls>
          <source src={import.meta.env.VITE_STRAPI_URL + props.video} type="video/mp4" />
        </S.Video>
      ) : (
        <Img
          src={props.img}
          srcPreview={props.imgPreview}
          externalUrl={import.meta.env.VITE_STRAPI_URL}
          alt="Фото"
          style={{ objectFit: 'contain' }}
        />
      )}

      <S.Button onClick={props.onClose}>
        <IconCross />
      </S.Button>
    </S.ModalContent>
  );
}
