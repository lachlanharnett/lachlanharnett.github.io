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
    <HashRouter>
        <Navigation />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
        </Routes>
    </HashRouter>,

    document.getElementById("root")
);

