import { lazy } from "react";
import ProjectList from "../components/project/ProjectsList"
import Lighting from "../components/shared/Lighting";
import "../components/project/card.css";
import TitleSecondary from "../components/subComponents/TitleSecondary";
// const ProjectList = lazy(() => import("../components/project/ProjectsList"));
const Projects = () => {
  return (
    <main className="main relative d-flex-col">
      <TitleSecondary title="projects"/>
      <ProjectList />
      {/* <Lighting /> */}
    </main>
  );
};

export default Projects;
