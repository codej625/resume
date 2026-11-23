import { Box, Chip, Divider, Paper, Stack, Typography } from "@mui/material";
import { advisories, careers, projects, serviceLaunches, totalTenure, type Project } from "@/assets/js/data";
import { fontWeight as weight } from "@/assets/css/font";

const companyChipSx = {
  bgcolor: "grey.200",
  color: "text.primary",
  fontWeight: weight.medium,
} as const;

const printBlockSx = {
  "@media print": {
    display: "block",
    "& > :not(style) ~ :not(style)": { mt: 0 },
  },
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
          ...(!isLast && {
            pb: 3,
            mb: 3,
            borderBottom: "1px solid",
            borderColor: "divider",
          }),
        },
      }}
    >
      <Box
        sx={{
          mb: 1.5,
          "@media print": {
            breakInside: "avoid",
            pageBreakInside: "avoid",
            breakAfter: "avoid",
          },
        }}
      >
        <Box sx={{ mb: "8px" }}>
          <Chip label={project.company} sx={companyChipSx} />
        </Box>
        <Typography variant="h6" sx={{ fontWeight: weight.medium, lineHeight: 1.4, whiteSpace: "pre-line" }}>
          {project.title}
        </Typography>
      </Box>
      <Box sx={{ pl: 2, ...printBlockSx }}>
        {project.tasks.map((task, index) => (
          <Box
            key={task.title}
            sx={{
              mb: 1.5,
              "@media print": {
                breakInside: "avoid",
                pageBreakInside: "avoid",
                mb: 1.5,
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
              <Box sx={{ mt: 0.5, pl: 2, ...printBlockSx }}>
                {task.bullets.map((bullet, bulletIndex) => {
                  const text = typeof bullet === "string" ? bullet : bullet.text;
                  const children = typeof bullet === "string" ? [] : (bullet.children ?? []);
                  return (
                    <Box key={text} sx={{ mb: 0.5 }}>
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
                        <Box sx={{ mt: 0.5, pl: 2, ...printBlockSx }}>
                          {children.map((child) => (
                            <Typography
                              key={child}
                              variant="body1"
                              sx={{
                                color: "text.secondary",
                                lineHeight: 1.7,
                                wordBreak: "keep-all",
                                overflowWrap: "anywhere",
                              }}
                            >
                              - {child}
                            </Typography>
                          ))}
                        </Box>
                      )}
                    </Box>
                  );
                })}
              </Box>
            )}
          </Box>
        ))}
      </Box>
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
        "@media print": { breakInside: "avoid", pageBreakInside: "avoid" },
      }}
    >
      <Typography variant="h5" component="h2" sx={sectionTitleSx}>
        자문
      </Typography>
      <Stack spacing={1.5} sx={printBlockSx}>
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
    <Paper
      id="workExperience"
      elevation={2}
      sx={{ p: 4, mt: { xs: 0 }, mb: { xs: 2, md: 4 }, bgcolor: "background.paper" }}
    >
      <Typography variant="h5" component="h2" sx={sectionTitleSx}>
        경력 사항
      </Typography>
      <Typography variant="body1" sx={{ color: "text.secondary", mb: 3, fontWeight: weight.regular }}>
        총 재직기간 {totalTenure}
      </Typography>
      <Stack
        spacing={3}
        divider={<Divider flexItem sx={{ "@media print": { display: "none" } }} />}
        sx={printBlockSx}
      >
        {careers.map((career, index) => (
          <Box
            key={career.company}
            sx={{
              "@media print": {
                breakInside: "avoid",
                pageBreakInside: "avoid",
                ...(index < careers.length - 1 && {
                  pb: 2.5,
                  mb: 2.5,
                  borderBottom: "1px solid",
                  borderColor: "divider",
                }),
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
            <Box sx={{ mt: 1.5, ...printBlockSx }}>
              {career.duties.map((duty) => (
                <Typography
                  variant="body1"
                  key={duty}
                  sx={{
                    lineHeight: 1.7,
                    fontWeight: weight.regular,
                    wordBreak: "keep-all",
                    overflowWrap: "anywhere",
                  }}
                >
                  - {duty}
                </Typography>
              ))}
            </Box>
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
      sx={{
        p: 4,
        mt: { xs: 0 },
        mb: { xs: 2, md: 4 },
        bgcolor: "background.paper",
        "@media print": { breakInside: "avoid", pageBreakInside: "avoid" },
      }}
    >
      <Typography variant="h5" component="h2" sx={sectionTitleSx}>
        서비스 런칭
      </Typography>
      <Stack spacing={3} divider={<Divider flexItem sx={{ "@media print": { display: "none" } }} />} sx={printBlockSx}>
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
            <Box sx={{ mt: 1.5, ...printBlockSx }}>
              {item.duties.map((duty) => (
                <Typography variant="body1" key={duty} sx={{ lineHeight: 1.7, fontWeight: weight.regular }}>
                  - {duty}
                </Typography>
              ))}
            </Box>
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
        sx={printBlockSx}
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
