import { QueryClient, QueryClientProvider } from "react-query";
import AppRoutes from "./AppRoutes";
import Auth0ProviderWithNavigate from "./Auth/Auth0ProviderWithNavigate";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Auth0ProviderWithNavigate>
          <AppRoutes />
        </Auth0ProviderWithNavigate>
      </QueryClientProvider>
    </>
  );
}

export default App;
