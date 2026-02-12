import { useState, useRef, useEffect } from "react";
import { ExpandMore, Check } from "@mui/icons-material";

interface ServiceDropdownProps {
    services: string[];
    selectedService: string;
    setSelectedService: React.Dispatch<React.SetStateAction<string>>;
}

const ServiceDropdown: React.FC<ServiceDropdownProps> = ({
    services,
    selectedService,
    setSelectedService,
}) => {
    const [open, setOpen] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    // Close when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="relative mb-8" ref={dropdownRef}>
            {/* Trigger */}
            <button
                type="button"
                onClick={() => setOpen((prev) => !prev)}
                className="w-full flex items-center justify-between bg-white border border-gray-200 px-5 py-4 rounded-xl shadow-sm hover:shadow-md transition cursor-pointer"
            >
                <span className="text-gray-800 font-medium">
                    {selectedService || "Select a service"}
                </span>

                <ExpandMore
                    className={`transition-transform duration-300 ${open ? "rotate-180" : ""
                        }`}
                />
            </button>

            {/* Dropdown Panel */}
            <div
                className={`absolute left-0 w-full mt-3 bg-white border border-gray-100 rounded-2xl shadow-xl overflow-hidden transition-all duration-300 z-50 p-3 ${open
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 -translate-y-2 pointer-events-none"
                    }`}
            >
                {services.map((service: string) => (
                    <button
                        type="button"
                        key={service}
                        onClick={() => {
                            setSelectedService(service);
                            setOpen(false);
                        }}
                        className={`w-full flex items-center justify-between px-5 py-4 text-left hover:bg-[#33A259]/5 transition rounded-lg ${selectedService === service
                            ? "bg-[#33A259]/10 text-[#33A259] font-medium"
                            : "text-gray-700"
                            }`}
                    >
                        {service}

                        {selectedService === service && (
                            <Check className="text-[#33A259] text-sm" />
                        )}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ServiceDropdown;
