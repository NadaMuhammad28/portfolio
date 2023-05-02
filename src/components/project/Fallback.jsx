import { styled } from "@mui/system";
import React from "react";
import TitleSecondary from "../subComponents/TitleSecondary";
export default function Fallback() {
  return (
    <main className="main relative d-flex-col">
      <TitleSecondary title="projects" />
      <Wrapper className="section-p">
        <div className="d-flex-col">
          {new Array(3).fill(null).map((p, index) => {
            return (
              <article className=" p-fallback" key={index}>
                <div className="p-img-container  img"></div>
                <div className="p-content-fallback p-content">
                  <h2 className="title"></h2>
                  <div className="p-links-cntainer">
                    <span className="link lin-holder"></span>

                    <span className="link"></span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Wrapper>
    </main>
  );
}
const Wrapper = styled("section")`
  .p-fallback {
    width: 100%;
    display: flex;
    background-color: hsla(0, 0%, 7%, 0.5);
    border-radius: 0.75rem;
    gap: 2rem;
    padding: 2rem;
    z-index: 100;
    height: 12rem;
  }
  .img {
    align-self: center;
    animation: skeleton-loading 1s linear infinite alternate;
    width: 22rem;
    height: 10rem;
  }
  .p-content-fallback {
    flex-basis: 40%;
  }
  .title {
    height: 1rem;
    border-radius: 5px;
    width: 100%;
    animation: skeleton-loading 1s linear infinite alternate;
  }
  .link {
    height: 1rem;
    border-radius: 5px;
    width: 100%;
    animation: skeleton-loading 1s linear infinite alternate;
  }

  @keyframes skeleton-loading {
    0% {
      background-color: hsl(0, 0%, 12%);
    }
    100% {
      background-color: hsl(0, 0%, 10%);
    }
  }
`;
