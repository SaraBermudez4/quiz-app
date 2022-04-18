import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import About from "../components/About";
import Home from "../components/Home";
import NavBar from "../components/NavBar";
import Question from "../components/Question";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/question" element={<Question />} />
                <Route path="/about" element={<About />} />
                <Route path="/*" element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
