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
import { service_data } from '../../data/services_data';
import { RiArrowRightDownLine } from 'react-icons/ri';
import { BorderConers } from '../../components/BorderConers';
import { Link } from 'react-router';

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

    // useEffect(() => {
    //     window.scrollTo(0, 0);
    // }, []);
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
                    className='pt-42 pb-10 lg:pb-20 lg:pt-42 lg:max-w-7xl mx-auto px-4 xl:px-0'
                >
                    <p className='uppercase font-bold pb-2'>Our Services</p>
                    <div className='flex'>
                        <motion.p
                            variants={fadeUp}
                            className="text-[50px] leading-10 md:text-[80px] md:leading-18 lg:text-[100px] lg:leading-20 xl:text-[130px] xl:leading-26 mango-black uppercase"
                        >
                            What We Can Do, <br /> For You.
                        </motion.p>
                    </div>

                    <motion.div variants={fadeUp} className='grid lg:grid-cols-1 gap-x-10 pt-10'>
                        {service_data.map((item, index) => (
                            <ServiceHeroCard
                                key={index}
                                service_number={item.service_number}
                                service_id={item.id}
                                service_title={item.service_title}
                            />
                        ))}
                    </motion.div>

                    <motion.div variants={fadeUp} className='pt-20'>
                        {service_data.map((item, index) => (
                            <ServicesMainCard
                                key={index}
                                service_id={item.id}
                                service_number={item.service_number}
                                service_title={item.service_title}
                                service_description={item.service_description}
                                what_changes={item.what_changes}
                                intro_statement={item.intro_statement}
                                end_statement={item.end_statement}
                                service_project={item.service_project}
                            />
                        ))}
                    </motion.div>
                </motion.section>
                <section className="pb-1 xl:pb-10 bg-[#1e1e1e]">
                    <Footer />
                </section>
            </div>
        </InnerPageTransition>
    )
}

export default ServicesPage



export const ServiceHeroCard = ({ service_number, service_title, service_id }) => {
    return (
        <a href={`#${service_id}`} className='flex cursor-pointer items-center justify-between py-4 px-2 border-b border-dashed border-[#d4d4d4] hover:bg-white'>
            <div className='flex items-center gap-4'>
                <p className='font-bold'>0{service_number}</p>
                <p className='font-bold'>{service_title}</p>
            </div>
            <div>
                <RiArrowRightDownLine className='text-xl' />
            </div>
        </a>
    )
}




export const ServicesMainCard = ({
    service_number,
    service_id,
    service_title,
    what_changes,
    intro_statement,
    service_description,
    end_statement,
    service_project
}) => {
    return (
        <div id={service_id} className='border-[#CACACA] border border-dashed p-5 lg:p-10 mb-6 relative'>
            <BorderConers />
            <div className='grid lg:grid-cols-5 gap-2'>
                <div className='flex flex-col space-y-6 lg:col-span-3 border-[#CACACA] pr-4 lg:border-r border-dashed pb-4 lg:pb-0' >
                    <div className='space-y-2'>
                        <p className='uppercase font-bold text-[#016B6B]'>Service 0{service_number}</p>
                        <p className='mango-black uppercase text-[50px] leading-10 lg:text-[74px] lg:leading-18'>{service_title}</p>
                    </div>
                    <div className='space-y-2'>
                        <p className='font-bold text-xl'>What Changes:</p>
                        <div className='list-decimal pl-4'>
                            {what_changes?.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </div>
                    </div>
                    <p className='text-xl font-bold lg:w-2/3 text-[#016B6B]'>{intro_statement}</p>
                    <div className='space-y-4 border-l-3 pl-3 border-[#016B6B]'>
                        {service_description?.map((item, index) => (
                            <p key={index} className=''>{item}</p>
                        ))}
                    </div>
                    <p className='font-bold text-xl lg:w-2/3 text-[#C8420B]'>{end_statement}</p>
                </div>
                {service_project && (
                    <div className='lg:col-span-2 self-center lg:p-10'>
                        {service_project.map((item, index) => (
                            <Link to={item.project_link} key={index}>
                                <div className='p-4 hover:bg-[#1a1a1a] hover:text-[#f5f5f5] border border-dashed border-[#CACACA] bg-white space-y-3 relative'>
                                    <BorderConers />
                                    <img src={item.project_image} alt="" />
                                    <p className='text-2xl'>{item.project_name}</p>
                                    <p>{item.project_description}</p>
                                    <p className='uppercase underline text-[#016B6B]'>Read Case Study</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}

            </div>
        </div>
    )
}
