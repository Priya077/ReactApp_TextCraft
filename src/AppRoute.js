import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About';
import TextForm from './components/TextForm';

export default function AppRoute({ mode, showAlert }) {
    return (
        <Router>
            <Routes>
                <Route path="/about" element={<About mode={mode} />} />
                <Route
                    path="/"
                    element={<TextForm heading="Convert to UpperCase" mode={mode} showAlert={showAlert} />}
                />
            </Routes>
        </Router>
    );
}
