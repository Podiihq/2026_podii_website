import React, { useEffect } from 'react'
import { InnerPageTransition } from '../../components/tile-page-transition/TilePageTransition'
import NavBar from '../../components/NavBar'
import Lenis from 'lenis';
import { motion } from "framer-motion"
import { fadeUp, hero_container } from '../../components/animations/heroAnimations';
import Footer from '../../components/Footer';
import { BorderConers } from '../../components/BorderConers';

const AboutPage = () => {
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

    const operate_data = [
        {
            title: "Honest Diagnosis",
            description: "We name the actual failure mode, not the symptom the client presented, but the root cause in the process architecture.",
        },
        {
            title: "Design over workaround",
            description: "We resolve the underlying dependency, not the downstream symptom. A patched workflow still carries the original design flaw — it just fails in a different way.",
        },
        {
            title: "Clarity before complexity",
            description: "We communicate what we have built in terms the client’s team can own and operate.",
        },
        {
            title: "Respect for human work",
            description: "We automate the deterministic, repetitive, rule-based tasks that machines execute more reliably than people. We do this so that the people freed from that work can apply judgment, creativity, and contextual reasoning to problems that actually need them.",
        },
    ]


    return (
        <InnerPageTransition>
            <div className="bg-[#F5F5F5] text-[#1A1A1A]">
                <div className="fixed w-full pt-4 z-100 lg:px-4 xl:px-0">
                    <NavBar targetSectionRef="" />
                </div>
                <motion.section
                    variants={hero_container}
                    initial="hidden"
                    animate="show"
                    className='pt-32 pb-10 lg:pb-20 lg:pt-40 lg:max-w-7xl mx-auto px-4 xl:px-0'
                >
                    <div className='grid lg:grid-cols-2 pb-20'>
                        <motion.div variants={fadeUp} className='space-y-4'>
                            <p className="text-[70px] leading-14 md:text-[80px] md:leading-18 lg:text-[100px] lg:leading-20 xl:text-[130px] xl:leading-26 mango-black uppercase">
                                Get to Know Us
                            </p>
                            <p>For business owners and operations leaders whose growth is constrained by manual processes and system architectures depending on people,
                                <span className='font-bold'>
                                    Podii is the consultancy that diagnoses what is broken and builds what replaces it, rebuilding operational infrastructure so businesses can scale without the dependencies that cap their capacity.
                                </span>
                            </p>
                            <p className='font-bold text-lg text-[#C8420B] uppercase'>Fix the system, not the person</p>
                        </motion.div>
                        <div />
                    </div>

                    <motion.div variants={fadeUp} className='grid lg:grid-cols-2 gap-5'>
                        {mision_data.map((item, index) => (
                            <MisionComponent
                                key={index}
                                mision_data={item}
                            />
                        ))}
                    </motion.div>
                    <motion.div variants={fadeUp} className='pt-10'>
                        <OperateTimeline items={operate_data} />
                    </motion.div>
                </motion.section>
                <section className="pb-1 xl:pb-10 bg-[#1e1e1e]">
                    <Footer />
                </section>
            </div>
        </InnerPageTransition>
    )
}

export default AboutPage


const mision_data = [
    {
        title: "Our Mision",
        statement: "What we do, every day",
        description: "We remove bottlenecks, reduce manual tasks, and streamline processes so your operations can scale smoothly"
    },
    {
        title: "Our Vision",
        statement: "The world we are building toward",
        description: "A future where human intelligence is never consumed by work that a well designed system should be doing."
    }
]

export const MisionComponent = ({ mision_data }) => {
    return (
        <div className='space-y-2 p-10 border border-dashed border-[#ccc] relative'>
            <BorderConers />
            <p className='mango-black text-[50px] leading-10 text-center uppercase'>{mision_data.title}</p>
            <p className='uppercase text-center font-bold'>{mision_data.statement}</p>
            <p className='text-center'>{mision_data.description}</p>
        </div>
    )
}



const OperateItem = ({ title, description, align = "left" }) => {
    return (
        <div className={`w-full md:w-1/2 px-6 py-8 border lg:border-none border-dashed border-[#ccc] ${align === "right" ? "md:ml-auto text-left" : "text-right"}`}>
            <h3 className="mb-2 capitalize font-bold">{title}</h3>
            <p className="leading-relaxed">{description}</p>
        </div>
    );
};

const Connector = () => {
    return (
        <div className="absolute left-1/2 transform -translate-x-1/2 h-2/3">
            <div className="w-px h-full border-l border-dashed border-[#ccc]" />
        </div>
    );
};

const OperateTimeline = ({ items }) => {
    return (
        <div className="relative lg:max-w-5xl mx-auto py-16">
            <h2 className="text-xl font-bold text-center pb-6 uppercase">How We Operate</h2>
            <div className='hidden lg:block'>
                <Connector />
            </div>

            <div className="flex flex-col">
                {items.map((item, index) => {
                    const isRight = index % 2 !== 0;
                    return (
                        <div key={index} className="relative flex items-start">
                            {/* Left Side */}
                            {!isRight && (
                                <OperateItem
                                    title={item.title}
                                    description={item.description}
                                    align="left"
                                />
                            )}
                            <div className="absolute top-11 left-1/2 transform -translate-x-1/2 hidden lg:block">
                                <div className={`w-4 h-px border-t border-dashed border-[#ccc] ${isRight ? "ml-4" : "mr-4"}`} />
                            </div>
                            {/* Right Side */}
                            {isRight && (
                                <OperateItem
                                    title={item.title}
                                    description={item.description}
                                    align="right"
                                />
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

