import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "assets-def.css";
import Top from "./routes/top/top";
import Loading from "./routes/load/loading";
import Contents from "./routes/contents/contents";
import ClassRoom from "./routes/room/room";
import Attention from "./routes/attention/attention";
import Checklist from "./routes/checklist/checklist";
import Schedule from "./routes/schedule/schedule";
import Map from "./routes/map/map";
import reportWebVitals from "./reportWebVitals";
import { Routes } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { Route, BrowserRouter } from "react-router-dom";
import Header from "./routes/header/header";
import { RecoilRoot } from "recoil";

const container = document.getElementById("root");
if (container) {
    const root = createRoot(container);
    root.render(
        <RecoilRoot>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Top />} />
                    <Route path="/contents" element={<Contents />} />
                    <Route path="/map" element={<Map />} />
                    <Route path="/Checklist" element={<Checklist />} />
                    <Route path="/attention" element={<Attention />} />
                    <Route path="/room" element={<ClassRoom />} />
                    <Route path="/schedule" element={<Schedule />} />
                </Routes>
            </BrowserRouter>
        </RecoilRoot>
    );
}
