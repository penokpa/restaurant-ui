import styled, { css } from "styled-components";

type StyleProps = {
  $iconBgColor?: string;
  $bgColor?: string;
};

export const StyledFooter = styled.footer<StyleProps>`
  ${({ theme, $iconBgColor = "#f2f2f2", $bgColor = "#fff" }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
    text-align: center;
    background-color: ${$bgColor};

    .footer-icon-list {
      display: flex;
      margin-bottom: 10px;
      gap: 10px;

      .footer-icon {
        &.icon-radius {
          background-color: ${$iconBgColor};
          border-radius: 50%;
        }
      }
    }

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
