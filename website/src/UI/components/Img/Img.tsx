import { useLayoutEffect, useState } from 'react';
import * as S from './Img.styles';
import { TImgProps } from './types/component';

export function Img({ src, srcPreview, externalUrl, alt = 'Фото', ...props }: TImgProps) {
  const srcPreviewPath = (externalUrl ? externalUrl + srcPreview : srcPreview) + '?f=webp&q=75';
  const srcPath = (externalUrl ? externalUrl + src : src) + '?f=webp&q=75';

  const [img, setImg] = useState<string>(srcPreviewPath);

  const className = img === srcPath ? 'is-loaded' : '';

  useLayoutEffect(() => {
    const img = new Image();

    const handleLoad = () => {
      setImg(srcPath);
    };

    img.src = srcPath;
    img.addEventListener('load', handleLoad);

    return () => {
      img.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <S.Img className={[className, props.className].join(' ')} src={img} alt={alt} {...props} />
  );
}
