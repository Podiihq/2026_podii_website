import { useEffect, useState } from "react";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import Logo1 from "../assets/images/company-logos/20.svg"
import Logo2 from "../assets/images/company-logos/22.svg"
import Logo3 from "../assets/images/company-logos/30.svg"
import Logo4 from "../assets/images/company-logos/23.svg"
import Logo5 from "../assets/images/company-logos/24.svg"
import Logo6 from "../assets/images/company-logos/25.svg"
import Logo7 from "../assets/images/company-logos/26.svg"
import Logo8 from "../assets/images/company-logos/27.svg"
import Logo9 from "../assets/images/company-logos/28.svg"
import Logo10 from "../assets/images/company-logos/29.svg"

import Image1 from "../assets/images/illustrations/hero-illustration.svg"

import LogoIcon from "../assets/images/logo/Wide_logo_white_nobackground.svg"

const LoaderPage = ({ onComplete }) => {
    const progress = useMotionValue(0);
    const progressScale = useTransform(progress, (value) => value / 100);
    const [displayValue, setDisplayValue] = useState(0);
    const [realProgress, setRealProgress] = useState(0);
    const [isComplete, setIsComplete] = useState(false);

    const assets = [
        Logo1, Logo2, Logo3, Logo4, Logo5, Logo6, Logo7, Logo8, Logo9, Logo10,
        Image1
    ];

    useEffect(() => {
        if (assets.length === 0) {
            setIsComplete(true);
            return;
        }

        let loaded = 0;

        const updateProgress = () => {
            loaded++;
            const percent = Math.round((loaded / assets.length) * 100);
            setRealProgress(percent);

            if (loaded === assets.length) {
                setIsComplete(true);
            }
        };

        assets.forEach((src) => {
            const img = new Image();
            img.src = src;
            img.onload = updateProgress;
            img.onerror = updateProgress;
        });
    }, []);

    useEffect(() => {
        const controls = animate(progress, realProgress, {
            duration: 0.5,
            ease: "easeOut",
            onUpdate: (latest) => {
                setDisplayValue(Math.round(latest));
            },
        });

        return () => controls.stop();
    }, [realProgress]);

    useEffect(() => {
        if (isComplete) {
            const delay = 300;
            setTimeout(() => {
                onComplete?.();
            }, delay);
        }
    }, [isComplete, onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#1a1a1a] text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="w-full max-w-lg px-6 space-y-5">
                <div className="flex items-center justify-center gap-4 pt-10">
                    <img src={LogoIcon} alt="" className="" />
                </div>
                <div className="h-2 w-full overflow-hidden bg-white/10">
                    <motion.div
                        className="h-full origin-left bg-[#F5F5F5]"
                        style={{ scaleX: progressScale }}
                    />
                </div>
            </div>
        </motion.div>
    );
};

export default LoaderPage;