import React, { useEffect, useRef } from "react";
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
import { motion, useScroll } from "framer-motion";
import {
  hero_container,
  fadeUp,
} from "../components/animations/heroAnimations";
import { BsArrowDown } from "react-icons/bs";
import { BorderConers } from "../components/BorderConers";
import CompaniesSection from "../components/CompanyLogos";
import { LaserFlowBoxExample } from "../components/lazer/LaserBox";
import ServicesSection from "../components/ServicesSection";
import MeetingIllustration from "../assets/images/illustrations/Workshop.svg"

import HeroImage from "../assets/images/illustrations/hero-illustration.svg"
import CeilingImage from "../assets/images/illustrations/ceiling_illustration.svg"
import { IoChevronBackSharp, IoChevronForwardSharp } from "react-icons/io5";

const HomePage = () => {
  const targetSectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetSectionRef,
    offset: ["start start", "end end"],
  });


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
        <section className="min-h-[80vh] relative">
          <div className="fixed w-full pt-4 z-100 lg:px-4 xl:px-0">
            <NavBar targetSectionRef={targetSectionRef} />
          </div>
          <motion.div
            variants={hero_container}
            initial="hidden"
            animate="show"
            className="h-full pt-32 lg:pt-40 flex flex-col lg:grid lg:grid-cols-6 gap-20 lg:max-w-7xl mx-auto px-4 xl:px-0 relative z-20"
          >
            <div className="self-center col-span-3 space-y-4">
              <motion.p
                variants={fadeUp}
                className="text-[50px] leading-10 md:text-[80px] md:leading-18 lg:text-[100px] lg:leading-20 xl:text-[130px] xl:leading-26 mango-black uppercase"
              >
                The bottleneck is always human.
                That’s a design problem.
              </motion.p>
              <motion.p className="lg:w-10/12" variants={fadeUp}>
                We’re is the consultancy that diagnoses what is broken and builds what replaces it, so businesses can scale without the manual dependencies that cap their capacity.
              </motion.p>
              <motion.div variants={fadeUp} className="group relative cursor-pointer border border-[#ccc] hover:bg-[#1a1a1a] border-dashed w-fit mt-5">
                <BorderConers />
                <div className="px-4 py-3 space-y-1">
                  <p className="text-[#666666] group-hover:text-[#f5f5f5] text-xs md:text-base">See how we  <span className="uppercase font-bold text-[#038585] group-hover:text-[#C8420B]">Recovered more than</span></p>
                  <div className="w-full flex justify-between items-end">
                    <p className="text-3xl lg:text-4xl xl:text-5xl dotSans-black text-[#C8420B] group-hover:text-[#C8420B] leading-none">KSH 10M</p>
                    <RiArrowRightUpLine className='text-2xl text-[#038585] group-hover:text-[#C8420B]' />
                  </div>
                  <p className="text-[#666666] group-hover:text-[#f5f5f5] text-xs md:text-base">for KIWASCO within a year.</p>
                </div>
              </motion.div>
            </div>
            <div className="self-center lg:flex justify-center lg:justify-end col-span-3 hidden">
              <img src={HeroImage} alt="" className="w-1/2 lg:w-full" />
            </div>
          </motion.div>
        </section >
        <div className="relative z-50 md:pt-10">
          <CompaniesSection />
        </div>
        <section className="lg:max-w-7xl mx-auto pb-10 md:pb-20 px-4 xl:px-0">
          <div className="border border-[#ccc] border-dashed p-4 md:p-10">
            <h2 className="text-[50px] leading-10 md:text-[80px] md:leading-18 lg:text-[100px] lg:leading-20 xl:text-[130px] xl:leading-26 mango-black uppercase pb-6">
              Every business eventually hits the same ceiling.
            </h2>
            <div className="grid lg:grid-cols-2 gap-10">
              <img src={CeilingImage} alt="" className="self-center w-1/2 lg:w-10/12 hidden md:block" />
              <div className="space-y-6 ">
                <p>
                  The business isn’t failing—its systems just haven’t scaled with it. Manual approvals, fragmented tools, and poor integrations are forcing the team to hold everything together. People are working harder than ever, but the real issue lies in the underlying structure, not their effort.
                </p>
                <div className="flex flex-col border border-[#ccc] border-dashed rounded-xs p-6 relative lg:w-11/12">
                  <BorderConers />
                  <div className="">
                    <h2 className="mb-6 text-xl md:text-2xl font-bold leading-none">
                      Podii exists to redesign that architecture.
                    </h2>
                    <p className="mb-4 border-l-2 border-brand-primary pl-3 md:pl-6 leading-relaxed tracking-tight/70">
                      We work with businesses to map out their current process flows, while identifying bottleknecks and rebuilding their infrastructure from the ground up. We use the right data model, integration architecture and automation logic. Not just a layer on top of broken process
                    </p>
                    <h2 className="indent-3 lg:indent-6 md:text-xl font-bold">
                      Fix the system, not the person.
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="pb-15 md:pb-30">
          <ServicesSection />
        </div>
        <section ref={targetSectionRef} className="py-15 md:py-20 bg-[#1a1a1a] text-[#f5f5f5]">
          <div className="lg:max-w-7xl mx-auto px-4 xl:px-0">
            <p className="uppercase pb-2 lg:pb-5 text-[#666666]">our work</p>
            <h2 className="text-[50px] leading-10 md:text-[80px] md:leading-18 lg:text-[100px] lg:leading-20 xl:text-[130px] xl:leading-26 mango-black uppercase pb-6">
              what we’ve done
            </h2>
            <div>
              <ProjectHomeCard />
              <div className="flex justify-end pt-10">
                <Link to="" className="w-fit ">
                  <div className="pt-5">
                    <p className="text-5xl lg:text-[70px] lg:leading-23 underline mango-black uppercase hover:text-[#ccc]">
                      SEE All PROJECTS
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-10 lg:pb-20">
          <div className="lg:max-w-7xl mx-auto px-4 xl:px-0">
            <WhyUs />
          </div>
        </section>

        <section className="pb-10">
          <div className="lg:max-w-7xl mx-auto px-4 xl:px-0">
            <div className="space-y-4 pb-10">
              <TestimonialsComponent />
            </div>
          </div>
        </section>
        <section className="pb-1 xl:pb-10 bg-[#1e1e1e]">
          <Footer />
        </section>
      </div >
    </InnerPageTransition >
  );
};

export default HomePage;
