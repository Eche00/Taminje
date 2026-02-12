"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
    ArrowForward,
    Engineering,
    Build,
    PrecisionManufacturing,
    Construction,
    AutoFixHigh,
    Handyman
} from "@mui/icons-material";


function DesignAndFabrication() {

    const services = [
        {
            title: "Design Support & Concept Development",
            icon: <Engineering fontSize="medium" />,
        },
        {
            title: "Precision Fabrication Execution",
            icon: <PrecisionManufacturing fontSize="medium" />,
        },
        {
            title: "Installation & On-Site Support",
            icon: <Construction fontSize="medium" />,
        },
        {
            title: "Repairs & Structural Modifications",
            icon: <Build fontSize="medium" />,
        },
        {
            title: "Performance Improvement Works",
            icon: <AutoFixHigh fontSize="medium" />,
        },
        {
            title: "Project-Based Fabrication Solutions",
            icon: <Handyman fontSize="medium" />,
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
        <div className="bg-white text-gray-900">

            {/* HERO */}
            <motion.section
                className="text-center max-w-3xl mx-auto pt-24 px-6"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
            >
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                    Design & <span className="text-[#33A259]">Fabrication</span>
                </h1>

                <div className="w-20 h-1.5 bg-[#33A259] mx-auto my-6 rounded-full" />

                <p className="text-lg text-gray-600 leading-relaxed">
                    We deliver structured, high-performance fabrication solutions
                    engineered for durability, efficiency, and operational excellence.
                    Every project is executed with discipline, technical precision,
                    and full accountability.
                </p>


            </motion.section>


            {/* WHAT WE DO - CARD GRID */}
            <section className="max-w-7xl mx-auto px-6 pb-20">

                <motion.div
                    className="mt-14 grid md:grid-cols-3 gap-8"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            className="group p-8 rounded-2xl border border-gray-200 hover:border-[#33A259] hover:shadow-xl transition-all duration-300"
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
                <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 mt-10 bg-[#33A259] text-white px-8 py-4 rounded-xl font-medium hover:scale-105 transition-all duration-300"
                >
                    Request a Quote
                    <ArrowForward fontSize="small" />
                </Link>
            </section>

        </div>
    );
}

export default DesignAndFabrication;
