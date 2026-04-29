import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { IoChevronBackSharp, IoChevronForwardSharp } from "react-icons/io5";
import { RiArrowLeftUpLine, RiArrowRightUpLine } from "react-icons/ri";

const PAGE_SIZE = 5;

const logoModules = import.meta.glob("../assets/images/company-logos/*.svg", {
    eager: true,
    import: "default"
});

const extractNumber = (path) => {
    const fileName = path.split("/").pop()?.replace(".svg", "") ?? "0";
    return Number.parseInt(fileName, 10);
};

const orderedLogos = Object.entries(logoModules)
    .sort(([leftPath], [rightPath]) => extractNumber(leftPath) - extractNumber(rightPath))
    .map(([path, source]) => ({
        id: path,
        source,
        alt: `Company logo ${extractNumber(path)}`
    }));

const CompaniesSection = () => {
    const [startIndex, setStartIndex] = useState(0);
    const [direction, setDirection] = useState(1);
    const total = orderedLogos.length;
    const canPaginate = total > PAGE_SIZE;
    const totalPages = Math.ceil(total / PAGE_SIZE);
    const currentPage = Math.floor(startIndex / PAGE_SIZE) + 1;

    const visibleLogos = useMemo(() => {
        if (total === 0) {
            return [];
        }

        return Array.from({ length: Math.min(PAGE_SIZE, total) }, (_, index) => {
            const logoIndex = (startIndex + index) % total;
            return orderedLogos[logoIndex];
        });
    }, [startIndex, total]);

    const goNext = () => {
        if (!canPaginate) {
            return;
        }

        setDirection(1);
        setStartIndex((previous) => (previous + PAGE_SIZE) % total);
    };

    const goPrevious = () => {
        if (!canPaginate) {
            return;
        }

        setDirection(-1);
        setStartIndex((previous) => (previous - PAGE_SIZE + total) % total);
    };

    return (
        <section id="companies" className="pb-14 md:pb-16">
            <div className="mx-auto max-w-7xl">
                <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="space-y-2">
                        <p className="text-xl uppercase font-bold">Trusted BY</p>
                        <p className="text-xs uppercase tracking-[0.18em] text-[#ccc]">
                            Showing {Math.min(PAGE_SIZE, total)} at a time · {total === 0 ? 0 : currentPage} of {totalPages || 0}
                        </p>
                    </div>
                    <div className="flex items-center gap-2">
                        <div
                            onClick={goPrevious}
                            className="cursor-pointer flex gap-2 items-center border border-[#ccc] pl-2 pr-4 py-2 hover:bg-[#1a1a1a] hover:text-[#f5f5f5] uppercase"
                            disabled={!canPaginate}
                        >

                            <IoChevronBackSharp className='text-xl' />
                            Previous
                        </div>
                        <div
                            onClick={goNext}
                            className="cursor-pointer flex gap-2 items-center border border-[#ccc] pr-2 pl-4 py-2 hover:bg-[#1a1a1a] hover:text-[#f5f5f5] uppercase"
                            disabled={!canPaginate}
                        >
                            Next
                            <IoChevronForwardSharp className='text-xl' />
                        </div>
                    </div>
                </div>

                <div className="relative mt-4 min-h-164 sm:min-h-68 lg:min-h-28">
                    <AnimatePresence mode="wait" custom={direction}>
                        <motion.div
                            key={startIndex}
                            custom={direction}
                            initial={{ opacity: 0, x: direction * 36 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: direction * -36 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-5"
                        >
                            {visibleLogos.map((logo, index) => (
                                <motion.article
                                    key={logo.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.24, delay: index * 0.04, ease: "easeOut" }}
                                    className="flex items-center justify-center relative border border-dashed border-[#ccc]"
                                >
                                    {/* <Corners /> */}
                                    <img src={logo.source} alt={logo.alt} className="w-full object-contain" loading="lazy" />
                                </motion.article>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default CompaniesSection;


const Corners = () => (
    <>
        <div className="absolute -left-px -top-px z-20 h-2 w-2 border-l border-t border-black bg-brand-neutral" />
        <div className="absolute -right-px -top-px z-20 h-2 w-2 border-r border-t border-black bg-brand-neutral" />
        <div className="absolute -left-px -bottom-px z-20 h-2 w-2 border-l border-b border-black bg-brand-neutral" />
        <div className="absolute -right-px -bottom-px z-20 h-2 w-2 border-r border-b border-black bg-brand-neutral" />
    </>
);


const BorderConers = () => {
    return (
        <div>
            <div className="absolute -left-0.75 -top-0.75 z-20 h-1.5 w-1.5 border border-brand-secondary bg-brand-neutral" />
            <div className="absolute -right-0.75 -top-0.75 z-20 h-1.5 w-1.5 border border-brand-secondary bg-brand-neutral" />
            <div className="absolute -bottom-0.75 -left-0.75 z-20 h-1.5 w-1.5 border border-brand-secondary bg-brand-neutral" />
            <div className="absolute -bottom-0.75 -right-0.75 z-20 h-1.5 w-1.5 border border-brand-secondary bg-brand-neutral" />
        </div>
    )
}
