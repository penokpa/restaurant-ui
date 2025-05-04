import styled, { css } from "styled-components";

import defaultBgImage from "@/assets/image/fade-mountain.png";

type StyleProps = {
  $bgImage?: string;
  $sectionHeight?: string;
};

export const StyledDiv = styled.div<StyleProps>`
  ${({ $bgImage = defaultBgImage, $sectionHeight = "80vh" }) => css`
    background-image: url(${$bgImage});
    height: ${$sectionHeight};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50%;
    position: relative;
    overflow: hidden;
    cursor: pointer;

    .play-btn-wrapper {
      width: 100%;
      height: 100%;
      position: relative;
      z-index: 5;

      .play-icon-wrapper {
        cursor: pointer;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        height: 100px;
        width: 100px;
        cursor: pointer;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  `}
`;
