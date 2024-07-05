import { BrowserRouter } from "react-router-dom";
import { AppContextProvider } from "./context/AppContext";
import { Router } from "./router/Router"

export default function App() {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </AppContextProvider>
  )
}