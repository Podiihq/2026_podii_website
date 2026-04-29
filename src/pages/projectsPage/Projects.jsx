import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import { InnerPageTransition } from "../../components/tile-page-transition/TilePageTransition";
import Footer from "../../components/Footer";
import Lenis from "lenis";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { ImageComponent } from "../../components/ImageComponent";
import {
  hero_container,
  fadeUp,
  fadeIn,
} from "../../components/animations/heroAnimations";

const Projects = () => {
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    fetch("/data/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Error fetching projects:", err));
  }, []);

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <InnerPageTransition>
      <div className="bg-[#F2F1ED] text-[#181818] pb-14">
        <div className="fixed w-full z-20">
          <NavBar />
        </div>
        <motion.div
          variants={hero_container}
          initial="hidden"
          animate="show"
          className="lg:max-w-7xl mx-auto px-4 pt-40 pb-20">
          <div className="flex gap-4">
            <motion.p
              variants={fadeUp}
              className="text-[100px] leading-20 lg:text-[225px] lg:leading-45"
            >
              All Projects
            </motion.p>
            <motion.p
              variants={fadeIn}
              className="text-5xl text-[#44A574]">(0{projects?.length})</motion.p>
          </div>
          <motion.div variants={fadeUp} className="pt-40">
            {projects &&
              projects.map((project) => (
                <div key={project.id} className="relative border-b border-[#E1E1E1] group py-0 lg:py-5">
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
          </motion.div>
        </motion.div>
        <Footer />
      </div>
    </InnerPageTransition>
  );
};

export default Projects;

export const ProjectCardComponent = ({
  id,
  thumbnail,
  title,
  project_status,
  project_link,
  project_category,
  project_description
}) => {
  return (
    <Link to={project_link} className="cursor-pointer ">
      <motion.div className="w-full h-full flex items-start group hover:bg-[#E8E8E8] hover:text-[#1a1a1a] p-8">
        <motion.div className="flex flex-col h-full">
          <div className="w-full lg:h-25 h-20">
            <ImageComponent
              image={thumbnail}
              imageClass="w-full lg:h-25 h-20 object-cover object-top"
              skeletonClass="w-40 lg:h-25 h-20 object-cover border"
            />
          </div>
          <div className="space-y-4 pt-4">
            <p className="uppercase ">{project_category}</p>
            <p className="capitalize text-3xl">
              {title}
            </p>
            <p className="">{project_description}</p>
          </div>
          <div className="flex-1" />
          <div className="flex gap-2 lg:gap-4 pt-4">
            <p className="tracking-wide uppercase text-sm border-[#323232] rounded-full text-[#C8420B] underline">
              {project_status}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </Link>
  );
};
