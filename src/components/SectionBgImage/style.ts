import styled, { css } from "styled-components";

type StyleProps = {
  $bgImage?: string;
  $sectionHeight?: string;
};

export const StyledDiv = styled.div<StyleProps>`
  ${({ $bgImage, $sectionHeight = "600px" }) => css`
    &.section-image-wrapper {
      background-image: url(${$bgImage});
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      height: ${$sectionHeight};
      background-position: 50%;

      position: relative;
      background-size: cover;
      .menu-title-content {
        z-index: 2;
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 10px;

        .section-title {
          padding-top: 0 !important;
        }
      }
    }
  `}
`;
