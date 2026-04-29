import React from "react";
import LogoLight from "../assets/images/logo/podii_logo_light.svg";
import { Link } from "react-router";
import { MdPhone } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import { ButtonComponent } from "./ButtonComponent";
import { RiArrowRightUpLine } from "react-icons/ri";
import LogoFooter from "../assets/images/logo/podii_standard_footer.svg"

const Footer = () => {
  return (
    <div className="text-[#FAF4EC] lg:max-w-7xl mx-auto overflow-hidden border-x border-b border-[#3D3D3D] border-dashed">
      <div className="space-y-10">
        <div className="grid grid-cols-5 divide-x divide-[#3D3D3D] divide-dashed border-b border-[#3D3D3D] border-dashed">
          <div className="col-span-2 self-center">
            <img src={LogoFooter} alt="" className="w-10/12 mx-auto" />
          </div>
          <div className="space-y-2 p-10">
            <p className="uppercase">
              Website Link
            </p>
            <div>
              <FooterLink title="Home" link_item="/" />
              <FooterLink title="Services" link_item="/services" />
              <FooterLink title="Our Work" link_item="/projects" />
              <FooterLink title="About Us" link_item="#" />
              <FooterLink title="Contact Us" link_item="/contact" />
            </div>
          </div>
          <div className="space-y-2 p-10">
            <p className="uppercase">
              Social Links
            </p>
            <div>
              <FooterLink title="X (Twitter)" link_item="#" />
              <FooterLink title="linkedin" link_item="#" />
              <FooterLink title="Facebook" link_item="#" />
            </div>
          </div>
          <div className="space-y-2 p-10">
            <p className="uppercase">Contacts</p>
            <div className="space-y-2">
              <FooterList title="0733 000003" icon={<MdPhone />} />
              <FooterList title="podiihq@gamil.com" icon={<IoMdMail />} />
              <FooterList
                title="Lutheran Kisumu, Kenya"
                icon={<IoLocation />}
              />
            </div>
          </div>
        </div>

        <div className="pb-10">
          <p className="text-center text-[#ccc] text-sm">
            © Copyright Podii Consultants 2026 || All Rights Reserved️
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

export const FooterLink = ({ title, link_item }) => {
  return (
    <Link to={link_item} className="">
      <div className="flex items-start gap-1 py-1">
        <p className="hover:underline hover:text-[#FAF4EC] text-[#ccc]">
          {title}
        </p>
      </div>
    </Link>
  );
};

export const FooterList = ({ title, icon }) => {
  return (
    <div className="flex items-center gap-2 text-[#ccc]">
      {icon}
      <p className="leading-none">
        {title}
      </p>
    </div>
  );
};

export const FooterButtonComponent = ({ title, buttonClass }) => {
  return (
    <button
      className={`rounded border-2 border-black bg-[#FAF4EC] pl-6 pr-4 pt-6 pb-3 lg:pb-1.5 flex text-black
            font-semibold uppercase transition-all duration-300 hover:-translate-x-2 hover:-translate-y-2
            hover:rounded-md hover:shadow-[4px_4px_0px_white] active:translate-x-0 active:translate-y-0
            active:rounded-2xl active:shadow-none cursor-pointer leading-none text-4xl lg:text-7xl custom-cursor ${buttonClass}`}
    >
      {title}
      <RiArrowRightUpLine className="text-3xl lg:text-4xl" />
    </button>
  );
};
