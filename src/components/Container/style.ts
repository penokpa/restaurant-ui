import styled from "styled-components";

import { maxMediaQuery } from "@/theme/utils";

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

  ${maxMediaQuery("md")} {
    max-width: 720px;
    padding-left: 15px;
    padding-right: 15px;
  }

  ${maxMediaQuery("lg")} {
    max-width: 960px;
  }

  ${maxMediaQuery("xl")} {
    max-width: 100%;
  }

  ${maxMediaQuery("sm")} {
    max-width: 100%;
  }
`;

export default ContainerWrapper;
