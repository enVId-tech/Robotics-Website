import React from 'react'
import { BrowserRouter as Router, Routes as Pathhub, Route as Path, Navigate as Redirect } from 'react-router-dom'
import MainPage from './pages/index.tsx';

// SCSS
import './assets/scss/pages/mainpage.scss';

import OurTeamsPage from './pages/ourteams.tsx';
import WhatWeDoPage from './pages/whatwedo.tsx';

// Pages

// Components

// Main
const RenderPages: React.FC = (): React.JSX.Element => {
    return (
        <Router>
            <Pathhub>
                {/* Redirects */}
                <Path path="/*" element={<Redirect to="/" />} />

                {/* Paths */}
                <Path path="/" element={<MainPage />} />
                <Path path="/our-teams" element={<OurTeamsPage />} />
                <Path path="/what-we-do" element={<WhatWeDoPage />} />
            </Pathhub>
        </Router>
    )
};

export default RenderPages;