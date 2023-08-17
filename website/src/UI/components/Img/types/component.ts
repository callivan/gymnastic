type Img = React.ComponentPropsWithRef<'img'>;

interface IImgOwnProps {
  src: string;
  srcPreview: string;
  alt?: string;
  externalUrl?: string;
}

export type TImgProps = Omit<Img, keyof IImgOwnProps> & IImgOwnProps;
