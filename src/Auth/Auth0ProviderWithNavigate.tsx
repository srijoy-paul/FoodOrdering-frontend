import React from "react";
import { AppState, Auth0Provider, User } from "@auth0/auth0-react";
import { error } from "console";
import { useCreateUser } from "@/Api/CreateUserApi";
import { useNavigate } from "react-router-dom";

function Auth0ProviderWithNavigate({ children }) {
  const navigate = useNavigate();

  const domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
  const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URL;

  if (!domain || !clientId || !redirectUri) {
    throw new Error("Unable to initiate Auth");
  }

  const onRedirectCallback = (appState?: AppState, user?: User) => {
    console.log("user", user, "user sub", user?.sub);
    navigate("/auth-callback");
  };
  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{ redirect_uri: redirectUri }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
}

Auth0ProviderWithNavigate.propTypes = { children: React.ReactNode };

export default Auth0ProviderWithNavigate;
