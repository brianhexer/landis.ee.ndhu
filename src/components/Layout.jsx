import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import GlobalBackground from './GlobalBackground';
import CookieBanner from './CookieBanner';
import LandisFooterPanel from './LandisFooterPanel';
import LandisSubheadingPanel from './LandisSubheadingPanel';

const Layout = () => {
    return (
        <>
            <CookieBanner />
            <GlobalBackground />
            <LandisFooterPanel />
            <LandisSubheadingPanel />
            <CustomCursor />
            <div className="min-h-screen flex flex-col font-sans relative">
                {/* Header: z-60 to sit above global effects */}
                <div className="relative z-[70]">
                    <Header />
                </div>

                {/* Main: z-10, Opaque(ish), with margin for reveal */}
                <main
                    className="flex-grow pt-16 sm:pt-20 md:pt-24 bg-transparent relative z-10"
                >
                    <Outlet />
                </main>

                {/* Footer: Relative flow */}
                <Footer />

                {/* Spacer to allow scrolling continuously to reveal fixed LANDIS text */}
                <div className="h-[50vh] w-full" />
            </div>
        </>
    );
};

export default Layout;
