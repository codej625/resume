import {
  Box,
  Container,
  Typography,
  Stack,
  Link,
  Paper,
} from "@mui/material";
import identificationPicture from "@/assets/img/identification_picture.jpg";
import Career from "@/pages/index/Career";

export default function Main() {
  return (
    <main>
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
        <Stack direction={{ xs: "column", md: "row" }} spacing={4}>
          {/* 왼쪽 컬럼 - 인적사항 & 사진 */}
          <Box sx={{ width: { xs: "100%", md: "33.333%" }, flexShrink: 0 }}>
            <Paper
              elevation={2}
              sx={{
                p: 3,
                mb: 3,
                bgcolor: "background.paper",
                position: "sticky",
                top: 20,
              }}
            >
              <Box
                component="img"
                src={identificationPicture}
                alt="identification picture"
                sx={{
                  width: "100%",
                  maxWidth: "200px",
                  height: "auto",
                  borderRadius: 2,
                  mb: 3,
                  display: "block",
                  mx: "auto",
                }}
              />
              <Box sx={{ mb: 3 }}>
                <Typography
                  variant="h4"
                  component="h1"
                  sx={{
                    mb: 1,
                    fontWeight: 700,
                    textAlign: "center",
                  }}
                >
                  이 진 우
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "text.secondary",
                    textAlign: "center",
                    mb: 3,
                  }}
                >
                  Full stack Builder
                </Typography>
              </Box>

              <Stack spacing={2}>
                <Box>
                  <Typography
                    variant="caption"
                    sx={{
                      color: "text.secondary",
                      display: "block",
                      mb: 0.5,
                      fontWeight: 600,
                    }}
                  >
                    연락처
                  </Typography>
                  <Link
                    href="tel:01022695901"
                    sx={{
                      color: "text.primary",
                      textDecoration: "none",
                      "&:hover": { textDecoration: "underline" },
                    }}
                  >
                    010-2269-5901
                  </Link>
                </Box>
                <Box>
                  <Typography
                    variant="caption"
                    sx={{
                      color: "text.secondary",
                      display: "block",
                      mb: 0.5,
                      fontWeight: 600,
                    }}
                  >
                    이메일
                  </Typography>
                  <Typography variant="body2">dkwksla@naver.com</Typography>
                </Box>
                <Box>
                  <Typography
                    variant="caption"
                    sx={{
                      color: "text.secondary",
                      display: "block",
                      mb: 0.5,
                      fontWeight: 600,
                    }}
                  >
                    주소
                  </Typography>
                  <Typography variant="body2">경기도 군포시 금정동</Typography>
                </Box>
                <Box>
                  <Typography
                    variant="caption"
                    sx={{
                      color: "text.secondary",
                      display: "block",
                      mb: 0.5,
                      fontWeight: 600,
                    }}
                  >
                    생년월일
                  </Typography>
                  <Typography variant="body2">1991.06.25</Typography>
                </Box>
                <Box>
                  <Typography
                    variant="caption"
                    sx={{
                      color: "text.secondary",
                      display: "block",
                      mb: 0.5,
                      fontWeight: 600,
                    }}
                  >
                    GitHub
                  </Typography>
                  <Typography variant="body2">https://github.com/codej625</Typography>
                </Box>
              </Stack>
            </Paper>
          </Box>

          {/* 오른쪽 컬럼 - 본문 내용 */}
          <Box sx={{ flex: 1, minWidth: 0 }}>
            {/* 간략 소개 */}
            <Paper elevation={2} sx={{ p: 4, mb: 3, bgcolor: "background.paper" }}>
              <Typography
                variant="h5"
                component="h2"
                sx={{
                  mb: 3,
                  fontWeight: 600,
                  pb: 2,
                  borderBottom: "2px solid",
                  borderColor: "primary.main",
                }}
              >
                간략 소개
              </Typography>
              <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
                기획부터 퍼블리싱, 개발, 배포까지 전 과정을 아우르는 8년차 풀스택 빌더 이진우입니다.
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                이커머스, SI/SM, CRM, ERP, 공급망 보안, 키오스크 등 다양한 도메인 경험을 바탕으로 복잡한
                비즈니스 요구사항을 정확히 조율하고 문제를 해결합니다.
              </Typography>
            </Paper>

            {/* Skills */}
            <Paper elevation={2} sx={{ p: 4, mb: 3, bgcolor: "background.paper" }}>
              <Typography
                variant="h5"
                component="h2"
                sx={{
                  mb: 3,
                  fontWeight: 600,
                  pb: 2,
                  borderBottom: "2px solid",
                  borderColor: "primary.main",
                }}
              >
                Skills
              </Typography>
              <Stack spacing={2.5}>
                {[
                  {
                    title: "Language",
                    lines: [
                      "Java / JavaScript / TypeScript",
                      "Python / PHP (Legacy version 5.x)",
                    ],
                  },
                  {
                    title: "Framework / Library",
                    lines: [
                      "Back-end",
                      "- Spring Boot / NestJS / FastAPI",
                      "Front-End",
                      "- React / Next.js / jQuery",
                    ],
                  },
                  {
                    title: "Tool",
                    lines: [
                      "VSC / Cursor / IntelliJ / Postman / PuTTY",
                      "FileZilla / Git / Apache JMeter / DBeaver / iTerm",
                    ],
                  },
                  {
                    title: "Web Publishing",
                    lines: [
                      "HTML5 / CSS3 / JSP (Java Server Pages)",
                      "Thymeleaf (Java Template Engine)",
                      "Smarty (PHP Template Engine)",
                    ],
                  },
                  {
                    title: "OS",
                    lines: ["MacOS / Linux (Ubuntu / Windows)"],
                  },
                  {
                    title: "Database",
                    lines: ["Oracle / MySQL / PostgreSQL / AWS RDB"],
                  },
                  {
                    title: "Cloud, DevOps",
                    lines: [
                      "AWS / Cloudflare / Nginx / Apache Tomcat",
                      "Hyper-V (VM) / K8s (K3s) / Docker / Jenkins",
                    ],
                  },
                  {
                    title: "ETC",
                    lines: ["SEO / GEO / i18n / Harness Engineering"],
                  },
                ].map((group) => (
                  <Box key={group.title}>
                    <Typography
                      variant="h6"
                      component="h3"
                      sx={{ mb: 0.5, color: "text.primary", fontWeight: 700 }}
                    >
                      {group.title}
                    </Typography>
                    {group.lines.map((line) => (
                      <Typography key={line} variant="body2" sx={{ lineHeight: 1.7 }}>
                        {line}
                      </Typography>
                    ))}
                  </Box>
                ))}
              </Stack>
            </Paper>

            {/* 병역 사항 */}
            <Paper elevation={2} sx={{ p: 4, mb: 3, bgcolor: "background.paper" }}>
              <Typography
                variant="h5"
                component="h2"
                sx={{
                  mb: 3,
                  fontWeight: 600,
                  pb: 2,
                  borderBottom: "2px solid",
                  borderColor: "primary.main",
                }}
              >
                병역 사항
              </Typography>
              <Stack direction="row" flexWrap="wrap" sx={{ gap: 2 }}>
                <Box sx={{ flex: { xs: "1 1 100%", sm: "1 1 calc(50% - 8px)", md: "1 1 calc(25% - 12px)" } }}>
                  <Typography
                    variant="caption"
                    sx={{ color: "text.secondary", display: "block", mb: 0.5 }}
                  >
                    병역구분
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    필
                  </Typography>
                </Box>
                <Box sx={{ flex: { xs: "1 1 100%", sm: "1 1 calc(50% - 8px)", md: "1 1 calc(25% - 12px)" } }}>
                  <Typography
                    variant="caption"
                    sx={{ color: "text.secondary", display: "block", mb: 0.5 }}
                  >
                    군별
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    육군
                  </Typography>
                </Box>
                <Box sx={{ flex: { xs: "1 1 100%", sm: "1 1 calc(50% - 8px)", md: "1 1 calc(25% - 12px)" } }}>
                  <Typography
                    variant="caption"
                    sx={{ color: "text.secondary", display: "block", mb: 0.5 }}
                  >
                    최종계급
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    병장
                  </Typography>
                </Box>
                <Box sx={{ flex: { xs: "1 1 100%", sm: "1 1 calc(50% - 8px)", md: "1 1 calc(25% - 12px)" } }}>
                  <Typography
                    variant="caption"
                    sx={{ color: "text.secondary", display: "block", mb: 0.5 }}
                  >
                    복무기간
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    2012.12.06 ~ 2014.09.05
                  </Typography>
                </Box>
              </Stack>
            </Paper>

            {/* 학력 */}
            <Paper elevation={2} sx={{ p: 4, mb: 3, bgcolor: "background.paper" }}>
              <Typography
                variant="h5"
                component="h2"
                sx={{
                  mb: 3,
                  fontWeight: 600,
                  pb: 2,
                  borderBottom: "2px solid",
                  borderColor: "primary.main",
                }}
              >
                학력
              </Typography>
              <Stack spacing={3}>
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    서울디지털대학교
                  </Typography>
                  <Typography variant="caption" sx={{ color: "text.secondary" }}>
                    컴퓨터공학전공 / 학점 3.19 / 졸업
                  </Typography>
                  {/* 
                    <Typography variant="body2" sx={{ fontWeight: 500 }}>
                      2022.03 ~ 2024.02 졸업
                    </Typography> 
                  */}
                </Box>
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    소사고등학교
                  </Typography>
                  <Typography variant="caption" sx={{ color: "text.secondary" }}>
                    인문 계열 / 졸업
                  </Typography>
                  {/* 
                    <Typography variant="body2" sx={{ fontWeight: 500 }}>
                      2007.03 ~ 2010.02 졸업
                    </Typography> 
                  */}
                </Box>
              </Stack>
            </Paper>

            {/* 수상 경력 */}
            <Paper elevation={2} sx={{ p: 4, mb: 3, bgcolor: "background.paper" }}>
              <Typography
                variant="h5"
                component="h2"
                sx={{
                  mb: 3,
                  fontWeight: 600,
                  pb: 2,
                  borderBottom: "2px solid",
                  borderColor: "primary.main",
                }}
              >
                수상 경력
              </Typography>
              <Stack spacing={1.5}>
                <Box>
                  <Typography variant="h6" sx={{  mb: 0.5, fontWeight: 600 }}>
                    애드테크 은상
                  </Typography>
                  <Typography variant="caption" sx={{ mb: 0.5, color: "text.secondary" }}>
                    (사)한국디지털광고협회
                    <br />
                    AI기술을 활용한 디지털마케팅플랫폼, KeyDig (2022)
                  </Typography>
                </Box>
              </Stack>
            </Paper>

            <Career />
          </Box>
        </Stack>
      </Container>
    </main>
  );
}
