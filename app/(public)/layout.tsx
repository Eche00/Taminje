import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react'

function Publiclayout({ children }: { children: React.ReactNode; }) {
    return (
        <>
            <Header />
            <main className="bg-white text-black min-h-screen pt-17">{children}</main>
            <Footer />
        </>
    )
}

export default Publiclayout