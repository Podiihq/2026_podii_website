import { RiArrowRightUpLine } from "react-icons/ri";
import { service_home_cards } from "../data/services_data";
import { BorderConers } from "./BorderConers";
import { Link } from "react-router";
import Image1 from "../assets/images/illustrations/consultancy.svg"

const ServicesSection = () => (
  <section className="mx-auto lg:max-w-7xl px-4 xl:px-0">
    <div className="">
      <p className="text-center uppercase pb-2 lg:pb-5 text-[#666666]">Our Services</p>
      <h2 className="text-[50px] leading-10 md:text-[80px] md:leading-18 lg:text-[100px] lg:leading-20 xl:text-[130px] xl:leading-26 mango-black uppercase pb-6 text-center">
        What We Can Do, <br className=" md:hidden" /> For You.
      </h2>
    </div>
    <div className="mx-auto lg:mt-10 bg-brand-neutral relative">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {service_home_cards.map((card, index) => (
          <FeatureCard key={index} card={card} />
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;



export const DecorativeCorners = () => (
  <>
    <div className="pointer-events-none absolute inset-2 z-0 border md:inset-4" />
    <div className="pointer-events-none absolute left-2 top-2 z-0 h-2 w-2 border-l border-t md:left-4 md:top-4" />
    <div className="pointer-events-none absolute right-2 top-2 z-0 h-2 w-2 border-r border-t md:right-4 md:top-4" />
    <div className="pointer-events-none absolute bottom-2 left-2 z-0 h-2 w-2 border-b border-l md:bottom-4 md:left-4" />
    <div className="pointer-events-none absolute bottom-2 right-2 z-0 h-2 w-2 border-b border-r md:bottom-4 md:right-4" />
  </>
);

const FeatureCard = ({ card }) => {
  return (
    <section className={`relative border border-[#ccc] border-dashed p-6 md:p-7 h-full ${card.moreClass}`}>
      <BorderConers />
      <div className={`relative z-10 h-full flex ${card.flexType}`}>
        <div className="">
          <img src={card.shape} alt="" className={`mx-auto w-1/2 md:w-auto h-full ${card.image_class}`} />
        </div>
        <div className="mt-4">
          <h2 className="mb-3 text-2xl font-black text-[#038585] lg:w-2/3">
            {card.headingLines}
          </h2>
          <p className="mb-3 border-l-2 pl-3 border-[#038585]">
            {card.description}
          </p>
        </div>
        <div className="flex-1" />
        <div className="w-fit pl-4">
          <Link to={`/services/#${card.id}`}
            className="uppercase underline hover:text-[#C8420B] text-sm font-bold"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};
