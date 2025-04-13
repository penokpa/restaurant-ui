import styled, { css, DefaultTheme } from "styled-components";

import { mediaQuery } from "@/theme/utils";

type Props = {
  theme: DefaultTheme;
  bgImage: string;
};

export const StyledDiv = styled.div<Props>`
  ${({ theme, bgImage }) => css`
    padding: 60px 0;
    background: ${bgImage ? `url(${bgImage})` : "none"} no-repeat 50% fixed;
    background-size: cover;
    width: 100vw;

    .oppening-hours-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 40px;
      position: relative;
      z-index: 5;
      .oppening-hour-info {
        text-transform: uppercase;
        text-align: center;
        ${mediaQuery("md")} {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }
        .p {
          color: #000000;
          font-size: 16px;
          font-weight: 400;
        }
      }

      .order-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
        .location-wrapper {
          display: flex;
          gap: 10px;
          align-items: center;

          img {
            width: 20px;
            object-fit: contain;
          }

          a {
            color: ${theme.color.black["100"]};
            text-decoration: underline;
            font-weight: 400;
          }
        }
      }
    }
  `}
`;
