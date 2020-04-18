import styled, { css } from 'styled-components';
import createFontStyles from '../../util/createFontStyles';
import { ButtonProps } from '.';

export const Button = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.15s ease-in-out;
  &:hover,
  &:active,
  &:focus {
    opacity: 0.8;
  }
  &:disabled {
    pointer-events: none;
    opacity: 0.5;
  }
  &:focus {
    outline: 0;
  }

  ${props =>
    props.size === 'small' &&
    css`
      padding: 0.25rem;
      min-height: 2.75rem;
      min-width: 2.75rem;
      ${createFontStyles(props.theme.fonts.b2)};
    `};
  ${props =>
    props.size === 'medium' &&
    css`
      padding: 10px 20px;
      ${createFontStyles(props.theme.fonts.b2)};
    `};
  ${props =>
    props.size === 'large' &&
    css`
      padding: 10px 75px;
      border-radius: 35px;
      ${createFontStyles(props.theme.fonts.h3)};
    `};

  ${props =>
    props.variant === 'primary' &&
    css`
      background-color: ${props => props.theme.colors.secondary};
      color: ${props => props.theme.colors.onSecondary};
      &:hover,
      &:active,
      &:focus {
        opacity: 0.9;
      }
      svg {
        fill: ${props => props.theme.colors.onPrimary};
      }
    `};
  ${props =>
    props.variant === 'secondary' &&
    css`
      background-color: ${props => props.theme.colors.background};
      color: ${props => props.theme.colors.onBackground};
      border-radius: 1.6em;
      border: 0;
    `};
`;
