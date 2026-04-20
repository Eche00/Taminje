import ServiceGrid from "@/components/services/ServiceGrid";

export const metadata = {
    title: "Our Services | Taminje International Limited",
    description:
        "Engineering, manufacturing, solar, consultancy and industrial services across Nigeria.",
};

export default function ServicesPage() {
    return (
        <div className="bg-gray-100 min-h-[80vh]">

            {/* HERO */}
            <section className="text-center py-10 px-6">
                <h1 className="text-4xl font-bold">
                    Our Professional <span className="text-[#33A259]">Services</span>
                </h1>
                <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                    Integrated engineering, manufacturing and energy solutions built for performance and reliability.
                </p>
            </section>

            {/* GRID */}
            <ServiceGrid />
        </div>
    );
}