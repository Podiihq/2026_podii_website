import React from "react";
import LogoLight from "../assets/images/logo/podii_logo_light.svg";
import { Link } from "react-router";
import { MdPhone } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import { ButtonComponent } from "./ButtonComponent";
import { RiArrowRightUpLine } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="p-6 lg:p-16 bg-[#1e1e1e] text-[#FAF4EC] lg:max-w-screen-2xl mx-auto rounded border-2 overflow-hidden">
      <div className="space-y-10 lg:space-y-30">
        <div className="flex gap-10 lg:gap-30 w-full flex-wrap">
          <div className="space-y-2">
            <div className="flex gap-1 text-[#FC8C67] underline">
              <p className="uppercase helvetica-medium text-3xl">
                Website Link
              </p>
              <p className="uppercase helvetica-medium text-lg leading-none">
                4
              </p>
            </div>
            <div>
              <FooterLink title="Home" link_item="/" />
              <FooterLink title="Services" link_item="/services" />
              <FooterLink title="Our Work" link_item="/projects" />
              {/* <FooterLink title="About Us" link_item="#" /> */}
              <FooterLink title="Contact Us" link_item="#" />
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex gap-1 text-[#FC8C67] underline">
              <p className="uppercase helvetica-medium text-3xl">
                Social Links
              </p>
              <p className="uppercase helvetica-medium text-lg leading-none">
                3
              </p>
            </div>
            <div>
              <FooterLink title="x (tWITTER)" link_item="#" />
              <FooterLink title="linkedin" link_item="#" />
              <FooterLink title="privacy policy" link_item="#" />
            </div>
          </div>
          <div className="space-y-2 col-span-2 ">
            <div className="flex gap-1 text-[#FC8C67] underline">
              <p className="uppercase helvetica-medium text-3xl">Contacts</p>
              <p className="uppercase helvetica-medium text-lg leading-none">
                3
              </p>
            </div>
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

        <div className="flex justify-between flex-wrap">
          <div className="space-y-4">
            <p className="text-4xl lg:text-7xl leading-none hidden lg:block">
              Let’s Build Something <br /> Smarter Together.
            </p>
            <div className="">
              <FooterButtonComponent title="work with us" />
            </div>
            <p className="text-xl">
              © Copyright Podii Consultants 2026 || All Rights Reserved️
            </p>
          </div>
          <div className="pt-20 lg:pt-32 xl:pt-0">
            <p
              // style={{ WebkitTextStroke: "2px #FFFFFF" }}
              className="text-[250px] leading-40 lg:text-[550px] lg:leading-75"
            >
              PODII
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

export const FooterLink = ({ title, link_item }) => {
  return (
    <Link to={link_item} className="custom-cursor">
      <div className="flex items-start gap-1 py-1">
        <p className="uppercase hover:underline text-[40px] lg:text-[63px] leading-none hover:text-[#FAF4EC]">
          {title}
        </p>
      </div>
    </Link>
  );
};

export const FooterList = ({ title, icon }) => {
  return (
    <div className="flex items-center gap-2 text-2xl">
      {icon}
      <p className="text-[40px] lg:text-[63px] leading-none uppercase">
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
