import styled, { css, DefaultTheme } from "styled-components";

import { mediaQuery } from "@/theme/utils";

type StyleProps = {
  theme: DefaultTheme;
  $bgcolor?: string;
  $navcolor?: string;
  $navhovercolor?: string;
  $navactivecolor?: string;
};

export const StyledUl = styled.ul<StyleProps>`
  ${({
    theme,
    $bgcolor = "#fff",
    $navcolor = "#000",
    $navhovercolor = "grey",
    $navactivecolor = "grey",
  }) => css`
    &.menu-list-wrapper {
      background-color: ${$bgcolor};
      border-top: 1px solid #f2f2f2;
      height: calc(100% - 90px);
      position: absolute;
      width: 100%;
      overflow: scroll;
      bottom: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 40px;
      list-style: none;
      z-index: 999999;

      li {
        font-family: ${theme.font.defaultSystemTheme};
        &.link-item {
          font-size: 24px;
          position: relative;
          color: ${$navcolor};
          &::before {
            position: absolute;
            content: "";
            bottom: -8px;
            height: 2px;
            width: 100%;
            visibility: hidden;
            background-color: ${$navhovercolor};
            -webkit-transform: scaleX(0);
            transform: scaleX(0);
            -webkit-transition: all 0.3s ease-in-out 0s;
            transition: all 0.3s ease-in-out 0s;
          }
          &:hover {
            a {
              color: ${$navhovercolor};
            }

            &::before {
              visibility: visible;
              -webkit-transform: scaleX(1);
              transform: scaleX(1);
            }
          }

          &.active {
            a {
              color: ${$navactivecolor};
              &::before {
                position: absolute;
                content: "";
                bottom: -8px;
                height: 2px;
                width: 100%;
                left: 0;
                background-color: ${$navactivecolor};
              }
            }
          }

          ${mediaQuery("md")} {
            font-size: 18px;
          }
          a {
            color: inherit;
          }
        }
      }
    }
  `};
`;
