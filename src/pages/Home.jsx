import Hero from "../components/Home/Hero";
import { styled } from "@mui/system";
import StarParticles from "../components/Home/StarParticles";

export default function Home() {
  return (
    <Wrapper>
      <StarParticles />
      <Hero />
    </Wrapper>
  );
}
const Wrapper = styled("main")`
  width: 100%;
  height: 100vh;
  .hero-content {
    gap: 1rem;
    flex-direction: column;
  }
  .links-container {
    gap: 1rem;
    margin-top: 2rem;
  }
  .link {
    display:flex; 
    align-items:center;
    justify-content:center;
    width: 2rem;
    background: #fff;
    height: 2rem;
    border-radius: 50%;
    transition: all 0.4s ease-in-out ;
    font-size:1.3rem;
    z-index:100;
  }
  .link:hover{
    -webkit-box-shadow: 0px 0px 15px #fff;
    box-shadow: 0px 0px 15px #fff;
}
  }
  .link svg {
    color:var( --hero-bg);

  }
  .dot {
    background: linear-gradient(to right, rgb(222 29 141), #cf23cf, #9b56e8);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
  }
`;
