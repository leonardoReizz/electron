import {  Route, HashRouter, Routes} from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { Clients } from "./pages/Clients"
import { Delivery } from "./pages/Delivery"
import { Home } from "./pages/Home"
import { Inventory } from "./pages/Inventory"
import { Login } from "./pages/Login"
import Reports from "./pages/Reports"
import { StoreProducts } from "./pages/StoreProducts"
import { Tables } from "./pages/Tables"

export const AppRoutes = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={ <Login/> }/>
                <Route path="/home" element = { <> <Navbar/> <Home/> </> } />
                <Route path="/storeproducts" element={<> <Navbar/> <StoreProducts/> </> } />
                <Route path="/delivery" element = { <> <Navbar/> <Delivery/> </> } />
                <Route path="/tables" element = { <> <Navbar/> <Tables/> </> }/>
                <Route path="/clients" element = { <> <Navbar/> <Clients/> </> }/>
                <Route path="/inventory" element = { <> <Navbar/> <Inventory/> </> } />
                <Route path="/reports" element = { <> <Navbar/> <Reports/> </> } />
            </Routes>
        </HashRouter>
    )
}