import {  Route, HashRouter, Routes} from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { Home } from "./pages/Home"
import { Login } from "./pages/Login"

export const AppRoutes = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={ <Login/> }/>
                <Route path="/home" element={ <Home/> }/>
            </Routes>
        </HashRouter>
    )
}