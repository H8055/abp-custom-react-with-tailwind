import axios from "axios";
import React, { useEffect, useState } from "react";
import { AuthProvider } from "oidc-react";

import "../styles/tenants.css";
const users = () => {
  return (
    <>
      <div className="tenantMain p-4">
        <div className="tHead">
          <div className="ttext text-lg font-semibold">Users</div>
          <div className="addTenant">
            <a href="#my-modal-2" className="btn btn-outline btn-primary">
              New Users
            </a>
            <div className="modal" id="my-modal-2">
              <div className="modal-box">
                <h3 className="font-bold text-lg">New Users!</h3>
                <p className="py-4">
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      <span className="label-text">User Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="UserName"
                      className="input input-bordered input-info w-full max-w-xs"
                    />
                    <label className="label"></label>
                  </div>
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      type="password"
                      placeholder="Pwd"
                      className="input input-bordered input-info w-full max-w-xs"
                    />
                    <label className="label"></label>
                  </div>
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Name"
                      className="input input-bordered input-info w-full max-w-xs"
                    />
                    <label className="label"></label>
                  </div>
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      <span className="label-text">Surname</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Sername"
                      className="input input-bordered input-info w-full max-w-xs"
                    />
                    <label className="label"></label>
                  </div>
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      placeholder="Email"
                      className="input input-bordered input-info w-full max-w-xs"
                    />
                    <label className="label"></label>
                  </div>
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      <span className="label-text">Phone</span>
                    </label>
                    <input
                      type="number"
                      placeholder="Phone"
                      className="input input-bordered input-info w-full max-w-xs"
                    />
                    <label className="label"></label>
                  </div>
                </p>
                <div className="modal-action">
                  <a href="#" className="btn">
                    Cancel
                  </a>
                  <button href="#" className="btn">
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
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                </tr>
              </thead>
              <tbody>
                {/* <!-- row 2 --> */}

                <tr>
                  <th></th>
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
                          <button>Delete</button>
                        </li>
                        <li>
                          <button>Edit</button>
                        </li>
                      </ul>
                    </div>
                  </td>
                  <td>Purple</td>
                  <td>Purple</td>
                  <td>Purple</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default users;
