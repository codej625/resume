import { Box, Container, Typography, Link, Stack } from "@mui/material";
import "@/assets/css/common.css";

export default function Footer() {
  return (
    <footer className="footer">
      <Box sx={{ bgcolor: "primary.main", pt: 3, pb: 3, color: "white" }}>
        <Container maxWidth="lg">
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            justifyContent="center"
            alignItems="center"
            flexWrap="wrap"
          >
            <Typography>dkwksla@naver.com</Typography>
            <Link
              href="tel:01022695901"
              sx={{ color: "white", textDecoration: "none" }}
            >
              010-2269-5901
            </Link>
            <Link
              href="https://github.com/codej625"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "white", textDecoration: "none" }}
            >
              GitHub
            </Link>
          </Stack>
        </Container>
      </Box>
    </footer>
  );
}