import Home from "./pages/home";
import { AuthProvider } from "oidc-react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";

import { useEffect } from "react";
import home from "./pages/home";

export default function App() {
  // const oidcConfig = {
  //   onSignIn: (rel) => {
  //     // Redirect?
  //     console.log(rel)
  //     console.log("LOGGED IN!!")

  //   },
  //   authority: 'https://localhost:10001/',
  //   clientId: 'Onebill_App',
  //   redirectUri: 'https://localhost:4200',
  //   scope: 'AdministrationService IdentityService BillingService',
  // };

  const oidcConfig = {
    onSignIn: async (user) => {
      alert("You just signed in, congratz! Check out the console!");
      console.log(user);
      localStorage.setItem("user", JSON.stringify(user));
      window.location.hash = "";
    },
    issuer: "https://localhost:10001/",
    redirectUri: "https://localhost:4200",
    clientId: "Onebill_App",
    requireHttps: true,
    responseType: "code",
    scope: "AdministrationService IdentityService BillingService TenantService",
    authority: "https://localhost:10001/",
  };

  useEffect(() => {
    oidcConfig;
  }, []);
  return (
    <AuthProvider {...oidcConfig}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
