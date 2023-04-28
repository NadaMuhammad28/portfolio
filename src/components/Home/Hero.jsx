import { Typography } from "@mui/material";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";
import { socialLinks } from "../../utils/constants";
import StarParticles from "./StarParticles";

const Hero = () => {
  return (
    <Wrapper>
      <StarParticles />

      <section className="section hero-content">
        <Title variant="h1">Nada Omran</Title>

        <Typography variant="subtitle2">
          Software Engineer • FrontEnd Developer
        </Typography>

        {/* <div className="links-container d-flex">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a className="link" href={link.url} key={link.id}>
                <Icon />
              </a>
            );
          })}
        </div>
        <Link to="projects" className="btn">
          Hire me
        </Link> */}
      </section>
    </Wrapper>
  );
};

const Wrapper = styled("section")`
  width: 100%;
  height: 100vh;
  color: #fff;
  // background-color: var(--hero-bg);
  .hero-content {
    // gap: 1rem;
    flex-direction: column;
  }
  .links-container {
    gap: 1rem;
    margin-top: 1.5rem;
  }
  .link {
    width: 2rem;
    background: #fff;
    height: 2rem;
    border-radius: 50%;
    transition: all 0.4s ease-in-out ;
  }
  .link:hover{
    -webkit-box-shadow: 0px 0px 15px #fff;
    box-shadow: 0px 0px 15px #fff;
}
  }
  .link svg {
    font-size:
    vertical-align: middle;
    transform: translate(50%, 50%);
  }
`;

const Title = styled(Typography)`
  background: linear-gradient(to right, #f54996, #cf23cf, #9b56e8);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  text-transform: uppercase;
  font-weight: 500;
  // color: #fff;
`;
export default Hero;
