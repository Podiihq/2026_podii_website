import React, { useEffect } from 'react'
import Footer from '../../components/Footer'
import { InnerPageTransition } from '../../components/tile-page-transition/TilePageTransition'
import NavBar from '../../components/NavBar'
import {
    hero_container,
    fadeUp,
    fadeIn
} from "../../components/animations/heroAnimations";
import { motion } from "framer-motion"
import Lenis from 'lenis';
import { services } from '../../../public/data/servicesData';

const ServicesPage = () => {
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
    return (
        <InnerPageTransition>
            <div className="bg-[#FAF4EC] text-[#181818]">
                <div className="fixed w-full z-20">
                    <NavBar />
                </div>
                <motion.section
                    variants={hero_container}
                    initial="hidden"
                    animate="show"
                    className='pt-42 pb-10 lg:pb-20 lg:pt-42 lg:max-w-screen-2xl mx-auto px-4'
                >
                    <div className='flex'>
                        <motion.p
                            variants={fadeUp}
                            className="text-[130px] leading-20 lg:text-[300px] lg:leading-60"
                        >
                            Services
                        </motion.p>
                        <motion.p
                            variants={fadeIn}
                            className="text-4xl lg:text-5xl text-[#44A574]">(0{services?.length})</motion.p>
                    </div>

                    <div className='flex justify-end pt-10'>
                        <motion.p variants={fadeUp} className="indent-15 lg:indent-60 text-[40px] leading-10 lg:text-[76px] lg:leading-20 lg:w-10/12">
                            We help your business run smarter, faster, and more efficiently by creating complete software systems, digital workflows, and AI-powered automation.
                        </motion.p>
                    </div>

                    <motion.div variants={fadeUp} className='pt-20'>
                        {services.map((item, index) => (
                            <ServicesPageCard
                                key={index}
                                id={item.id}
                                title={item.title}
                                description={item.description}
                                service_items={item.service_items}
                                service_outcome={item.service_outcome}
                            />
                        ))}
                    </motion.div>
                </motion.section>
                <div className='pb-6'>
                    <Footer />
                </div>
            </div>
        </InnerPageTransition>
    )
}

export default ServicesPage



export const ServicesPageCard = ({ id, title, description, service_items, service_outcome }) => {
    return (
        <div className='border-t py-20 lg:py-32 border-[#CACACA]'>
            <div className='grid lg:grid-cols-5'>
                <div className='flex items-start gap-4 lg:col-span-2'>
                    <p className='text-5xl leading-none lg:text-[60px] lg:leading-13'>(0{id})</p>
                    <p className='text-5xl leading-none lg:text-[60px] lg:leading-13'>{title}</p>
                </div>
                <div className='lg:col-span-3 space-y-10 pt-3 lg:pt-0'>
                    <div className='space-y-4'>
                        {description?.map((item, index) => (
                            <p key={index} className='helvetica-regular lg:text-xl'>{item}</p>
                        ))}
                    </div>
                    {/* {service_items && (
                        <div className='space-y-3'>
                            <p className='text-3xl lg:text-[40px] lg:leading-10'>What we do</p>
                            <div className='grid lg:grid-cols-2 gap-1'>
                                {service_items.map((item, index) => (
                                    <div key={index} className='space-y-2 border border-[#ccc] p-4'>
                                        <p className='lg:text-lg uppercase helvetica-regular font-bold'>{item.title}</p>
                                        {item.details && (
                                            <div>
                                                {item.details.map((detail, dIndex) => (
                                                    <div key={dIndex} className='flex items-start lg:items-center gap-2'>
                                                        <div className='w-1.5 h-1.5 bg-[#1e1e1e] mt-2 lg:mt-0' />
                                                        <p className='helvetica-regular lg:text-lg'>{detail}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )} */}

                    {service_outcome && (
                        <div className='pt-6'>
                            <p className='text-3xl lg:text-[40px] lg:leading-10'>What this means for you</p>
                            <p className='helvetica-regular lg:text-xl mt-2'>{service_outcome}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
