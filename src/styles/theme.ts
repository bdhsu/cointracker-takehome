import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: '"Open Sans", sans-serif',
    body: '"Open Sans", sans-serif',
  },
  fontSizes: {
    xs: "12.8px",
    sm: "16px",
    md: "20px",
    lg: "25px",
  },
  fontWeights: {
    normal: 400,
    medium: 600,
    bold: 700,
  },
  lineHeights: {
    xs: "19.2px",
    sm: "24px",
    md: "30px",
    lg: "37.5px",
    xl: "46.88px",
    "2xl": "58.59px",
    "3xl": "73.25px",
  },
});

export default theme;
