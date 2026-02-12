import { Metadata } from "next";
import ContactUs from "./ContactUs"

export const metadata: Metadata = {
    title: "Contact Us | Taminje International Limited",
    description: "Get in touch with Taminje International Limited for engineering and consultancy services.",
};


function page() {
    return (
        <div>
            {/* Homepage container */}
            <main>

                <ContactUs />

            </main>
        </div>
    )
}

export default page