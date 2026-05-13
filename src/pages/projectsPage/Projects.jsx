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
import { BorderConers } from "../../components/BorderConers";

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
      <div className="bg-[#F5F5F5] text-[#1A1A1A]">
        <div className="fixed w-full pt-4 z-100 lg:px-4 xl:px-0">
          <NavBar targetSectionRef="" />
        </div>
        <motion.div
          variants={hero_container}
          initial="hidden"
          animate="show"
          className="pt-32 pb-10 lg:pb-20 lg:pt-40 lg:max-w-7xl mx-auto px-4 xl:px-0">
          <div className="flex gap-4">
            <motion.p variants={fadeUp} className="text-[70px] leading-14 md:text-[80px] md:leading-18 lg:text-[100px] lg:leading-20 xl:text-[130px] xl:leading-26 mango-black uppercase">
              All Case Studies
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="text-5xl text- mango-black uppercase">(0{projects?.length})</motion.p>
          </div>
          <div className="pt-10 lg:pt-20 grid lg:grid-cols-2 gap-4">
            {projects &&
              projects.map((project) => (
                <motion.div variants={fadeUp} key={project.id} className="h-full border border-dashed border-[#ccc] relative">
                  <BorderConers />
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
                </motion.div>
              ))}
          </div>
        </motion.div>
        <section className="pb-1 xl:pb-10 bg-[#1e1e1e]">
          <Footer />
        </section>
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
      <motion.div className="w-full h-full flex items-start group hover:bg-[#E8E8E8] hover:text-[#1a1a1a] p-4 lg:p-8">
        <motion.div className="flex flex-col h-full">
          <div className="w-full lg:h-25 h-20">
            <ImageComponent
              image={thumbnail}
              imageClass="w-full lg:h-25 h-20 object-cover object-top"
              skeletonClass="w-40 lg:h-25 h-20 object-cover border"
            />
          </div>
          <div className="space-y-3 pt-4">
            <p className="uppercase font-medium">{project_category}</p>
            <p className="capitalize text-2xl font-bold">
              {title}
            </p>
            <p className="">{project_description}<span className="text-[#038585] italic">Read More</span></p>
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
