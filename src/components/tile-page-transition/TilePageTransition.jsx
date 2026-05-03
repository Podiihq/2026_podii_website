import React from 'react'
import { motion } from 'framer-motion';
import { slide, opacity, perspective } from './animation';

const anim = (variants) => {
    return {
        initial: "initial",
        animate: "enter",
        exit: "exit",
        variants
    }
}

export const InnerPageTransition = ({ children }) => {
    return (
        <div className='relative overflow-hidden'>
            <div className='bg-black'>
                <motion.div className='h-screen w-screen fixed left-0 top-0 bg-[#1A1A1A] z-10' {...anim(slide)} />
                <motion.div className=' bg-[#1A1A1A]' {...anim(perspective)}>
                    <motion.div {...anim(opacity)}>
                        {children}
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}
