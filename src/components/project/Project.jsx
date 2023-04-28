import ProjectDetails from "./ProjectDetails";
import ProjectImages from "./ProjectImages";
import Grid2 from "@mui/material/Unstable_Grid2";
export default function Project({ project }) {
  return (
    <section>
      <Grid2 container direction={{ xs: "column-reverse", md: "row" }}>
        <Grid2 item xs={12} md={6} lg={7}>
          <ProjectImages images={project.images} />
        </Grid2>
        <Grid2 item xs={12} md={6} lg={5}>
          <ProjectDetails data={{ ...project, images: null }} />
        </Grid2>
      </Grid2>
    </section>
  );
}
