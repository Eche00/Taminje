"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
    ArrowForward,
    OilBarrel,
    Verified,
    Timeline,
    Settings,
    Engineering,
} from "@mui/icons-material";

function VegetableOilProcessing() {

    const features = [
        {
            title: "Structured Processing Operations",
            icon: <OilBarrel fontSize="medium" />,
        },
        {
            title: "Quality Handling & Compliance",
            icon: <Verified fontSize="medium" />,
        },
        {
            title: "Process Efficiency & Waste Reduction",
            icon: <Timeline fontSize="medium" />,
        },
        {
            title: "Equipment Setup & Maintenance",
            icon: <Engineering fontSize="medium" />,
        },
        {
            title: "Operational Performance Improvement",
            icon: <Settings fontSize="medium" />,
        },
    ];

    const container = {
        hidden: {},
        show: { transition: { staggerChildren: 0.15 } },
    };

    const item = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0 },
    };

    return (
        <div className="bg-white text-gray-900">

            {/* HERO SECTION */}
            <section className="max-w-7xl mx-auto px-6 pt-24 grid md:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <img
                        src="/oil-processing.jpg"
                        alt="Vegetable oil processing plant"
                        className="rounded-3xl shadow-2xl"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                        Vegetable Oil <span className="text-[#33A259]">Processing</span>
                    </h1>

                    <div className="w-20 h-1.5 bg-[#33A259] my-6 rounded-full" />

                    <p className="text-lg text-gray-600 leading-relaxed">
                        State-of-the-art vegetable oil processing solutions focused
                        on quality, safety, sustainability, and operational efficiency.
                    </p>

                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 mt-10 bg-[#33A259] text-white px-8 py-4 rounded-xl font-medium hover:scale-105 transition-all duration-300"
                    >
                        Request Processing Support
                        <ArrowForward fontSize="small" />
                    </Link>
                </motion.div>


            </section>

            {/* FEATURES / CORE CAPABILITIES */}
            <section className=" py-24">
                <div className="max-w-7xl mx-auto px-6">

                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl font-semibold">Core Features</h2>
                        <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
                            Comprehensive vegetable oil processing expertise with
                            focus on quality, efficiency, and structured operations.
                        </p>
                    </motion.div>

                    <motion.div
                        className="mt-16 grid md:grid-cols-3 gap-10"
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                    >
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                variants={item}
                                className="group p-8 rounded-2xl bg-white border border-gray-200 hover:border-[#33A259] hover:shadow-xl transition-all duration-300"
                            >
                                <div className="h-14 w-14 flex items-center justify-center rounded-xl bg-[#33A259]/10 text-[#33A259] group-hover:bg-[#33A259] group-hover:text-white transition-all duration-300">
                                    {feature.icon}
                                </div>

                                <h3 className="mt-6 font-semibold text-lg text-gray-800">
                                    {feature.title}
                                </h3>
                            </motion.div>
                        ))}
                    </motion.div>

                </div>
            </section>


        </div>
    );
}

export default VegetableOilProcessing;
