'use client'

import React from "react";
import { motion } from "framer-motion";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import FactoryIcon from "@mui/icons-material/Factory";
import OpacityIcon from "@mui/icons-material/Opacity";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import EngineeringIcon from "@mui/icons-material/Engineering";

const services = [
    {
        title: "Design & Fabrication",
        description:
            "Precision engineering and custom fabrication solutions designed for durability, efficiency, and industrial performance.",
        icon: <EngineeringIcon />,
    },
    {
        title: "Manufacturing",
        description:
            "Structured manufacturing processes focused on quality, consistency, innovation, and cost-effective delivery.",
        icon: <FactoryIcon />,
    },
    {
        title: "Vegetable Oil Processing",
        description:
            "State-of-the-art vegetable oil processing solutions with strong emphasis on quality, safety, and sustainability.",
        icon: <OpacityIcon />,
    },
    {
        title: "Consultancy Services",
        description:
            "Expert advisory support in raw materials management, manufacturing optimization, and operational strategy.",
        icon: <SupportAgentIcon />,
    },
    {
        title: "General Contracting",
        description:
            "End-to-end project coordination and execution for construction and infrastructure projects, covering planning, resource management, supervision, and quality control to ensure safe, timely, and accountable delivery.",
        icon: <PrecisionManufacturingIcon />,
    },
];

function ServicesOverview() {
    return (
        <section className="w-full py-20 bg-gray-100">
            <div className="max-w-[90%] mx-auto">

                {/* SECTION HEADER */}
                <motion.div
                    className="text-center max-w-2xl mx-auto mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                        Our Services
                    </h2>
                    <div className="w-16 h-1 bg-[#33A259] mx-auto my-4 rounded-full" />
                    <p className="text-gray-500 sm:text-lg text-sm">
                        We deliver practical, reliable, and professionally
                        executed solutions across engineering, manufacturing,
                        processing, consultancy, and contracting.
                    </p>
                </motion.div>

                {/* SERVICES GRID */}
                <motion.div
                    className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 max-w-5xl mx-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: 0.15,
                            },
                        },
                    }}
                >
                    {services.map((service, index) => {
                        const isLast = index === services.length - 1;
                        const isOdd = services.length % 3 === 2;

                        return (
                            <motion.div
                                key={index}
                                variants={{
                                    hidden: { opacity: 0, y: 40 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                whileHover={{ y: -10 }}
                                className={`group bg-white rounded-2xl p-8 shadow-md transition-all duration-300 cursor-pointer hover:border-2 hover:border-[#33A259]
                ${isLast && isOdd ? "lg:col-span-2 lg:mx-auto" : ""}
            `}
                            >
                                <div className="w-14 h-14 mb-6 rounded-xl bg-[#33A259]/10 flex items-center justify-center text-[#33A259] group-hover:bg-[#33A259] group-hover:text-white transition-colors duration-300">
                                    {service.icon}
                                </div>

                                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-gray-500 leading-relaxed">
                                    {service.description}
                                </p>
                            </motion.div>
                        );
                    })}

                </motion.div>
            </div>
        </section>
    );
}

export default ServicesOverview;
