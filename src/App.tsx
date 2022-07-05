import ClientProvider from "./hooks/useModal"
import { AppRoutes } from "./Route"
import "./styles/global.sass"

export function App() {
  return (
    <>
      <ClientProvider>
        <AppRoutes></AppRoutes>
      </ClientProvider>
    </>
  )
}