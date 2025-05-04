import { useEffect, useState } from "react";

import { ThemeProvider as StyledThemeProvider } from "styled-components";

import { GlobalStyles } from "@/theme/GlobalStyles";
import { theme } from "@/theme/index";

export const ThemeProvider = ({
  children,
  // theme,
}: {
  children: React.ReactNode;
  // theme?: typeof defaultTheme;
}) => {
  const [isMounted, setIsMounted] = useState(false);
  // const styleTheme = theme || defaultTheme;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <StyledThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </StyledThemeProvider>
  );
};
