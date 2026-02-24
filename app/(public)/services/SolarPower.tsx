'use client'

import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import ArrowForward from "@mui/icons-material/ArrowForward"
import SolarPowerIcon from "@mui/icons-material/SolarPower"
import EngineeringIcon from "@mui/icons-material/Engineering"
import SettingsIcon from "@mui/icons-material/Settings"
import BuildIcon from "@mui/icons-material/Build"
import ElectricalServicesIcon from "@mui/icons-material/ElectricalServices"
import HandymanIcon from "@mui/icons-material/Handyman"

function SolarPower() {
    const services = [
        {
            title: "Load Assessment",
            description:
                "Detailed evaluation of energy demand, usage patterns, and site conditions to ensure proper system sizing and long-term efficiency.",
            icon: <EngineeringIcon className="text-[#33A259]" />,
        },
        {
            title: "System Design",
            description:
                "Professional solar PV system design including inverter configuration, battery storage integration, and technical documentation.",
            icon: <SettingsIcon className="text-[#33A259]" />,
        },
        {
            title: "Component Supply",
            description:
                "Supply of high-quality solar panels, inverters, batteries, and balance-of-system components from trusted manufacturers.",
            icon: <SolarPowerIcon className="text-[#33A259]" />,
        },
        {
            title: "Installation",
            description:
                "Safe and compliant installation executed by trained professionals ensuring structural integrity and electrical reliability.",
            icon: <BuildIcon className="text-[#33A259]" />,
        },
        {
            title: "Testing & Commissioning",
            description:
                "System performance verification, safety testing, and structured commissioning to ensure optimal performance from day one.",
            icon: <ElectricalServicesIcon className="text-[#33A259]" />,
        },
        {
            title: "Maintenance & Support",
            description:
                "Preventive maintenance, monitoring, diagnostics, and responsive technical support for long-term operational stability.",
            icon: <HandymanIcon className="text-[#33A259]" />,
        },
    ]

    return (
        <div className="bg-white">

            {/* HERO SECTION */}
            <section className="max-w-7xl mx-auto px-6 pt-24 grid md:grid-cols-2 gap-16 items-center">

                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <h3 className="text-4xl md:text-5xl font-bold leading-tight">
                        Solar Power <span className="text-[#33A259]">Systems</span>
                    </h3>

                    <div className="w-20 h-1.5 bg-[#33A259] my-6 rounded-full" />

                    <p className="text-lg text-gray-600 leading-relaxed">
                        We design and deliver reliable solar PV systems for residential,
                        commercial, and industrial applications, covering assessment,
                        design, supply, installation, commissioning, and long-term support.
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
                        src="/solar-hero.avif"
                        alt="Solar power installation"
                        className="rounded-3xl shadow-xl"
                    />
                </motion.div>

            </section>

            {/* CAPABILITIES SECTION */}
            <section className="mt-24">

                <div className="text-center mb-16">
                    <h3 className="text-3xl md:text-4xl font-bold">
                        Our Solar Capabilities
                    </h3>
                    <div className="w-20 h-1.5 bg-[#33A259] mx-auto my-6 rounded-full" />
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Structured, performance-driven solar energy solutions built on
                        technical precision and disciplined execution.
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

export default SolarPower