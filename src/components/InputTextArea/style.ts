import styled, { css } from "styled-components";

export const StyledDiv = styled.div`
  ${({ theme }) => css`
    font-family: ${theme.font.defaultSystemTheme};

    &.error {
      .label-wrapper {
        color: red;
      }
    }

    .label-wrapper {
      color: ${theme.color.primary};
      display: block;
      font-size: 14px;
      letter-spacing: 0.25em;
      margin: 0 0 1em;
      text-transform: uppercase;
    }

    .error-msg {
      color: red;
      margin-top: 10px;
    }
  `}
`;

export const InputTextAreaStyle = styled.textarea`
  ${({ theme }) => css`
    height: 200px;
    width: 100%;
    background: rgba(212, 212, 255, 0.035);
    border: 1px solid #bababa;
    outline: 0;
    padding: 0.75em 1em;
    font-family: ${theme.font.defaultSystemTheme};
    font-size: 16px;
    color: ${theme.color.primary};
    letter-spacing: 1px;

    &::placeholder {
      font-size: 18px;
    }

    &:focus {
      border: 1px solid #bababa;
    }
    &.error {
      border: 1px solid red;
    }
    &.disabled {
      cursor: not-allowed;
    }
  `}
`;
