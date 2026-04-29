import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiArrowLeftUpLine, RiArrowRightUpLine } from "react-icons/ri";

import Tectona from "../assets/images/testimonial_logo/tectona.svg";
import Sfractol from "../assets/images/testimonial_logo/sfractol.svg";
import Groxio from "../assets/images/testimonial_logo/tectona.svg";

const TestimonialsComponent = () => {
  return (
    <div className="grid grid-cols-3 border border-[#ccc] border-dashed divide-x divide-dashed divide-[#ccc]">
      {testimonial_data.map((item, index) => (
        <div key={index}>
          <TestimonialsCard
            userName={item.userName}
            role={item.role}
            description={item.description}
            company_logo={item.company_logo}
          />
        </div>
      ))}
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
        {/* <img
          src={company_logo}
          alt=""
          className="h-20 w-20 border rounded border-[#d5d5d5]"
        /> */}
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
  }
];
