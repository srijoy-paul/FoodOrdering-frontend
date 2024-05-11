import React from "react";
// import { AppState, Auth0Provider, User } from "@auth0/auth0-react";
import { AppState, Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};
function Auth0ProviderWithNavigate({ children }: Props) {
  const navigate = useNavigate();
  const VITE_AUTH0_AUDIENCE = import.meta.env.VITE_AUTH0_AUDIENCE;

  const domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
  const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URL;

  if (!domain || !clientId || !redirectUri || !VITE_AUTH0_AUDIENCE) {
    throw new Error("Unable to initiate Auth");
  }
  // appState?: AppState, user?: User
  const onRedirectCallback = (appState?: AppState) => {
    // console.log("user", user, "user sub", user?.sub);
    navigate(appState?.returnTo || "/auth-callback");
  };
  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectUri,
        audience: VITE_AUTH0_AUDIENCE,
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
}

// Auth0ProviderWithNavigate.propTypes = { children: React.ReactNode };

export default Auth0ProviderWithNavigate;
