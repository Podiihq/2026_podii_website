import React, { useEffect, useState } from 'react'
import LogoBlackWide from "../assets/images/logo/Wide_Logo_black_noIcon_noBg.svg"
import LogoWhiteWide from "../assets/images/logo/Wide_Logo_white_noIcon_noBg2.svg"
import LogoBlackStandard from "../assets/images/logo/logo_black_nobackground.svg"
import LogoWhiteStandard from "../assets/images/logo/Standard_logo_white_nobackground.svg"
import { ButtonComponent } from './ButtonComponent'
import Drawer from './DrawerComponent';
import { Link } from 'react-router';
import { BorderConers } from './BorderConers';
import { motion, AnimatePresence } from "framer-motion";
import { RiArrowRightUpLine } from 'react-icons/ri'

const navigation = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About", href: "#" },
    { label: "Case Studies", href: "#" },
];

const NavBar = ({ targetSectionRef }) => {
    const [isInSection, setIsInSection] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsInSection(entry.isIntersecting),
            { threshold: 0.1 }
        );

        if (targetSectionRef.current) {
            observer.observe(targetSectionRef.current);
        }

        return () => {
            if (targetSectionRef.current) {
                observer.unobserve(targetSectionRef.current);
            }
        };
    }, []);

    return (
        <section className="relative">
            <header className="sticky top-0 mx-auto w-full max-w-7xl px-4 lg:px-0 z-50">
                <div
                    className={`rounded-xs w-full flex items-center justify-between pl-4 pr-2 py-2 backdrop-blur transition-all duration-300 
                    ${isInSection
                            ? "text-[#1a1a1a] bg-[#f5f5f5] border border-[#1a1a1a] border-dashed"
                            : "bg-[#1a1a1a] text-[#F5F5F5] border border-[#1a1a1a]"
                        }`}
                >
                    <div className="flex items-center gap-20">
                        <Link to="/">
                            {isInSection ? (
                                <img src={LogoBlackWide} alt="" className="w-44" />
                            ) : (
                                <img src={LogoWhiteWide} alt="" className="w-44" />
                            )}
                        </Link>

                        {/* DESKTOP NAV */}
                        <nav className="hidden items-center gap-6 lg:flex">
                            {navigation.map((item, index) => (
                                <Link
                                    key={index}
                                    to={item.href}
                                    className={`uppercase transition-colors duration-300 
                                    ${isInSection
                                            ? "hover:text-[#C8420B]"
                                            : "hover:text-[#C8420B]"
                                        }`}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    <div className='flex items-center'>
                        <ButtonComponent
                            buttonClass={`hidden lg:flex ${isInSection
                                ? "text-[#F5F5F5] bg-[#C8420B] border border-white hover:shadow-[4px_4px_0px_black]"
                                : "bg-[#C8420B] text-[F5F5F5] border border-[#C8420B] hover:shadow-[4px_4px_0px_white]"}`}
                            title="Let's Work"
                            button_link="/contact"
                        />

                        <button
                            className="lg:hidden text-xl uppercase flex items-center gap-2 active:bg-[#303030]"
                            onClick={() => setIsMenuOpen(true)}
                        >

                            Menu
                            <div className='space-y-1'>
                                <div className={`w-6.5 h-1  ${isInSection ? "bg-[#1A1A1A]" : "bg-[#F5F5F5]"}`} />
                                <div className={`w-6.5 h-1  ${isInSection ? "bg-[#1A1A1A]" : "bg-[#F5F5F5]"}`} />
                            </div>
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{
                            duration: 0.4,
                            ease: [0.76, 0, 0.24, 1]
                        }}
                        className="fixed px-4 pt-30 pb-10 inset-0 bg-[#1A1A1A] text-white flex flex-col items-center justify-center z-50"
                    >
                        <div className='absolute top-7 left-4'>
                            <img src={LogoWhiteWide} alt="" className="w-44" />
                        </div>

                        <button
                            className="absolute top-6 right-4 flex gap-2 items-center uppercase text-xl"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Close
                            <span className='text-3xl'>✕</span>
                        </button>

                        {navigation.map((item, index) => (
                            <Link
                                key={index}
                                className='w-full'
                                to={item.href}
                                onClick={() => setIsMenuOpen(false)}>
                                <div className='uppercase text-3xl w-full py-4 border-b border-dashed border-[#3D3D3D] flex justify-between'>
                                    {item.label}
                                    <RiArrowRightUpLine className='text-xl' />
                                </div>
                            </Link>
                        ))}
                        <div className='flex-1' />
                        <Link onClick={() => setIsMenuOpen(false)} to="/contact" className='w-full'>
                            <div className='w-full bg-[#C8420B] py-5 flex justify-center items-end'>
                                <p className='uppercase text-xl leading-none text-center'>Lets Work</p>
                                <RiArrowRightUpLine className='text-xl' />
                            </div>
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default NavBar;
