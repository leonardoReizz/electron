import { Routes, Route, HashRouter} from "react-router-dom"
import React from "react";
import { Home } from "./pages/Home"

export const AppRoutes = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </HashRouter>
    )
}