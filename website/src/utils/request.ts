import ky from 'ky';
import {
  IAddressesResponseAttributes,
  ICoachesResponseAttributes,
  IMediaPhotosResponseAttributes,
  IMediaVideosResponseAttributes,
  IPriceInfoResponseAttributes,
  ISocialResponseAttributes,
} from '@types';
import { IPhonsResponseAttributes } from 'src/types/IPhone';

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
      price_infos: d.attributes.price_infos.data.map((d) => ({
        ...d.attributes,
        id: d.id,
      })),
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
      coach_infos: d.attributes.coach_infos
        ? d.attributes.coach_infos.data.map((d) => ({ id: d.id, ...d.attributes }))
        : [],
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

export const getAddresses = async (errorCallback: (message: string) => void) => {
  try {
    const { data }: IAddressesResponseAttributes = await ky
      .get(`${import.meta.env.VITE_STRAPI_URL}/api/addresses?populate=*&pagination[limit]=-1`, {
        headers,
      })
      .json();

    return data.map((d) => ({ ...d.attributes, id: d.id }));
  } catch (err: any) {
    errorCallback(err.message);
    return [];
  }
};

export const getPhons = async (errorCallback: (message: string) => void) => {
  try {
    const { data }: IPhonsResponseAttributes = await ky
      .get(`${import.meta.env.VITE_STRAPI_URL}/api/phones?populate=*&pagination[limit]=-1`, {
        headers,
      })
      .json();

    return data.map((d) => ({ ...d.attributes, id: d.id }));
  } catch (err: any) {
    errorCallback(err.message);
    return [];
  }
};

export const getSocial = async (errorCallback: (message: string) => void) => {
  try {
    const { data }: ISocialResponseAttributes = await ky
      .get(`${import.meta.env.VITE_STRAPI_URL}/api/socials?populate=*&pagination[limit]=-1`, {
        headers,
      })
      .json();

    return data.map((d) => ({ ...d.attributes, id: d.id }));
  } catch (err: any) {
    errorCallback(err.message);
    return [];
  }
};
