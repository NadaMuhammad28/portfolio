import ProjectList from "../components/project/ProjectsList";
import "../components/project/card.css";
import TitleSecondary from "../components/subComponents/TitleSecondary";
const Projects = () => {
  return (
    <main className="main relative d-flex-col">
      <TitleSecondary title="projects" />
      <ProjectList />
      {/* <Lighting /> */}
    </main>
  );
};

export default Projects;
