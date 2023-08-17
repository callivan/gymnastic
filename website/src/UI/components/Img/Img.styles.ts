import styled from 'styled-components';

export const Img = styled('img')({
  width: '100%',
  height: '100%',

  objectFit: 'cover',
  objectPosition: 'center',

  filter: 'blur(3px)',

  transition: 'filter .3s ease-in-out',

  '&.is-loaded': {
    filter: 'blur(0px)',
  },
});
