import { RiArrowRightUpLine } from "react-icons/ri";
import { Link } from "react-router";

export const ButtonComponent = ({ title, buttonClass, button_link }) => {
    return (
        <Link to={button_link}>
            <div
                className={`flex items-center px-5 py-3 custom-cursor
            font-semibold uppercase transition-all duration-300 hover:-translate-x-2 hover:-translate-y-2 
            hover:shadow-[4px_4px_0px_black] active:translate-x-0 active:translate-y-0 
            active:rounded active:shadow-none cursor-pointer leading-none ${buttonClass}`}>
                {title}
                <RiArrowRightUpLine className='text-xl' />
            </div>
        </Link>
    );
};
