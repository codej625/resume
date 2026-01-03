import { RouterProvider } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { router } from "@/routes";

// Material UI 테마 설정
const theme = createTheme({
  // 여기서 테마 커스터마이징
  // ex) palette: { primary: { main: '#1976d2' } }
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

