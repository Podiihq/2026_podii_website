import React, { useState } from 'react'
import LogoImage from "../assets/images/logo/podii-concept-logo.svg"
import { ButtonComponent } from './ButtonComponent'
import Drawer from './DrawerComponent';
import { Link } from 'react-router';

const NavBar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const openDrawer = () => {
        setIsDrawerOpen(true);
    };

    const closeDrawer = () => {
        setIsDrawerOpen(false);
    };
    return (
        <section className='relative'>
            <Drawer isOpen={isDrawerOpen} onClose={closeDrawer} />
            <div className='max-w-screen-2xl mx-auto px-4 '>
                <div className='flex justify-between items-center py-3 relative z-10'>
                    <Link to="/" className="custom-cursor">
                        <img src={LogoImage} alt="" className='w-9/12 lg:w-auto' />
                    </Link>
                    <div className='flex items-center gap-2'>
                        <div className="hidden lg:block ">
                            <ButtonComponent title="Let's Work" buttonClass="bg-[#FAF4EC]" />
                        </div>
                        <button
                            onClick={openDrawer}
                            className="pt-3.5 pb-1.5 px-4 bg-[#FC8C67] rounded border-2 border-black
                            transition-all duration-300 hover:-translate-x-2 hover:-translate-y-2
                            hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-0 active:translate-y-0 
                            active:rounded-2xl active:shadow-none custom-cursor">
                            <p className='text-4xl lg:text-5xl uppercase leading-none'>Menu</p>
                        </button>
                    </div>
                </div>
            </div>
            <div className='absolute w-full h-35 bg-linear-to-b via-[#F2F1ED]/90 from-[#F2F1ED] to-transparent top-0 -z-10' />
        </section>
    )
}

export default NavBar

