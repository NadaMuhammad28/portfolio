import { Typography } from "@mui/material";
import { styled } from "@mui/system";

export default function TitleSecondary({ title, variant }) {
  return <Wrapper variant={variant ? variant : "h2"}>{title}</Wrapper>;
}

const Wrapper = styled(Typography)`
  background: linear-gradient(to right, #f54996, #cf23cf, #9b56e8);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  text-transform: uppercase;
  font-weight: 600;
`;
