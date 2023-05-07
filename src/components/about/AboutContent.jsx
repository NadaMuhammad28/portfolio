import { Typography } from "@mui/material";
import { styled } from "@mui/system";
import TitleSecondary from "../subComponents/TitleSecondary";

const AboutContent = () => {
  return (
    <Wrapper>
      <TitleSecondary title="ABOUT ME" variant="h3" />

      <article>
        <Typography variant="body1">
          I'm a software developer based in Cairo, Egypt. I recently graduated
          with a bachelor's degree in computer engineering. I'm passionate about
          web development. I've gained a solid understanding of web development
          concepts, and have dedicated a lot of time to applying these concepts
          to real-world scenarios and applications.
        </Typography>

        <Typography variant="body1">
          I am constantly seeking to improve my coding skills and stay
          up-to-date with the latest technologies and trends. I love to
          experiment with new tools and frameworks, and enjoy collaborating with
          other developers to solve complex problems and build innovative
          solutions.
        </Typography>
        <Typography variant="body1">
          I'm currently looking for opportunities where I can expand my
          knowledge and skills, and contribute to meaningful projects that make
          a difference in people's lives.
        </Typography>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled("section")`
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    line-height: 2.5;
    // word-break: break-all;
    hyphens: auto;
  }
  article {
    display: flex;
    gap: 2rem;
    padding: 2rem 0;
    flex-direction: column;
    // align-items: center;
    justify-content: center;
    // text-align: center;
    word-wrap: break-word;
    // text-decoration: justify;
    line-height: 1.8;
  }
  @media (min-width: 650px) {
    article {
      padding: 2rem 4rem;
    }
  }
`;
export default AboutContent;
