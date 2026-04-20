import ServiceCard from "./ServiceCard";
import { services } from "@/utils/services";

export default function ServiceGrid() {
    return (
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 pb-16">
            {services.map((service) => (
                <ServiceCard key={service.slug} service={service} />
            ))}
        </div>
    );
}