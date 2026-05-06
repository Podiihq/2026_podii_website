import React, { useEffect, useRef, useState } from 'react'
import { InnerPageTransition } from '../../components/tile-page-transition/TilePageTransition'
import Lenis from 'lenis';
import NavBar from '../../components/NavBar';
import { motion } from "framer-motion"
import { fadeUp, hero_container } from '../../components/animations/heroAnimations';
import { useNavigate } from 'react-router';
import emailjs from "@emailjs/browser";
import Footer from '../../components/Footer';

const ContactPage = () => {
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [success, setSuccess] = useState(false);


    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const lenis = new Lenis();
        lenis.on('scroll', (e) => {
            console.log(e);
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
        return () => {
            lenis.destroy();
        };
    }, []);


    const [formData, setFormData] = useState({
        userName: '',
        email: '',
        country: '',
        budget: '',
        other: '',
        services: [],
    });



    const validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setFormData((prevData) => {
                const newServices = checked
                    ? [...prevData.services, value]
                    : prevData.services.filter((service) => service !== value);
                return { ...prevData, services: newServices };
            });
        } else {
            setFormData((prevData) => ({ ...prevData, [name]: value }));
        }
    };

    const validateForm = () => {
        let formErrors = {};
        if (!formData.userName) formErrors.userName = 'Name is a required field.';
        if (!formData.email) formErrors.email = 'Email is a required field.';
        if (!validateEmail(formData.email)) formErrors.email = 'Please enter a valid email address!';
        if (!formData.country) formErrors.country = 'Country is a required field.';
        if (!formData.other) {
            formErrors.other = 'Please add a few details about your project';
        } else {
            const wordCount = formData.other.trim().split(/\s+/).length;
            if (wordCount < 20) formErrors.other = 'Please enter at least 20 words.';
        }
        if (!formData.budget) formErrors.budget = 'Budget is a required field.';
        if (formData.services.length === 0) formErrors.services = 'Select at least one option.';

        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    };

    const sendMail = (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setLoading(true);
        const params = {
            userName: formData.userName,
            email: formData.email,
            country: formData.country,
            other: formData.other,
            budget: formData.budget,
            services: formData.services.join(', '),
        };

        const serviceID = 'service_15dz7io';
        const templateID = 'template_kl4mi9m';


        emailjs
            .send(serviceID, templateID, params, {
                publicKey: '_su5rzwBk-LUIbTdL'
            })
            .then((res) => {
                setFormData({
                    userName: '',
                    email: '',
                    country: '',
                    budget: '',
                    other: '',
                    services: [],
                });
                setLoading(false);
                setSuccess(true);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    };

    return (
        <InnerPageTransition>
            <div className="bg-[#F5F5F5] text-[#1A1A1A] min-h-screen">
                <div className="fixed w-full pt-4 z-100 lg:px-4 xl:px-0">
                    <NavBar targetSectionRef="" />
                </div>
                <motion.section
                    variants={hero_container}
                    initial="hidden"
                    animate="show"
                    className='pt-32 pb-10 lg:pb-20 lg:pt-40 lg:max-w-7xl mx-auto p-4 lg:p-10 lg:border-x border-dashed border-[#ccc]'
                >
                    <motion.p
                        variants={fadeUp}
                        className="text-[70px] text-center pb-10 leading-14 md:text-[80px] md:leading-18 lg:text-[100px] lg:leading-20 xl:text-[130px] xl:leading-26 mango-black uppercase"
                    >
                        Let's Work
                    </motion.p>
                    <motion.div variants={fadeUp} className='lg:max-w-3xl mx-auto pt-10'>
                        <form className="" id="contact_form" onSubmit={sendMail}>
                            <div className="">
                                <div className="flex flex-col gap-5">
                                    <div className='grid  gap-x-10 gap-y-4'>
                                        <div className="w-full space-y-2">
                                            <LabelComponent label_html="userName" label_title="Your Full name? *" />
                                            <div data-text-animation>
                                                <input
                                                    type="text"
                                                    required
                                                    id="userName"
                                                    name="userName"
                                                    placeholder="John Doe*"
                                                    autoComplete="given-name"
                                                    className="block w-full border border-dashed p-2 ring-inset placeholder:text-[#ccc] bg-white"
                                                    value={formData.userName}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            {errors.userName && <div className="error-message text-[#C8420B]">{errors.userName}</div>}
                                        </div>

                                        <div className="w-full space-y-2" data-text-animation>
                                            <LabelComponent label_html="email" label_title="Your email? *" />
                                            <input
                                                type="email"
                                                required
                                                name="email"
                                                id="email"
                                                placeholder="email@email.com*"
                                                autoComplete="given-name"
                                                className="block w-full border border-dashed p-2 ring-inset placeholder:text-[#ccc] bg-white"
                                                value={formData.email}
                                                onChange={handleChange}
                                                data-text-animation
                                            />
                                            {errors.email && <div className="error-message text-[#C8420B]">{errors.email}</div>}
                                        </div>

                                        <div className="w-full space-y-2">
                                            <LabelComponent label_html="country" label_title="Your Country? *" />
                                            <input
                                                type="text"
                                                required
                                                name="country"
                                                id="country"
                                                placeholder="Kenya"
                                                autoComplete="given-name"
                                                className="block w-full border border-dashed p-2 ring-inset placeholder:text-[#ccc] bg-white"
                                                value={formData.country}
                                                onChange={handleChange}
                                                data-text-animation
                                            />
                                            {errors.country && <div className="error-message text-[#C8420B]">{errors.country}</div>}
                                        </div>
                                    </div>


                                    <div className="pt-6 lg:pt-10 w-full">
                                        <label htmlFor="checkboxGroup" className="block font-bold uppercase pb-3" data-text-animation>
                                            Select What solutions do you need today*
                                        </label>
                                        {[
                                            'I want to automate repetitive tasks, uncover actionable insights, and make smarter decisions by integrating AI into my existing systems (Intelligent Automation).',
                                            'I want to replace my manual workflows like spreadsheets, paperwork, emails, and disconnected tools with structured digital systems (Digital Transformation).',
                                            'I want to turn my idea into a fully functional software system, from  design to launch (End-to-End Software Product Development).',
                                            'I want to uncover the real causes behind my businesses operational issues, not just their symptoms (Consultancy).',
                                            'Other'
                                        ].map((service, index) => (
                                            <div className="w-full pb-2" key={index} data-text-animation>
                                                <div className='flex items-start gap-3 border border-dashed border-[#ccc] p-2 hover:bg-white'>
                                                    <div className='pt-1'>
                                                        <input
                                                            type="checkbox"
                                                            id={`checkbox${index + 1}`}
                                                            name="checkboxGroup"
                                                            value={service}
                                                            className="w-6 h-6 bg-[#F5F5F5] focus:outline-none ring ring-[#1e1e1e] custom-cursor"
                                                            checked={formData.services.includes(service)}
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                    <label htmlFor={`checkbox${index + 1}`} className="w-full">
                                                        {service}
                                                    </label>
                                                </div>

                                            </div>
                                        ))}
                                        {errors.services && <div className="error-message text-[#C8420B]">{errors.services}</div>}
                                    </div>

                                    <div className="">
                                        <LabelComponent label_html="other" label_title="Please describe your projects in a few words?*" />
                                        <span className=" font-bold uppercase text-gray-500" data-text-animation>(Minimum of 20 words)</span>
                                        <div className="mt-4" data-text-animation>
                                            <textarea
                                                id="other"
                                                required
                                                placeholder="Type something here..."
                                                name="other"
                                                rows="5"
                                                className="block w-full bg-white border border-dashed py-1.5 px-1.5 text-gray-900 placeholder:text-[#ccc]"
                                                value={formData.other}
                                                onChange={handleChange}
                                            ></textarea>
                                        </div>
                                        {errors.other && <div className="error-message text-[#C8420B]">{errors.other}</div>}
                                    </div>

                                    <div className="relative w-full pt-4 space-y-2">
                                        <LabelComponent label_html="budget" label_title="What is your estimated budget for this project?*" />
                                        <select
                                            id="budget"
                                            required
                                            name="budget"
                                            className="px-2 p-3 w-full border border-dashed bg-white"
                                            value={formData.budget}
                                            onChange={handleChange}
                                            data-text-animation
                                        >
                                            <option value="" disabled selected className="text-gray-400">
                                                Select your budget range
                                            </option>
                                            <option value="$50,000 and above">$50,000 and above</option>
                                            <option value="$10,000 to $50,000">$10,000 to $50,000</option>
                                            <option value="$10,000 and below">$10,000 and below</option>
                                        </select>
                                        {errors.budget && <div className="error-message text-[#C8420B]">{errors.budget}</div>}
                                    </div>

                                    <div className="pt-4">
                                        <button
                                            type="submit"
                                            id="loaderButton"
                                            className="cursor-pointer rounded relative inline-flex items-center justify-center w-full px-6 py-6
                                            text-5xl leading-none lg:text-[50px] lg:leading-13
                                            font-medium transition duration-200 bg-[#C8420B] hover:bg-transparent border-2 border-[#1a1a1a] hover:border-[#1a1a1a]
                                            hover:-translate-x-2 hover:-translate-y-2 
                                            hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-0 active:translate-y-0 
                                            active:rounded-2xl active:shadow-none group"
                                        >
                                            {loading ? "" :
                                                <span id="buttonText" className='mango-black text-[#f5f5f5] group-hover:text-[#1a1a1a]'>SUBMIT</span>
                                            }
                                            {loading && (
                                                <div id="loader" className="absolute inset-0 items-center justify-center flex ">
                                                    <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-3 border-[#1E1E1E]" />
                                                </div>
                                            )}
                                        </button>
                                        {success && (
                                            <div className="mt-4 text-green-600  text-center">
                                                Form submitted successfully! Thanks for reaching out 🥳🥳!! <br />
                                                We can't wait to work with you!!.
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </form>
                    </motion.div>
                </motion.section>
                <section className="pb-1 xl:pb-10 bg-[#1e1e1e]">
                    <Footer />
                </section>
            </div >
        </InnerPageTransition >
    )
}

export default ContactPage





export const LabelComponent = ({ label_html, label_title }) => {
    return (
        <label htmlFor={label_html} className="block  uppercase font-bold" data-text-animation>
            {label_title}
        </label>
    )
}
