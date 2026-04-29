import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from "framer-motion"

import Logo1 from "../assets/images/company-logos/20.svg"
import Logo2 from "../assets/images/company-logos/22.svg"
import Logo3 from "../assets/images/company-logos/23.svg"
import Logo4 from "../assets/images/company-logos/24.svg"
import Logo5 from "../assets/images/company-logos/25.svg"
import Logo6 from "../assets/images/company-logos/26.svg"
import Logo7 from "../assets/images/company-logos/27.svg"
import Logo8 from "../assets/images/company-logos/28.svg"
import Logo9 from "../assets/images/company-logos/29.svg"
import Logo10 from "../assets/images/company-logos/30.svg"
import Logo11 from "../assets/images/company-logos/31.svg"
import Logo12 from "../assets/images/company-logos/32.svg"
import Logo13 from "../assets/images/company-logos/33.svg"
import Logo14 from "../assets/images/company-logos/34.svg"
import Logo15 from "../assets/images/company-logos/35.svg"
import Logo16 from "../assets/images/company-logos/36.svg"
import { ImageComponent } from './ImageComponent'
import { RiArrowLeftUpLine, RiArrowRightUpLine } from 'react-icons/ri'

const SLIDE_VARIANTS = {
    enter: (direction) => ({
        x: direction > 0 ? "100%" : "-100%",
        opacity: 0,
    }),
    center: {
        x: 0,
        opacity: 1,
    },
    exit: (direction) => ({
        x: direction > 0 ? "-100%" : "100%",
        opacity: 0,
    }),
};

const TRANSITION = {
    x: { type: "spring", stiffness: 300, damping: 30 },
    opacity: { duration: 0.2 },
};

const CompanyLogoMarquee = () => {
    const [startIndex, setStartIndex] = useState(0);
    const [direction, setDirection] = useState(1); // 1 = next, -1 = prev
    const [itemsPerPage, setItemsPerPage] = useState(4);

    const total = company_logo.length;

    // Update itemsPerPage based on window width
    useEffect(() => {
        const updateItemsPerPage = () => {
            const width = window.innerWidth;
            if (width < 768) {
                setItemsPerPage(1); // mobile
            } else if (width < 1080) {
                setItemsPerPage(2); // medium
            } else {
                setItemsPerPage(4); // large
            }
        };

        updateItemsPerPage(); // initial check
        window.addEventListener("resize", updateItemsPerPage);

        return () => window.removeEventListener("resize", updateItemsPerPage);
    }, []);

    const getVisibleLogos = () => {
        let items = [];
        for (let i = 0; i < itemsPerPage; i++) {
            items.push(company_logo[(startIndex + i) % total]);
        }
        return items;
    };

    const next = () => {
        setDirection(1);
        setStartIndex((prev) => (prev + itemsPerPage) % total);
    };

    const prev = () => {
        setDirection(-1);
        setStartIndex((prev) => (prev - itemsPerPage + total) % total);
    };

    const visibleLogos = getVisibleLogos();
    const nextLogo = company_logo[(startIndex + itemsPerPage) % total];
    const prevLogo = company_logo[(startIndex - 1 + total) % total];

    return (
        <div className="w-full mx-auto">
            <div className="relative">
                <div className="flex overflow-hidden items-center">
                    <div className="opacity-40 w-30 md:w-40 lg:w-auto flex items-center justify-center pr-1 lg:pr-2 shrink-0">
                        <ImageComponent
                            image={prevLogo}
                            imageClass="w-full h-full object-contain p-2 border rounded border-[#3E3D3D]"
                        />
                    </div>
                    <div className="flex-1 overflow-hidden relative">
                        <AnimatePresence initial={false} custom={direction} mode="wait">
                            <motion.div
                                key={startIndex}
                                custom={direction}
                                variants={SLIDE_VARIANTS}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={TRANSITION}
                                className="flex w-full"
                            >
                                {visibleLogos.map((logo, index) => (
                                    <div
                                        key={index}
                                        className="flex-1 w-20 h-30 lg:w-auto lg:h-auto border mx-1 lg:mx-2 rounded border-[#3E3D3D] flex items-center justify-center"
                                    >
                                        <ImageComponent
                                            image={logo}
                                            imageClass="w-full h-full object-contain p-2"
                                        />
                                    </div>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                    <div className="opacity-40 w-30 md:w-40 lg:w-auto flex items-center justify-center pl-1 lg:pl-2 shrink-0">
                        <ImageComponent
                            image={nextLogo}
                            imageClass="w-full h-full object-contain p-2 border rounded border-[#3E3D3D]"
                        />
                    </div>
                </div>
                <div className="absolute left-0 top-0 h-full w-40 lg:w-100 bg-linear-to-r from-[#FAF4EC] to-transparent pointer-events-none z-10" />
                <div className="absolute right-0 top-0 h-full w-40 lg:w-100 bg-linear-to-l from-[#FAF4EC] to-transparent pointer-events-none z-10" />
            </div>

            <div className="flex items-center justify-center gap-4 mt-6 max-w-screen-2xl mx-auto px-4">
                <ButtonComponentLeft title="Prev" onclick_option={prev} />
                <ButtonComponentRight title="Next" onclick_option={next} />
            </div>
        </div>
    );
};
export default CompanyLogoMarquee

const company_logo = [
    Logo10,
    Logo6,
    Logo7,
    Logo14,

    Logo16,
    Logo15,
    Logo1,
    Logo3,

    Logo9,
    Logo5,
    Logo2,
    Logo11,

    Logo4,
    Logo12,
    Logo8,
    Logo13,
]


const ButtonComponentLeft = ({ title, buttonClass, onclick_option }) => {
    return (
        <button onClick={onclick_option}>
            <div className={`rounded border lg:border-2 border-[#3E3D3D] pl-4 pr-6 pt-3.5 pb-1.5 flex custom-cursor
            font-semibold uppercase transition-all duration-300 hover:-translate-x-2 hover:-translate-y-2 
            hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-0 active:translate-y-0 
            active:rounded-2xl active:shadow-none cursor-pointer leading-none text-3xl lg:text-5xl text-[#3E3D3D] ${buttonClass}`}>
                <RiArrowLeftUpLine className='lg:text-4xl' />
                {title}
            </div>
        </button>
    );
};

const ButtonComponentRight = ({ title, buttonClass, onclick_option }) => {
    return (
        <button onClick={onclick_option}>
            <div className={`rounded border lg:border-2 border-[#3E3D3D] pl-6 pr-4 pt-3.5 pb-1.5 flex custom-cursor
            font-semibold uppercase transition-all duration-300 hover:-translate-x-2 hover:-translate-y-2 
            hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-0 active:translate-y-0 
            active:rounded-2xl active:shadow-none cursor-pointer leading-none text-3xl lg:text-5xl text-[#3E3D3D] ${buttonClass}`}>
                {title}
                <RiArrowRightUpLine className='lg:text-4xl' />
            </div>
        </button>
    );
};