import { RiArrowRightUpLine } from "react-icons/ri";
import { cards } from "../data/cards";
import { BorderConers } from "./BorderConers";
import { Link } from "react-router";
import Image1 from "../assets/images/illustrations/consultancy.svg"

const ServicesSection = () => (
  <section className="">
    <div className="mx-auto lg:max-w-screen-2xl">
      <p className="text-center uppercase pb-5 text-[#666666]">Our Services</p>
      <h2 className="text-[130px] leading-26 mango-black uppercase pb-6 text-center">
        What We Do, Everyday.
      </h2>
    </div>
    <div className="mx-auto mt-10 lg:max-w-7xl bg-brand-neutral relative">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {cards.map((card) => (
          <FeatureCard key={card.id} card={card} />
        ))}
      </div>
      <section className="mt-4 relative flex border border-[#ccc] border-dashed flex-col p-6 md:p-7">
        <BorderConers />
        <div className="relative z-10 flex h-full items-end">
          <div className="mt-4">
            <h2 className="mb-6 text-2xl font-black">
              4] Software Consultancy
            </h2>
            <p className="mb-6 border-l-2 pl-3 w-10/12">
              You can uncover the real causes behind operational issues, not just their symptoms. We run a full diagnostic—mapping your processes, identifying bottlenecks and dependencies, and pinpointing root causes—then deliver a clear, prioritised redesign roadmap before any code is written.
            </p>
            <div className="w-fit">
              <Link to="#"
                className="uppercase tracking-widest underline hover:text-[#ccc]"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="">
            <img src={Image1} alt="" className="mx-auto w-140" />
          </div>
        </div>
      </section>
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
    <section className={`relative flex border border-[#ccc] border-dashed flex-col p-6 md:p-7 ${card.moreClass}`}>
      <BorderConers />
      <div className={`relative z-10 flex h-full flex-col ${card.flexType}`}>
        <div className="">
          <img src={card.shape} alt="" className="mx-auto h-full" />
        </div>
        <div className="mt-4">
          <h2 className="mb-6 text-2xl font-black">
            {card.headingLines}
          </h2>
          <p className="mb-6 border-l-2 pl-3">
            {card.description}
          </p>
          <div className="w-fit">
            <Link to="#"
              className="uppercase tracking-widest underline hover:text-[#ccc]"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
