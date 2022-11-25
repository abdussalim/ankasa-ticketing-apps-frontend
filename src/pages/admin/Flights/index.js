/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
// import {
//   setFlights,
//   deleteFlights,
// } from "../../configs/redux/actions/flightsActions";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/Module/Navbar/index";
import Sidebar from "../../components/Module/Sidebar/index";

const Flights = () => {
  return (
    <>
      <div id="wrapper">
        <Sidebar activefligts="active" />
        <div id="content-wrapper" className="d-flex flex-column">
          <Navbar />
          <div>
            <div className="container-fluid">
              {/* Page Heading */}
              <h1 className="h3 mb-2 text-gray-800">Kelola Flights</h1>
              {/* DataTales Example */}
              <div className="card shadow mb-4">
                <div className="card-header py-3">
                  <h6 className="m-0 font-weight-bold text-primary">
                    Data Flights
                  </h6>
                </div>
                <Link to="/flights/create">
                  <button className="btn btn-warning ml-3 mt-2">
                    <span className="text"> + Create</span>
                  </button>
                </Link>
                <div className="card-body">
                  <div className="table-responsive">
                    <table
                      className="table table-bordered"
                      id="dataTable"
                      width="100%"
                      cellSpacing={0}
                    >
                      <thead>
                        <tr>
                          <th>No</th>
                          <th>Airlines</th>
                          <th>Departure City</th>
                          <th>Arrival city</th>
                          <th>Price</th>
                          <th>Class</th>
                          <th>Activasi</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tfoot>
                        <tr>
                          <th>No</th>
                          <th>Airlines</th>
                          <th>Departure City</th>
                          <th>Arrival city</th>
                          <th>Price</th>
                          <th>Class</th>
                          <th>Activasi</th>
                          <th>Actions</th>
                        </tr>
                      </tfoot>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Test</td>
                          <td>Test (00.00)</td>
                          <td>Test2 (01.00)</td>
                          <td>Rp 50.000</td>
                          <td>Economy</td>
                          <td>
                            <button className="btn btn-secondary">
                              Active
                            </button>
                          </td>
                          <td>
                            <Link>
                              <button className="btn btn-success">
                                <span className="text">Detail</span>
                              </button>
                            </Link>
                            <Link>
                              <button className="mr-2 ml-2 btn btn-primary">
                                <span className="text">Edit</span>
                              </button>
                            </Link>
                            <button className=" btn btn-danger">
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
    </>
  );
};

export default Flights;
