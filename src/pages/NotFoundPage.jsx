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
            <div className="bg-[#F2F1ED] text-[#181818] pb-1 lg:pb-10">
                <div className="fixed w-full z-20">
                    <NavBar />
                </div>
                <div className='text-center py-40'>
                    <h1 className='lg:text-[500px] leading-100'>404</h1>
                    <p className='text-6xl'>Page not found!</p>
                    <div className='flex justify-center pt-20'>
                        <ButtonComponent title="Go Back Home" buttonClass="w-fit" button_link="/" />
                    </div>
                </div>

                <Footer />
            </div>
        </InnerPageTransition>
    )
}

export default NotFoundPage