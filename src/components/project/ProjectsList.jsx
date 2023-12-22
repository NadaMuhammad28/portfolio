import ProjectCard from './ProjectCard';
import { Suspense, useEffect } from 'react';
import { useGlobalContext } from '../../context/GlobalContext';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import Fallback from './Fallback';

export default function ProjectsList() {
  const { fetchProjects, projects } = useGlobalContext();
  useEffect(() => {
    fetchProjects();
  }, []);

  if (!projects.length) return <Fallback />;
  return (
    <section className='section-p'>
      <div className='d-flex-col'>
        {projects.map((p) => (
          <LazyLoadComponent key={p.id}>
            <ProjectCard data={{ ...p }} />
          </LazyLoadComponent>
        ))}
      </div>
    </section>
  );
}
