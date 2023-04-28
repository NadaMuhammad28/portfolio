import React from "react";
import { NavLink } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import {
  BsBriefcaseFill,
  BsExclamationCircle,
  BsFillChatDotsFill,
} from "react-icons/bs";

import { styled } from "@mui/system";

const BottomNav = styled("nav")({
  position: "fixed",
  backgroundColor: "hsla(0, 0%, 2%, 0.5)",
  left: 0,
  bottom: 0,
  width: "100%",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  boxShadow: "0 -1px 3px rgba(0, 0, 0, 0.5)",
  minHeight: "4rem",
  borderRadius: ".75rem",
  backdropFilter: "blur(5px)",
  zIndex: 300,
  padding: ".8rem 1.5rem",
  "@media (min-width: 768px)": {
    // display: "none",
    margin: "auto",
    width: "80%",
    bottom: "1rem",
    right: 0,
    // background: "red",
  },
});

const BottomNavItem = styled(NavLink)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textDecoration: "none",
  textAlign: "center",
  color: "#555",
  gap: "0.7rem",
  transition: ".3s all ease-in-out",

  "&.active": {
    color: "  #f54996",
    transition: ".3s all ease-in-out",
  },
  "&.active  span": {
    color: "  #f54996",
    display: "inline-block",
    Transform: "tranalateY(0)",

    transition: ".3s all ease-in-out",
  },

  "& svg": {
    fontSize: "1.4rem",
    // marginBottom: "0.2rem",
  },

  "& span": {
    display: "none",
    Transform: "tranalateY(-100%)",
    transition: ".3s all ease-in-out",
  },
});
const BottomNavigation = () => {
  return (
    <BottomNav>
      <BottomNavItem to="/">
        <IoHome />
        <span> Home</span>
      </BottomNavItem>
      <BottomNavItem to="/about">
        <BsExclamationCircle />
        <span> About </span>
      </BottomNavItem>
      <BottomNavItem to="/projects">
        <BsBriefcaseFill />
        <span> Projects </span>
      </BottomNavItem>
      <BottomNavItem to="lets-talk">
        <BsFillChatDotsFill />
        <span> Contact </span>
      </BottomNavItem>
      {/* <BottomNavItem to="/profile">
        <FaUser />
        Profile
      </BottomNavItem> */}
    </BottomNav>
  );
};

export default BottomNavigation;
