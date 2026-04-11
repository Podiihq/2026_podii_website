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
                <motion.div className='h-screen w-screen fixed left-0 top-0 bg-[#FC8C67] z-10' {...anim(slide)} />
                <motion.div className=' bg-[#FC8C67]' {...anim(perspective)}>
                    <motion.div {...anim(opacity)}>
                        {children}
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}
