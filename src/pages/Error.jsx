import { Typography } from "@mui/material";
import Titleh1 from "../components/Home/Title";

const Error = () => {
  return (
    <section
      className="section hero-content d-flex-col"
      style={{ gap: "1rem" }}
    >
      <Titleh1 title="404" />
      <Typography variant="subtitle1">
        My instincts tell me that you are lost {":("}
      </Typography>{" "}
    </section>
  );
};

export default Error;
