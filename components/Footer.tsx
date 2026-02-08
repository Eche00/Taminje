'use client'

import React from "react"
import Link from "next/link"
import { Facebook, LinkedIn, Instagram } from "@mui/icons-material"

function Footer() {
    return (
        <footer className="bg-[#192730] text-gray-300 bg-[linear-gradient(to_right,#33a25a36_0.3px,transparent_0.1px),linear-gradient(to_bottom,#33a25a36_0.3px,transparent_0.1px)] md:bg-size-[104px_104px] bg-size-[50px_50px] mask-[radial-gradient(ellipse_100%_70%_at_50%_100%,#000_70%,transparent_[200%])]">
            <div className="max-w-7xl mx-auto px-6 py-16">

                {/* TOP */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">

                    {/* BRAND / ABOUT */}
                    <div className="lg:col-span-2 space-y-4">
                        <h3 className="text-white text-lg font-semibold">
                            Taminje International Limited
                        </h3>
                        <p className="text-sm leading-relaxed text-gray-400 max-w-md">
                            A multiservice company delivering design & fabrication, manufacturing,
                            vegetable oil processing, consultancy services, and general contracting.
                            Registered in February 2026 and built on experienced leadership.
                        </p>

                        {/* LOCATION */}
                        <div className="text-sm text-gray-400">
                            <p className="font-medium text-gray-300">Location</p>
                            <p>Nigeria</p>
                        </div>
                    </div>

                    {/* COMPANY */}
                    <div>
                        <h4 className="text-white text-sm font-semibold mb-4">
                            Company
                        </h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/about" className="hover:text-white">About Us</Link></li>
                            <li><Link href="/leadership" className="hover:text-white">Leadership</Link></li>
                            <li><Link href="/careers" className="hover:text-white">Careers</Link></li>
                            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
                        </ul>
                    </div>

                    {/* SERVICES */}
                    <div>
                        <h4 className="text-white text-sm font-semibold mb-4">
                            Services
                        </h4>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link href="/services/design-and-fabrication" className="hover:text-white">
                                    Design & Fabrication
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/manufacturing" className="hover:text-white">
                                    Manufacturing
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/vegetable-oil-processing" className="hover:text-white">
                                    Vegetable Oil Processing
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/consultancy" className="hover:text-white">
                                    Consultancy Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/general-contracting" className="hover:text-white">
                                    General Contracting
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* LEGAL */}
                    <div>
                        <h4 className="text-white text-sm font-semibold mb-4">
                            Legal
                        </h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/terms" className="hover:text-white">Terms of Service</Link></li>
                            <li><Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
                            <li><Link href="/cookies" className="hover:text-white">Cookies Policy</Link></li>
                            <li><Link href="/data-processing" className="hover:text-white">Data Processing</Link></li>
                        </ul>
                    </div>
                </div>

                {/* DIVIDER */}
                <div className=" border-white/10 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">

                    {/* COPYRIGHT */}
                    <p className="text-xs text-gray-400">
                        © {new Date().getFullYear()} Taminje International Limited. All rights reserved.
                    </p>

                    {/* SOCIALS */}
                    <div className="flex items-center gap-4 text-gray-400">
                        <a href="#" className="hover:text-white">
                            <LinkedIn fontSize="small" />
                        </a>
                        <a href="#" className="hover:text-white">
                            <Facebook fontSize="small" />
                        </a>
                        <a href="#" className="hover:text-white">
                            <Instagram fontSize="small" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
