'use client'

import { ArrowForward } from "@mui/icons-material";
import Link from "next/link";
import { useState } from "react";

type Project = {
    id: string;
    category: string;
    title: string;
    type: string;
    role: string;
    status: "Completed" | "Commissioned" | "In Progress" | "Concept";

    keyComponents: string[];

    description: string;
    marketingCaption: string;

    cover: string;
    gallery: string[];

    // NEW structured metadata
    metadata?: {
        location?: string;
        date?: string;
        duration?: string;
        capacity?: string;
        client?: string;
    };

    // COMPATIBILITY LAYER (keeps your UI working)
    capacity?: string;
    client?: string;
    location?: string;
    date?: string;
    duration?: string;
};

export default function TaminjePortfolio() {

    const projects: Project[] = [
        {
            id: "solar-utako",
            category: "Solar Power Systems",
            title: "EYN Utako 50 kW Hybrid Solar and Battery Installation",
            type: "Installation",
            role: "Solar system design, installation and commissioning",
            status: "Commissioned",

            metadata: {
                capacity: "50 kW inverter visible; modular Deye battery bank",
                client: "Unspecified",
                location: "Unspecified",
                date: "Unspecified",
                duration: "Unspecified",
            },

            keyComponents: [
                "Deye Inverter",
                "Deye Battery Modules",
                "DC Protection Hardware",
                "Cable Trays",
                "Suntree SPD/Fuse Boxes"
            ],

            description:
                "End-to-end hybrid solar and battery installation featuring inverter integration, battery-bank assembly, DC protection hardware, organised cable routing and commissioning-stage finishing for dependable commercial backup power.",

            marketingCaption:
                "Commercial solar and storage integration executed with clean protection layout and disciplined finishing.",

            cover: "Solar-Power-Systems0.jpeg",
            gallery: ["/Solar-Power-Systems1.jpeg"],
        },

        {
            id: "solar-room",
            category: "Battery Banks & Inverter Rooms",
            title: "Commercial Multi-Inverter Battery Room Installation",
            type: "Installation",
            role: "Commercial solar-battery installation, power integration and commissioning",
            status: "Commissioned",

            metadata: {
                capacity: "Multi-inverter + modular rack battery system",
                client: "Unspecified",
                location: "Unspecified",
                date: "Unspecified",
                duration: "Unspecified",
            },

            keyComponents: [
                "Solis Inverter",
                "Deye Battery Stacks",
                "Inverter Cabinets",
                "Cable Trays",
                "Electrical Protection Panels"
            ],

            description:
                "Commercial inverter-room and battery-storage installation showcasing modular rack batteries, neat cable-tray routing, inverter integration, internal switchgear coordination and a clean expandable power-room layout.",

            marketingCaption:
                "A professionally organised inverter room built for commercial-scale energy resilience.",

            cover: "/Battery-Banks-Inverter-Rooms0.jpeg",
            gallery: ["Battery-Banks-Inverter-Rooms1.jpeg", "/Battery-Banks-Inverter-Rooms2.jpeg", "/Battery-Banks-Inverter-Rooms3.jpeg", "/Battery-Banks-Inverter-Rooms4.jpeg"],
        },

        {
            id: "panel",
            category: "Control Panels & Electrical Cabinets",
            title: "Industrial Power Control and Protection Panel",
            type: "Electrical Installation",
            role: "Panel assembly, internal wiring, protection coordination and testing",
            status: "Completed",

            metadata: {
                capacity: "Three-phase industrial control system",
                client: "Unspecified",
                location: "Unspecified",
                date: "Unspecified",
                duration: "Unspecified",
            },

            keyComponents: [
                "CHINT NC2-150/4 Contactor",
                "Moeller Fuse Switch",
                "Busbars",
                "Protection Relays",
                "Terminal Blocks"
            ],

            description:
                "Custom power-control and protection panel work covering safe isolation, switching, feeder organisation, clean internal wiring and robust component integration for industrial and energy applications.",

            marketingCaption:
                "Cleanly built control cabinets that support safe industrial switching and equipment protection.",

            cover: "/Control-Panels-Electrical-Cabinets0.jpeg",
            gallery: ["/Control-Panels-Electrical-Cabinets1.jpeg", "/Control-Panels-Electrical-Cabinets2.jpeg"],
        },

        {
            id: "fabrication",
            category: "Processing Equipment",
            title: "Custom Agro-Processing Machine Fabrication",
            type: "Fabrication",
            role: "Mechanical design and fabrication of agro-processing equipment",
            status: "Completed",

            metadata: {
                capacity: "Triple hopper-fed processing units",
                client: "Unspecified",
                location: "Unspecified",
                date: "Unspecified",
                duration: "Unspecified",
            },

            keyComponents: [
                "Steel Hopper Systems",
                "Guarded Belt Drives",
                "Welded Steel Frames",
                "Discharge Chutes"
            ],

            description:
                "Custom-fabricated hopper-fed agro-processing machines built for practical field use, durable serviceability and repeatable production performance.",

            marketingCaption:
                "Custom-fabricated processing units built for reliable, repeatable agro-processing.",

            cover: "/Processing-Equipment.jpeg",
            gallery: ['Processing-Equipment0.jpeg', 'Processing-Equipment1.jpeg', 'Processing-Equipment3.jpeg', 'Processing-Equipment4.jpeg'],
        },

        {
            id: "installation",
            category: "Mechanical Installations",
            title: "Cyclone-Assisted Processing Line Installation and Start-up",
            type: "Installation",
            role: "Installation, alignment and start-up support for processing equipment",
            status: "Commissioned",

            metadata: {
                capacity: "Cyclone + ducted processing line",
                client: "Unspecified",
                location: "Unspecified",
                date: "Unspecified",
                duration: "Unspecified",
            },

            keyComponents: [
                "Cyclone Separators",
                "Blower Systems",
                "Ducting",
                "Structural Frames",
                "Motor Assemblies"
            ],

            description:
                "Plant installation and start-up support for a cyclone-assisted processing line, including equipment positioning, integration works and readiness for commissioning activities.",

            marketingCaption:
                "Mechanical installation delivered with structured ducting and practical site integration.",

            cover: "/Mechanical-Installations.jpeg",
            gallery: [],
        },

        {
            id: "product",
            category: "Oil Packaging & Branding",
            title: "Taminje Sesame Oil Reserve Edition Concept",
            type: "Product Design",
            role: "Product concept development and packaging design",
            status: "Completed",

            metadata: {
                capacity: "1000ml bottle format",
                client: "Taminje International Ltd",
                location: "Unspecified",
                date: "Unspecified",
                duration: "Unspecified",
            },

            keyComponents: [
                "Bottle Design",
                "Nutrition Panel",
                "Barcode System",
                "Premium Label Artwork"
            ],

            description:
                "Premium sesame-oil packaging concept developed to present a refined, export-ready product identity for Taminje’s vegetable-oil offering.",

            marketingCaption:
                "Premium branding that turns a processed product into a retail-ready brand.",

            cover: "/Oil-P.jpeg",
            gallery: [],
        },
    ];

    const [selected, setSelected] = useState<Project | null>(null);
    const [filter, setFilter] = useState("All");

    const categories = ["All", ...Array.from(new Set(projects.map(p => p.category)))];

    const filtered =
        filter === "All"
            ? projects
            : projects.filter(p => p.category === filter);

    return (
        <div className="min-h-screen bg-gray-100 p-6">

            {/* HERO SECTION */}
            <div

            >
                <h3 className="text-4xl md:text-5xl font-bold leading-tight">
                    Our Project  <span className="text-[#33A259]">Portfolio</span>
                </h3>

                <div className="w-20 h-1.5 bg-[#33A259] my-6 rounded-full" />


            </div>
            {/* FILTER BAR */}
            <div className="sticky top-3 z-20 mb-8">
                <div className="flex flex-wrap gap-2 p-3 bg-white/70 rounded-2xl ">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`
                        px-4 py-1.5 rounded-full text-sm transition-all duration-200
                        border cursor-pointer
                        ${filter === cat
                                    ? "bg-[#33A259] text-white shadow-md"
                                    : "bg-white hover:bg-[#33A259] text-[#33A259]"
                                }
                    `}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* GRID */}
            <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory">

                {filtered.map(project => (
                    <div
                        key={project.id}

                        className="min-w-[300px] max-w-[350px] flex-shrink-0 snap-start group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100"
                    >

                        {/* IMAGE */}
                        <div className="relative overflow-hidden">
                            <img
                                src={project.cover}
                                className="h-56 w-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />

                            {/* STATUS BADGE */}
                            <div className="absolute top-3 left-3">
                                <span className="px-2 py-1 text-xs bg-[#33A259]/20 text-[#33A259] rounded-full backdrop-blur">
                                    {project.status || "Unspecified"}
                                </span>
                            </div>

                            {/* CATEGORY TAG */}
                            <div className="absolute bottom-3 left-3">
                                <span className="px-2 py-1 text-xs bg-white/80 backdrop-blur rounded-full text-gray-800">
                                    {project.category}
                                </span>
                            </div>
                        </div>

                        {/* CONTENT */}
                        <div className="p-4">

                            <h3 className="font-semibold text-gray-900 leading-snug">
                                {project.title}
                            </h3>

                            <p className="text-sm text-gray-500 mt-1">
                                {project.type}
                            </p>

                            {/* META STRIP */}
                            <div className="mt-3 flex justify-between text-xs text-gray-500 border-t pt-3">
                                <span>{project.role.split(",")[0]}</span>
                                <span onClick={() => setSelected(project)} className="text-[#33A259]">View Details →</span>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
            <Link
                href="/contact"
                className="inline-flex items-center gap-2 mt-10 bg-[#33A259] text-white px-8 py-4 rounded-xl font-medium hover:scale-105 transition-all duration-300"
            >
                Discuss Your Project
                <ArrowForward fontSize="small" />
            </Link>
            {/* MODAL (ENGINEERING DATASHEET STYLE) */}
            {selected && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">

                    <div className="bg-white w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto">

                        {/* HEADER IMAGE */}
                        <div className="relative">
                            <img
                                src={selected.cover}
                                className="h-80 w-full object-cover"
                            />

                            <div className="absolute bottom-4 left-4 flex gap-2">
                                <span className="px-3 py-1 text-xs bg-[#33A259] text-white rounded-full">
                                    {selected.category}
                                </span>
                                <span className="px-3 py-1 text-xs bg-white text-black rounded-full">
                                    {selected.status}
                                </span>
                            </div>
                        </div>

                        {/* CONTENT */}
                        <div className="p-6">

                            <h2 className="text-2xl font-bold text-gray-900">
                                {selected.title}
                            </h2>

                            <p className="text-gray-500 mt-1">
                                {selected.type}
                            </p>

                            <div className="grid md:grid-cols-2 gap-6 mt-6 text-sm">

                                <div>
                                    <p className="text-gray-400 mb-1">Description</p>
                                    <p className="text-gray-700">{selected.description}</p>
                                </div>

                                <div className="space-y-2">

                                    <div>
                                        <p className="text-gray-400">Role</p>
                                        <p className="text-gray-700">{selected.role}</p>
                                    </div>

                                    <div>
                                        <p className="text-gray-400">Capacity</p>
                                        <p className="text-gray-700">{selected.capacity}</p>
                                    </div>

                                    <div>
                                        <p className="text-gray-400">Client</p>
                                        <p className="text-gray-700">{selected.client}</p>
                                    </div>

                                </div>
                            </div>

                            {/* KEY COMPONENTS */}
                            <div className="mt-6">
                                <p className="text-gray-400 text-sm mb-2">Key Components</p>

                                <div className="flex flex-wrap gap-2">
                                    {selected.keyComponents.map((c, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 text-xs bg-gray-100 rounded-full text-gray-700"
                                        >
                                            {c}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* MARKETING LINE */}
                            <p className="mt-6 italic text-gray-600 border-l-2 pl-3">
                                {selected.marketingCaption}
                            </p>

                            {/* GALLERY */}
                            {selected.gallery.length > 0 && (
                                <div className="mt-6 grid grid-cols-2 gap-3">
                                    {selected.gallery.map((img, i) => (
                                        <img
                                            key={i}
                                            src={img}
                                            className="h-40 w-full object-cover rounded-xl"
                                        />
                                    ))}
                                </div>
                            )}

                            {/* CLOSE */}
                            <button
                                onClick={() => setSelected(null)}
                                className="mt-8 w-full py-3 bg-[#33A259] text-white rounded-xl hover:bg-[#33A259]/80 transition cursor-pointer"
                            >
                                Close Project
                            </button>

                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}