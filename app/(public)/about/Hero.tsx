"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowForward } from "@mui/icons-material";

function Hero() {
    const highlights = [
        "Registered in February 2026 with experienced leadership",
        "33+ years and 12+ years of public & private sector experience",
        "Multiservice delivery across engineering, processing & contracting",
        "Quality-driven, safety-conscious, and accountable execution",
    ];

    return (
        <div className="relative flex flex-col min-h-[80vh] py-10">
            <section className="max-w-[90%] w-full mx-auto flex flex-1 md:gap-6 gap-10 md:flex-row flex-col items-center justify-center z-20">

                {/* Left Section */}
                <motion.div
                    className="flex-1 w-full"
                    initial={{ opacity: 0, scale: 0.7 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "linear" }}
                >
                    <div className="flex flex-col md:text-start text-center md:items-start items-center gap-4">

                        <h1 className="text-white font-bold md:text-[40px] sm:text-[36px] text-[30px] leading-[120%]">
                            About  <br /><span className="text-[#33A259]">Taminje International Limited</span>
                        </h1>

                        <p className="text-white font-light sm:text-[18px] text-[14px] max-w-2xl">
                            Taminje International Limited is a multiservice company providing
                            design and fabrication, manufacturing, vegetable oil processing,
                            consultancy services, and general contracting. We are built on experienced leadership and a
                            disciplined approach to delivery.
                        </p>
                    </div>

                    {/* Highlights */}
                    <ul className="flex flex-col items-center md:items-start gap-3 md:py-5 py-4">
                        {highlights.map((item, index) => (
                            <li key={index} className="flex items-center gap-3 text-white sm:text-[16px] text-[13px]">
                                <ArrowForward className="text-[#33A259]" />
                                {item}
                            </li>
                        ))}
                    </ul>

                    {/* CTA */}
                    <div className="flex items-center md:justify-start justify-center gap-6 w-full">
                        <Link
                            href="/services"
                            className="flex items-center justify-center rounded-[10px] bg-[#33A259] text-white md:py-5 md:px-9 py-3 px-4 md:text-[18px] text-[16px] font-medium"
                        >
                            Our Services
                        </Link>

                        <Link
                            href="/contact"
                            className="flex items-center justify-center rounded-[10px] border border-[#33A259] text-[#33A259] md:py-5 md:px-9 py-3 px-4 md:text-[18px] text-[16px] font-medium"
                        >
                            Contact Us
                        </Link>
                    </div>
                </motion.div>

                {/* Right Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "linear" }}
                    viewport={{ once: true }}
                    className="flex flex-1 items-center justify-center"
                >
                    <img
                        src="/abouthero.jpg"
                        alt="Taminje International Limited leadership and operations"
                        className="rounded-2xl"
                    />
                </motion.div>

            </section>
        </div>
    );
}

export default Hero;
