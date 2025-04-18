import styled, { css } from "styled-components";

import { maxMediaQuery } from "@/theme/utils";

export const StyledSection = styled.section`
  ${({ theme }) => css`
    padding-bottom: 3em;

    ${maxMediaQuery("md")} {
      padding-top: 0;
    }

    .our-story-wrapper {
      margin-top: 40px;
      color: ${theme.color.primary};
      display: flex;
      flex-direction: column;
      gap: 10px;

      ${maxMediaQuery("md")} {
        gap: 10px;
      }
    }
  `}
`;
