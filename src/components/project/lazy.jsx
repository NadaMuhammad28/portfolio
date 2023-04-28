// projects.lazy.js
import { lazy } from "react";

const ProjectsList = lazy(() => import("./ProjectsList"));

export default ProjectsList;
