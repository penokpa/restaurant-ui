import styled, { css, DefaultTheme } from "styled-components";

import { mediaQuery, maxMediaQuery } from "@/theme/utils";

type StyleProps = {
  theme: DefaultTheme;
  $headerheight?: string;
  $navcolor?: string;
  $navhovercolor?: string;
  $navactivecolor?: string;
  $logowidth?: string;
  $logoheight?: string;
};

export const StyledDiv = styled.div<StyleProps>`
  ${({
    theme,
    $headerheight = "90px",
    $navcolor = "#000",
    $navhovercolor = "grey",
    $navactivecolor = "grey",
    $logowidth = "100px",
    $logoheight = "70px",
  }) => css`
    position: relative;
    z-index: 100;
    width: 100%;
    background-color: #fff;

    @keyframes slideDown {
      from {
        transform: translateY(-100%);
      }
      to {
        transform: translateY(0);
      }
    }

    &.sticky {
      position: fixed;
      width: 100%;
      backdrop-filter: blur(10px);
      animation: slideDown 0.35s ease-out;

      &.showBoxShadow {
        box-shadow: 0 5px 16px rgba(0, 0, 0, 0.1);
      }
    }

    .header-wrapper {
      display: flex;
      justify-content: space-between;
      height: ${$headerheight};

      .logo-wrapper {
        display: flex;
        justify-content: center;
        position: relative;
        text-decoration: none;
        font-family: ${theme.font.defaultSystemTheme};
        overflow: hidden;
        margin-top: 10px;
        width: ${$logowidth};
        height: ${$logoheight};

        &.box-shadow {
          box-shadow: 0 5px 16px rgba(0, 0, 0, 0.1);
        }

        &.float-logo {
          width: 140px;
          height: 140px;

          ${maxMediaQuery("md")} {
            width: 120px;
            height: 120px;
          }
        }

        &.circle {
          border-radius: 50%;
        }

        img {
          vertical-align: middle;
          width: 100%;
          height: 100%;
        }

        .logo-title {
          display: flex;
          align-self: center;
          color: ${theme.color.primary};
          text-transform: uppercase;
          letter-spacing: 0.25em;
          font-size: 22px;
          line-height: 27.2px;
          position: relative;
          &::before {
            position: absolute;
            content: "";
            bottom: -8px;
            height: 2px;
            width: 100%;
            visibility: hidden;
            background-color: ${theme.color.white["100"]};
            -webkit-transform: scaleX(0);
            transform: scaleX(0);
            -webkit-transition: all 0.3s ease-in-out 0s;
            transition: all 0.3s ease-in-out 0s;
          }
          &:hover {
            &::before {
              visibility: visible;
              -webkit-transform: scaleX(1);
              transform: scaleX(1);
            }
          }

          ${mediaQuery("md")} {
            font-size: 12px;
          }
        }
      }

      .menu-wrapper {
        display: flex;
        align-items: center;
        gap: 10px;

        ul {
          list-style: none;
          display: flex;
          gap: 20px;
          font-size: 18px;
          ${maxMediaQuery("md")} {
            display: none;
          }

          .menu-list {
            cursor: pointer;
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
              opacity: 0.8;
              color: ${$navhovercolor};
              &::before {
                visibility: visible;
                -webkit-transform: scaleX(1);
                transform: scaleX(1);
              }
            }

            &.active {
              color: ${$navactivecolor};
              &::before {
                visibility: visible;
                transform: scaleX(1);
                -webkit-transform: scaleX(1);
                background-color: ${$navactivecolor};
              }
            }
            a {
              color: inherit;
            }
          }
        }

        .menu-link {
          outline: none;
          background-color: transparent;
          border: none;
          font-size: 24px;
          line-height: 24px;
          letter-spacing: 0.25em;
          color: ${$navcolor};
          text-transform: uppercase;
          position: relative;
          cursor: pointer;
          transition: all 0.4 ease-in-out;
          &:hover {
            opacity: 0.8;
          }

          ${mediaQuery("md")} {
            display: none;
          }
        }
      }
    }
  `}
`;
