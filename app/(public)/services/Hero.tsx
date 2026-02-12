"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowForward } from "@mui/icons-material";

function Hero() {
    const services = [
        "Design & Fabrication",
        "Manufacturing",
        "Vegetable Oil Processing",
        "Consultancy Services",
        "General Contracting",
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
                            Our <br />
                            <span className="text-[#33A259]">
                                Professional Services
                            </span>
                        </h1>

                        <p className="text-white font-light sm:text-[18px] text-[14px] max-w-2xl">
                            Taminje International Limited delivers integrated solutions across
                            engineering, manufacturing, processing, consultancy, and
                            contracting. Our experienced leadership and disciplined execution
                            ensure quality, reliability, and sustainable results for every project.
                        </p>
                    </div>

                    {/* Services List */}
                    <ul className="flex flex-col items-center md:items-start gap-3 md:py-5 py-4">
                        {services.map((item, index) => (
                            <li
                                key={index}
                                className="flex items-center gap-3 text-white sm:text-[16px] text-[13px]"
                            >
                                <ArrowForward className="text-[#33A259]" />
                                {item}
                            </li>
                        ))}
                    </ul>

                    {/* CTA */}
                    <div className="flex items-center md:justify-start justify-center gap-6 w-full">
                        <Link
                            href="/contact"
                            className="flex items-center justify-center rounded-[10px] bg-[#33A259] text-white md:py-5 md:px-9 py-3 px-4 md:text-[18px] text-[16px] font-medium"
                        >
                            Request a Quote
                        </Link>

                        <Link
                            href="/about"
                            className="flex items-center justify-center rounded-[10px] border border-[#33A259] text-[#33A259] md:py-5 md:px-9 py-3 px-4 md:text-[18px] text-[16px] font-medium"
                        >
                            Learn About Us
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
                        src="/serviceshero.png"
                        alt="Engineering, manufacturing and contracting services"
                        className="rounded-2xl"
                    />
                </motion.div>

            </section>
        </div>
    );
}

export default Hero;
