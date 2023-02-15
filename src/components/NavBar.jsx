import axios from "axios";
import React from "react";
import { UserManager } from "oidc-client-ts";

const NavBar = () => {
  const oidcConfig = {
    issuer: "https://localhost:10001/",
    client_id: "Onebill_App",
    redirectUri: "https://localhost:4200",
    response_type: "code",
    scope: "AdministrationService IdentityService BillingService TenantService",
    requireHttps: true,
    authority: "https://localhost:10001/",
  };

  const userManager = new UserManager({
    ...oidcConfig,
  });

  if (localStorage.getItem("user") != "undefined") {
    console.log("trueeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
    var localData = JSON.parse(localStorage.getItem("user"));
  } else {
    var localData = "";
  }

  // var localData = JSON.parse(localStorage.getItem("user"));

  const handleLogin = () => {
    console.log("button");
    console.log(localData);
    if (!localData) {
      axios({
        url: "https://localhost:10001/Account/Login?ReturnUrl=%2Fconnect%2Fauthorize%3Fclient_id%3DOnebill_App%26redirect_uri%3Dhttps%253A%252F%252Flocalhost%253A4200%26response_type%3Dcode%26scope%3DAdministrationService%2520IdentityService%2520BillingService%2520TenantService%26state%3D97d7d63819eb42ecab60d80bb1d21817%26code_challenge%3D8CzfGZncr7rlY7GRMX5I-umFCyZWXmjY2acSvDfSA5Y%26code_challenge_method%3DS256%26response_mode%3Dquery",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        withCredentials: true,
        data: {},
      })
        .then(function (response) {
          console.log(response.request.responseURL);
          console.log(response);
          window.location.href = response.request.responseURL + "Account/Login"; //Will take you to Google.
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      alert("Already Logged In!");
    }
  };

  const handleLogOut = () => {
    let url = "https://localhost:4200/";
    userManager.signoutRedirect();
  };

  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">One Bill</a>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control flex flex-row">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered"
            />
            <button
              className="btn btn-outline btn-success "
              onClick={() => {
                handleLogin();
              }}
            >
              Login
            </button>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <button onClick={handleLogOut}>Logout</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
