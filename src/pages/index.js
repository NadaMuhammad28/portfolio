import { lazy } from "react";

export const About = lazy(() => import("./About"));
export const Home = lazy(() => import("./Home"));
export const Error = lazy(() => import("./Error"));
export const SingleProject = lazy(() => import("./SingleProject"));
export const Projects = lazy(() => import("./projects"));
export const Contact = lazy(() => import("./Contact"));

// export { default as About } from "./About";
// export { default as Home } from "./Home";
// export { default as Error } from "./Error";
// export { default as SingleProject } from "./SingleProject";
// export { default as Projects } from "./projects";
// export { default as Contact } from "./Contact";
