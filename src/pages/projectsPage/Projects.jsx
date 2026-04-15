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
          className="lg:max-w-screen-2xl mx-auto px-4 pt-40 pb-20">
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
  ai_service,
  project_link,
}) => {
  return (
    <Link to={project_link} className="custom-cursor">
      <motion.div className="w-full h-full flex items-start group">
        <motion.div className="lg:py-4 flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-10 group-hover:px-10 duration-300">
          <div className="w-80 lg:h-50 h-40">
            <ImageComponent
              image={thumbnail}
              imageClass="w-80 lg:h-50 h-40 object-cover border-2"
              skeletonClass="w-80 lg:h-50 h-40 object-cover border"
            />
          </div>
          <div className="">
            <p className="capitalize xl:w-10/12 text-[50px] leading-12 lg:text-[80px] lg:leading-18 xl:text-[100px] xl:leading-20 group-hover:opacity-50">
              {title}
            </p>
            <div className="flex gap-2 lg:gap-4">
              {ai_service.map((item, index) => (
                <div key={index} className="flex gap-1 items-center">
                  <div className="w-2 h-2 bg-[#FC8C67] hidden lg:block" />
                  <p className="tracking-wide uppercase border-[#323232] rounded-full text-2xl lg:text-[32px] leading-5 text-[#FC8C67]">
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
