import React from "react";
import Image1 from "../assets/images/illustrations/choose_us.svg"

const WhyUs = () => {
  return (
    <div className="grid grid-cols-2 divide-x divide-[#ccc] divide-dashed border-x border-b border-dashed border-[#ccc]">
      <div className="px-6 pt-30 h-full">
        <img src={Image1} alt="" className="" />
      </div>
      <div className="pt-5">
        <div className="space-y-3 p-6">
          <p className="uppercase text-[#666666] text-center">Work with Us</p>
          <h2 className="text-[130px] leading-26 mango-black uppercase text-center">
            why choose us
          </h2>
        </div>
        <div className="grid gap-3 divide-y divide-[#ccc] divide-dashed">
          {why_data.map((item, index) => (
            <WhyUsComponent
              key={index}
              title={item.title}
              description={item.description}
              background={item.background}
            />
          ))}
        </div>
      </div>
    </div>

  );
};

export default WhyUs;

export const WhyUsComponent = ({ title, description, background }) => {
  return (
    <div
      className={`p-6 lg:space-y-4 ${background}`}
    >
      <p className="text-xl leading-none text-center font-black w-1/2 mx-auto">
        {title}
      </p>
      <p className="text-center">{description}</p>
    </div>
  );
};

const why_data = [
  {
    title: "AI That Solves Real Business Problems",
    description:
      "We integrate AI into your existing systems to unlock insights, automation, and smarter decisions.",
    background: "",
  },
  {
    title: "We Listen",
    description:
      "We take time to understand your goals and build solutions that truly fit your needs.",
    background: "",
  },
  {
    title: "Proven Software Engineering Experience",
    description:
      "Nearly a decade of building scalable, reliable systems for startups and enterprise companies.",
    background: "",
  },
  {
    title: "Long-Term Partnership",
    description:
      "We foster collaboration and provide support for long-term success with our software.",
    background: "",
  },

];
