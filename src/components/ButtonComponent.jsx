import { RiArrowRightUpLine } from "react-icons/ri";
import { Link } from "react-router";

export const ButtonComponent = ({ title, buttonClass, button_link }) => {
    return (
        <Link to={button_link}>
            <div
                className={`rounded border-2 border-black pl-4 lg:pr-3 pt-3.5 pb-1.5 flex custom-cursor
            font-semibold uppercase transition-all duration-300 hover:-translate-x-2 hover:-translate-y-2 
            hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-0 active:translate-y-0 
            active:rounded-2xl active:shadow-none cursor-pointer leading-none text-5xl ${buttonClass}`}>
                {title}
                <RiArrowRightUpLine className='text-4xl' />
            </div>
        </Link>
    );
};
