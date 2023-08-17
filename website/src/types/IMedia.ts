interface IMediaVideoAttributes {
  id: string;
  attributes: {
    video: { data: { attributes: { url: string } } };
    poster: { data: { attributes: { formats: { s: { url: string } } } } };
  };
}

interface IMediaPhotoAttributes {
  id: string;
  attributes: {
    img: {
      data: {
        attributes: {
          formats: {
            s: { url: string };
            md: { url: string };
            preview: { url: string };
          };
        };
      };
    };
  };
}

export interface IMediaPhotosResponseAttributes {
  data: IMediaPhotoAttributes[];
}

export interface IMediaVideosResponseAttributes {
  data: IMediaVideoAttributes[];
}
