import React from "react";
import { AppState, Auth0Provider, User } from "@auth0/auth0-react";
import { error } from "console";
import { useCreateUser } from "@/Api/CreateUserApi";

function Auth0ProviderWithNavigate({ children }) {
  const { createUser } = useCreateUser();

  const domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
  const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URL;

  if (!domain || !clientId || !redirectUri) {
    throw new Error("Unable to initiate Auth");
  }

  const onRedirectCallback = (appState?: AppState, user?: User) => {
    console.log("user", user);
    if (user?.sub && user?.email) {
      createUser({ auth0id: user.sub, email: user.email });
    }
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
