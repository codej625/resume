import { Box, Chip, Divider, Link, Paper, Stack, Typography } from "@mui/material";
import { careers, projects, totalTenure, type Project } from "@/assets/js/data";

const sectionTitleSx = {
  mb: 3,
  fontWeight: 600,
  pb: 2,
  borderBottom: "2px solid",
  borderColor: "primary.main",
} as const;

function ProjectBlock({ project }: { project: Project }) {
  return (
    <Box>
      <Typography variant="h6" sx={{ fontWeight: 600, lineHeight: 1.4 }}>
        {project.title}
      </Typography>
      <Stack direction="row" spacing={1} alignItems="center" flexWrap="wrap" sx={{ mt: 0.75, mb: 1.5 }}>
        <Chip label={project.company} size="small" sx={{ bgcolor: "primary.main", color: "white" }} />
        <Typography variant="caption" sx={{ color: "text.secondary" }}>
          {project.period}
        </Typography>
      </Stack>
      <Stack spacing={1.25} component="ol" sx={{ m: 0, pl: 2.5 }}>
        {project.tasks.map((task) => (
          <Box component="li" key={task.title} sx={{ pl: 0.5 }}>
            <Typography variant="body2" sx={{ fontWeight: 600 }}>
              {task.title}
            </Typography>
            {task.bullets.length > 0 && (
              <Box component="ul" sx={{ m: 0, mt: 0.5, pl: 2.25 }}>
                {task.bullets.map((bullet) => (
                  <Typography
                    component="li"
                    variant="body2"
                    key={bullet}
                    sx={{ color: "text.secondary", lineHeight: 1.7 }}
                  >
                    {bullet}
                  </Typography>
                ))}
              </Box>
            )}
          </Box>
        ))}
      </Stack>
      {project.links && project.links.length > 0 && (
        <Stack direction="row" flexWrap="wrap" sx={{ gap: 1.5, mt: 1.5 }}>
          {project.links.map((link) => (
            <Link
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              variant="body2"
              sx={{ wordBreak: "break-all" }}
            >
              {link.label}
            </Link>
          ))}
        </Stack>
      )}
    </Box>
  );
}

export default function Career() {
  return (
    <>
      <Paper id="workExperience" elevation={2} sx={{ p: 4, mb: 3, bgcolor: "background.paper" }}>
        <Typography variant="h5" component="h2" sx={sectionTitleSx}>
          경력 사항
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary", mb: 3 }}>
          총 재직기간 {totalTenure}
        </Typography>
        <Stack spacing={3} divider={<Divider flexItem />}>
          {careers.map((career) => (
            <Box key={career.company}>
              <Stack direction="row" spacing={1} alignItems="center" flexWrap="wrap" useFlexGap>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  {career.company}
                </Typography>
                <Chip label={career.scale} size="small" variant="outlined" />
              </Stack>
              <Typography variant="body2" sx={{ mt: 0.5 }}>
                {career.domain}
              </Typography>
              <Typography variant="caption" sx={{ color: "text.secondary", display: "block", mt: 0.5 }}>
                {career.department} / {career.position} / {career.period}
              </Typography>
              <Box component="ul" sx={{ mt: 1.5, mb: 0, pl: 2.5 }}>
                {career.duties.map((duty) => (
                  <Typography component="li" variant="body2" key={duty} sx={{ lineHeight: 1.7 }}>
                    {duty}
                  </Typography>
                ))}
              </Box>
            </Box>
          ))}
        </Stack>
      </Paper>

      <Paper id="projects" elevation={2} sx={{ p: 4, bgcolor: "background.paper" }}>
        <Typography variant="h5" component="h2" sx={sectionTitleSx}>
          프로젝트
        </Typography>
        <Stack spacing={4} divider={<Divider flexItem />}>
          {projects.map((project) => (
            <ProjectBlock key={`${project.company}-${project.title}`} project={project} />
          ))}
        </Stack>
      </Paper>
    </>
  );
}
