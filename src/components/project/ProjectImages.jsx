import { styled } from "@mui/system";
import React from "react";
import LazyImg from "../LazyImg";

export default function ProjectImages({ images }) {
  const d = [
    "/dummy/1.png",
    "/dummy/2.png",
    "/dummy/3.png",
    "/dummy/4.png",
    "/dummy/5.png",
  ];
  return (
    <Wrapper>
      {images.map((img, index) => {
        return <LazyImg alt="" key={index} img={img} />;
      })}
    </Wrapper>
  );
}
const Wrapper = styled("article")`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  img {
    object-fit: cover;
    max-width: 100%;
  }
`;
