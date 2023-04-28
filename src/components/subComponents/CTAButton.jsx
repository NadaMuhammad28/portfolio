import { Button, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";

export default function CTAButton({ text }) {
  return (
    <Wrapper type="submit" variant="contained">
      {text}
    </Wrapper>
  );
}

const Wrapper = styled(Button)`
  text-transform: uppercase;
  padding: 0.8rem 1.5rem;
  background: #cf23cf;
  color: #fff;
  cursor:pointer;

  border-radius: 6px;
  font-weight: 700;
  box-shadow: 0px 0px 10px #f54996;

:hover 
{background: #cf23cf;

  box-shadow: 0px 0px 10px #9b56e8;}
}
`;
