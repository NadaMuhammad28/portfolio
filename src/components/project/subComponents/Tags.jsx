import { styled } from "@mui/system";
import React from "react";

export default function Tags({ tags }) {
  return (
    <Wrapper className="d-flex">
      {tags.map((tag) => {
        return <small key={tag.id}>#{tag.tag}</small>;
      })}
    </Wrapper>
  );
}
const Wrapper = styled("div")`
  width: 80%;
  margin: auto;
  gap: 0.7rem;
  flex-wrap: wrap;
  small {
    font-size: 1rem;
    text-transform: capitalize;
    color: var(--txt-color-secondary-3);
    font-weight: 500;
  }
  @media (max-width: 360px) {
    width: 90%;
  }
`;
