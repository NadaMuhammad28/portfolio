import { Typography } from "@mui/material";
import { styled, typographyVariant } from "@mui/system";
import Grid2 from "@mui/material/Unstable_Grid2";
import { skills } from "../../utils/constants";
const Skills = () => {
  return (
    <Wrapper>
      <Typography variant="h2">Skills</Typography>
      <Grid2 container spacing={4}>
        {skills.map((itm) => {
          return (
            <Grid2 item="true" key={itm.id} xs={6} sm={4} md={3} lg={2}>
              <div className="skill-container">
                <img src={itm.src} alt={itm.title} />
                <Typography variant="caption" className="tech-name">
                  {itm.title}
                </Typography>
              </div>
            </Grid2>
          );
        })}
      </Grid2>
    </Wrapper>
  );
};

const Wrapper = styled("section")`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 2rem;
    object-fit: cover;
    vertical-align: middle;
    height: 100%;
  }
  .skill-container {
    // border-radius: 15px;
    // box-shadow: inset 0 0 0 1px #f54996, inset 0 0 0 2px #cf23cf,
    //   inset 0 0 0 2px #9b56e8;
  }

  @media (max-width: 600px) {
    .tech-name {
      // display: none;
    }
  }
`;
export default Skills;
