import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes } from "react-router-dom";
import routes, { toRoute } from "./routes";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>{routes.map(toRoute)}</Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
