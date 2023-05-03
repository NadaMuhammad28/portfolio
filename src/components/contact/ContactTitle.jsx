import React from "react";
import { Typography } from "@mui/material";
import TitleSecondary from "../../components/subComponents/TitleSecondary";

export default function ContactTitle() {
  return (
    <>
      <TitleSecondary title="contact" />
      <Typography variant="subtitle1">
        want to work together? Feel free to reach out
      </Typography>
    </>
  );
}
