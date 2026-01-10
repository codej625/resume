import { Box, Container, Stack, Typography } from "@mui/material";
import "@/assets/css/common.css";

export default function Footer() {
  return (
    <footer className="footer">
      <Box sx={{ bgcolor: "primary.main", pt: 3, pb: 3, color: "white" }}>
        <Container maxWidth="lg">
          <Stack
            justifyContent="center"
            alignItems="center"
          >
            <Typography 
              variant="body2" 
              sx={{ color: "white", opacity: 0.8, textAlign: "center" }}
            >
              Copyright© {new Date().getFullYear()} All rights reserved.
            </Typography>
          </Stack>
        </Container>
      </Box>
    </footer>
  );
}