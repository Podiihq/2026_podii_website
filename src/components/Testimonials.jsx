import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiArrowLeftUpLine, RiArrowRightUpLine } from "react-icons/ri";

import Tectona from "../assets/images/testimonial_logo/tectona.svg";
import Sfractol from "../assets/images/testimonial_logo/sfractol.svg";
import Groxio from "../assets/images/testimonial_logo/tectona.svg";

const TestimonialsComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const total = testimonial_data.length;

  const getIndex = (index) => {
    return (index + total) % total;
  };

  const prevIndex = getIndex(currentIndex - 1);
  const nextIndex = getIndex(currentIndex + 1);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => getIndex(prev + 1));
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => getIndex(prev - 1));
  };

  return (
    <div className="relative w-full flex flex-col items-center overflow-hidden lg:max-w-screen-2xl mx-auto px-4">
      {/* Cards */}
      <div className="flex items-center justify-center w-full h-120 relative">
        <AnimatePresence initial={false} custom={direction}>
          {/* LEFT CARD */}
          <motion.div
            key={prevIndex}
            initial={{ x: direction > 0 ? -300 : 0, opacity: 0 }}
            animate={{ x: -250, scale: 0.8, opacity: 0.6 }}
            exit={{ x: -400, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute"
          >
            <TestimonialsCard {...testimonial_data[prevIndex]} />
          </motion.div>

          {/* CENTER CARD */}
          <motion.div
            key={currentIndex}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ x: 0, scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute z-10"
          >
            <TestimonialsCard {...testimonial_data[currentIndex]} />
          </motion.div>

          {/* RIGHT CARD */}
          <motion.div
            key={nextIndex}
            initial={{ x: direction < 0 ? 300 : 0, opacity: 0 }}
            animate={{ x: 250, scale: 0.8, opacity: 0.6 }}
            exit={{ x: 400, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute"
          >
            <TestimonialsCard {...testimonial_data[nextIndex]} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="hidden xl:flex gap-4 mt-6 px-20 absolute justify-between items-center z-10 w-full h-full">
        <button
          onClick={handlePrev}
          className="custom-cursor pr-6 pl-2 pt-4 border-2 rounded cursor-pointer text-7xl leading-20 hover:bg-[#44A574] flex items-end bg-[#FAF4EC]"
        >
          <RiArrowLeftUpLine className="text-4xl mb-3" />
          Prev
        </button>
        <button
          onClick={handleNext}
          className="custom-cursor pl-6 pr-2 pt-4 border-2 rounded cursor-pointer text-7xl leading-20 hover:bg-[#44A574] flex items-end bg-[#FAF4EC]"
        >
          Next
          <RiArrowRightUpLine className="text-4xl mb-3" />
        </button>
      </div>
      <div className="xl:hidden flex gap-4 px-20 items-center z-10 w-full h-full justify-center">
        <button
          onClick={handlePrev}
          className="pr-6 pl-2 pt-4 border-2 rounded cursor-pointer text-5xl lg:text-7xl lg:leading-20 hover:bg-[#44A574] flex items-end"
        >
          <RiArrowLeftUpLine className="text-4xl mb-3" />
          Prev
        </button>
        <button
          onClick={handleNext}
          className="pl-6 pr-2 pt-4 border-2 rounded cursor-pointer text-5xl lg:text-7xl lg:leading-20 hover:bg-[#44A574] flex items-end"
        >
          Next
          <RiArrowRightUpLine className="text-4xl mb-3" />
        </button>
      </div>
    </div>
  );
};

export default TestimonialsComponent;

export const TestimonialsCard = ({
  userName,
  role,
  description,
  company_logo,
}) => {
  return (
    <div className="w-80 lg:w-150 min-h-100 border-2 p-6 mx-2 border-[#181818] bg-[#FAF4EC] shadow-xl rounded">
      <div className="space-y-6 items-start">
        <div className="flex items-start gap-5">
          <img
            src={company_logo}
            alt=""
            className="h-20 w-20 border rounded border-[#d5d5d5]"
          />
          <div>
            <p className="text-[40px] leading-9 lg:text-[56px] lg:leading-10 helvetica-medium">
              {userName}
            </p>
            <p className="uppercase text-[24px] leading-5 pt-2 text-[#44A574]">
              {role}
            </p>
          </div>
        </div>
        <p className="lg:text-xl text-[#3b3b3b] helvetica-regular">
          "{description}"
        </p>
      </div>
    </div>
  );
};

const testimonial_data = [
  {
    userName: "Donald Odhiambo",
    role: " CEO, Tectona Group",
    description:
      "The MEL platform developed by Podii has greatly contributed to the  ongoing digital transformation in the data, M&E, and project  management field. Their professionalism and expertise towards delivering quality product was quite impressive.",
    company_logo: Tectona,
  },
  {
    userName: "Duncan Sparrell",
    role: "sFractal Consulting",
    description:
      "The team at Podii was efficient, effective, exceptional, and very  helpful in turning my vision into reality - a game to teach supply chain cybersecurity. And not just in the fun stuff of creating, but also in  the not-as-fun stuff like GitHub alerts, patches, and updating to stay  current. This is particularly important with today's ever-increasing  cyber threats.",
    company_logo: Sfractol,
  },
  {
    userName: "Bruce Tate",
    role: " Managing Director, Groxio",
    description:
      "Working with Sigu and Podii is fantastic. He has the professional  skills. His projects always come in under budget and with good quality,  and interactions are respectful.",
    company_logo: Groxio,
  },
  {
    userName: "Duncan Sparrell",
    role: "sFractal Consulting",
    description:
      "The team at Podii was efficient, effective, exceptional, and very  helpful in turning my vision into reality - a game to teach supply chain cybersecurity. And not just in the fun stuff of creating, but also in  the not-as-fun stuff like GitHub alerts, patches, and updating to stay  current. This is particularly important with today's ever-increasing  cyber threats.",
    company_logo: Sfractol,
  },
];
