'use client'

import React from "react"
import { motion } from "framer-motion"
import BoltIcon from "@mui/icons-material/Bolt"
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects"
import EditNoteIcon from "@mui/icons-material/EditNote"

const faqs = [
    {
        title: "What services does Taminje International Limited provide?",
        description:
            "We provide design & fabrication, manufacturing solutions, solar power systems (design, supply & installation), project start-up & troubleshooting, vegetable oil processing, consultancy services, and general contracting for industrial and commercial projects.",
    },
    {
        title: "Do you design and install solar power systems?",
        description:
            "Yes. We deliver end-to-end solar PV solutions including load assessment, system sizing, component supply, professional installation, testing, commissioning, and maintenance support for residential, commercial, and industrial applications.",
    },
    {
        title: "What is included in Project Start-up & Troubleshooting services?",
        description:
            "We provide commissioning support, structured diagnostics, fault finding, root cause analysis, corrective actions, and performance optimization to stabilize operations and reduce downtime during project start-up or ongoing operations.",
    },
    {
        title: "When was Taminje International Limited established?",
        description:
            "The company was registered in February 2026 and is led by experienced professionals with strong backgrounds in engineering, operations, manufacturing, and corporate governance.",
    },
    {
        title: "Do you handle projects from start to finish?",
        description:
            "Yes. Depending on scope, we manage planning, coordination, procurement, execution, supervision, monitoring, and final delivery with clear accountability and structured reporting.",
    },
    {
        title: "What industries do you serve?",
        description:
            "We serve industrial, manufacturing, renewable energy, agro-processing, construction, and commercial sectors, tailoring solutions to project-specific technical and operational requirements.",
    },
    {
        title: "Can you support existing facilities experiencing operational issues?",
        description:
            "Yes. Through our troubleshooting and optimization services, we assess underperforming systems, identify technical gaps, and implement structured corrective solutions to restore efficiency and reliability.",
    },
    {
        title: "Is your leadership team experienced?",
        description:
            "Yes. Our leadership team brings decades of combined experience in engineering, operations management, and strategic oversight across both public and private sector projects.",
    },
    {
        title: "How can I contact Taminje International Limited?",
        description:
            "You can reach us via emma.kwaya@taminje.com or esther.kwaya@taminje.com, or call +234 806 687 8945 or +234 816 656 2016. Our office is located at No 8 Yah-Wahab Estate Phase 3, Plot 334 Dahiru Musdapha Boulevard, Wuye District 900108, Abuja, Nigeria.",
    },
]

const icons = [
    <BoltIcon fontSize="small" />,
    <EmojiObjectsIcon fontSize="small" />,
    <EditNoteIcon fontSize="small" />,
]

function FAQSection() {
    return (
        <section className="w-full bg-gray-100 py-20">
            <div className="max-w-7xl mx-auto px-4">

                {/* HEADER */}
                <div className="mb-14">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-sm text-gray-600 max-w-md">
                        Here are some common questions about our services, experience, and delivery approach.
                    </p>
                </div>

                {/* FAQ GRID */}
                <motion.div
                    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        visible: {
                            transition: { staggerChildren: 0.12 },
                        },
                    }}
                >
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            className="space-y-3 border-b-2 border-[#33A259] pb-3"
                        >
                            {/* ICON */}
                            <div className="w-10 h-10 rounded-full bg-[#33A259]/10 flex items-center justify-center text-[#33A259]">
                                {icons[index % icons.length]}
                            </div>

                            {/* TEXT */}
                            <h3 className="text-sm font-semibold text-gray-900">
                                {faq.title}
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                {faq.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default FAQSection
