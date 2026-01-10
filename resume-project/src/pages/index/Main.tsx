import {
  Box,
  Container,
  Typography,
  Chip,
  Stack,
  Link,
  Paper,
} from "@mui/material";
import identificationPicture from "@/assets/img/identification_picture.jpg";

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
                  Full Stack Developer
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
                <strong>"뛰어난 한 명의 개발자는 하나의 기업가치를 가진다"</strong>
                라는 신념을 갖고 있습니다.
              </Typography>
              <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
                제가 잘하는 일은 문제를 인식하고, 다양한 역할을 수행하며 해결하는
                것입니다.
              </Typography>
              <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
                요구사항을 파악하여 기술적인 해결책을 제시하고 팀원, 협력부서 더 나아가<br />
                클라이언트와의 원활한 커뮤니케이션 능력을 갖추고 있습니다.
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                그간 쌓아온 노하우를 십분 활용하여 조직의
                발전에 이바지하고 싶습니다.
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
              <Box sx={{ mb: 3 }}>
                <Typography
                  variant="subtitle2"
                  sx={{
                    mb: 1,
                    color: "text.secondary",
                    fontWeight: 600,
                  }}
                >
                  Core Skills
                </Typography>
                <Stack direction="row" flexWrap="wrap" sx={{ gap: 1 }}>
                  {["Java", "Javascript", "SQL", "AWS", "K3s", "Docker", "Git"].map((skill) => (
                    <Chip
                      key={skill}
                      label={skill}
                      sx={{
                        bgcolor: "primary.main",
                        color: "white",
                        fontWeight: 500,
                      }}
                    />
                  ))}
                </Stack>
              </Box>
              <Box>
                <Typography
                  variant="subtitle2"
                  sx={{
                    mb: 1,
                    color: "text.secondary",
                    fontWeight: 600,
                  }}
                >
                  Additional Skills
                </Typography>
                <Stack direction="row" flexWrap="wrap" sx={{ gap: 1 }}>
                  {["PHP 5", "Python", "Web Publishing", "SEO", "Bare Metal"].map((skill) => (
                    <Chip
                      key={skill}
                      label={skill}
                      variant="outlined"
                      sx={{
                        borderColor: "divider",
                        color: "text.primary",
                        fontWeight: 500,
                      }}
                    />
                  ))}
                </Stack>
              </Box>
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

            {/* 경력 사항 */}
            <Paper elevation={2} sx={{ p: 4, bgcolor: "background.paper" }}>
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
                경력 사항
              </Typography>
              <Stack spacing={3}>
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    쿤텍
                  </Typography>
                  <Typography variant="caption" sx={{ color: "text.secondary" }}>
                    SCS 연구개발팀 / 선임 / 2025.01 ~ 현재
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    나이콤
                  </Typography>
                  <Typography variant="caption" sx={{ color: "text.secondary" }}>
                    R&D 웹 개발팀 / 대리 / 2024.05 ~ 2024.10
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    엠플랜잇
                  </Typography>
                  <Typography variant="caption" sx={{ color: "text.secondary" }}>
                    기업부설연구소 / 선임 / 2022.01 ~ 2024.04
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    컴퓨존
                  </Typography>
                  <Typography variant="caption" sx={{ color: "text.secondary" }}>
                    전산팀 / 팀원 / 2017.09 ~ 2021.01
                  </Typography>
                </Box>
              </Stack>
            </Paper>
          </Box>
        </Stack>
      </Container>
    </main>
  );
}
