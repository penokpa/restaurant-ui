import styled from "styled-components";

import { maxMediaQuery } from "@/theme/utils";

export const StyledDiv = styled.div`
  &.menu-overiew-wrapper {
    padding-bottom: 30px;
    border-bottom: 1px solid #f2f2f2;

    .menu-overview-title-wrapper {
      margin-bottom: 30px;
      display: flex;
      flex-direction: column;
      gap: 5px;
    }

    .menu-list-wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 30px;
      column-gap: 50px;
      ${maxMediaQuery("md")} {
        grid-template-columns: 1fr;
      }
    }
  }
`;
