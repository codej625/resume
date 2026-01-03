import { AppBar, Toolbar, Typography, Container } from "@mui/material";
import "@/assets/css/common.css";

export default function Header() {
  return (
    <header>
      <AppBar position="static" sx={{ bgcolor: "background.default", color: "text.primary" }}>
        <Container maxWidth="lg">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Resume
            </Typography>
            {/* 
              <Button color="inherit" href="#personalInformation">인적사항</Button>
              <Button color="inherit" href="#selfIntroduction">자기소개</Button>
              <Button color="inherit" href="#workExperience">경력사항</Button>
              <Button color="inherit" href="#projects">프로젝트</Button>
              <Button color="inherit" href="#skills">보유기술</Button>
              <Button color="inherit" href="#others">기타</Button>
            */}
          </Toolbar>
        </Container>
      </AppBar>
    </header>
  );
}
