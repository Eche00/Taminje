'use client'

import {
    ArrowForward,
    Description,
    Hub,
    ShowChart,
} from '@mui/icons-material'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
}

const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
}

function WhyChooseUs() {
    const reasons = [
        {
            number: '01',
            title: 'Reason One',
            icon: Description,
            text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati.',
        },
        {
            number: '02',
            title: 'Reason Two',
            icon: Hub,
            text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi occaecati blanditiis.',
        },
        {
            number: '03',
            title: 'Reason Three',
            icon: ShowChart,
            text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi.',
        },
    ]

    return (
        <div>
            {/* WHY CHOOSE US */}
            <section className="max-w-6xl mx-auto px-6 py-24 relative overflow-hidden">
                {/* Top Label */}
                <motion.section
                    className="text-center max-w-3xl mx-auto  px-6"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <h1 className="text-3xl md:text-4xl font-bold leading-tight">
                        Why Choose  <span className="text-[#33A259]">Us?</span>
                    </h1>

                    <div className="w-20 h-1.5 bg-[#33A259] mx-auto my-6 rounded-full" />

                    {/* Description */}
                    <p

                        className="mt-6 text-gray-600 max-w-3xl"
                    >
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque laudantium, totam rem aperiam, eaque
                        ipsa quae ab illo inventore veritatis et quasi architecto
                        beatae vitae dicta sunt explicabo.
                    </p>

                </motion.section>



                {/* Reasons Grid */}
                <motion.div
                    className="mt-20 grid md:grid-cols-3"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    {reasons.map((reason, index) => {
                        const IconComponent = reason.icon

                        return (
                            <motion.div
                                key={index}
                                variants={item}
                                className="relative px-8 py-12 border-r last:border-r-0 border-gray-200"
                            >
                                {/* Icon Circle */}
                                <div className="h-16 w-16 rounded-full border-2 border-[#33A259]/90 flex items-center justify-center text-[#33A259] mb-6">
                                    <IconComponent />
                                </div>

                                {/* Number */}
                                <p className="text-sm text-gray-400 mb-2">
                                    {reason.number}
                                </p>

                                {/* Title */}
                                <h3 className="text-lg font-semibold mb-4">
                                    {reason.title}
                                </h3>

                                {/* Text */}
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {reason.text}
                                </p>

                                {/* Arrow Button */}
                                <button className="mt-6 h-10 w-10 rounded-full border border-[#33A259]/90 text-[#33A259] flex items-center justify-center hover:bg-teal-500 hover:text-white transition">
                                    <ArrowForward fontSize="small" />
                                </button>
                            </motion.div>
                        )
                    })}
                </motion.div>
            </section>


        </div>
    )
}

export default WhyChooseUs
