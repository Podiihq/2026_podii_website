import React, { useEffect, useState } from "react";
import { ProjectCardComponent } from "../pages/projectsPage/Projects";
import { BorderConers } from "./BorderConers";

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
      <div className="grid grid-cols-3 divide-x divide-[#3D3D3D] divide-dashed border border-dashed border-[#3D3D3D]">
        {projects.slice(0, 3).map((project) => (
          <div key={project.id} className="h-full">
            <ProjectCardComponent
              id={project.id}
              thumbnail={project.thumbnail}
              title={project.title}
              project_status={project.project_status}
              project_link={"#"}
              project_category={project.project_category}
              project_description={project.project_description}
            // project_link={`/projects/${project.slug}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectHomeCard;