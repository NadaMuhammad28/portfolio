import { Typography } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import TitleSecondary from "../subComponents/TitleSecondary";
import Hero from "./subComponents/hero";
import Tags from "./subComponents/Tags";
export default function ProjectDetails({ data }) {
  return (
    <Wrapper className="">
      <Hero name={data.title} />
      <div className="d-flex-col content">
        {/* <Typography variant="h2">{data.title}</Typography> */}
        <TitleSecondary title={data.title} />
        <Typography variant="body1">{data.description}</Typography>
      </div>
      <Tags tags={data.tags} />
      <footer className="d-flex">
        <a href={data.demo_url} target="_blank">
          visit
        </a>
        <a href={data.repo_url} target="_blank">
          source code
        </a>
      </footer>
    </Wrapper>
  );
}
const Wrapper = styled("aside")`
  padding: 2rem;
  height: 100vh;
  overflow-y: scroll;
  position: sticky;
  right: 0;
  z-index: 1;
  top: 0;
  .content {
    padding: 3rem 0;
    gap: 4rem;
  }
  body::-webkit-scrollbar {
    width: 0.5em;
  }

  body::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0);
  }
  footer {
    margin: 5rem 0;
    // padding: 3rem 0;
    gap: 3rem;
  }
  footer a {
    text-transform: uppercase;
    padding: 0.8rem 1.5rem;
    background: #cf23cf;
    color: #fff;

    border-radius: 6px;
    font-weight: 700;
    box-shadow: 0px 0px 10px #f54996;
  }
  footer a:hover {
    box-shadow: 0px 0px 10px #9b56e8;
  }
  p {
    word-wrap: break-word;
    text-align: justify;
  }

  @media (min-width: 500px) {
    max-height: 100vh;
  }
  @media (max-width: 360px) {
    footer {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
`;
