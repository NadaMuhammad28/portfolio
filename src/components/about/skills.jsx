import { Typography } from "@mui/material";
import { styled, typographyVariant } from "@mui/system";
import Grid2 from "@mui/material/Unstable_Grid2";
import { skills } from "../../utils/constants";
import TitleSecondary from "../subComponents/TitleSecondary";
const Skills = () => {
  return (
    <Wrapper>
      <TitleSecondary title="SKILLS" variant="h3" />
      <div className="skills-container">
        <Grid2 container spacing={4}>
          {skills.map((itm) => {
            return (
              <Grid2
                item="true"
                key={itm.id}
                xs={4}
                sm={4}
                md={3}
                lg={2}
                xl={2}
              >
                <div className="skill-container">
                  <article>
                    <img src={itm.src} alt={itm.title} />
                    <Typography variant="subtitle2" className="tech-name">
                      {itm.title}
                    </Typography>
                  </article>
                </div>
              </Grid2>
            );
          })}
        </Grid2>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled("section")`
  display: flex;
  flex-direction: column;
  align-items: center;

  .skill-container {
  }
  .skills-container {
    padding: 2rem 0;
  }
  img {
    width: 1.7rem;
    object-fit: cover;
    vertical-align: middle;
    height: 100%;
  }
  article {
    justify-content: center;
    background-color: hsla(0, 0%, 7%, 0.5);
    display: flex;
    border-radius: 5px;
    align-items: center;
    gap: 1rem;
  }
  @media (min-width: 650px) {
    .skills-container {
      padding: 2rem 4rem;
    }
    img {
      width: 2rem;
      object-fit: cover;
      vertical-align: middle;
      height: 100%;
    }
  }
`;
export default Skills;
