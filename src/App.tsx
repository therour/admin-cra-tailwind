import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { BrowserRouter, Routes } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import routes, { toRoute } from "./routes"

import "react-toastify/dist/ReactToastify.css"

const queryClient = new QueryClient()

function App() {
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <BrowserRouter>
                    <Routes>{routes.map(toRoute)}</Routes>
                </BrowserRouter>
            </QueryClientProvider>
            <ToastContainer />
        </>
    )
}

export default App
