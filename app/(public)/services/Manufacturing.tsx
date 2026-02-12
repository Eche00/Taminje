"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
    ArrowForward,
    PrecisionManufacturing,
    Factory,
    Settings,
    Verified,
    Timeline,
    Engineering
} from "@mui/icons-material";

function Manufacturing() {

    const services = [
        {
            title: "Production Planning & Coordination",
            icon: <Factory fontSize="medium" />,
        },
        {
            title: "Process Optimization & Efficiency",
            icon: <Timeline fontSize="medium" />,
        },
        {
            title: "Quality Assurance & Monitoring",
            icon: <Verified fontSize="medium" />,
        },
        {
            title: "Equipment Integration & Setup",
            icon: <Engineering fontSize="medium" />,
        },
        {
            title: "Operational Performance Improvement",
            icon: <Settings fontSize="medium" />,
        },
        {
            title: "Structured Manufacturing Oversight",
            icon: <PrecisionManufacturing fontSize="medium" />,
        },
    ];

    const container = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0 },
    };

    return (
        <div className="bg-gray-100 text-gray-900">

            {/* HERO SECTION */}
            <section className="max-w-7xl mx-auto px-6 pt-24 grid md:grid-cols-2 gap-16 items-center">

                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                        Manufacturing <span className="text-[#33A259]">Solutions</span>
                    </h1>

                    <div className="w-20 h-1.5 bg-[#33A259] my-6 rounded-full" />

                    <p className="text-lg text-gray-600 leading-relaxed">
                        We deliver structured, performance-driven manufacturing
                        services built on operational discipline, technical
                        precision, and measurable efficiency improvements.
                    </p>

                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 mt-10 bg-[#33A259] text-white px-8 py-4 rounded-xl font-medium hover:scale-105 transition-all duration-300"
                    >
                        Discuss Your Project
                        <ArrowForward fontSize="small" />
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <img
                        src="/manufacturing.jpg"
                        alt="Industrial manufacturing facility"
                        className="rounded-3xl shadow-2xl"
                    />
                </motion.div>

            </section>


            {/* CORE CAPABILITIES */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6">

                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl font-semibold">
                            Core Capabilities
                        </h2>
                        <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
                            Comprehensive manufacturing expertise tailored to
                            modern industrial environments.
                        </p>
                    </motion.div>

                    <motion.div
                        className="mt-16 grid md:grid-cols-3 gap-10"
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                    >
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                variants={item}
                                className="group p-8 rounded-2xl bg-white border border-gray-200 hover:border-[#33A259] hover:shadow-xl transition-all duration-300"
                            >
                                <div className="h-14 w-14 flex items-center justify-center rounded-xl bg-[#33A259]/10 text-[#33A259] group-hover:bg-[#33A259] group-hover:text-white transition-all duration-300">
                                    {service.icon}
                                </div>

                                <h3 className="mt-6 font-semibold text-lg text-gray-800">
                                    {service.title}
                                </h3>
                            </motion.div>
                        ))}
                    </motion.div>

                </div>
            </section>
        </div>
    );
}

export default Manufacturing;
