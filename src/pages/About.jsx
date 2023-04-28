import { styled } from "@mui/system";
import Grid2 from "@mui/material/Unstable_Grid2";
import AboutContent from "../components/about/AboutContent";
import Skills from "../components/about/skills";
const About = () => {
  return (
    <Wrapper className="section">
      <Grid2 container spacing={3}>
        <Grid2 item="true" xs={12} lg={6} className="about-content">
          <AboutContent />
        </Grid2>
        <Grid2 item="true" xs={12} lg={6} className="skills">
          <Skills />
        </Grid2>
      </Grid2>
    </Wrapper>
  );
};

const Wrapper = styled("main")``;
export default About;
