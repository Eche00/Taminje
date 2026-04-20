"use client";

import { useState } from "react";
import { iconMap } from "@/lib/icons";

export default function ServiceCard({ service }: any) {
    const [open, setOpen] = useState(false);
    const Icon = iconMap[service.icon];

    return (
        <>
            {/* CARD */}
            <button
                onClick={() => setOpen(true)}
                className="group w-full text-left p-6 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition hover:-translate-y-2 cursor-pointer"
            >
                <div className="text-[#33A259] mb-4">
                    <Icon />
                </div>

                <h3 className="font-semibold text-lg">
                    {service.title}
                </h3>

                <p className="text-gray-600 text-sm mt-2">
                    {service.description}
                </p>

                <div className="mt-4 text-[#33A259] text-sm opacity-0 group-hover:opacity-100 transition">
                    Click for details →
                </div>
            </button>

            {/* MODAL */}
            {open && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
                    onClick={() => setOpen(false)}
                >
                    <div
                        className="bg-white w-full max-w-2xl rounded-3xl p-8 shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center gap-3 mb-4 text-[#33A259]">
                            <Icon />
                            <h2 className="text-2xl font-bold text-black">
                                {service.title}
                            </h2>
                        </div>

                        <p className="text-gray-700 mb-6">
                            {service.description}
                        </p>

                        <h3 className="font-semibold mb-3">
                            Core Capabilities
                        </h3>

                        <ul className="space-y-2 text-gray-700">
                            {service.features.map(
                                (f: string, i: number) => (
                                    <li key={i}>• {f}</li>
                                )
                            )}
                        </ul>

                        <button
                            onClick={() => setOpen(false)}
                            className="mt-8 px-5 py-2 bg-[#33A259] text-white rounded-xl cursor-pointer"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}