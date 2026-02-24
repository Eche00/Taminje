'use client'

import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import ArrowForward from "@mui/icons-material/ArrowForward"
import EngineeringIcon from "@mui/icons-material/Engineering"
import BugReportIcon from "@mui/icons-material/BugReport"
import SearchIcon from "@mui/icons-material/Search"
import TrendingUpIcon from "@mui/icons-material/TrendingUp"
import DescriptionIcon from "@mui/icons-material/Description"

function ProjectStartup() {

    const services = [
        {
            title: "Commissioning Support",
            description:
                "Structured pre-commissioning and commissioning support to ensure systems are safely initialized, validated, and fully operational according to technical specifications.",
            icon: <EngineeringIcon className="text-[#33A259]" />,
        },
        {
            title: "Fault Diagnosis",
            description:
                "Systematic identification of operational faults using structured diagnostics, testing procedures, and performance evaluation tools.",
            icon: <BugReportIcon className="text-[#33A259]" />,
        },
        {
            title: "Root Cause Analysis",
            description:
                "In-depth technical analysis to determine underlying causes of system failures and prevent recurring operational issues.",
            icon: <SearchIcon className="text-[#33A259]" />,
        },
        {
            title: "Performance Optimization",
            description:
                "Targeted corrective actions and process improvements designed to enhance efficiency, reliability, and long-term system stability.",
            icon: <TrendingUpIcon className="text-[#33A259]" />,
        },
        {
            title: "Operator Documentation",
            description:
                "Preparation of structured operational guidelines, handover documentation, and user guidance to ensure safe and consistent system management.",
            icon: <DescriptionIcon className="text-[#33A259]" />,
        },
    ]

    return (
        <div className="bg-gray-100">

            {/* HERO SECTION */}
            <section className="max-w-7xl mx-auto px-6 pt-24 grid md:grid-cols-2 gap-16 items-center">



                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <img
                        src="/project-startup.avif"
                        alt="Industrial commissioning and troubleshooting"
                        className="rounded-3xl shadow-xl"
                    />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <h3 className="text-4xl md:text-5xl font-bold leading-tight">
                        Project Start-up & <span className="text-[#33A259]">Troubleshooting</span>
                    </h3>

                    <div className="w-20 h-1.5 bg-[#33A259] my-6 rounded-full" />

                    <p className="text-lg text-gray-600 leading-relaxed">
                        We support safe commissioning, structured diagnostics, and
                        operational stabilization, helping teams reduce downtime,
                        resolve technical issues efficiently, and restore system
                        performance with disciplined execution.
                    </p>

                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 mt-10 bg-[#33A259] text-white px-8 py-4 rounded-xl font-medium hover:scale-105 transition-all duration-300"
                    >
                        Discuss Your Project
                        <ArrowForward fontSize="small" />
                    </Link>
                </motion.div>
            </section>

            {/* CAPABILITIES SECTION */}
            <section className="mt-24">

                <div className="text-center mb-16">
                    <h3 className="text-3xl md:text-4xl font-bold">
                        Our Technical Capabilities
                    </h3>
                    <div className="w-20 h-1.5 bg-[#33A259] mx-auto my-6 rounded-full" />
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Structured start-up coordination and advanced troubleshooting
                        solutions designed to stabilize operations and protect project timelines.
                    </p>
                </div>

                <div className="max-w-[90%] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10 pb-24">
                    {services.map((service, i) => (
                        <div
                            key={i}
                            className="group relative p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
                        >
                            {/* Decorative Accent */}
                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#33A259] rounded-full"></div>

                            {/* Icon + Number */}
                            <div className="flex items-center justify-start gap-4 mb-4">
                                {service.icon}
                                <div className="text-[#33A259] font-bold text-xl">
                                    {i + 1 < 10 ? `0${i + 1}` : i + 1}
                                </div>
                            </div>

                            <h4 className="font-semibold text-lg mb-3 group-hover:text-[#1F7A45] transition">
                                {service.title}
                            </h4>

                            <p className="text-gray-600 text-sm leading-relaxed">
                                {service.description}
                            </p>

                            <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition text-[#33A259]">
                                <ArrowForward fontSize="small" />
                            </div>
                        </div>
                    ))}
                </div>

            </section>

        </div>
    )
}

export default ProjectStartup