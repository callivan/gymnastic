import styled from 'styled-components';

export const ModalContent = styled('div')({
  position: 'relative',

  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',

  width: '90dvw',
  maxWidth: '1280px',
  height: '90dvh',
  maxHeight: '1280px',
});

export const Video = styled('video')({
  width: '100%',
  height: '100%',
});

export const Button = styled('button')(({ theme: { colors } }) => ({
  position: 'absolute',
  top: '24px',
  right: '24px',

  color: colors.white,
}));
