import { Typography } from "@mui/material";
import { styled } from "@mui/system";

const AboutContent = () => {
  return (
    <Wrapper>
      <Typography variant="h2"> About ME</Typography>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus
        asperiores tempora debitis accusantium laboriosam voluptates doloribus
        tenetur molestias? Modi voluptatibus sit libero laboriosam nam sed
        pariatur saepe minima quia deserunt illo, architecto repudiandae
        nesciunt ratione. Illo enim autem nesciunt laborum?
      </p>
    </Wrapper>
  );
};

const Wrapper = styled("section")`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 3rem;
    object-fit: cover;
    vertical-align: middle;
    height: 100%;
  }

  @media (max-width: 600px) {
    .tech-name {
      display: none;
    }
  }
`;
export default AboutContent;
