import { Box, Container, Typography, Link, Stack } from "@mui/material";
import "@/assets/css/common.css";

export default function Footer() {
  return (
    <footer className="footer">
      <Box
        sx={{
          bgcolor: "background.default",
          pt: 3,
          pb: 3,
        }}
      >
        <Container maxWidth="lg">
          <Box className="footer__title"></Box>
          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            alignItems="center"
            flexWrap="wrap"
          >
            <Typography component="span">✉️</Typography>
            <Typography className="gradient-color">dkwksla@naver.com</Typography>
            <Typography component="span">📞</Typography>
            <Link
              className="gradient-color"
              href="tel:01022695901"
              underline="hover"
              sx={{ color: "inherit" }}
            >
              010-2269-5901
            </Link>
            <Typography component="span">💻</Typography>
            <Link
              className="gradient-color"
              href="https://github.com/codej625"
              target="_blank"
              rel="noopener noreferrer"
              underline="hover"
              sx={{ color: "inherit" }}
            >
              GitHub
            </Link>
          </Stack>
        </Container>
      </Box>
    </footer>
  );
}