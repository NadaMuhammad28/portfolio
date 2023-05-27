import { styled } from "@mui/system";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Hero({ name }) {
  return (
    <Wrapper className="">
      <Link to="/projects" className="d-flex">
        <span className="back-icon">
          <AiOutlineArrowLeft />
        </span>
        <span className="p-crumb-hover">projects</span>
        <span> / </span>
      </Link>
      <span>{name}</span>
    </Wrapper>
  );
}

const Wrapper = styled("header")`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  text-transform: capitalize;
  .back-icon {
    cursor: pointer;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    background-color: var(--bg-secondary);
  }
  p-crumb-hover:hover a {
    color: #fff !important;
  }
  a {
    align-items: center;
    gap: 0.7rem;
  }
  span {
    vertical-align: middle;
  }

  .back-icon:hover {
    box-shadow: var(--box-shadow-icons);
  }
  svg {
    // font-weight: 700;
    vertical-align: middle;
  }
`;
