import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
    Navigation,
    Home,
    About,
    Projects
} from "./components";

ReactDOM.render(
    <Router>
        <Navigation />
        <Routes>
            <Route path="/Portfolio-Site/" element={<Home />} />
            <Route path="/Portfolio-Site/about" element={<About />} />
            <Route path="/Portfolio-Site/projects" element={<Projects />} />
        </Routes>
    </Router>,

    document.getElementById("root")
);

