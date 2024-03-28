import { QueryClient, QueryClientProvider } from "react-query";
import AppRoutes from "./AppRoutes";
import Auth0ProviderWithNavigate from "./Auth/Auth0ProviderWithNavigate";
import { Toaster } from "sonner";

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
          <Toaster
            visibleToasts={1}
            position="top-right"
            toastOptions={{
              className: "text-saffron py-4 px-2",
            }}
          />
        </Auth0ProviderWithNavigate>
      </QueryClientProvider>
    </>
  );
}

export default App;
