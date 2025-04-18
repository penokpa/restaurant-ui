import styled, { css, DefaultTheme } from "styled-components";

import { mediaQuery } from "@/theme/utils";

interface ButtonStyleProps {
  bgcolor?: string;
  color?: string;
  theme: DefaultTheme;
}

const defaultStyle = css<ButtonStyleProps>`
  text-decoration: none;
  height: 3.5em;
  line-height: 3.5em;
  color: ${({ color, theme }) => color || theme.color.white["100"]};
  display: inline-block;
  padding: 0 1.75em;
  outline: none;
  font-family: ${({ theme }) => theme.font.defaultSystemTheme};
  font-weight: 600;
  transition: all 0.2s ease-in-out;
  text-align: center;
  letter-spacing: 2px;
  cursor: pointer;

  &.contained {
    background-color: ${({ bgcolor, theme }) => bgcolor || theme.color.primary};
    box-shadow: none;
    color: ${({ color, theme }) => color || theme.color.white["100"]};
    border: 1px solid ${({ bgcolor, theme }) => bgcolor || theme.color.primary};
    height: 100%;

    &:hover {
      opacity: 0.8;
    }
  }

  &.outline {
    box-shadow: none;
    color: ${({ color, theme }) => color || theme.color.primary};
    border: 2px solid ${({ theme }) => theme.color.primary};
    height: 100%;

    &:hover {
      border: 2px solid ${({ theme }) => theme.color.primary};
      background-color: ${({ theme }) => theme.color.primary};
      color: ${({ theme }) => theme.color.white["100"]};
    }
  }

  &.letter-spacing {
    letter-spacing: 2px;
  }

  &.md {
    width: 300px;
    font-size: 18px;

    ${mediaQuery("md")} {
      width: 220px;
      font-size: 14px;
    }
  }

  &.lg {
    width: 450px;
    font-size: 20px;

    ${mediaQuery("md")} {
      width: 320px;
      font-size: 16px;
    }
  }

  &.disabled,
  &.isLoading {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export const StyledButton = styled.button<ButtonStyleProps>`
  ${defaultStyle}
`;

export const StyledLink = styled.a<ButtonStyleProps>`
  ${defaultStyle}
`;
