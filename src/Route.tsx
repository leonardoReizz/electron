import {  Route, HashRouter, Routes} from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { Home } from "./pages/Home"
import { Login } from "./pages/Login"
import { StoreProducts } from "./pages/StoreProducts"

export const AppRoutes = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={ <Login/> }/>
                <Route path="/home" element = { <> <Navbar/> <Home/> </> }/>
                <Route path="/storeproducts" element={<> <Navbar/> <StoreProducts/></> }/>

            </Routes>
        </HashRouter>
    )
}