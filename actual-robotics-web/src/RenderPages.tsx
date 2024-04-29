import React from 'react'
import { BrowserRouter as Router, Routes as Pathhub, Route as Path, Navigate as Redirect } from 'react-router-dom'

// SCSS

// Pages

// Components

// Main
const RenderPages: React.FC = (): React.JSX.Element => {
    return (
        <Router>
            <Pathhub>
                {/* Redirects */}
                <Path path="/*" element={<Redirect to="/home" />} />

                {/* Paths */}
                <Path path="/home" element={<div>Home</div>} />
            </Pathhub>
        </Router>
    )
};

export default RenderPages;