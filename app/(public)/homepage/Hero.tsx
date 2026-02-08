"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { ArrowForward } from "@mui/icons-material";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import FactoryIcon from "@mui/icons-material/Factory";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

function Hero() {
    const provisions = [
        "Design & Fabrication tailored to your needs",
        "Reliable Manufacturing solutions",
        "Expert Consultancy and Project Management",
    ];

    const bottomProvisions = [
        {
            title: "Design & Fabrication",
            icon: <PrecisionManufacturingIcon fontSize="large" />,
        },
        {
            title: "Manufacturing Solutions",
            icon: <FactoryIcon fontSize="large" />,
        },
        {
            title: "Consultancy & Project Management",
            icon: <SupportAgentIcon fontSize="large" />,
        },
    ];

    return (
        <div
            className="relative flex flex-col min-h-[90vh]  sm:py-10  "
        >

            <section className=" max-w-[90%] w-full mx-auto flex flex-1 md:gap-2 gap-10 md:flex-row flex-col items-center  justify-center z-20">
                {/* Left hero section  */}
                <motion.div
                    className=" flex-1 md:pt-0 pt-10 w-full"
                    initial={{ opacity: 0, scale: 0.7 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "linear" }}
                >
                    <div className=" flex flex-col md:text-start text-center md:items-start items-center gap-4">

                        <h1 className=" text-white font-bold  md:text-[40px] sm:text-[36px] text-[30px] md:leading-[100%] md:tracker-[1.28px] leading-[120%] tracker-[0.8px]">
                            Solutions in Design, Manufacturing &
                            <span className=" text-[#33A259]"> Contracting</span>
                        </h1>
                        <p className=" text-white font-light md:text-6 sm:text-[18px] text-[14px] ">
                            Delivering Practical, Quality-Driven Solutions Across Design, Manufacturing, Processing, and Contracting, Backed by Decades of Leadership Experience and Industry Expertise.
                        </p>
                    </div>
                    {/* Provision list with MUI icons */}
                    <ul className=" flex flex-col items-center md:items-start md:justify-start justify-center sm:gap-4 gap-2 md:py-5 py-3.75">
                        {provisions.map((item, index) => (
                            <li key={index} className="flex items-center gap-3 text-white font-medium sm:text-[16px] text-[12px]">
                                <ArrowForward className="text-[#33A259]" />
                                {item}
                            </li>
                        ))}
                    </ul>
                    <div className=" flex items-center md:justify-start justify-center  gap-6  w-full">
                        <Link
                            href="/auth/sign-up"
                            className="flex items-center justify-center gap-2.5 rounded-[10px] bg-[#33A259] text-white md:py-5 md:px-9 py-3 px-3 text-[16px] md:text-[18px] font-medium border border-[#33A259] md:w-50  w-32.5"
                        >
                            About Us
                        </Link>
                        <Link
                            href="/dashboard/sessions"
                            className="  md:py-5 md:px-9 py-3 px-3 text-[16px] md:text-[18px] text-[#33A259] font-medium border border-[#33A259]  rounded-[10px] flex items-center justify-center md:w-50 w-32.5"
                        >
                            {" "}
                            Our Services
                        </Link>
                    </div>

                </motion.div>
                {/* Right hero section  */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "linear" }}
                    viewport={{ once: true }}
                    className="flex flex-1 items-center justify-center"
                >
                    {/* <Image src='' alt="Hero img" /> */}
                    <img src="/hero1.jpg" alt="" className=" rounded-2xl" />
                </motion.div>
            </section>

            {/* bottom section */}
            <motion.section
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "linear" }}
                className="max-w-[80%] w-full mx-auto rounded-2xl  mt-10 px-6 py-4"
            >
                <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
                    {bottomProvisions.map((item, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                            className="flex flex-col items-center text-center gap-4 p-6 rounded-xl bg-[#0F2A1B]/60 backdrop-blur-md border border-[#33A259]/40"
                        >
                            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#33A259]/20 text-[#33A259]">
                                {item.icon}
                            </div>

                            <h3 className="text-white font-semibold text-[18px]">
                                {item.title}
                            </h3>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

        </div>
    );
}

export default Hero;
