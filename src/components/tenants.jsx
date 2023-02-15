import axios from "axios";
import React, { useEffect, useState } from "react";
import { AuthProvider } from "oidc-react";

import "../styles/tenants.css";
const tenants = () => {
  // var localData = JSON.parse(localStorage.getItem("user"));
  if (localStorage.getItem("user") != "undefined") {
    console.log("trueeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
    var localData = JSON.parse(localStorage.getItem("user"));
  } else {
    var localData = "";
  }
  const [inputData, setinputData] = useState({
    name: "",
    email: "",
    pwd: "",
  });
  const [tenants, settenants] = useState("");
  const handleInput = (e) => {
    setinputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    console.log(inputData);
    // console.log(AuthProvider.getAccessToken());
    console.log(localData.access_token);

    // axios({
    //   method: "GET",
    //   url: "https://cat-fact.herokuapp.com/facts",
    // }).then((data) => {
    //   console.log(data);
    // });

    axios({
      url: "https://localhost:10004/api/multi-tenancy/tenants",
      method: "POST",
      headers: {
        Authorization: "Bearer " + localData.access_token,
      },
      data: {
        name: inputData.name,
        adminEmailAddress: inputData.email,
        adminPassword: inputData.pwd,
      },
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleDelete = (e) => {
    let value = e.target.getAttribute("date-key");
    console.log(value);
    axios({
      url: `https://localhost:10004/api/multi-tenancy/tenants/${value}`,
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + localData.access_token,
      },
      data: {},
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    console.log(localData);
    axios({
      url: "https://localhost:10004/api/multi-tenancy/tenants",
      method: "GET",
      headers: {
        Authorization: "Bearer " + localData.access_token,
      },
      data: {},
    })
      .then(function (response) {
        console.log(response.data.items);
        settenants(response.data.items);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <>
      <div className="tenantMain p-4">
        <div className="tHead">
          <div className="ttext text-lg font-semibold">Tenant</div>
          <div className="addTenant">
            <a href="#my-modal-2" className="btn btn-outline btn-primary">
              New Tenants
            </a>
            <div className="modal" id="my-modal-2">
              <div className="modal-box">
                <h3 className="font-bold text-lg">New Tenants!</h3>
                <p className="py-4">
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      <span className="label-text">Tenant Name</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      onChange={handleInput}
                      value={inputData.name}
                      placeholder="Name"
                      className="input input-bordered input-info w-full max-w-xs"
                    />
                    <label className="label"></label>
                  </div>
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="text"
                      name="email"
                      onChange={handleInput}
                      value={inputData.email}
                      placeholder="Email"
                      className="input input-bordered input-info w-full max-w-xs"
                    />
                    <label className="label"></label>
                  </div>
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      type="text"
                      name="pwd"
                      onChange={handleInput}
                      value={inputData.pwd}
                      placeholder="Password"
                      className="input input-bordered input-info w-full max-w-xs"
                    />
                    <label className="label"></label>
                  </div>
                </p>
                <div className="modal-action">
                  <a href="#" className="btn">
                    Cancel
                  </a>
                  <button onClick={handleSave} href="#" className="btn">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ttable mt-7">
          <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
              {/* <!-- head --> */}
              <thead>
                <tr>
                  <th></th>
                  <th>Action</th>
                  <th>Tenant Name</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {/* <!-- row 2 --> */}
                {tenants &&
                  tenants.map((item, i) => {
                    return (
                      <>
                        <tr>
                          <th>{i + 1}</th>
                          <td>
                            <div className="dropdown">
                              <label tabIndex={0} className="btn m-1">
                                Action
                              </label>
                              <ul
                                tabIndex={0}
                                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                              >
                                <li>
                                  <button
                                    date-key={item.id}
                                    onClick={handleDelete}
                                  >
                                    Delete
                                  </button>
                                </li>
                                <li>
                                  <button date-key={item.id}>Edit</button>
                                </li>
                              </ul>
                            </div>
                          </td>
                          <td>{item.name}</td>
                          <td>Purple</td>
                        </tr>
                      </>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default tenants;
