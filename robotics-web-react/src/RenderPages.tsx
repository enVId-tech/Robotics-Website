import React from 'react';
import { BrowserRouter as Router, Routes as Pathhub, Route as Path, Navigate as Redirect } from 'react-router-dom';

// TS / JS
import './assets/js/main.js';

// SCSS
import 'bootstrap/dist/css/bootstrap.min.css';

// Pages
import MainPage from './pages/MainPage.tsx';

// Components

const RenderPages: React.FC = (): React.JSX.Element => {
    return (
        <Router>
        <Pathhub>
            <Path path="/*" element={<Redirect to="/" />} />
            <Path path="/" element={<MainPage />} />
        </Pathhub>
        </Router>
    );
}

export default RenderPages;