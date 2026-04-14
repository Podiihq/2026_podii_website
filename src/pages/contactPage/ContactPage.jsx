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
            <div className="bg-[#FAF4EC] text-[#181818] min-h-screen">
                <div className="fixed w-full z-20">
                    <NavBar />
                </div>
                <motion.section
                    variants={hero_container}
                    initial="hidden"
                    animate="show"
                    className='pt-42 pb-10 lg:pb-20 lg:pt-42 lg:max-w-screen-2xl mx-auto px-4'
                >
                    <motion.p
                        variants={fadeUp}
                        className="text-[130px] leading-25 lg:text-[300px] lg:leading-60"
                    >
                        Let's Work
                    </motion.p>


                    <div className='lg:max-w-4xl mx-auto lg:pt-20'>
                        <form className="" id="contact_form" onSubmit={sendMail}>
                            <div className="py-6">
                                <div className="flex flex-col gap-5">
                                    <div className="">
                                        <LabelComponent label_html="userName" label_title="Full name? *" />
                                        <div className="mt-2" data-text-animation>
                                            <input
                                                type="text"
                                                required
                                                id="userName"
                                                name="userName"
                                                placeholder="John Doe*"
                                                autoComplete="given-name"
                                                className="block w-full border-b-2 py-3.5 px-2 ring-inset text-5xl leading-none lg:text-[60px] lg:leading-13 placeholder:text-[#D0D0D0]"
                                                value={formData.userName}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        {errors.userName && <div className="error-message text-red-500 helvetica-regular uppercase">{errors.userName}</div>}
                                    </div>

                                    <div className="" data-text-animation>
                                        <LabelComponent label_html="email" label_title="Your email? *" />
                                        <input
                                            type="email"
                                            required
                                            name="email"
                                            id="email"
                                            placeholder="email@email.com*"
                                            autoComplete="given-name"
                                            className="block w-full border-b-2 py-3.5 px-2 ring-inset text-5xl leading-none lg:text-[60px] lg:leading-13 placeholder:text-[#D0D0D0]"
                                            value={formData.email}
                                            onChange={handleChange}
                                            data-text-animation
                                        />
                                        {errors.email && <div className="error-message text-red-500 helvetica-regular uppercase">{errors.email}</div>}
                                    </div>

                                    <div className="">
                                        <LabelComponent label_html="country" label_title="Your Country? *" />
                                        <input
                                            type="text"
                                            required
                                            name="country"
                                            id="country"
                                            placeholder="Kenya"
                                            autoComplete="given-name"
                                            className="block w-full border-b-2 py-3.5 px-2 ring-inset text-5xl leading-none lg:text-[60px] lg:leading-13 placeholder:text-[#D0D0D0]"
                                            value={formData.country}
                                            onChange={handleChange}
                                            data-text-animation
                                        />
                                        {errors.country && <div className="error-message text-red-500 helvetica-regular uppercase">{errors.country}</div>}
                                    </div>

                                    <div className="pt-10">
                                        <label htmlFor="checkboxGroup" className="block helvetica-regular font-bold uppercase" data-text-animation>
                                            What solutions do you need today?*
                                        </label>
                                        {[
                                            'Intelligent automation',
                                            'Digital Transformation',
                                            'End-to-End Software Product Development',
                                            'other',
                                        ].map((service, index) => (
                                            <div className="flex items-center gap-3 lg:mb-2" key={index} data-text-animation>
                                                <input
                                                    type="checkbox"
                                                    id={`checkbox${index + 1}`}
                                                    name="checkboxGroup"
                                                    value={service}
                                                    className="w-6 h-6 lg:h-10 lg:w-10 bg-[#FAF4EC] focus:outline-none ring-2 ring-[#1e1e1e] custom-cursor"
                                                    checked={formData.services.includes(service)}
                                                    onChange={handleChange}
                                                />
                                                <label htmlFor={`checkbox${index + 1}`} className="text-4xl w-full leading-none lg:text-[50px] lg:leading-13 pt-3">
                                                    {service}
                                                </label>

                                            </div>
                                        ))}
                                        {errors.services && <div className="error-message text-red-500 helvetica-regular uppercase">{errors.services}</div>}
                                    </div>

                                    <div className="">
                                        <LabelComponent label_html="other" label_title="Please describe your projects in a few words?*" />
                                        <span className="helvetica-regular font-bold uppercase text-gray-500" data-text-animation>(Minimum of 20 words)</span>
                                        <div className="mt-4" data-text-animation>
                                            <textarea
                                                id="other"
                                                required
                                                placeholder="Type something here..."
                                                name="other"
                                                rows="5"
                                                className="block w-full border-b-2 py-1.5 px-1.5 text-gray-900 placeholder:text-[#D0D0D0] text-5xl leading-none lg:text-[50px] lg:leading-13"
                                                value={formData.other}
                                                onChange={handleChange}
                                            ></textarea>
                                        </div>
                                        {errors.other && <div className="error-message text-red-500 helvetica-regular uppercase">{errors.other}</div>}
                                    </div>

                                    <div className="relative w-full pt-10">
                                        <LabelComponent label_html="budget" label_title="What is your estimated budget for this project?*" />
                                        <select
                                            id="budget"
                                            required
                                            name="budget"
                                            className="px-2 pt-3 w-full border-b-2 bg-transparent
                                            text-5xl leading-none lg:text-[50px] lg:leading-13"
                                            value={formData.budget}
                                            onChange={handleChange}
                                            data-text-animation
                                        >
                                            <option value="" disabled selected className="text-gray-400 text-xl">
                                                Select your budget range
                                            </option>
                                            <option value="$20,000 and above" className='text-xl helvetica-regular'>$20,000 and above</option>
                                            <option value="$10,000" className='text-xl helvetica-regular'>$10,000</option>
                                            <option value="$5000 and below" className='text-xl helvetica-regular'>$5000 and below</option>
                                        </select>
                                        {errors.budget && <div className="error-message text-red-500 helvetica-regular uppercase">{errors.budget}</div>}
                                    </div>

                                    <div className="pt-10">
                                        <button
                                            type="submit"
                                            id="loaderButton"
                                            className="custom-cursor relative inline-flex items-center justify-center w-full px-6 py-6
                                            text-5xl leading-none lg:text-[50px] lg:leading-13
                                            font-medium transition duration-200 rounded bg-[#FC8C67] hover:bg-transparent border-2
                                            hover:-translate-x-2 hover:-translate-y-2 
                                            hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-0 active:translate-y-0 
                                            active:rounded-2xl active:shadow-none"
                                        >
                                            {loading ? "" :
                                                <span id="buttonText">SUBMIT</span>
                                            }
                                            {loading && (
                                                <div id="loader" className="absolute inset-0 items-center justify-center flex ">
                                                    <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-3 border-[#1E1E1E]" />
                                                </div>
                                            )}
                                        </button>
                                        {success && (
                                            <div className="mt-4 text-green-600 helvetica-regular text-center">
                                                Form submitted successfully! Thanks for reaching out 🥳🥳!! <br />
                                                We can't wait to work with you!!.
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </motion.section>
                <Footer />
            </div>
        </InnerPageTransition>
    )
}

export default ContactPage





export const LabelComponent = ({ label_html, label_title }) => {
    return (
        <label htmlFor={label_html} className="block helvetica-regular uppercase font-bold" data-text-animation>
            {label_title}
        </label>
    )
}
