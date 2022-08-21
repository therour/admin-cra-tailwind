import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { BrowserRouter, Routes } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import { configResponsive } from "ahooks"
import routes, { toRoute } from "./routes"
import { authStore } from "./stores/auth"
import shallowEqual from "zustand/shallow"

import "react-toastify/dist/ReactToastify.css"

const queryClient = new QueryClient()

// always invalidate queries with ["auth"] keys, when authStore state token and user is changed,
// so it will trigger fetching query ["auth"] inside useAuth hooks
authStore.subscribe(
    (s) => [s.token, s.user],
    () => {
        queryClient.invalidateQueries(["auth"])
    },
    {
        equalityFn: shallowEqual,
    },
)

configResponsive({
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
})

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
