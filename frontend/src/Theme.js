import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#17215E",
    },
    secondary: {
      main: "#f4b52d",
    },
    text: {
      primary: "#17215E",
    },
  },
  typography: {
    fontFamily: "Montserrat",
    body1: {
      fontSize: 20,
      color: "#49221a",
    },
    body2: {
      fontSize: 16,
    },
    allVariants: {
      color: "#17215E",
    },
    h4: {
      fontWeight: 600,
      fontSize: 32,
    },
    h5: {
     color: "#ccaf0d",
      fontSize: 24,
      fontWeight: 500,
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "6px 6px 20px 6px #00000096",
          borderRadius: 20,
          
        
          
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: "12px 24px",
          color: "#ccaf0d",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 400,
          fontSize: "1.2rem",
          padding: "10px",
          minWidth: 138,
          color: "#ccaf0d",
          
        },
        contained: {
          boxShadow: "6px 6px 20px 6px #ccaf0d",
          
        },
        containedSecondary: {
          color: "#ccaf0d",
        },
      },
    },
  },
});

export default function Theme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
