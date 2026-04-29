import React, { useMemo } from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiArrowLeftUpLine, RiArrowRightUpLine } from "react-icons/ri";

import Tectona from "../assets/images/testimonial_logo/tectona.svg";
import Sfractol from "../assets/images/testimonial_logo/sfractol.svg";
import Groxio from "../assets/images/testimonial_logo/tectona.svg";
import { IoChevronBackSharp, IoChevronForwardSharp } from "react-icons/io5";

const PAGE_SIZE = 3;

const TestimonialsComponent = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const total = testimonial_data.length;
  const canPaginate = total > PAGE_SIZE;
  const totalPages = Math.ceil(total / PAGE_SIZE);
  const currentPage = Math.floor(startIndex / PAGE_SIZE) + 1;

  const visibleTestimonies = useMemo(() => {
    if (total === 0) {
      return [];
    }

    return Array.from({ length: Math.min(PAGE_SIZE, total) }, (_, index) => {
      const logoIndex = (startIndex + index) % total;
      return testimonial_data[logoIndex];
    });
  }, [startIndex, total]);

  const goNext = () => {
    if (!canPaginate) {
      return;
    }

    setDirection(1);
    setStartIndex((previous) => (previous + PAGE_SIZE) % total);
  };

  const goPrevious = () => {
    if (!canPaginate) {
      return;
    }

    setDirection(-1);
    setStartIndex((previous) => (previous - PAGE_SIZE + total) % total);
  };



  return (
    <div>
      <div className="flex flex-col md:flex-row md:justify-between md:items-center pb-4">
        <div className="space-y-3">
          <p className="uppercase text-[#666666]">Testimonials</p>
          <h2 className="text-[50px] leading-10 md:text-[80px] md:leading-18 lg:text-[100px] lg:leading-20 xl:text-[130px] xl:leading-26 mango-black uppercase pb-6">
            Hear from our clients
          </h2>
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2 justify-end">
            <div
              onClick={goPrevious}
              className="cursor-pointer flex gap-2 items-center border border-dashed border-[#ccc] pl-2 pr-4 py-2 hover:bg-[#1a1a1a] hover:text-[#f5f5f5] uppercase"
              disabled={!canPaginate}>
              <IoChevronBackSharp className='text-xl' />
              Prev
            </div>
            <div onClick={goNext}
              className="cursor-pointer flex gap-2 items-center border border-dashed border-[#ccc] pr-2 pl-4 py-2 hover:bg-[#1a1a1a] hover:text-[#f5f5f5] uppercase"
              disabled={!canPaginate}>
              Next
              <IoChevronForwardSharp className='text-xl' />
            </div>
          </div>
          <p className="text-xs uppercase tracking-[0.18em] text-[#ccc] text-right">
            Showing {Math.min(PAGE_SIZE, total)} at a time · {total === 0 ? 0 : currentPage} of {totalPages || 0}
          </p>
        </div>
      </div>
      <div className="relative">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={startIndex}
            custom={direction}
            initial={{ opacity: 0, x: direction * 36 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -36 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-3 border border-[#ccc] border-dashed divide-x divide-y divide-dashed divide-[#ccc]">
            {visibleTestimonies.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.24, delay: index * 0.04, ease: "easeOut" }}>
                <TestimonialsCard
                  userName={item.userName}
                  role={item.role}
                  description={item.description}
                  company_logo={item.company_logo}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
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
    <div className="p-6 mx-2">
      <div className="space-y-6 items-start">
        <div className="flex items-start gap-5">
          <div>
            <p className="uppercase font-bold text-lg">
              {userName}
            </p>
            <p className="">
              {role}
            </p>
          </div>
        </div>
        <p className="text-[#3b3b3b]">
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
]