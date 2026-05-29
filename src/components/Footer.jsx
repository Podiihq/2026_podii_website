import React, { useState } from "react";
import { Link } from "react-router";
import { MdPhone } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import { RiArrowRightUpLine } from "react-icons/ri";
import LogoFooter from "../assets/images/logo/podii_standard_footer.svg"

const Footer = () => {
  const [isVerified, setIsVerified] = useState(false);
  const [challenge, setChallenge] = useState(() => createMathChallenge());
  const [challengeInput, setChallengeInput] = useState("");
  const [challengeError, setChallengeError] = useState("");
  const [isChallengeSolved, setIsChallengeSolved] = useState(false);

  function createMathChallenge() {
    const first = Math.floor(Math.random() * 9) + 1;
    const second = Math.floor(Math.random() * 9) + 1;
    const useAddition = Math.random() > 0.5;

    if (useAddition) {
      return { prompt: `${first} + ${second}`, answer: first + second };
    }

    const max = Math.max(first, second);
    const min = Math.min(first, second);
    return { prompt: `${max} - ${min}`, answer: max - min };
  }

  const handleVerificationToggle = (checked) => {
    setIsVerified(checked);
    setChallengeInput("");
    setChallengeError("");
    setIsChallengeSolved(false);
    setChallenge(createMathChallenge());
  };

  const handleChallengeSubmit = (e) => {
    e.preventDefault();
    const trimmedInput = challengeInput.trim();
    if (!trimmedInput) {
      setChallengeError("Please enter an answer.");
      setIsChallengeSolved(false);
      return;
    }
    const parsedAnswer = Number(trimmedInput);
    if (!Number.isFinite(parsedAnswer) || parsedAnswer !== challenge.answer) {
      setChallengeError("Incorrect answer. Please try again.");
      setChallengeInput("");
      setIsChallengeSolved(false);
      setChallenge(createMathChallenge());
      return;
    }
    setChallengeError("");
    setIsChallengeSolved(true);
  };

  return (
    <div className="text-[#FAF4EC] lg:max-w-7xl mx-auto md:px-4 xl:px-0 overflow-hidden border-x border-b border-[#3D3D3D] border-dashed">
      <div className="space-y-10">
        <div className="grid grid-cols-2 lg:grid-cols-9 divide-x divide-y divide-[#3D3D3D] divide-dashed border-b border-[#3D3D3D] border-dashed">
          <div className="lg:col-span-3 self-center h-full pt-20">
            <img src={LogoFooter} alt="" className="w-8/12 mx-auto my-auto" />
          </div>
          <div className="space-y-2 p-3 xl:p-10 lg:col-span-2">
            <p className="uppercase dotSans-black">
              Website Link
            </p>
            <div>
              <FooterLink title="Home" link_item="/" />
              <FooterLink title="Services" link_item="/services" />
              <FooterLink title="Case Studies" link_item="/#" />
              <FooterLink title="About Us" link_item="/about" />
              <FooterLink title="Contact Us" link_item="/contact" />
            </div>
          </div>
          <div className="space-y-2 p-3 xl:p-10 lg:col-span-2">
            <p className="uppercase dotSans-black">
              Social Links
            </p>
            <div>
              <FooterLink title="X (Twitter)" link_item="https://x.com/podiihq" />
              <FooterLink title="linkedin" link_item="https://www.linkedin.com/company/podiihq/" />
              <FooterLink title="Facebook" link_item="#" />
            </div>
          </div>
          <div className="space-y-2 p-3 xl:p-10 lg:col-span-2">
            <p className="uppercase dotSans-black">Contacts</p>
            <div className="space-y-3">
              <label htmlFor="verifyContact" className="flex items-start gap-2 text-[#ccc] cursor-pointer">
                <input
                  id="verifyContact"
                  type="checkbox"
                  checked={isVerified}
                  onChange={(e) => handleVerificationToggle(e.target.checked)}
                  className="mt-0.5 w-4 h-4"
                />
                <span className="uppercase text-sm">I am not a robot</span>
              </label>

              {isVerified && !isChallengeSolved && (
                <form onSubmit={handleChallengeSubmit} className="space-y-2">
                  <label htmlFor="contactChallenge" className="text-[#ccc] text-sm block uppercase">
                    Solve: {challenge.prompt} = ?
                  </label>
                  <div className="flex gap-2">
                    <input
                      id="contactChallenge"
                      type="number"
                      value={challengeInput}
                      onChange={(e) => {
                        setChallengeInput(e.target.value);
                        if (isChallengeSolved) {
                          setIsChallengeSolved(false);
                        }
                      }}
                      className="w-full bg-[#FAF4EC] text-black border border-dashed border-[#3D3D3D] px-2 py-1"
                      placeholder="Answer"
                    />
                    <button
                      type="submit"
                      className="border border-dashed border-[#ccc] px-3 py-1 text-sm uppercase hover:bg-[#FAF4EC] hover:text-black transition-colors"
                    >
                      Verify
                    </button>
                  </div>
                  {challengeError && <p className="text-[#C8420B] text-sm">{challengeError}</p>}
                </form>
              )}

              {isVerified && isChallengeSolved ? (
                <div className="space-y-4">
                  <FooterList title="0733 000003" icon={<MdPhone />} />
                  <FooterList title="podiihq@gamil.com" icon={<IoMdMail />} />
                  <FooterList
                    title="Lutheran Kisumu, Kenya"
                    icon={<IoLocation />}
                  />
                </div>
              ) : (
                <p className="text-[#999] text-sm">
                  Confirm and solve the challenge to view phone, email, and location.
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="pb-10">
          <p className="text-center text-[#ccc] text-sm px-2">
            © Copyright Podii Consultants LTD 2026 || All Rights Reserved️
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
        <p className="hover:underline hover:text-[#FAF4EC] text-[#ccc] uppercase text-sm">
          {title}
        </p>
      </div>
    </Link>
  );
};

export const FooterList = ({ title, icon }) => {
  return (
    <div className="flex items-start gap-2 text-[#ccc]">
      <div>
        {icon}
      </div>
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
