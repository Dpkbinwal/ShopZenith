import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { Auth0Provider } from '@auth0/auth0-react';
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<Auth0Provider
    domain="dev-gmtsv6zatge5naz4.us.auth0.com"
    clientId="azyVjhiqSO7kpgr24MEI4IdEXkCPYdZp"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
);
