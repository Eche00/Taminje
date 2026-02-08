'use client'

import React from "react"
import { motion } from "framer-motion"
import VerifiedIcon from "@mui/icons-material/Verified"
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium"
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety"
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn"
import AutoGraphIcon from "@mui/icons-material/AutoGraph"

const values = [
    {
        title: "Integrity",
        description: "We operate with honesty, transparency, and strong ethical standards.",
        icon: <VerifiedIcon fontSize="small" />,
    },
    {
        title: "Quality Excellence",
        description: "We deliver reliable, durable, and fit-for-purpose solutions.",
        icon: <WorkspacePremiumIcon fontSize="small" />,
    },
    {
        title: "Safety & Responsibility",
        description: "We prioritize safety, sustainability, and risk-aware operations.",
        icon: <HealthAndSafetyIcon fontSize="small" />,
    },
    {
        title: "Accountability",
        description: "We take full responsibility for timelines and outcomes.",
        icon: <AssignmentTurnedInIcon fontSize="small" />,
    },
    {
        title: "Innovation & Growth",
        description: "We constantly improve to deliver smarter solutions.",
        icon: <AutoGraphIcon fontSize="small" />,
    },
]

function CoreValues() {
    return (
        <section className="w-full py-20">
            <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-[220px_1fr] gap-10 items-start">

                {/* LEFT CONTENT */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-4 lg:sticky lg:top-28"
                >
                    {/* EYEBROW */}
                    <span className="text-xs font-semibold tracking-wide text-[#33A259] uppercase">
                        What drives us
                    </span>

                    {/* MAIN TITLE */}
                    <h2 className="text-3xl font-semibold text-gray-900 leading-tight">
                        Our Core <br /> Values
                    </h2>

                    {/* DESCRIPTION */}
                    <p className="text-sm text-gray-600 leading-relaxed max-w-50">
                        The principles that guide our decisions, shape our culture, and define how we deliver value.
                    </p>

                    {/* ACCENT */}
                    <div className="w-10 h-0.5 bg-[#33A259] rounded-full" />
                </motion.div>


                {/* RIGHT GRID */}
                <motion.div
                    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        visible: {
                            transition: { staggerChildren: 0.12 },
                        },
                    }}
                >
                    {values.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 25 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            className="relative bg-gray-100 rounded-xl p-6 min-h-37.5 hover:border-2 hover:border-[#33A259] cursor-pointer transition-all duration-300 "
                        >
                            {/* ICON */}
                            <div className="absolute top-4 right-4 w-10 h-10 mb-6 rounded-xl bg-[#33A259]/10 flex items-center justify-center text-[#33A259] group-hover:bg-[#33A259] group-hover:text-white transition-colors duration-300">
                                {item.icon}
                            </div>

                            <h3 className="text-sm font-semibold text-gray-900 mb-2">
                                {item.title}
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}

                    {/* GREEN CARD */}
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 25 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        className="relative bg-[#33A259] rounded-xl p-6 min-h-37.5 text-white flex flex-col justify-between"
                    >
                        <div>
                            <h3 className="text-sm font-semibold mb-2">
                                Driven by Purpose
                            </h3>
                            <p className="text-sm text-white/90">
                                Our values guide every decision, partnership, and solution we deliver.
                            </p>
                        </div>

                        {/* RANDOM SVG */}
                        <svg
                            className="absolute bottom-4 right-4 opacity-30"
                            width="42"
                            height="42"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                        >
                            <circle cx="12" cy="12" r="9" />
                            <path d="M8 12h8M12 8v8" />
                        </svg>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default CoreValues
