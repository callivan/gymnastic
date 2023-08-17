export interface ISliderProps {
  slides: (IModalPhotoProps | IModalVideoProps)[];
}

export interface IModalPhotoProps {
  id: string;
  img: string;
  imgPreview: string;
  imgSlider: string;
  video: never;
  poster: never;
}

export interface IModalVideoProps {
  id: string;
  video: string;
  poster: string;
  img: never;
  imgPreview: never;
  imgSlider: never;
}
