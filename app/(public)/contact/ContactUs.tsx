"use client";

import React, { useState } from "react";
import { Email, LocationOn, Phone } from "@mui/icons-material";
import { motion, AnimatePresence } from "framer-motion";
import ServiceDropdown from "./ServicesDropdown";

const services = [
    "Design & Fabrication",
    "Manufacturing",
    "Vegetable Oil Processing",
    "Consultancy Services",
    "General Contracting",
];

function ContactUs() {
    const [selectedService, setSelectedService] = useState(services[0]);

    const renderServiceFields = () => {
        switch (selectedService) {
            case "Design & Fabrication":
                return (
                    <>
                        <Input label="Project Type" placeholder="e.g. Industrial Fabrication" />
                        <Input label="Estimated Budget" placeholder="Enter budget range" />
                    </>
                );

            case "Manufacturing":
                return (
                    <>
                        <Input label="Production Volume" placeholder="Monthly production volume" />
                        <Input label="Timeline" placeholder="Expected production start date" />
                    </>
                );

            case "Vegetable Oil Processing":
                return (
                    <>
                        <Input label="Processing Capacity" placeholder="Liters per day" />
                        <Input label="Raw Material Type" placeholder="e.g. Palm, Soybean" />
                    </>
                );

            case "Consultancy Services":
                return (
                    <>
                        <Input label="Area of Consultation" placeholder="Operations / Strategy / Performance" />
                        <Input label="Organization Size" placeholder="Small / Medium / Large" />
                    </>
                );

            case "General Contracting":
                return (
                    <>
                        <Input label="Project Location" placeholder="Enter project site location" />
                        <Input label="Project Duration" placeholder="Estimated duration" />
                    </>
                );

            default:
                return null;
        }
    };

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="min-h-screen bg-gray-100 py-20"
        >
            <div className="max-w-[90%] mx-auto flex md:flex-row flex-col gap-12">

                {/* LEFT SIDE */}
                <motion.div
                    className="flex-1"
                    initial={{ x: -40, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="text-sm uppercase tracking-widest text-[#33A259] font-semibold mb-4">
                        Contact Us
                    </p>

                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Get in touch <br /> today
                    </h1>

                    <p className="text-gray-600 mb-8">
                        For enquiries and feedback, we’re always happy to help.
                        Reach out to discuss your next project.
                    </p>

                    <div className="space-y-4">
                        {[Email, Phone, LocationOn].map((Icon, i) => (
                            <motion.div
                                key={i}
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: i * 0.15 }}
                                whileHover={{ y: -4 }}
                                className="group flex items-start gap-4 bg-white sm:p-6 p-3 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300"
                            >
                                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#33A259]/10 text-[#33A259] group-hover:bg-[#33A259] group-hover:text-white transition-all duration-300">
                                    <Icon />
                                </div>
                                <div>
                                    {i === 0 && (
                                        <>
                                            <p className="text-xs uppercase tracking-wide text-gray-400 mb-1">Email</p>
                                            <p className="font-semibold text-gray-800">info@taminje.com</p>
                                        </>
                                    )}
                                    {i === 1 && (
                                        <>
                                            <p className="text-xs uppercase tracking-wide text-gray-400 mb-1">Phone</p>
                                            <p className="font-semibold text-gray-800">+234 xxx xxx xxxx</p>
                                        </>
                                    )}
                                    {i === 2 && (
                                        <>
                                            <p className="text-xs uppercase tracking-wide text-gray-400 mb-1">Location</p>
                                            <p className="font-semibold text-gray-800 text-sm leading-relaxed">
                                                Abuja, Nigeria
                                            </p>
                                        </>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* RIGHT SIDE FORM */}
                <motion.div
                    initial={{ x: 40, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-white flex-1 rounded-2xl shadow-xl sm:p-8 p-4"
                >
                    <ServiceDropdown
                        services={services}
                        selectedService={selectedService}
                        setSelectedService={setSelectedService}
                    />

                    <form className="space-y-4">
                        <Input label="Full Name" placeholder="Your name" />
                        <Input label="Email" placeholder="Your email address" type="email" />
                        <Input label="Company (Optional)" placeholder="Company name" />

                        {/* Animated Dynamic Fields */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={selectedService}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                                className="space-y-4"
                            >
                                {renderServiceFields()}
                            </motion.div>
                        </AnimatePresence>

                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Leave a message
                            </label>
                            <textarea
                                rows={4}
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#33A259] outline-none"
                                placeholder="Write your message here..."
                            />
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.97 }}
                            type="submit"
                            className="w-full bg-[#33A259] text-white py-3 rounded-lg font-medium"
                        >
                            Send Message
                        </motion.button>
                    </form>
                </motion.div>
            </div>
        </motion.section>
    );
}

function Input({
    label,
    placeholder,
    type = "text",
}: {
    label: string;
    placeholder: string;
    type?: string;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
        >
            <label className="block text-sm font-medium mb-2">{label}</label>
            <input
                type={type}
                placeholder={placeholder}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#33A259] outline-none"
            />
        </motion.div>
    );
}

export default ContactUs;
