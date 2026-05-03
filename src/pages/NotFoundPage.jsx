import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { ButtonComponent } from '../components/ButtonComponent';
import Lenis from 'lenis';
import { InnerPageTransition } from '../components/tile-page-transition/TilePageTransition';

const NotFoundPage = () => {
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
            <div className="bg-[#F2F1ED] text-[#181818]">
                <div className="fixed w-full pt-4 z-100 lg:px-4 xl:px-0">
                    <NavBar targetSectionRef="" />
                </div>
                <div className='text-center py-40'>
                    <h1 className='text-[200px] leading-50 lg:text-[500px] lg:leading-100 mango-black'>404</h1>
                    <p className='text-6xl mango-black uppercase leading-none'>Page not found!</p>
                    <div className='flex justify-center pt-20'>
                        <ButtonComponent
                            button_link="/"
                            buttonClass="text-[#F5F5F5] bg-[#1a1a1a] border border-white hover:shadow-[4px_4px_0px_black]"
                            title="Go Back Home" />
                    </div>
                </div>

                <section className="pb-1 xl:pb-10 bg-[#1e1e1e]">
                    <Footer />
                </section>
            </div>
        </InnerPageTransition>
    )
}

export default NotFoundPage