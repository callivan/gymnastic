import ky from 'ky';
import {
  ICoachesResponseAttributes,
  IContactsResponseAttributes,
  IHomePageImageAttributes,
  IMediaPhotosResponseAttributes,
  IMediaVideosResponseAttributes,
  IPriceInfoResponseAttributes,
} from '@types';

const headers = {
  Authorization: `Bearer ${import.meta.env.VITE_STRAPI_TOKEN}`,
};

export const getPrices = async (errorCallback: (message: string) => void) => {
  try {
    const { data }: IPriceInfoResponseAttributes = await ky
      .get(`${import.meta.env.VITE_STRAPI_URL}/api/prices?populate=*&pagination[limit]=-1`, {
        headers,
      })
      .json();

    return data.map((d) => ({
      id: d.id,
      title: d.attributes.title,
      price_infos: d.attributes.info,
    }));
  } catch (err: any) {
    errorCallback(err.message);
    return [];
  }
};

export const getCoaches = async (errorCallback: (message: string) => void) => {
  try {
    const { data }: ICoachesResponseAttributes = await ky
      .get(`${import.meta.env.VITE_STRAPI_URL}/api/coaches?populate=*&pagination[limit]=-1`, {
        headers,
      })
      .json();

    return data.map((d) => ({
      ...d.attributes,
      id: d.id,
      imgUrl: d.attributes.img.data.attributes.formats.md.url,
      imgPreviewUrl: d.attributes.img.data.attributes.formats.preview.url,
      coach_infos: d.attributes.info,
    }));
  } catch (err: any) {
    errorCallback(err.message);
    return [];
  }
};

export const getMedias = async (errorCallback: (message: string) => void) => {
  try {
    const photoData: IMediaPhotosResponseAttributes = await ky
      .get(`${import.meta.env.VITE_STRAPI_URL}/api/photos?populate=*&pagination[limit]=-1`, {
        headers,
      })
      .json();
    const videoData: IMediaVideosResponseAttributes = await ky
      .get(`${import.meta.env.VITE_STRAPI_URL}/api/videos?populate=*&pagination[limit]=-1`, {
        headers,
      })
      .json();

    const transformedPhoto = photoData.data.map((d) => ({
      id: d.id,
      img: d.attributes.img.data.attributes.formats.md.url,
      imgPreview: d.attributes.img.data.attributes.formats.preview.url,
      imgSlider: d.attributes.img.data.attributes.formats.s.url,
    }));
    const transformedVideo = videoData.data.map((d) => ({
      id: d.id + 'video',
      video: d.attributes.video.data.attributes.url,
      poster: d.attributes.poster.data.attributes.formats.s.url,
    }));

    const shuffle = [...transformedPhoto, ...transformedVideo];

    for (let i = shuffle.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffle[i], shuffle[j]] = [shuffle[j], shuffle[i]];
    }

    return shuffle;
  } catch (err: any) {
    errorCallback(err.message);
    return [];
  }
};

export const getContacts = async (errorCallback: (message: string) => void) => {
  try {
    const { data }: IContactsResponseAttributes = await ky
      .get(`${import.meta.env.VITE_STRAPI_URL}/api/contact?populate=*&pagination[limit]=-1`, {
        headers,
      })
      .json();

    return data;
  } catch (err: any) {
    errorCallback(err.message);
  }
};

export const getHomePageImage = async (errorCallback: (message: string) => void) => {
  try {
    const { data }: IHomePageImageAttributes = await ky
      .get(`${import.meta.env.VITE_STRAPI_URL}/api/home-image?populate=*`, {
        headers,
      })
      .json();

    return {
      img: data.attributes.img.data.attributes.url,
      preview: data.attributes.img.data.attributes.formats.preview.url,
    };
  } catch (err: any) {
    errorCallback(err.message);
  }
};
