import { breakpoints } from "./breakPoints";

export const mediaQuery = (key: keyof typeof breakpoints) =>
  `@media (min-width: ${breakpoints[key]})`;

export const maxMediaQuery = (key: keyof typeof breakpoints) =>
  `@media (max-width: ${breakpoints[key]})`;
