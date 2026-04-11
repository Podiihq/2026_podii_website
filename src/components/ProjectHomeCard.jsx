import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { ImageComponent } from "./ImageComponent";
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
      {/* <div className="">
        {projects.slice(0, 5).map((project) => (
          <div key={project.id}>
            <ProjectHomeCardComponent
              id={project.id}
              thumbnail={project.thumbnail}
              title={project.title}
              ai_service={project.ai_service}
              project_link="#"
            // project_link={`/projects/${project.slug}`}
            />
          </div>
        ))}
      </div> */}
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

export const ProjectHomeCardComponent = ({
  id,
  thumbnail,
  title,
  ai_service,
  project_link,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link to={project_link} className="custom-cursor">
      <motion.div
        className="w-full h-full flex lg:my-10 border-b border-[#E1E1E1] items-start hover:gap-10 group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.img
          src={thumbnail}
          alt=""
          className="h-50 object-cover rounded border-2 hidden lg:block"
          animate={{
            width: isHovered ? 300 : 0, // 👈 controls the push
            opacity: isHovered ? 1 : 0,
            marginRight: isHovered ? 40 : 0, // keeps spacing smooth
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          style={{ overflow: "hidden" }}
        />

        <motion.div
          layout
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="py-4 lg:py-8 flex items-start gap-3"
        >
          <div className="w-30 h-16 lg:hidden">
            <ImageComponent
              image={thumbnail}
              imageClass="w-30 h-16 object-cover border"
              skeletonClass="w-30 h-16 object-cover border"
            />
          </div>
          <div className="w-full">
            <p className="capitalize w-10/12 text-[50px] leading-12 lg:text-[120px] lg:leading-25 group-hover:opacity-50">
              {title}
            </p>
            <div className="flex gap-2 lg:gap-4">
              {ai_service.map((item, index) => (
                <div key={index} className="flex gap-1 items-center">
                  <div className="w-2 h-2 bg-black group-hover:bg-[#44A574] hidden lg:block" />
                  <p className="tracking-wide uppercase border-[#323232] rounded-full text-2xl lg:text-[32px] leading-5 group-hover:text-[#44A574]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </Link>
  );
};
