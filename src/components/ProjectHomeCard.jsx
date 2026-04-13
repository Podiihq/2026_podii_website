import React, { useEffect, useState } from "react";
import { ProjectCardComponent } from "../pages/projectsPage/Projects";

const ProjectHomeCard = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/data/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Error fetching projects:", err));
  }, []);

  return (
    <div>
      <div className="">
        {projects.slice(0, 5).map((project) => (
          <div key={project.id} className="relative border-b border-[#E1E1E1] group py-5">
            <ProjectCardComponent
              id={project.id}
              thumbnail={project.thumbnail}
              title={project.title}
              ai_service={project.ai_service}
              project_link={`/projects/${project.slug}`}
            />
            <span className="absolute left-0 bottom-0 h-0.5 w-full bg-black
                             scale-x-0 origin-left transition-transform duration-600 ease-in-out
                             group-hover:scale-x-100 group-hover:origin-left"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectHomeCard;