import styled from "styled-components";

import { maxMediaQuery } from "@/theme/utils";

export const StyledDiv = styled.div`
  .image-gallery-wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-top: 60px;

    ${maxMediaQuery("md")} {
      grid-template-columns: 1fr;
    }

    .image-wrapper {
      height: 500px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        cursor: pointer;
      }
    }
  }
`;
