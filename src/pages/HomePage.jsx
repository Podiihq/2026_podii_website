import React, { useEffect } from "react";
import { ButtonComponent } from "../components/ButtonComponent";
import NavBar from "../components/NavBar";
import { ImageReelComponent } from "../components/Reels";
import Lenis from "lenis";
import CompanyLogoMarquee from "../components/CompanyLogoMarquee";
import ServiceHomeCard from "../components/ServiceHomeCard";
import { Link } from "react-router";
import ProjectHomeCard from "../components/ProjectHomeCard";
import { RiArrowRightUpLine } from "react-icons/ri";
import WhyUs from "../components/WhyUs";
import TestimonialsComponent from "../components/Testimonials";
import Footer from "../components/Footer";
import { InnerPageTransition } from "../components/tile-page-transition/TilePageTransition";
import { motion } from "framer-motion";
import {
  hero_container,
  fadeUp,
} from "../components/animations/heroAnimations";
import { BsArrowDown } from "react-icons/bs";

const HomePage = () => {
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
      <div className="bg-[#FAF4EC] text-[#181818]">
        <section className="h-screen">
          <div className="fixed w-full z-20">
            <NavBar />
          </div>
          <motion.div
            variants={hero_container}
            initial="hidden"
            animate="show"
            className="h-full grid xl:grid-cols-2 gap-20 lg:max-w-screen-2xl mx-auto px-4"
          >
            <div className="flex flex-col pt-32">
              <div className="flex-1" />
              <div>
                <motion.p
                  variants={fadeUp}
                  className="text-[100px] leading-20 lg:text-[225px] lg:leading-45"
                >
                  We Build
                </motion.p>
                <motion.p
                  variants={fadeUp}
                  className="text-[100px] leading-20 lg:text-[225px] lg:leading-45"
                // style={{ WebkitTextStroke: "1px black" }}
                >
                  Intelligent
                </motion.p>
                <motion.p
                  variants={fadeUp}
                  className="text-[100px] leading-20 lg:text-[225px] lg:leading-45"
                >
                  Systems.
                </motion.p>
              </div>
            </div>
            <div className="pb-5 lg:pb-10 h-full flex flex-col">
              <div className="flex-1" />
              <motion.div variants={fadeUp} className="flex lg:justify-end">
                <div className="flex justify-between items-end w-full lg:w-auto">
                  <div className="flex flex-col items-center lg:hidden">
                    <p className="text-lg leading-none">Scroll</p>
                    <BsArrowDown className="text-xl" />
                  </div>
                  <ImageReelComponent />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        <section className="pt-20 lg:pt-40">
          <div className="lg:max-w-screen-2xl mx-auto px-4 space-y-10">
            <p className="indent-15 lg:indent-60 text-[40px] leading-10 lg:text-[76px] lg:leading-20">
              For nearly a <span className="text-[#FC8C67]">decade</span>, we’ve {" "}
              <span className="text-[#FC8C67]">designed, built, scaled, and automated systems</span> for established Corporate and startups alike,
              helping unlock insights and streamline operations with {" "}
              <span className="text-[#FC8C67]">Artificial Intelligence.</span>
            </p>
            <div className="flex gap-3 lg:gap-5 justify-center flex-wrap">
              <ButtonComponent
                title="See What We Can Do"
                button_link="/services"
                buttonClass="text-[40px] lg:text-5xl pl-6 pr-5 pt-5"
              />
              <ButtonComponent
                title="See What we've done"
                button_link="/projects"
                buttonClass="text-[40px] lg:text-5xl pl-6 pr-5 pt-5"
              />
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-40">
          <div className="space-y-4">
            <p className="text-center text-[40px] lg:text-[76px] lg:leading-20">
              Trusted By
            </p>
            <CompanyLogoMarquee />
          </div>
        </section>

        <section className="pb-10">
          <div className="lg:max-w-screen-2xl mx-auto px-4 space-y-20">
            <div className="space-y-4">
              <div className="space-y-3">
                <p className="lg:text-xl uppercase text-[#44A574] helvetica-bold">
                  Services
                </p>
                <p className="text-[70px] leading-15 lg:text-[155px] lg:leading-34 ">
                  What We Do
                </p>
              </div>
              <ServiceHomeCard />
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-32">
          <div className="lg:max-w-screen-2xl mx-auto px-4">
            <div className="flex items-end justify-between gap-4 pb-5 lg:pb-10 flex-wrap">
              <div className="space-y-3">
                <p className="lg:text-xl uppercase text-[#44A574] helvetica-bold">
                  Our Work
                </p>
                <p className="text-[70px] leading-15 lg:text-[155px] lg:leading-34 ">
                  portfolio
                </p>
              </div>
              <Link to="/projects" className="hidden lg:block custom-cursor">
                <div className="flex items-center hover:text-[#44A574]">
                  <p className="lg:text-[70px] leading-23 underline">
                    All PROJECTS
                  </p>
                  <RiArrowRightUpLine className="text-5xl" />
                </div>
              </Link>
            </div>
            <div>
              <div className="border-b border-[#E1E1E1]" />
              <ProjectHomeCard />
              <div className="w-fit">
                <Link to="/projects" className="custom-cursor">
                  <div className="flex items-center hover:text-[#44A574] pt-5">
                    <p className="text-4xl lg:text-[70px] lg:leading-23 underline">
                      Explore All PROJECTS
                    </p>
                    <RiArrowRightUpLine className="text-2xl lg:text-5xl" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10">
          <div className="lg:max-w-screen-2xl mx-auto px-4 space-y-6">
            <div className="space-y-3">
              <p className="text-[32px] leading-6 lg:text-[46px] lg:leading-10 uppercase text-[#44A574] text-center">
                work with us
              </p>
              <p className="text-[70px] leading-15 lg:text-[155px] lg:leading-34 text-center">
                why choose us?
              </p>
            </div>
            <WhyUs />
          </div>
        </section>

        <section className="py-20 lg:py-32">
          <div>
            <div className="space-y-3">
              <p className="text-[32px] leading-6 lg:text-[46px] lg:leading-10 uppercase text-center">
                Hear from our clients
              </p>
            </div>
            <div className="space-y-4">
              <TestimonialsComponent />
              {/* <CompanyLogoMarquee /> */}
            </div>
          </div>
        </section>
        <section className="pb-1 xl:pb-10">
          <Footer />
        </section>
      </div>
    </InnerPageTransition>
  );
};

export default HomePage;
