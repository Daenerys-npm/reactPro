import { DefaultTheme } from "styled-components";
import { createTheme } from "@mui/material/styles";

const theme: DefaultTheme = {
  colors: {
    primary: "#0070f3",
    secondary: "#1c1c1c",
    background: "#f0f0f0",
    text: "#333333",
    border: "#eaeaea",
  },
  fonts: {
    main: "Arial, sans-serif",
    heading: "Georgia, serif",
  },
  spacing: (factor: number) => `${factor * 8}px`, // Example spacing function
};

// Create a MUI theme based on the styled-components theme
const muiTheme = createTheme({
  palette: {
    primary: {
      main: theme.colors.primary,
    },
    secondary: {
      main: theme.colors.secondary,
    },
    background: {
      default: theme.colors.background,
    },
    text: {
      primary: theme.colors.text,
    },
  },
  typography: {
    fontFamily: theme.fonts.main,
  },
});

export { theme, muiTheme };
