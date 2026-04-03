"use client";

import Image from "next/image";

const products = Array.from({ length: 33 }, (_, i) => {
    const isEven = i % 2 === 0;

    return {
        title: isEven ? `Onyx Series X${i + 1}` : `Verdant Bifacial ${i + 1}`,
        subtitle: isEven
            ? "Residential Efficiency"
            : "Dual-Sided Energy",
        description: isEven
            ? "Monolithic black-cell technology with ultra-thin profile."
            : "Captures ambient reflected light for maximum yield.",
        image: isEven
            ? "https://lh3.googleusercontent.com/aida-public/AB6AXuAi7JNAQ4AAV1QSMCsZYK_D5WZ9L9l8HLJRcr3lwfyo9-7c9JnAWVv-z0VHXji9UJOWmltNtjyxKoeVkkA1k5xiR3o2WWtjTIzjyWMwkoMARPBgA9hIrIng6KD2JJyfBr6ke-OWTtkxjwimnL7v9wwJ193zSqsCWmVnTlEP0YhQq6QluPBhQIj-_0wBva4RsgJf0xpq1y8PQk7QS8oYhNe7U6iLHRw3YTlY7qaqJkc8L0RGcMxiRIbwqBwTfwlDD-uC5TxpRYr4vg"
            : "https://lh3.googleusercontent.com/aida-public/AB6AXuDKeJDq8bZzCngBHuITDLANIaOyzVGBuEpaYPA9a417m1VmkejFmf9xDg97D8HrR9flixGPO0SDu9rEqZ-iffD1DPYCQzalw0-Ca3CE1EWC6C9vy42NJ9czQFlSZ_ijZX1Q1DMHI2LlK0JhSqLO2c9NH-02g_IbOfWPTiG6m6SHMK_Mg6CLi3UKy2buvDvmwW7UyoAjgc1jjUpzlkoqur71tvDVKLld1Y3Z-5KufDnqMqkXx0jJOvD-dj5jHASr30rLWA7wIXiFeg",
        specs: isEven
            ? [
                { label: "Output", value: `${420 + i * 2}W` },
                { label: "Efficiency", value: `${(22.8 + i * 0.1).toFixed(1)}%` },
            ]
            : [
                { label: "Output", value: `${580 + i * 2}W` },
                { label: "Warranty", value: `${30 + (i % 3)}yr` },
            ],
    };
});

export default function SolarComponent() {
    return (
        <section className="px-6 py-12 space-y-12">
            {/* Hero */}
            <div className="space-y-4">
                <h1 className="text-4xl font-extrabold leading-[1.1]">
                    The future of energy is{" "}
                    <span className="text-primary italic">fluid.</span>
                </h1>
                <p className="text-on-surface-variant text-lg max-w-[600px]">
                    We curate high-efficiency photovoltaic systems designed for the modern
                    architectural landscape.
                </p>
            </div>

            {/* Products */}
            <div className="space-y-6">
                <div className="flex justify-between items-end">
                    <h2 className="text-2xl font-bold">Curated Catalog</h2>
                    <span className="text-primary text-sm font-semibold border-b-2 border-primary-fixed/40 pb-1">
                        View all series
                    </span>
                </div>

                {/* Horizontal Scroll */}
                <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory">
                    {products.map((product, index) => (
                        <div
                            key={index}
                            className="min-w-[300px] max-w-[300px] flex-shrink-0 snap-start group rounded-3xl overflow-hidden shadow-lg hover:scale-[1.02] transition"
                        >
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition duration-700"
                                />
                            </div>

                            <div className="p-6 space-y-3">
                                <h3 className="text-lg font-extrabold">
                                    {product.title}
                                </h3>
                                <p className="text-primary text-xs">
                                    {product.subtitle}
                                </p>
                                <p className="text-xs text-on-surface-variant">
                                    {product.description}
                                </p>

                                <div className="flex justify-between items-center pt-3">
                                    <div className="flex gap-3 text-xs">
                                        {product.specs.map((spec, i) => (
                                            <div key={i}>
                                                <span className="block text-[10px]">
                                                    {spec.label}
                                                </span>
                                                <p className="font-bold">{spec.value}</p>
                                            </div>
                                        ))}
                                    </div>

                                    <button className="bg-primary text-white w-10 h-10 rounded-full text-sm">
                                        →
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Impact */}
            <div className="bg-surface-container rounded-3xl p-8 text-center">
                <div className="space-y-4">
                    <div className="text-3xl font-black text-primary">84%</div>
                    <h3 className="text-xl font-bold">Energy Offset</h3>
                    <p className="text-sm text-on-surface-variant">
                        Your setup eliminates 4.2 tons of CO2 annually.
                    </p>
                </div>
            </div>
        </section>
    );
}