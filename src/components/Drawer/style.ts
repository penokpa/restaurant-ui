import styled, { css } from "styled-components";

interface Props {
  $top: number;
  $zIndex: number;
}

export const StyledDrawer = styled.div<Props>`
  ${({ $top, $zIndex }) => css`
    &.drawer-wrapper {
      top: ${$top ? `${$top}px` : 0};
      position: fixed;
      height: 0;
      width: 100%;
      background-color: transparent;
      z-index: ${$zIndex || 1};
      transition: all 0.2s linear;
      border-top: 1px solid black;
      overflow: hidden;

      &.top,
      &.bottom {
        width: 100%;
      }

      &.drawer-open {
        height: 100%;
      }

      .drawer-inner-wrapper {
        .drawer-out-side-click-hanlder {
          width: 100%;
          height: 100%;
          position: absolute;
        }
      }
    }
  `}
`;
