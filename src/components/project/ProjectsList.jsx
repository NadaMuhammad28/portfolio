import ProjectCard from "./ProjectCard";
import { useEffect, useState } from "react";

import db from "../../firebase";
import { collection, query, getDocs, orderBy } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

export default function ProjectsList() {
  const [projects, setProjects] = useState(null);
  const [l, setl] = useState(false);

  const fetchProjects = async () => {
    try {
      const q = query(collection(db, "projects"), orderBy("order", "asc"));
      const querySnapshot = await getDocs(q);

      const newData = await Promise.all(
        querySnapshot.docs.map(async (doc) => {
          const data = doc.data();
          // const imageRef = ref(getStorage(), data.main_img);
          // const mainImgUrl = await getDownloadURL(imageRef);
          return {
            id: doc.id,
            img: data.main_img,
            slug: data.slug,
            repo_url: data.repo_url,
            demo_url: data.demo_url,
            title: data.title,
          };
        })
      );
      setProjects(newData);
      setl(true);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchProjects();
  }, []);

  if (!l) {
    return <h2>fgdlgklfm</h2>;
  }

  return (
    <section className="section-p">
      <h1>projects</h1>

      <div className="d-flex-col">
        {projects.map((p) => (
          <ProjectCard data={{ ...p }} />
        ))}
      </div>
    </section>
  );
}
