import { Box, Chip, Divider, Paper, Stack, Typography } from "@mui/material";
import { advisories, careers, projects, serviceLaunches, totalTenure, type Project } from "@/assets/js/data";
import { fontWeight as weight } from "@/assets/css/font";

const companyChipSx = {
  bgcolor: "grey.200",
  color: "text.primary",
  fontWeight: weight.medium,
} as const;

function formatPeriod(period: string) {
  const [start, end] = period.split(" ~ ");
  if (start && end === start) return start;
  return period;
}

const sectionTitleSx = {
  mb: 3,
  fontWeight: weight.bold,
  pb: 2,
  borderBottom: "2px solid",
  borderColor: "primary.main",
} as const;

function ProjectBlock({ project, isLast }: { project: Project; isLast: boolean }) {
  return (
    <Box
      sx={{
        "@media print": {
          overflow: "visible",
          ...(!isLast && {
            pb: 3,
            mb: 3,
            borderBottom: "1px solid",
            borderColor: "divider",
          }),
        },
      }}
    >
      <Stack
        spacing={2}
        sx={{
          mb: 1.5,
          "@media print": {
            display: "block",
            breakInside: "avoid",
            breakAfter: "avoid",
          },
        }}
      >
        <Box>
          <Box sx={{ mb: "8px" }}>
            <Chip label={project.company} sx={companyChipSx} />
          </Box>
        </Box>
        <Typography variant="h6" sx={{ fontWeight: weight.medium, lineHeight: 1.4, whiteSpace: "pre-line" }}>
          {project.title}
        </Typography>
      </Stack>
      <Stack spacing={1.5} sx={{ pl: 2, "@media print": { display: "block" } }}>
        {project.tasks.map((task, index) => (
          <Box
            key={task.title}
            sx={{
              "@media print": {
                breakInside: "avoid",
                pageBreakInside: "avoid",
                overflow: "visible",
              },
            }}
          >
            <Typography
              variant="body1"
              sx={{ fontWeight: weight.medium, "@media print": { breakAfter: "avoid" } }}
            >
              {index + 1}. {task.title}
            </Typography>
            {task.bullets.length > 0 && (
              <Stack spacing={0.5} sx={{ mt: 0.5, pl: 2, "@media print": { display: "block" } }}>
                {task.bullets.map((bullet, bulletIndex) => {
                  const text = typeof bullet === "string" ? bullet : bullet.text;
                  const children = typeof bullet === "string" ? [] : (bullet.children ?? []);
                  return (
                    <Box key={text} sx={{ "@media print": { overflow: "visible" } }}>
                      <Typography
                        variant="body1"
                        sx={{
                          color: "text.secondary",
                          lineHeight: 1.7,
                          wordBreak: "keep-all",
                          overflowWrap: "anywhere",
                        }}
                      >
                        {bulletIndex + 1}) {text}
                      </Typography>
                      {children.length > 0 && (
                        <Stack spacing={0.5} sx={{ mt: 0.5, pl: 2, "@media print": { display: "block" } }}>
                          {children.map((child) => (
                            <Box key={child} sx={{ display: "flex", columnGap: "0.35rem" }}>
                              <Typography
                                component="span"
                                variant="body1"
                                sx={{ color: "text.secondary", lineHeight: 1.7, flex: "0 0 auto" }}
                              >
                                -
                              </Typography>
                              <Typography
                                component="span"
                                variant="body1"
                                sx={{
                                  color: "text.secondary",
                                  lineHeight: 1.7,
                                  flex: "1 1 auto",
                                  minWidth: 0,
                                  wordBreak: "keep-all",
                                  overflowWrap: "anywhere",
                                }}
                              >
                                {child}
                              </Typography>
                            </Box>
                          ))}
                        </Stack>
                      )}
                    </Box>
                  );
                })}
              </Stack>
            )}
          </Box>
        ))}
      </Stack>
    </Box>
  );
}

export function Advisory() {
  return (
    <Paper
      id="advisory"
      elevation={2}
      sx={{
        p: 4,
        mt: { xs: 0 },
        mb: { xs: 2, md: 4 },
        bgcolor: "background.paper",
        "@media print": { breakInside: "avoid" },
      }}
    >
      <Typography variant="h5" component="h2" sx={sectionTitleSx}>
        자문
      </Typography>
      <Stack spacing={1.5}>
        {advisories.map((item) => (
          <Box key={item.organization}>
            <Typography variant="h6" sx={{ mb: 0.5, fontWeight: weight.medium }}>
              {item.organization}
            </Typography>
            <Typography variant="body1" sx={{ mb: 0.5, color: "text.secondary" }}>
              {item.description} ({formatPeriod(item.period)})
            </Typography>
          </Box>
        ))}
      </Stack>
    </Paper>
  );
}

export default function Career() {
  return (
      <Paper id="workExperience" elevation={2} sx={{ p: 4, mt: { xs: 0 }, mb: { xs: 2, md: 4 }, bgcolor: "background.paper" }}>
        <Typography variant="h5" component="h2" sx={sectionTitleSx}>
          경력 사항
        </Typography>
        <Typography variant="body1" sx={{ color: "text.secondary", mb: 3, fontWeight: weight.regular }}>
          총 재직기간 {totalTenure}
        </Typography>
        <Stack
          spacing={3}
          divider={<Divider flexItem sx={{ "@media print": { display: "none" } }} />}
          sx={{
            "@media print": {
              display: "block",
              "& > :not(style) ~ :not(style)": { mt: 0 },
            },
          }}
        >
          {careers.map((career, index) => (
            <Box
              key={career.company}
              sx={{
                "@media print": {
                  overflow: "visible",
                  ...(index < careers.length - 1 && {
                    pb: 2.5,
                    mb: 2.5,
                    borderBottom: "1px solid",
                    borderColor: "divider",
                  }),
                },
              }}
            >
              <Box
                sx={{
                  "@media print": {
                    breakInside: "avoid",
                    breakAfter: "avoid",
                  },
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                    columnGap: "0.3rem",
                    fontWeight: weight.medium,
                  }}
                >
                  {career.company} ({career.period})
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "text.secondary", display: "block", mt: 0.5, fontWeight: weight.regular }}
                >
                  {career.domain} · {career.department} {career.position}
                </Typography>
              </Box>
              <Stack spacing={0.5} sx={{ mt: 1.5 }}>
                {career.duties.map((duty) => (
                  <Typography
                    variant="body1"
                    key={duty}
                    sx={{
                      lineHeight: 1.7,
                      fontWeight: weight.regular,
                      wordBreak: "keep-all",
                      overflowWrap: "anywhere",
                      "@media print": { breakInside: "avoid" },
                    }}
                  >
                    - {duty}
                  </Typography>
                ))}
              </Stack>
            </Box>
          ))}
        </Stack>
      </Paper>
  );
}

export function ServiceLaunch() {
  return (
    <Paper
      id="serviceLaunch"
      elevation={2}
      sx={{ p: 4, mt: { xs: 0 }, mb: { xs: 2, md: 4 }, bgcolor: "background.paper" }}
    >
      <Typography variant="h5" component="h2" sx={sectionTitleSx}>
        서비스 런칭
      </Typography>
      <Stack spacing={3} divider={<Divider flexItem />} sx={{ "@media print": { display: "block" } }}>
        {serviceLaunches.map((item) => (
          <Box key={item.name}>
            <Typography
              variant="h6"
              sx={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                columnGap: "0.3rem",
                fontWeight: weight.medium,
              }}
            >
              {item.name} ({item.period})
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "text.secondary", display: "block", mt: 0.5, fontWeight: weight.regular }}
            >
              {item.domain} · {item.role}
            </Typography>
            <Stack spacing={0.5} sx={{ mt: 1.5 }}>
              {item.duties.map((duty) => (
                <Typography variant="body1" key={duty} sx={{ lineHeight: 1.7, fontWeight: weight.regular }}>
                  - {duty}
                </Typography>
              ))}
            </Stack>
          </Box>
        ))}
      </Stack>
    </Paper>
  );
}

export function Projects() {
  return (
      <Paper id="projects" elevation={2} sx={{ p: 4, mt: { xs: 0 }, mb: 0, bgcolor: "background.paper" }}>
        <Typography variant="h5" component="h2" sx={sectionTitleSx}>
          프로젝트
        </Typography>
        <Stack
          spacing={4}
          divider={<Divider flexItem sx={{ "@media print": { display: "none" } }} />}
          sx={{
            "@media print": {
              display: "block",
              "& > :not(style) ~ :not(style)": { mt: 0 },
            },
          }}
        >
          {projects.map((project, index) => (
            <ProjectBlock
              key={`${project.company}-${project.title}`}
              project={project}
              isLast={index === projects.length - 1}
            />
          ))}
        </Stack>
      </Paper>
  );
}
