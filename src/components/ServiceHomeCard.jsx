import React from "react";
import { Link } from "react-router";
import { RiArrowRightUpLine } from "react-icons/ri";


const ServiceHomeCard = () => {
  return (
    <div className=" grid lg:grid-cols-2 xl:grid-cols-3 gap-4">
      {servicesData.map((item, index) => (
        <ServiceHomeCardComponent
          key={index}
          title={item.title}
          description={item.description}
          service_link_title={item.service_link_title}
          service_link={item.service_link}
          shape={item.shape}
          background={item.background}
        />
      ))}
    </div>
  );
};

export default ServiceHomeCard;

export const ServiceHomeCardComponent = ({
  title,
  description,
  service_items,
  service_link,
  service_link_title,
  shape,
  background,
}) => {
  return (
    <div
      className={`p-6 lg:p-8 border-2 border-black space-y-6 lg:space-y-10 h-full flex flex-col ${background}`}
    >
      <div className="lg:space-y-6">
        <p className="helvetica-medium text-[40px] leading-9 lg:text-[50px] lg:leading-11">
          {title}
        </p>
      </div>
      <p className='helvetica-regular lg:text-xl'>{description}</p>
      <div className="flex-1" />
      <div className="w-fit">
        <Link to={service_link} className="custom-cursor">
          <div className="flex items-center hover:text-[#FAF4EC]">
            <p className="text-[32px] leading-8 lg:text-[40px] lg:leading-10 underline">
              {service_link_title}
            </p>
            <RiArrowRightUpLine className="text-xl lg:text-4xl" />
          </div>
        </Link>
      </div>
    </div>
  );
};





export const servicesData = [
  {
    id: 3,
    title: "Intelligent Automation",
    description:
      "You can automate repetitive tasks, uncover actionable insights, and make smarter decisions by integrating AI into your existing systems,without changing what already works.",
    service_link: "/services",
    service_link_title: "Learn More",
    background: "bg-[#EDC343]",

  },
  {
    id: 2,
    title: "Digital Transformation",
    description:
      "You can replace manual workflows like spreadsheets, paperwork, emails, and disconnected tools with structured digital systems,designed around how your business actually operates.",
    service_link: "/services",
    service_link_title: "Learn More",
    background: "bg-[#44A574] text-[#FAF4EC]",
  },
  {
    id: 1,
    title: "End-to-End Software Product Development",
    description:
      "You can turn your idea into a fully functional software system,from design to launch,covering web and mobile development, backend, infrastructure, databases, and deployment, so everything works seamlessly together.",
    service_link: "/services",
    service_link_title: "Learn More",
    background: "bg-[#FC8C67]",
  },

];