"use client";

import React, { useRef, useState } from "react";
import { Email, LocationOn, Phone } from "@mui/icons-material";
import { motion, AnimatePresence } from "framer-motion";
import ServiceDropdown from "./ServicesDropdown";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const services = [
    "Design & Fabrication",
    "Manufacturing",
    "Vegetable Oil Processing",
    "Consultancy Services",
    "General Contracting",
    "Solar Power Systems",
    "Project Start-up & Troubleshooting",
];

function ContactUs() {
    const [loading, setLoading] = useState(false);
    const formRef = useRef<HTMLFormElement>(null);
    const [selectedService, setSelectedService] = useState(services[0]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        if (!formRef.current) return;

        // Combine dynamic fields into one field for EmailJS
        const formData = new FormData(formRef.current);
        const dynamicDetails: string[] = [];

        formData.forEach((value, key) => {
            if (
                ["full_name", "user_email", "company", "message", "selected_service"].includes(key)
            ) return;
            dynamicDetails.push(`${key.replace(/_/g, " ")}: ${value}`);
        });

        const projectDetailsInput = formRef.current.querySelector<HTMLInputElement>(
            'input[name="dynamic_fields"]'
        );
        if (projectDetailsInput) projectDetailsInput.value = dynamicDetails.join("\n");

        emailjs
            .sendForm(
                "service_jzuupks",
                "template_ia2u67t",
                formRef.current,
                "QYyx2zmQ0wVh2EUZw"
            )
            .then(
                () => {
                    toast.success("Message sent successfully!");
                    formRef.current?.reset();
                    setLoading(false);
                },
                (error) => {
                    console.error(error);
                    toast.error("Failed to send message. Please try again.");
                    setLoading(false);
                }
            );
    };

    const renderServiceFields = () => {
        switch (selectedService) {
            case "Design & Fabrication":
                return (
                    <>
                        <Input label="Project Type" placeholder="e.g. Industrial Fabrication" name="project_type" />
                        <Input label="Estimated Budget" placeholder="Enter budget range" name="estimated_budget" />
                    </>
                );
            case "Manufacturing":
                return (
                    <>
                        <Input label="Production Volume" placeholder="Monthly production volume" name="production_volume" />
                        <Input label="Timeline" placeholder="Expected production start date" name="timeline" />
                    </>
                );
            case "Vegetable Oil Processing":
                return (
                    <>
                        <Input label="Processing Capacity" placeholder="Liters per day" name="processing_capacity" />
                        <Input label="Raw Material Type" placeholder="e.g. Palm, Soybean" name="raw_material_type" />
                    </>
                );
            case "Consultancy Services":
                return (
                    <>
                        <Input label="Area of Consultation" placeholder="Operations / Strategy / Performance" name="consultation_area" />
                        <Input label="Organization Size" placeholder="Small / Medium / Large" name="organization_size" />
                    </>
                );
            case "General Contracting":
                return (
                    <>
                        <Input label="Project Location" placeholder="Enter project site location" name="project_location" />
                        <Input label="Project Duration" placeholder="Estimated duration" name="project_duration" />
                    </>
                );
            case "Solar Power Systems":
                return (
                    <>
                        <Input label="Load Assessment Requirement" placeholder="Estimated daily power consumption (kWh)" name="load_assessment" />
                        <Input label="System Type" placeholder="Grid-tied / Off-grid / Hybrid" name="system_type" />
                        <Input label="Installation Location" placeholder="Residential / Commercial / Industrial" name="installation_location" />
                        <Input label="Project Site Address" placeholder="Enter installation site address" name="project_site_address" />
                        <Input label="Expected Completion Timeline" placeholder="Preferred installation date" name="completion_timeline" />
                    </>
                );
            case "Project Start-up & Troubleshooting":
                return (
                    <>
                        <Input label="System Type" placeholder="e.g. Manufacturing line, Power system" name="system_type" />
                        <Input label="Current Operational Status" placeholder="Not operational / Underperforming / Faulty" name="operational_status" />
                        <Input label="Identified Issues (If Any)" placeholder="Brief description of known faults" name="identified_issues" />
                        <Input label="Start-up or Stabilization Deadline" placeholder="Required completion timeframe" name="stabilization_deadline" />
                        <Input label="On-site or Remote Support" placeholder="Preferred support mode" name="support_mode" />
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
            {/* Hot Toast */}
            <Toaster position="top-right" />

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
                                className="group flex items-center gap-4 bg-white sm:p-6 p-3 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300"
                            >
                                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#33A259]/10 text-[#33A259] group-hover:bg-[#33A259] group-hover:text-white transition-all duration-300">
                                    <Icon />
                                </div>
                                <div>
                                    {i === 0 && (
                                        <>
                                            <p className="text-xs uppercase tracking-wide text-gray-400 mb-1">Email</p>
                                            <a href="mailto:info@taminje.com" className="font-semibold text-gray-800">info@taminje.com</a>
                                        </>
                                    )}
                                    {i === 1 && (
                                        <>
                                            <p className="text-xs uppercase tracking-wide text-gray-400 mb-1">Phone</p>
                                            <div className="flex flex-col gap-2 font-semibold text-gray-800">
                                                <a href="tel:+2348066878945">+234 806 687 8945</a>
                                                <a href="tel:+2348166562016">+234 816 656 2016</a>
                                            </div>
                                        </>
                                    )}
                                    {i === 2 && (
                                        <>
                                            <p className="text-xs uppercase tracking-wide text-gray-400 mb-1">Location</p>
                                            <p className="font-semibold text-gray-800 text-sm leading-relaxed">
                                                No 8 Yah-Wahab Estate Phase 3, Plot 334 Dahiru Musdapha <br /> Boulevard, Wuye District 900108, Abuja, Nigeria
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

                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                        {/* Hidden inputs for EmailJS */}
                        <input type="hidden" name="selected_service" value={selectedService} />
                        <input type="hidden" name="dynamic_fields" value="" />

                        <Input label="Full Name" placeholder="Your name" name="full_name" />
                        <Input label="Email" placeholder="Your email address" type="email" name="user_email" />
                        <Input label="Company (Optional)" placeholder="Company name" name="company" />

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
                                name="message"
                                rows={4}
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#33A259] outline-none"
                                placeholder="Write your message here..."
                            />
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.97 }}
                            type="submit"
                            disabled={loading}
                            className="w-full bg-[#33A259] text-white py-3 rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                        >
                            {loading ? "Sending..." : "Send Message"}
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
    name,
}: {
    label: string;
    placeholder: string;
    type?: string;
    name: string;
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
                name={name}
                placeholder={placeholder}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#33A259] outline-none"
            />
        </motion.div>
    );
}

export default ContactUs;