import ProjectCard from "./ProjectCard";
import { useEffect } from "react";
import { useGlobalContext } from "../../context/GlobalContext";
import { LazyLoadComponent } from "react-lazy-load-image-component";

export default function ProjectsList() {
  const { fetchProjects, projects } = useGlobalContext();
  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <section className="section-p">
      <div className="d-flex-col">
        {projects.map((p) => (
          <LazyLoadComponent key={p.id}>
            <ProjectCard data={{ ...p }} />
          </LazyLoadComponent>
        ))}
      </div>
    </section>
  );
}
