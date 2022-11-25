import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/Module/Navbar/index";
import Sidebar from "../../components/Module/Navbar/index";

const Users = () => {
  return (
    <div id="wrapper">
      <Sidebar activeusers="active" />
      <div id="content-wrapper" className="d-flex flex-column">
        <Navbar />
        <div>
          <div className="container-fluid">
            {/* Page Heading */}
            <h1 className="h3 mb-2 text-gray-800">Kelola Users</h1>
            {/* DataTales Example */}
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">
                  Data Users
                </h6>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table
                    className="table table-bordered"
                    id="dataTable"
                    width="100%"
                  >
                    <thead>
                      <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>active</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                        <td>
                          <button className="btn btn-secondary">Active</button>
                        </td>
                        <td>
                          <Link>
                            <button className="btn btn-success">
                              <span className="text">Detail</span>
                            </button>
                          </Link>
                          <button className=" btn btn-danger ml-2">
                            <span className="text">Delete</span>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="content"></div>
      </div>
    </div>
  );
};

export default Users;
