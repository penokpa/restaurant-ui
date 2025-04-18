import styled from "styled-components";

import { mediaQuery } from "@/theme/utils";

const ContainerWrapper = styled.div`
  padding-right: 30px;
  padding-left: 30px;
  margin-right: auto;
  margin-left: auto;
  width: 100%;
  /* &.container-fluid {
    padding-right: 5px;
    padding-left: 5px;
  } */

  ${mediaQuery("md")} {
    max-width: 720px;
  }

  ${mediaQuery("lg")} {
    max-width: 960px;
  }

  ${mediaQuery("xl")} {
    max-width: 100%;
  }

  ${mediaQuery("sm")} {
    max-width: 100%;
  }
`;

export default ContainerWrapper;
