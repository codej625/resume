import { RouterProvider } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { router } from "@/routes";
import { fontSize, fontWeight } from "@/assets/css/font";

// Material UI 테마 설정
const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1a1a1a",
      light: "#404040",
      dark: "#000000",
    },
    secondary: {
      main: "#6366f1",
      light: "#818cf8",
      dark: "#4f46e5",
    },
    background: {
      default: "#fafafa",
      paper: "#ffffff",
    },
    text: {
      primary: "#1a1a1a",
      secondary: "#6b7280",
    },
    divider: "rgba(0, 0, 0, 0.12)",
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
    h4: {
      fontSize: fontSize.display,
      fontWeight: fontWeight.bold,
      letterSpacing: "-0.02em",
      lineHeight: 1.3,
    },
    h5: {
      fontSize: fontSize.heading,
      fontWeight: fontWeight.bold,
      letterSpacing: "-0.01em",
      lineHeight: 1.4,
    },
    h6: {
      fontSize: fontSize.subheading,
      fontWeight: fontWeight.medium,
      letterSpacing: "0em",
      lineHeight: 1.4,
    },
    body1: {
      fontSize: fontSize.body,
      fontWeight: fontWeight.regular,
      lineHeight: 1.7,
    },
    body2: {
      fontSize: fontSize.body,
      fontWeight: fontWeight.regular,
      lineHeight: 1.7,
    },
    caption: {
      fontSize: fontSize.body,
      fontWeight: fontWeight.medium,
      lineHeight: 1.7,
    },
    button: {
      fontSize: fontSize.body,
      fontWeight: fontWeight.medium,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontSize: fontSize.body,
          fontWeight: fontWeight.medium,
          height: "auto",
        },
        label: {
          fontSize: fontSize.body,
          padding: "8px 16px",
        },
      },
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
