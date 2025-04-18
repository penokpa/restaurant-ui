import styled, { css } from "styled-components";

import { ColProps } from ".";

type StyledProps = {
  $xs?: number;
  $sm?: number;
  $md?: number;
  $lg?: number;
  $xl?: number;
  $xxl?: number;
  $xxxl?: number;
};

export const getWidthString = (span: number) => {
  // if (span)
  const width = (span / 12) * 100;
  return `flex: 0 0 ${width}%; max-width: ${width}%`;
};

const ColWrapper = styled.div<ColProps & StyledProps>`
  ${({ $xs, $sm, $md, $lg, $xl, $xxl, $xxxl }) => css`
    position: relative;
    width: 100%;
    padding-left: 15px;
    padding-right: 15px;
    flex-grow: 1;
    flex-basis: 0;
    max-width: 100%;

    ${$xs &&
    `@media only screen and (min-width: 361px) {
          ${getWidthString($xs)}
        }
      `}

    ${$sm &&
    `@media only screen and (min-width: 576px) {
          ${getWidthString($sm)}
        }
      `}
  
      ${$md &&
    `@media only screen and (min-width: 768px) {
          ${getWidthString($md)}
        }
      `}
  
      ${$lg &&
    `@media only screen and (min-width: 992px) {
          ${getWidthString($lg)}
        }
      `}
  
      ${$xl &&
    `@media only screen and (min-width: 1200px) {
          ${getWidthString($xl)}
        }
      `}
  
      ${$xxl &&
    `@media only screen and (min-width: 1441px) {
          ${getWidthString($xxl)}
        }
      `}
  
      ${$xxxl &&
    `@media only screen and (min-width: 1681px) {
          ${getWidthString($xxxl)}
        }
      `}
  `}
`;

export default ColWrapper;
