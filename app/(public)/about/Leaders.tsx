'use client'

import React from 'react'
import { motion } from 'framer-motion'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter'

const leaders = [
    {
        name: 'Emmanuel Iliya Kwaya',
        role: 'Chairman & Chief Operating Officer',
        bio: 'Provides strategic direction and operational leadership, bringing decades of experience across public and private sector engineering and management roles.',
        email: 'emmanuel@taminje.com',
        image: '/Founder.jpeg',
        bg: 'bg-[#EAF3EE]',
    },
    {
        name: 'Esther Emmanuel Kwaya',
        role: 'Managing Director & Company Secretary',
        bio: 'Leads management coordination, governance, and administration with a strong focus on structure, compliance, and long-term partnerships.',
        email: 'esther@taminje.com',
        image: '/CoFounder.jpeg',
        bg: 'bg-[#F3EFEA]',
    },
]

function Leaders() {
    return (
        <section className="w-full py-24 bg-gray-100">
            <div className="max-w-6xl mx-auto px-6">

                {/* HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-16 gap-6"
                >
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 max-w-xl">
                        Meet the leaders driving Taminje International Limited
                    </h2>

                    <p className="text-sm text-gray-500 max-w-sm">
                        Our philosophy is simple: empower experienced leadership with the
                        structure and support needed to deliver excellent results.
                    </p>
                </motion.div>

                {/* LEADERS GRID */}
                <div className="grid md:grid-cols-2 gap-10">
                    {leaders.map((leader, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`group bg-white rounded-2xl p-6 shadow-md transition-all duration-300 cursor-pointer hover:border-2 hover:border-[#33A259] `}
                        >
                            {/* IMAGE */}
                            <div className="relative overflow-hidden rounded-xl mb-6">
                                <img
                                    src={leader.image}
                                    alt={leader.name}
                                    className="w-full sm:max-h-98 max-h-80 h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            {/* TEXT */}
                            <div className="space-y-3">
                                <h3 className="text-xl font-semibold text-gray-900">
                                    {leader.name}
                                </h3>

                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                    <div className="w-8 h-8  rounded-lg bg-[#33A259]/10 flex items-center justify-center text-[#33A259] group-hover:bg-[#33A259] group-hover:text-white transition-colors duration-300">
                                        <BusinessCenterIcon fontSize="small" />

                                    </div>
                                    {leader.role}
                                </div>

                                <p className="text-sm text-gray-600 leading-relaxed">
                                    {leader.bio}
                                </p>
                            </div>

                            {/* CTA */}
                            <div className="mt-6 flex items-center justify-between">
                                <a
                                    href={`mailto:${leader.email}`}
                                    className="inline-flex items-center gap-2 text-sm font-medium text-[#33A259] hover:underline"
                                >
                                    <MailOutlineIcon fontSize="small" />
                                    Email {leader.name.split(' ')[0]}
                                </a>

                                {/* subtle hover indicator */}
                                <span className="text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition">
                                    Get in touch →
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Leaders
