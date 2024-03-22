import React from "react";
import PropTypes from "prop-types";
import { AppState, Auth0Provider, User } from "@auth0/auth0-react";
import { error } from "console";

function Auth0ProviderWithNavigate({ children }) {
  const domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
  const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URL;

  if (!domain || !clientId || !redirectUri) {
    throw new Error("Unable to initiate Auth");
  }

  const onRedirectCallback = (appState?: AppState, user?: User) => {
    console.log("user", user);
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
