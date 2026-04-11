import React from "react";

const WhyUs = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-3">
      {why_data.map((item, index) => (
        <WhyUsComponent
          key={index}
          title={item.title}
          description={item.description}
          background={item.background}
        />
      ))}
    </div>
  );
};

export default WhyUs;

export const WhyUsComponent = ({ title, description, background }) => {
  return (
    <div
      className={`border lg:border-2 border-[#181818] p-6 lg:p-10 lg:space-y-4 flex flex-col rounded ${background}`}
    >
      <p className="text-[32px] leading-8 lg:text-[46px] lg:leading-10 text-center">
        {title}
      </p>
      <div className="flex-1" />
      <p className="text-center lg:text-xl helvetica-regular">{description}</p>
    </div>
  );
};

const why_data = [
  {
    title: "AI That Solves Real Business Problems",
    description:
      "We integrate AI into your existing systems to unlock insights, automation, and smarter decisions.",
    background: "bg-[#FC8C67]",
  },
  {
    title: "We Listen",
    description:
      "We listen to you and buld exactly what you want.",
    background: "bg-[#FAF4EC]",
  },
  {
    title: "Proven Software Engineering Experience",
    description:
      "Nearly a decade of building scalable, reliable systems for startups and enterprise companies.",
    background: "bg-[#44A574] text-white",
  },
  {
    title: "Long-Term Partnership",
    description:
      "We foster collaboration and provide support for long-term success with our software.",
    background: "bg-[#EDC343]",
  },

];
