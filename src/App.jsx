import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import Advisor from '@/pages/Advisor';
import Researches from '@/pages/Researches';
import Members from '@/pages/Members';
import Publications from '@/pages/Publications';
import Courses from '@/pages/Courses';
import Awards from '@/pages/Awards';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';

import SiteDeveloper from '@/pages/SiteDeveloper';

function App() {
    const location = useLocation();
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="advisor" element={<Advisor />} />
                        <Route path="researches" element={<Researches />} />
                        <Route path="members" element={<Members />} />
                        <Route path="publications" element={<Publications />} />
                        <Route path="courses" element={<Courses />} />
                        <Route path="awards" element={<Awards />} />
                        <Route path="site-developer" element={<SiteDeveloper />} />
                    </Route>
                </Routes>
            </AnimatePresence>
        </ThemeProvider>
    );
}

export default App;
