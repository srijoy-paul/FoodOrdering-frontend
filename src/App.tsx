import AppRoutes from "./AppRoutes";
import Auth0ProviderWithNavigate from "./Auth/Auth0ProviderWithNavigate";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Auth0ProviderWithNavigate>
        <AppRoutes />
      </Auth0ProviderWithNavigate>
    </>
  );
}

export default App;
