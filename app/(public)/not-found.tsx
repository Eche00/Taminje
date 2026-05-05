import Link from "next/link";
import { HomeRounded } from "@mui/icons-material";

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-green-50 px-6">
            <div className="max-w-xl text-center">

                {/* 404 badge */}
                <h1 className="inline-flex items-center justify-center px-5 py-2 rounded-xl bg-[#33A259]/10 text-[#33A259] font-bold text-4xl mb-6">
                    404
                </h1>

                {/* Heading */}
                <h2 className="text-5xl md:text-7xl font-bold text-gray-500 leading-tight">
                    Page Not Found
                </h2>

                {/* Description */}
                <p className="mt-4 text-gray-600 text-lg leading-relaxed">
                    The page you're looking for may have been moved, deleted,
                    or never existed in the first place.
                </p>

                {/* CTA */}
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-[#33A259] text-white rounded-2xl font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                    <HomeRounded fontSize="small" />
                    Back Home
                </Link>
            </div>
        </div>
    );
}