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
            "We provide design and fabrication, manufacturing support, vegetable oil processing, consultancy services, and general contracting for industrial and commercial projects.",
    },
    {
        title: "When was Taminje International Limited established?",
        description:
            "The company was registered in February 2026 and is led by professionals with extensive experience across public and private sectors.",
    },
    {
        title: "Do you handle projects from start to finish?",
        description:
            "Yes. Depending on scope, we support planning, coordination, execution, monitoring, and final delivery with clear accountability.",
    },
    {
        title: "What industries do you work with?",
        description:
            "We work with industrial, manufacturing, processing, and commercial sectors, adapting our services to project-specific requirements.",
    },
    {
        title: "Is your leadership team experienced?",
        description:
            "Yes. Our leadership brings over 33 years and 12+ years of experience respectively in engineering, operations, and corporate governance.",
    },
    {
        title: "How can I contact your team?",
        description:
            "You can reach us via the Contact page on our website to request consultations, quotations, or discuss partnerships.",
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
            <div className="max-w-6xl mx-auto px-4">

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
