import { Typography } from "@mui/material";
import { styled } from "@mui/system";
import SocialLinks from "./SocialLinks";
import Titleh1 from "./Title";
const Hero = () => {
  return (
    <section className="section hero-content">
      <Titleh1 variant="h1" title="Nada Omran" />

      <Typography variant="subtitle1">
        Software Engineer <span className="dot">•</span> Frontend Developer
      </Typography>
      <SocialLinks />
      <CtaLink>
        <div className="bg"> </div>
        <a href="mailto:nadamuhammad28@gmail.com" target="_blank">
          Hire me
        </a>
      </CtaLink>
    </section>
  );
};

const CtaLink = styled("div")`
  margin-top: 2rem;

  z-index: 3;
  --tw-gradient-from: #de1d8d;

  position: relative;
  a {
    text-transform: uppercase;
    fontsize: 1.5rem;
    letter-spacing: 2px;
    font-weight: 700;
  }
  .bg {
    height: 120%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 108%;
    z-index: -1;
    box-shadow: 10px 2px 15px 5px rgba(222, 29, 141, 0.5),
      -12px 2px 25px 6px rgba(207, 35, 207, 0.3),
      0 2px 30px 10px rgba(155, 86, 232, 0.2);
    // transform: translate(50%, 50%);
    position: absolute;
    background: line;
    border-radius: 20px;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-timing-function: cubic-bezier(0.5, 0.05, 1, 0.5);
    transition: all ease-in-out 0.5s;
    animation-name: bounce;
  }
  &:hover .bg {
    box-shadow: 10px 2px 15px 8px rgba(222, 29, 141, 0.5),
      -12px 2px 25px 10px rgba(207, 35, 207, 0.3),
      0 2px 30px 12px rgba(155, 86, 232, 0.2);
  }
  @keyframes bounce {
    0% {
      top: 50%;
      // transform: translateY(0);
    }
    30% {
      top: 55%;
    }
    60% {
      top: 60%;
    }
    80% {
      top: 55%;
    }
    100% {
      top: 50%;
    }
  }
`;
export default Hero;
