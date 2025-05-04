import styled, { css } from "styled-components";

import { maxMediaQuery } from "@/theme/utils";

export const StyledDiv = styled.div`
  ${({ theme }) => css`
    .contact-wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 40px;
      padding: 80px 0;

      &.contact-only {
        grid-template-columns: 1fr;
      }

      ${maxMediaQuery("md")} {
        grid-template-columns: 1fr;
      }

      .contact-info-warpper {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        overflow: hidden;

        .contact-title {
          padding: 20px;
          border-bottom: 1px solid #f2f2f2;

          ${maxMediaQuery("md")} {
            padding-left: 0px;
          }

          .h4 {
            font-weight: 600;
            font-size: 22px;
          }
        }

        .contact-method {
          display: flex;
          gap: 20px;
          padding: 20px;
          position: relative;
          width: 100%;
          ${maxMediaQuery("md")} {
            padding: 40px 0;
            overflow: hidden;
          }

          &::before {
            position: absolute;
            content: "";
            border-bottom: 1px solid #f2f2f2;
            width: calc(100vw + 3em);
            margin-left: -40px;
            bottom: 0;
          }

          .content-info {
            display: flex;
            flex-direction: column;
            gap: 10px;
            align-items: center;
            justify-content: center;
            transition: 0.3s all ease-in-out;
            &:hover {
              color: ${theme.color.primary};
            }

            a {
              text-decoration: none;
              color: inherit;
              &:hover {
                text-decoration: underline;
              }
            }

            span {
              line-height: 28px;
            }
          }
        }
      }
    }
  `}
`;
