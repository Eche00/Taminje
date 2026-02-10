import { LocationOn } from '@mui/icons-material';
import React from 'react';

function Location() {
    return (
        <section className="relative">

            <div className="absolute top-0 right-3 flex items-start sm:gap-4 gap-2 sm:rounded-2xl bg-gray-50/60 sm:p-6 p-2 shadow-sm max-w-md mx-auto mt-5 sm:text-[16px] text-[12px]">
                <div className="flex sm:h-12 sm:w-12 w-7 h-7 items-center justify-center rounded-full bg-black text-white">
                    <LocationOn fontSize="small" />
                </div>

                <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                        Office Location
                    </p>

                    <p className="mt-1 sm:leading-relaxed text-gray-900">
                        No. 8 Yahwehab Estate Phase, Plot 334
                        <br />
                        Dahiru Musdapha Boulevard, Wuye District
                        <br />
                        <span className="font-medium">Abuja 900108, Nigeria</span>
                    </p>
                </div>
            </div>

            <div style={{ width: '100%', height: '500px' }}>
                <iframe
                    title="Yahwehab Estate Location"
                    src="https://www.google.com/maps?q=Wuye%20District%20Abuja%20Nigeria&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                />
            </div>
        </section>
    );
}

export default Location;
