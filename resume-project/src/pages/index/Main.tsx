import {
  Box,
  Container,
  Typography,
  Paper,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Chip,
  Stack,
  Link,
} from "@mui/material";
import identificationPicture from "@/assets/img/identification_picture.jpg";

export default function Main() {
  return (
    <main>
      <section id="personalInformation">
        <Container maxWidth="lg">
          <Box className="personal-information-body">
            <Paper elevation={0} sx={{ bgcolor: "background.default", p: 4 }}>
              <Box className="self-introduction" sx={{ p: 4 }}>
                <Typography variant="h4" component="h2" fontWeight="bold" gutterBottom>
                  👤 간략 소개
                </Typography>
                <Typography variant="body1">
                  <strong>"뛰어난 한 명의 개발자는 하나의 기업가치를 가진다"</strong>
                  라는
                  <br />
                  신념을 갖고 있습니다.
                </Typography>
                <Typography variant="body1">
                  제가 잘하는 일은 문제를 인식하고,
                  <br />
                  다양한 역할을 수행하며 해결하는 것입니다.
                </Typography>
                <Typography variant="body1">
                  요구사항을 파악하여 기술적인 해결책을 제시하고
                  <br />
                  팀원, 협력부서 더 나아가 클라이언트와의
                  <br />
                  원활한 커뮤니케이션 능력을 갖추고 있습니다.
                </Typography>
                <Typography variant="body1">
                  항상 겸손한 마음가짐으로,
                  <br />
                  그간 쌓아온 노하우를 십분 활용하여
                  <br />
                  조직의 발전에 이바지하고 싶습니다.
                </Typography>
              </Box>
              <Box className="identification-picture">
                <Box component="figure" sx={{ m: 0 }}>
                  <Box
                    component="img"
                    src={identificationPicture}
                    alt="identification picture"
                    sx={{ maxWidth: "100%", height: "auto" }}
                  />
                  <Box component="figcaption"></Box>
                </Box>
                <Box sx={{ mt: 3 }}>
                  <Table>
                    <TableBody>
                      <TableRow>
                        <TableCell component="th" scope="row">
                          이름
                        </TableCell>
                        <TableCell align="center">이 진 우</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell component="th" scope="row">
                          생년월일
                        </TableCell>
                        <TableCell align="center">1991.06.25</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell component="th" scope="row">
                          전화번호
                        </TableCell>
                        <TableCell align="center">
                          <Link href="tel:01022695901">📞 010-2269-5901</Link>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell component="th" scope="row">
                          이메일
                        </TableCell>
                        <TableCell align="center">dkwksla@naver.com</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell component="th" scope="row">
                          주소
                        </TableCell>
                        <TableCell align="center">🇰🇷 경기도 군포시 금정동</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </Box>
              </Box>
            </Paper>
            <Box>
              <Paper elevation={0} sx={{ bgcolor: "background.default", p: 4 }}>
                <Typography variant="h5" component="h3" fontWeight="bold" gutterBottom>
                  🥇 Core Skills
                </Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mt: 3 }}>
                  <Chip label="Java" sx={{ borderRadius: "25px" }} />
                  <Chip label="Spring Boot" sx={{ borderRadius: "25px" }} />
                  <Chip label="Thymeleaf" sx={{ borderRadius: "25px" }} />
                  <Chip label="JSP" sx={{ borderRadius: "25px" }} />
                </Stack>
                <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mt: 2 }}>
                  <Chip label="Javascript" sx={{ borderRadius: "25px" }} />
                  <Chip label="React" sx={{ borderRadius: "25px" }} />
                  <Chip label="jQuery" sx={{ borderRadius: "25px" }} />
                  <Chip label="Zustand" sx={{ borderRadius: "25px" }} />
                </Stack>
                <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mt: 2 }}>
                  <Chip label="React Query" sx={{ borderRadius: "25px" }} />
                  <Chip label="SQL" sx={{ borderRadius: "25px" }} />
                  <Chip label="AWS" sx={{ borderRadius: "25px" }} />
                </Stack>
              </Paper>
              <Paper elevation={0} sx={{ bgcolor: "background.default", p: 4 }}>
                <Typography variant="h5" component="h3" fontWeight="bold" gutterBottom>
                  🥈 Additional Skills
                </Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mt: 3 }}>
                  <Chip label="Node.js" sx={{ borderRadius: "25px" }} />
                  <Chip label="NestJS" sx={{ borderRadius: "25px" }} />
                  <Chip label="PHP(Legacy version 5.x)" sx={{ borderRadius: "25px" }} />
                </Stack>
                <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mt: 2 }}>
                  <Chip label="Docker" sx={{ borderRadius: "25px" }} />
                  <Chip label="HTML5" sx={{ borderRadius: "25px" }} />
                  <Chip label="CSS3" sx={{ borderRadius: "25px" }} />
                  <Chip label="Web Publishing" sx={{ borderRadius: "25px" }} />
                </Stack>
                <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mt: 2 }}>
                  <Chip label="Linux(Ubuntu)" sx={{ borderRadius: "25px" }} />
                  <Chip label="Typescript" sx={{ borderRadius: "25px" }} />
                  <Chip label="Git / GitHub" sx={{ borderRadius: "25px" }} />
                </Stack>
              </Paper>
            </Box>
          </Box>
        </Container>
      </section>
      <section>
        <Container maxWidth="lg" sx={{ mt: 2 }}>
          <Paper elevation={0} sx={{ bgcolor: "background.default", p: 4 }}>
            <Typography variant="h5" component="h3" fontWeight="bold" sx={{ mb: 3 }}>
              🪖 병역 사항
            </Typography>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell component="th" scope="row">
                    병역구분
                  </TableCell>
                  <TableCell>
                    <Chip label="필" sx={{ borderRadius: "25px" }} />
                  </TableCell>
                  <TableCell component="th" scope="row">
                    군별
                  </TableCell>
                  <TableCell>
                    <Chip label="전투경찰" sx={{ borderRadius: "25px" }} />
                  </TableCell>
                  <TableCell component="th" scope="row">
                    최종계급
                  </TableCell>
                  <TableCell>
                    <Chip label="병장" sx={{ borderRadius: "25px" }} />
                  </TableCell>
                  <TableCell component="th" scope="row">
                    복무기간
                  </TableCell>
                  <TableCell>
                    <Chip label="2012.12.06 ~ 2014.09.05" sx={{ borderRadius: "25px" }} />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Paper>
        </Container>
      </section>
      <section>
        <Container maxWidth="lg" sx={{ mt: 2 }}>
          <Paper elevation={0} sx={{ bgcolor: "background.default", p: 4 }}>
            <Typography variant="h5" component="h3" fontWeight="bold" sx={{ mb: 3 }}>
              🎓 학력
            </Typography>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              sx={{ flexWrap: "wrap" }}
            >
              <Box sx={{ flex: { xs: "1 1 100%", sm: "1 1 calc(50% - 8px)", md: "1 1 calc(33.333% - 16px)" } }}>
                <Paper
                  elevation={1}
                  sx={{
                    p: 4,
                    borderRadius: "25px",
                    textAlign: "center",
                  }}
                >
                  <Typography variant="h6" component="h5" gutterBottom>
                    서울디지털대학교
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    💻 컴퓨터공학전공
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    공학사 취득
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 3 }}>
                    2022.03 ~ 2024.02 졸업
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    학점 3.19/4.5
                  </Typography>
                </Paper>
              </Box>
              {/* <Box sx={{ flex: { xs: "1 1 100%", sm: "1 1 calc(50% - 8px)", md: "1 1 calc(33.333% - 16px)" } }}>
                <Paper
                  elevation={1}
                  sx={{
                    p: 4,
                    borderRadius: "25px",
                    textAlign: "center",
                  }}
                >
                  <Typography variant="h6" component="h5" gutterBottom>
                    평생교육진흥원
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    💵 경영 전공
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    경영전문학사 취득
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 3 }}>
                    2018.01 ~ 2021.02 졸업
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    학점 3.13/4.5
                  </Typography>
                </Paper>
              </Box> */}
              <Box sx={{ flex: { xs: "1 1 100%", sm: "1 1 calc(50% - 8px)", md: "1 1 calc(33.333% - 16px)" } }}>
                <Paper
                  elevation={1}
                  sx={{
                    p: 4,
                    borderRadius: "25px",
                    textAlign: "center",
                  }}
                >
                  <Typography variant="h6" component="h5" gutterBottom>
                    소사고등학교
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    📖 인문 계열
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    -
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 3 }}>
                    2007.03 ~ 2010.02 졸업
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    -
                  </Typography>
                </Paper>
              </Box>
            </Stack>
          </Paper>
        </Container>
      </section>
      <section>
        <Container maxWidth="lg" sx={{ mt: 2 }}>
          <Box className="honors-body">
            <Paper elevation={0} sx={{ bgcolor: "background.default", p: 4 }}>
              <Typography variant="h5" component="h3" fontWeight="bold" sx={{ mb: 3 }}>
                🏆 수상 경력
              </Typography>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      수상명
                    </TableCell>
                    <TableCell>
                      <Chip label="애드테크 은상" sx={{ borderRadius: "25px" }} />
                    </TableCell>
                    <TableCell component="th" scope="row">
                      수여기관
                    </TableCell>
                    <TableCell>
                      <Chip label="(사)한국디지털광고협회" sx={{ borderRadius: "25px" }} />
                    </TableCell>
                    <TableCell component="th" scope="row">
                      수상연도
                    </TableCell>
                    <TableCell>
                      <Chip label="2022" sx={{ borderRadius: "25px" }} />
                    </TableCell>
                    <TableCell component="th" scope="row">
                      수여내용
                    </TableCell>
                    <TableCell>
                      <Chip
                        label="AI기술을 활용한 디지털마케팅플랫폼, 키딕 (KeyDig)"
                        sx={{ borderRadius: "25px" }}
                      />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Paper>
          </Box>
        </Container>
      </section>
      <section>
        <Container maxWidth="lg" sx={{ mt: 2 }}>
          <Box className="work-experience-body">
            <Paper elevation={0} sx={{ bgcolor: "background.default", p: 4 }}>
              <Typography variant="h5" component="h3" fontWeight="bold" sx={{ mb: 3 }}>
                📁 경력 사항
              </Typography>
            </Paper>
          </Box>
        </Container>
      </section>
    </main>
  );
}