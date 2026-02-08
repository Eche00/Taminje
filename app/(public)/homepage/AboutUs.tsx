'use client'
import React from "react";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import GroupsIcon from "@mui/icons-material/Groups";
import { ArrowForward, PlayCircle } from "@mui/icons-material";
import Link from "next/link";
import { motion } from "framer-motion";

function AboutUs() {
    return (
        <section className="w-full py-20 bg-white">
            <div className="max-w-[90%] mx-auto grid lg:grid-cols-2 grid-cols-1 gap-6 items-center">

                {/* LEFT CONTENT */}
                <motion.div
                    className="flex flex-col gap-6"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    <h2 className="text-xl md:text-3xl font-bold leading-tight text-[#33A259]">
                        Taminje International Limited
                    </h2>

                    <p className="text-gray-500 max-w-xl">
                        Taminje International Limited is a multiservice company
                        delivering Design & Fabrication, Manufacturing,
                        Vegetable Oil Processing, Consultancy Services, and
                        General Contracting. Registered in February 2026, we are
                        built on experienced leadership and disciplined
                        execution.
                    </p>

                    {/* FEATURE CARDS */}
                    <motion.div
                        className="grid sm:grid-cols-3 grid-cols-1 gap-6 mt-6"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            hidden: {},
                            visible: {
                                transition: { staggerChildren: 0.15 },
                            },
                        }}
                    >
                        {/* Card 1 */}
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            transition={{ duration: 0.5 }}
                            className="bg-white rounded-xl shadow-lg p-5 flex flex-col gap-3"
                        >
                            <div className="w-12 h-12 rounded-full bg-[#33A259]/15 flex items-center justify-center text-[#33A259]">
                                <EmojiEventsIcon />
                            </div>
                            <h4 className="font-semibold text-gray-900">
                                Quality & Reliability
                            </h4>
                            <p className="text-sm text-gray-500">
                                We deliver fit-for-purpose solutions with strong
                                attention to quality, safety, and standards.
                            </p>
                        </motion.div>

                        {/* Card 2 */}
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            transition={{ duration: 0.5 }}
                            className="bg-white rounded-xl shadow-lg p-5 flex flex-col gap-3"
                        >
                            <div className="w-12 h-12 rounded-full bg-black/10 flex items-center justify-center text-black">
                                <AccountBalanceIcon />
                            </div>
                            <h4 className="font-semibold text-gray-900">
                                Structured Execution
                            </h4>
                            <p className="text-sm text-gray-500">
                                Clear scope, disciplined planning, and
                                accountable delivery from start to finish.
                            </p>
                        </motion.div>

                        {/* Card 3 */}
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            transition={{ duration: 0.5 }}
                            className="bg-white rounded-xl shadow-lg p-5 flex flex-col gap-3"
                        >
                            <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-700">
                                <GroupsIcon />
                            </div>
                            <h4 className="font-semibold text-gray-900">
                                Experienced Leadership
                            </h4>
                            <p className="text-sm text-gray-500">
                                Led by professionals with over 33 and 12 years
                                of public and private sector experience.
                            </p>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="flex items-center md:justify-start justify-center gap-6 w-full"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <Link
                            href="/about"
                            className="flex items-center justify-center gap-2.5  text-[#33A259]   py-2  text-[14px] md:text-[16px] font-medium border-b-2 border-[#33A259] w-fit"
                        >
                            Explore Our Story <ArrowForward fontSize="medium" />
                        </Link>
                    </motion.div>
                </motion.div>

                {/* RIGHT IMAGES */}
                <motion.div
                    className="relative flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <img
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
                        alt="Taminje International Limited team at work"
                        className="rounded-2xl w-full max-w-130 shadow-xl"
                    />

                    {/* Floating Video Card */}
                    <motion.div
                        className="absolute -right-6 bottom-6 bg-white rounded-2xl shadow-2xl p-3 w-65"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <div className="relative rounded-xl overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
                                alt="Project execution preview"
                                className="rounded-xl"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <PlayCircle
                                    className="text-white"
                                    sx={{ fontSize: 60 }}
                                />
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
}

export default AboutUs;
