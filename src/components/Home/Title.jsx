import { Typography } from "@mui/material";
import { styled } from "@mui/system";
export default function Titleh1({ title }) {
  return <Title variant="h1">{title}</Title>;
}

const Title = styled(Typography)`
  background: linear-gradient(to right, rgb(222 29 141), #cf23cf, #9b56e8);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  text-transform: uppercase;
  font-weight: 700;
  color: #fff;
  & ::selection {
    background-color: #fff !important;
  }
`;
