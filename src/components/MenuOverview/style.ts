import styled from "styled-components";

import { maxMediaQuery } from "@/theme/utils";

export const StyledDiv = styled.div`
  padding-bottom: 20px;

  .menu-title-wrapper {
    margin-bottom: 20px;
  }

  .menu-list-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    column-gap: 20px;
    ${maxMediaQuery("md")} {
      grid-template-columns: 1fr;
    }
  }
`;
