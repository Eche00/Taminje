"use client";

import Link from "next/link";
import { ArrowForward } from "@mui/icons-material";
import {
    Engineering,
    PrecisionManufacturing,
    OilBarrel,
    WorkspacePremium,
    Construction,
} from "@mui/icons-material";
const services = [
    {
        title: "Design & Fabrication",
        description:
            "Precision engineering and custom fabrication for industrial applications, ensuring durability and efficiency.",
        link: "/services/design-and-fabrication",
        icon: <Engineering className="text-[#33A259]" />,
    },
    {
        title: "Manufacturing",
        description:
            "High-quality production processes across diverse sectors, with a focus on innovation and cost-effectiveness.",
        link: "/services/manufacturing",
        icon: <PrecisionManufacturing className="text-[#33A259]" />,
    },
    {
        title: "Vegetable Oil Processing",
        description:
            "State-of-the-art processing solutions for edible oils, emphasizing quality, safety, and sustainability.",
        link: "/services/vegetable-oil-processing",
        icon: <OilBarrel className="text-[#33A259]" />,
    },
    {
        title: "Consultancy Services",
        description:
            "Expert guidance in raw materials management, manufacturing optimization, and business strategy.",
        link: "/services/consultancy",
        icon: <WorkspacePremium className="text-[#33A259]" />,
    },
    {
        title: "General Contracting",
        description:
            "End-to-end project management and execution for construction and infrastructure projects.",
        link: "/services/general-contracting",
        icon: <Construction className="text-[#33A259]" />,
    },
];

function ConsultancyServices() {
    return (
        <div className="bg-gray-100 text-gray-900">

            {/* HERO SECTION */}
            <section className="max-w-6xl mx-auto px-6 py-20 text-center">
                <h1 className="text-2xl md:text-4xl font-bold">
                    Consultancy & General  <span className="text-[#33A259]">Contracting</span>
                </h1>
                <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
                    Taminje International Limited provides practical, results-driven services across design, fabrication, manufacturing, vegetable oil processing, consultancy, and general contracting—guided by experienced leadership and a commitment to operational excellence.
                </p>
                <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 mt-8 bg-[#33A259] text-white px-8 py-4 rounded-xl font-medium hover:opacity-90 transition"
                >
                    Book Consultation
                    <ArrowForward fontSize="small" />
                </Link>
            </section>

            {/* SERVICES GRID */}
            <div className="max-w-[90%] mx-auto grid md:grid-cols-2 lg:grid-cols-5 gap-10">
                {services.map((service, i) => (
                    <Link
                        key={i}
                        href={service.link}
                        className="group relative p-6 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 cursor-pointer"
                    >
                        {/* Decorative top accent */}
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#33A259] rounded-full"></div>

                        {/* Icon */}
                        <div className=" flex items-center justify-start gap-4 mb-4">
                            {service.icon}
                            {/* Step number */}
                            <div className="text-[#33A259] font-bold text-xl ">
                                {i + 1 < 10 ? `0${i + 1}` : i + 1}
                            </div>
                        </div>



                        {/* Title */}
                        <h3 className="font-semibold text-lg mb-3 group-hover:text-[#1F7A45]">
                            {service.title}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-600 text-sm">{service.description}</p>

                        {/* Hover arrow */}
                        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition text-[#33A259]">
                            <ArrowForward fontSize="small" />
                        </div>
                    </Link>
                ))}
            </div>


            {/* LEADERSHIP */}
            <section className="max-w-6xl mx-auto px-6 py-16">
                <h2 className="text-3xl font-bold text-center mb-12">Leadership Team</h2>
                <div className="grid md:grid-cols-2 gap-12">
                    <div className="bg-white rounded-2xl p-8 shadow text-center">
                        <img
                            src="/Founder.jpeg"
                            alt="Emmanuel Iliya Kwaya, Chairman & COO"
                            className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
                        />
                        <h3 className="text-xl font-semibold">Emmanuel Iliya Kwaya</h3>
                        <p className="text-gray-500 mb-4">Chairman & Chief Operating Officer (COO)</p>
                        <p className="text-gray-600 text-sm">
                            Brings over 33 years of experience in mechanical engineering, raw materials development, and operational leadership across public and private sectors.
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl p-8 shadow text-center">
                        <img
                            src="/CoFounder.jpeg"
                            alt="Mrs Esther Emmanuel Kwaya, Managing Director & Company Secretary"
                            className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
                        />
                        <h3 className="text-xl font-semibold">Mrs Esther Emmanuel Kwaya</h3>
                        <p className="text-gray-500 mb-4">Managing Director & Company Secretary</p>
                        <p className="text-gray-600 text-sm">
                            Brings over 12 years of professional experience in management, administration, and corporate governance, ensuring smooth operations and client-focused project delivery.
                        </p>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default ConsultancyServices;
