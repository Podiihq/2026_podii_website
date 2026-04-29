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

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);

    return (
        <section className="relative">
            <header className="sticky top-0 mx-auto w-full max-w-7xl md:px-10 lg:px-0">
                <div
                    className={`bg-[#1a1a1a] rounded-xs flex items-center gap-4 justify-between pl-4 pr-2 py-2 backdrop-blur transition-all duration-300 
                    ${scrolled ? "text-black border border-[#ccc]" : "text-[#F5F5F5]"}`}
                >
                    <div className='flex items-center gap-10'>
                        <Link to="" className="">
                            {scrolled ? <img src={LogoBlack} alt="" className="w-44" /> : <img src={LogoWhite} alt="" className="w-44" />}
                        </Link>
                        <nav className="hidden items-center gap-6 md:flex">
                            {navigation.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    className={`uppercase transition-colors duration-300 
                                ${scrolled ? "hover:text-[#1a1a1a]" : "hover:text-gray-900"}`}
                                >
                                    {item.label}
                                </a>
                            ))}
                        </nav>
                    </div>

                    <ButtonComponent
                        buttonClass={`rounded-xs ${scrolled ? "text-[#F5F5F5] bg-[#1a1a1a]" : "bg-[#C8420B] text-[F5F5F5]"}`}
                        title="Let's Work"
                    />
                </div>
            </header>
        </section>
    );
};

export default NavBar;

