import styled, { css } from "styled-components";

export const StyledFooter = styled.footer`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
    text-align: center;

    .copyright {
      list-style: none;
      font-family: ${theme.font.defaultSystemTheme};
      margin-top: 20px;
      opacity: 0.3;
      color: ${theme.color.primary};
      letter-spacing: 2px;
      word-break: break-all;
    }
  `}
`;
