import { AppRoutes } from "./Route"
import "./styles/global.sass"
import { Navbar } from "./components/Navbar"

export function App() {
  return (
    <>
      <Navbar/>
      <AppRoutes></AppRoutes>
    </>
  )
}