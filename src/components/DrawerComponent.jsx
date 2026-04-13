import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router";
import { FooterList } from "./Footer";

const Drawer = ({ isOpen, onClose }) => {
  const menuVariants = {
    open: { x: 0 },
    closed: { x: "100%" },
  };

  const overlayVariant = {
    open: { opacity: 0.7 },
    closed: { opacity: 0 },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="">
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={overlayVariant}
            transition={{ type: "tween", duration: 0.2 }}
            className="fixed inset-0 bg-black z-50"
            onClick={onClose}
          ></motion.div>
          <motion.div
            className="fixed top-0 right-0 h-full w-full lg:w-250 overflow-hidden bg-[#FAF4EC] z-50 flex flex-col pb-4 shadow-lg"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            transition={{ type: "tween", duration: 0.5 }}
          >
            <div className="relative flex flex-col">
              <button
                onClick={onClose}
                className={`rounded border-2 border-black text-[#1e1e1e] bg-[#F2F1ED] px-5 pt-4 pb-1.5 absolute top-4 right-4
                  font-semibold uppercase transition-all duration-300 hover:-translate-x-2 hover:-translate-y-2
                  hover:rounded-md hover:shadow-[4px_4px_0px_#1E1E1E] active:translate-x-0 active:translate-y-0
                  active:rounded-2xl active:shadow-none cursor-pointer leading-none text-4xl lg:text-6xl custom-cursor`}
              >
                Close
              </button>
              <div className="mt-40 md:mt-0">
                {nav_link_data.map((item, index) => (
                  <Link to={item.item_link} key={index} className="custom-cursor">
                    <div className="group hover:bg-[#111]">
                      <p
                        className="lg:indent-10 group-hover:text-[#FC8C67] text-[100px]
                        leading-20 lg:text-[270px] lg:leading-50 pt-6 pb-4 lg:pt-14 lg:pb-0 text-center lg:text-left"
                      >
                        {item.title.split("")}
                      </p>
                      <div className="h-px w-full bg-[#242424]" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex-1"></div>
            {/* <div className='flex gap-4 lg:gap-10 items-center pl-10 pt-5 flex-wrap'>
                            <FooterList title="Email: podiihq@gamil.com" />
                            <FooterList title="Phone: 0733 000003" />
                        </div>*/}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Drawer;

export const nav_link_data = [
  {
    title: "Home",
    item_link: "/",
  },
  // {
  //   title: "About",
  //   item_link: "#",
  // },
  {
    title: "Services",
    item_link: "/services",
  },
  {
    title: "Projects",
    item_link: "/projects",
  },
  {
    title: "Contact Us",
    item_link: "/contact",
  },
];
