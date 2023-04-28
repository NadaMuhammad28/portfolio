import { Suspense, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from "../firebase";
import { collection, query, getDocs, where } from "firebase/firestore";
import Project from "../components/project/Project";

export default function SinglePRoject() {
  const { slug } = useParams();
  const [project, setProject] = useState(null);

  const fetchProject = async () => {
    try {
      const q = query(collection(db, "projects"), where("slug", "==", slug));
      const querySnapshot = await getDocs(q);
      if (querySnapshot.empty) {
        console.log("No matching documents.");
        return;
      }
      const docSnapshot = querySnapshot.docs[0];
      const data = docSnapshot.data();
      setProject({
        id: docSnapshot.id,
        slug: data.slug,
        repo_url: data.repo_url,
        demo_url: data.demo_url,
        title: data.title,
        images: data.images,
        description: data.description,
        tags: data.tags,
      });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchProject();
  }, []);
  console.log(project);
  return (
    <main className="relative">
      <Suspense fallback={<p>xmmk</p>}>
        {project && <Project project={project} />}
      </Suspense>
    </main>
  );
}
