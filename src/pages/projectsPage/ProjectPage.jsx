import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router";
import NavBar from "../../components/NavBar";
import Spinner from "../../components/Spinner";
import Lenis from "lenis";
import { RiArrowDownLine } from "react-icons/ri";
import { motion, useScroll, useTransform } from "framer-motion";
import { InnerPageTransition } from "../../components/tile-page-transition/TilePageTransition";
import {
  hero_container,
  fadeUp,
  fadeIn,
} from "../../components/animations/heroAnimations";
import { ImageComponent } from "../../components/ImageComponent";
import Footer from "../../components/Footer";
import { ButtonComponent } from "../../components/ButtonComponent";

const ProjectPage = () => {
  const { slug } = useParams();
  const [nextProject, setNextProject] = useState(null);
  const [project, setProject] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const one = useTransform(scrollYProgress, [0, 1], [0, -550]);
  const two = useTransform(scrollYProgress, [0, 1], [-450, 350]);
  const three = useTransform(scrollYProgress, [0, 1], [0, -150]);

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

  useEffect(() => {
    fetch("/data/projects.json")
      .then((res) => res.json())
      .then((data) => {
        const currentIndex = data.findIndex((p) => p.slug === slug);
        if (currentIndex === -1) {
          setProject(null);
          setNextProject(null);
          return;
        }
        setProject(data[currentIndex]);
        const nextIndex = (currentIndex + 1) % data.length;
        setNextProject(data[nextIndex]);
        setTimeout(() => setIsLoaded(true), 300);
      })
      .catch((err) => console.error("Error fetching projects:", err));
  }, [slug]);

  const textVariantsDescription = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  if (!project) {
    return (
      <div className="p-4 bg-[#44A574] h-screen">
        <div className="h-full flex flex-col justify-center items-center gap-6">
          <p className="text-center text-[#181818] text-4xl">
            Preparing Project...
          </p>
          <Spinner />
          <ButtonComponent title="Go Back home" button_link="/" />
        </div>
      </div>
    );
  }

  return (
    <InnerPageTransition>
      <div className="bg-[#F2F1ED] text-[#181818] pb-1 lg:pb-10">
        <div className="fixed w-full z-20">
          <NavBar />
        </div>
        <motion.section
          variants={hero_container}
          initial="hidden"
          animate="show"
          className="lg:max-w-screen-2xl mx-auto px-4 h-screen flex flex-col pb-6"
        >
          <div className="pt-28 lg:pt-40">
            <motion.div variants={fadeUp} className="flex gap-2">

              <Link to="/projects" className="custom-cursor">
                <p className="text-3xl lg:text-[50px] lg:leading-10 text-[#1e1e1e] hover:underline">All Projects</p>
              </Link>
              <p className="text-3xl lg:text-[50px] lg:leading-10"> / Project00{project.id}</p>
            </motion.div>
            <motion.p
              variants={fadeUp}
              className="text-[100px] leading-22 lg:text-[225px] lg:leading-45 pt-4 lg:pt-8"
            >
              {project.title}
            </motion.p>
            <motion.div variants={fadeUp} className="space-y-2 pt-4 lg:pt-0">
              <p className="text-[32px] leading-6">
                <span
                  style={{ color: project.theme_color }}
                  className={`tracking-wide`}
                >
                  Client:
                </span>{" "}
                {project.project_client}
              </p>
              <p className="text-[32px] leading-6">
                <span
                  style={{ color: project.theme_color }}
                  className={`tracking-wide`}
                >
                  Year:
                </span>{" "}
                {project.project_status}
              </p>
              <p className="text-[32px] leading-6">
                <span
                  style={{ color: project.theme_color }}
                  className={`tracking-wide`}
                >
                  AI Service:
                </span>{" "}
                {project.ai_service.map((item, index) => (
                  <span key={index}>{item}</span>
                ))}
              </p>
            </motion.div>
          </div>
          <div className="flex-1" />
          <div className="grid lg:grid-cols-2">
            <div className="lg:flex flex-col h-full hidden">
              <div className="flex-1" />
              <motion.div variants={fadeIn}>
                <RiArrowDownLine className="text-4xl" />
              </motion.div>
            </div>
            <div className="flex gap-4 items-end w-full">
              <motion.div variants={fadeUp} className="w-full">
                <ImageComponent
                  image={project.thumbnail}
                  imageClass="border-2 w-full"
                  skeletonClass="border-2 w-100 h-120"
                />
              </motion.div>
            </div>
          </div>
        </motion.section>

        <section className="lg:max-w-screen-2xl mx-auto px-4 py-20 lg:py-32">
          <p className="indent-15 lg:indent-60 text-[40px] leading-10 lg:text-[76px] lg:leading-20">
            {project.project_description}
          </p>
        </section>

        <section>
          {(project.desktop_screens?.length > 0 ||
            project.mobile_screens?.length > 0) && (
              <div
                ref={container}
                className={`h-screen overflow-hidden relative border-y-3 bg-[${project.theme_color}]`}
              >
                <div className="grid grid-cols-4 lg:grid-cols-5 gap-4 ">
                  <motion.div
                    style={{ y: one }}
                    className="flex flex-col gap-4 col-span-2 lg:col-span-1"
                  >
                    {project.mobile_screens.map((item, index) => (
                      <ParalaxImage key={index} image_item={item} />
                    ))}
                  </motion.div>
                  <motion.div
                    style={{ y: two }}
                    className="lg:flex flex-col gap-4 col-span-3 hidden"
                  >
                    {project.desktop_screens.map((item, index) => (
                      <ParalaxImage key={index} image_item={item} />
                    ))}
                  </motion.div>
                  <motion.div
                    style={{ y: three }}
                    className="flex flex-col gap-4 col-span-2 lg:col-span-1"
                  >
                    {project.mobile_screens.slice(2, 4).map((item, index) => (
                      <ParalaxImage key={index} image_item={item} />
                    ))}
                  </motion.div>
                </div>
              </div>
            )}
        </section>

        <section className="">
          <div className="lg:max-w-screen-2xl mx-auto px-4 border-b border-[#ccc] py-20">
            <div className="grid lg:grid-cols-5 space-y-6 lg:space-y-0">
              <p className="text-[50px] leading-none col-span-2">
                Problem Statement
              </p>
              <div className="col-span-3 space-y-6">
                {project.problem_statement.map((item, index) => (
                  <p key={index} className="helvetica-regular lg:text-xl">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:max-w-screen-2xl mx-auto px-4 border-b border-[#ccc] py-20">
            <div className="grid lg:grid-cols-5 space-y-6 lg:space-y-0">
              <p className="text-[50px] leading-none col-span-2">
                What We Built
              </p>
              <div className="col-span-3 space-y-2 lg:space-y-4">
                {project.project_solution.map((item, index) => (
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-black" />
                    <p key={index} className="helvetica-regular lg:text-xl">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:max-w-screen-2xl mx-auto px-4 border-b border-[#ccc] py-20">
            <p className="text-[50px] leading-none pb-10">System Interface</p>
            <div className="space-y-5">
              <div style={{ y: two }} className="grid lg:grid-cols-2 gap-2">
                {project.desktop_screens.map((item, index) => (
                  <ParalaxImage key={index} image_item={item} />
                ))}
              </div>
              <div
                style={{ y: one }}
                className="grid grid-cols-2 lg:grid-cols-5 gap-2"
              >
                {project.mobile_screens.map((item, index) => (
                  <ParalaxImage key={index} image_item={item} />
                ))}
              </div>
            </div>
          </div>

          <div className="lg:max-w-screen-2xl mx-auto px-4 border-[#ccc] py-20 lg:py-40">
            <div className="grid lg:grid-cols-5 space-y-6 lg:space-y-0">
              <p className="text-[50px] leading-none col-span-2">
                Impact / Results
              </p>
              <div className="col-span-3 space-y-4">
                {project.project_impact.map((item, index) => (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-black" />
                    <p
                      key={index}
                      className=" text-3xl lg:text-7xl leading-none"
                    >
                      {item}
                    </p>
                  </div>
                ))}

                <div className="pt-10 lg:pt-32">
                  {nextProject && (
                    <motion.div
                      variants={textVariantsDescription}
                      initial="hidden"
                      animate={isLoaded ? "show" : "hidden"}
                      transition={{ delay: 0.9 }}
                      whileTap={{ scale: 1 }}
                      className={`w-fit p-3 group bg-[${nextProject.theme_color}] border-2 rounded hover:shadow-2xl hover:-translate-y-2 duration-300`} >
                      <Link
                        to={`/projects/${nextProject.slug}`}
                        className="justify-center rounded-xs flex gap-4 custom-cursor"
                      >
                        <div>
                          <p className="uppercase text-4xl">Next Project</p>
                          <p href={`/projects/${nextProject.slug}`}
                            className="text-[60px] leading-10 lg:text-[150px] lg:leading-20 pt-4 lg:pt-8">
                            {nextProject.title}
                          </p>
                        </div>
                        <div className='flex items-center gap-3 group-hover:-translate-y-1 duration-300'>
                          <ImageComponent
                            image={nextProject.thumbnail}
                            imageClass='w-55 h-30 lg:h-40 border-2 rounded object-cover'
                            skeletonClass="w-55 h-30 lg:h-40 rounded"
                          />
                        </div>
                      </Link>
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </InnerPageTransition>
  );
};

export default ProjectPage;

const ParalaxImage = ({ image_item }) => {
  return (
    <div>
      <ImageComponent
        image={image_item}
        imageClass="w-full object-cover"
        skeletonClass="w-full h-150"
      />
    </div>
  );
};
