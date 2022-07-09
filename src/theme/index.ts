import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  direction: "rtl",
  palette: {
    primary: {
      main: "rgb(255, 168, 46)",
    },
    error: {
      main: "#E05955",
    },
    success: {
      main: "#36D78D",
    },
    info: {
      main: "#95A0BE",
    },
    warning: {
      main: "#FFC220",
    },
  },
});
