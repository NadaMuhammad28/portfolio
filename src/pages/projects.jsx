import { Suspense, useEffect, useState } from "react";

import Lighting from "../components/shared/Lighting";
import ProjectsList from "../components/project/ProjectsList";
import "../components/project/card.css";
const Projects = () => {
  return (
    <main className="main relative d-flex">
      <Suspense fallback={<h2>loaaaaaaaaaaa</h2>}>
        <ProjectsList />
      </Suspense>

      <Lighting />
    </main>
  );
};

export default Projects;
