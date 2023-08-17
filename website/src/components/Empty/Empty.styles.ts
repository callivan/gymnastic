import styled from 'styled-components';

export const Wrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
});

export const Text = styled('span')(({ theme }) => ({
  fontSize: theme.fonts.fontSizes[32],
  fontWeight: theme.fonts.fontWeight.bold,
  lineHeight: theme.fonts.lineHeight,
  color: theme.colors.white,
  textAlign: 'center',
}));

export const Button = styled('button')(({ theme }) => ({
  fontSize: theme.fonts.fontSizes[16],
  fontWeight: theme.fonts.fontWeight.regular,
  lineHeight: theme.fonts.lineHeight,
  color: theme.colors.white,

  boxShadow: `0px 0px 0px 1px ${theme.colors.white}`,
  borderRadius: '5px',

  padding: '6px 10px',
}));
