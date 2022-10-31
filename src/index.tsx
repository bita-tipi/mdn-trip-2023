import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Top from "./routes/top/top";
import Mosya from "./routes/top/mosya";
import Contents from "./routes/contents/contents";
import Attention from "./routes/attention/attention";
import Checklist from "./routes/checklist/checklist";
import Map from "./routes/map/map";
import reportWebVitals from "./reportWebVitals";
import { Routes } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { Route, BrowserRouter } from "react-router-dom";
import Header from "./routes/header/header";

const container = document.getElementById("root");
if (container) {
    const root = createRoot(container);
    root.render(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Top />} />
                <Route path="/contents" element={<Contents />} />
                <Route path="/mosya" element={<Mosya />} />
                <Route path="/Map" element={<Map />} />
                <Route path="/Checklist" element={<Checklist />} />
                <Route path="/attention" element={<Attention />} />
            </Routes>
        </BrowserRouter>
    );
}
