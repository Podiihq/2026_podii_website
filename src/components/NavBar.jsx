import React, { useEffect, useState } from 'react'
import LogoBlack from "../assets/images/logo/Wide_Logo_black_noIcon_noBg.svg"
import LogoWhite from "../assets/images/logo/Wide_Logo_white_noIcon_noBg.svg"
import { ButtonComponent } from './ButtonComponent'
import Drawer from './DrawerComponent';
import { Link } from 'react-router';
import { BorderConers } from './BorderConers';


const navigation = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Case Studies", href: "#case-studies" },
    { label: "Contact", href: "#contact" }
];

const NavBar = ({ targetSectionRef }) => {
    const [isInSection, setIsInSection] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInSection(entry.isIntersecting);
            },
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
            <header className="sticky top-0 mx-auto w-full max-w-7xl px-4 lg:px-0">
                <div
                    className={`rounded-xs flex items-center gap-4 justify-between pl-4 pr-2 py-2 backdrop-blur transition-all duration-300 
                    ${isInSection ? "text-black bg-[#f5f5f5] border border-[#1a1a1a] border-dashed" : "bg-[#1a1a1a]  text-[#F5F5F5]"}`}>
                    <div className='flex items-center gap-10'>
                        <Link to="" className="">
                            {isInSection ? <img src={LogoBlack} alt="" className="w-44" /> : <img src={LogoWhite} alt="" className="w-44" />}
                        </Link>
                        <nav className="hidden items-center gap-6 lg:flex">
                            {navigation.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    className={`uppercase transition-colors duration-300 
                                ${isInSection ? "hover:text-[#1a1a1a]" : "hover:text-[#ccc]"}`}
                                >
                                    {item.label}
                                </a>
                            ))}
                        </nav>
                    </div>
                    <ButtonComponent
                        buttonClass={`text-xs lg:text-base ${isInSection ? "text-[#F5F5F5] bg-[#1a1a1a] border border-white hover:shadow-[4px_4px_0px_black]" : "bg-[#C8420B] text-[F5F5F5] hover:shadow-[4px_4px_0px_white]"}`}
                        title="Let's Work"
                    />
                </div>
            </header>
        </section>
    );
};

export default NavBar;

