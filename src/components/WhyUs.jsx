import React from "react";
import Image1 from "../assets/images/illustrations/choose_us.svg"
import { BorderConers } from "./BorderConers";

const WhyUs = () => {
  return (
    <div className="mt-10 relative grid lg:grid-cols-6 divide-x divide-[#ccc] divide-dashed border-x border-y border-dashed border-[#ccc]">
      <div className="pt-5 lg:col-span-3">
        <BorderConers />
        <div className="space-y-3 p-6">
          <p className="uppercase text-[#666666]">Work with Us</p>
          <h2 className="text-[50px] leading-10 md:text-[80px] md:leading-18 lg:text-[100px] lg:leading-20 xl:text-[130px] xl:leading-26 mango-black uppercase">
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
      <div className="px-10 hidden lg:block lg:col-span-3 self-center">
        <img src={Image1} alt="" className="" />
      </div>
    </div>
  );
};

export default WhyUs;

export const WhyUsComponent = ({ title, description, background }) => {
  return (
    <div
      className={`p-3 lg:p-6 space-y-2 lg:space-y-4 ${background} `}
    >
      <p className="text-xl leading-none text-[#038585] font-bold">
        {title}
      </p>
      <p className="pl-3 border-l-2 border-[#038585]">{description}</p>
    </div >
  );
};

const why_data = [
  {
    title: "Diagnostic Before Design",
    description:
      "We map your process flows and interview your operations team before proposing architectural changes. The diagnostic must be accurate before the solution can be.",
    background: "",
  },
  {
    title: "Full-Stack Operational Capability",
    description:
      "Process diagnostics, system architecture, integration design, and development. The people who run the diagnostic build the solution. No handoffs between strategy and engineering teams.",
    background: "",
  },
  {
    title: "Market Knowledge You Can't Buy Elsewhere",
    description:
      "A decade building operational systems in  Africa. We know how reconciliation fails with inconsistent bank APIs, how approval workflows break in owner-managed structures, how regulatory reporting creates manual bottlenecks.",
    background: "",
  },
  {
    title: "We Challenge Your Approach",
    description:
      "If automation would lock in a broken process, we say so. If the data model needs redesigning first, we redesign it. Clients engage us to lead on architecture, not implement their existing thinking.",
    background: "",
  },

];
