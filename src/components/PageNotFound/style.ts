import styled, { css } from "styled-components";

type StyleProps = {
  $bgColor?: string;
  $textColor?: string;
};
const StyledSection = styled.main<StyleProps>`
  ${({ $bgColor = "#fff", $textColor = "#000" }) => css`
    &.page-not-found-wrapper {
      padding: 15rem 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 20px;
      border-top: 1px solid #f2f2f2;
      background-color: ${$bgColor};
      .not-found-title {
        font-size: 67px;
        color: ${$textColor};
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 30px;
        .not-found-status-code {
          font-size: 100px;
        }
      }

      .not-found-helper-text {
        font-size: 24px;
        margin: 30px 0;
        color: ${$textColor};
      }
    }
  `}
`;

export default StyledSection;
