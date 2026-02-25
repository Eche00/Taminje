import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react'
import { Toaster } from 'react-hot-toast';

function Publiclayout({ children }: { children: React.ReactNode; }) {
    return (
        <>
            <Toaster position="top-right" />
            <Header />
            <main className="bg-white text-black min-h-screen pt-17">{children}</main>
            <Footer />
        </>
    )
}

export default Publiclayout