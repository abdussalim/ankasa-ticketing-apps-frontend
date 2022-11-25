/* eslint-disable no-unused-vars */
import axios from "axios";
import Swal from "sweetalert2";
import React, { useState, useEffect } from "react";
import Title from "../../components/Base/Title-page";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/Module/Navbar/index";
import Sidebar from "../../components/Module/Sidebar/index";
import { Link, useNavigate, useParams } from "react-router-dom";
// import { setAirlanes } from "../../configs/redux/actions/airlanesActions";
// import { updateFlights } from "../../configs/redux/actions/flightsActions";
// import { setDestinations } from "../../configs/redux/actions/destinationsActions";

const Edit = () => {
  return (
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <Navbar />
        <Title title="Edit Flights" />
        <form action="">
          <div className="mb-5">
            {" "}
            <div className="ml-3 mr-3 row">
              <div class="col-12 mt-3">
                <label class="mr-sm-2" for="inlineFormCustomSelect">
                  Airlanes
                </label>
                <select
                  name="airline_id"
                  value="1"
                  class="custom-select mr-sm-2"
                  id="inlineFormCustomSelect"
                >
                  <option selected disabled>
                    Airlanes
                  </option>
                  <option value="Test" selected>
                    Test - (Active)
                  </option>
                </select>
              </div>
              <div class="col-6 mt-3">
                <label class="mr-sm-2" for="inlineFormCustomSelect">
                  Departure city
                </label>
                <select
                  name="origin_city"
                  value="testing"
                  class="custom-select mr-sm-2"
                  id="inlineFormCustomSelect"
                  required
                >
                  <option selected disabled>
                    -- Departure city --
                  </option>
                  <option value="testing">testing</option>
                </select>
              </div>
              <div class="col-6 mt-3">
                <label class="mr-sm-2" for="inlineFormCustomSelect">
                  Arrival city
                </label>
                <select
                  name="destination_city"
                  value="testing"
                  class="custom-select mr-sm-2"
                  id="inlineFormCustomSelect"
                  required
                >
                  <option selected disabled>
                    --Arrival City--
                  </option>
                  <option value="testing">Testing</option>
                </select>
              </div>
              <div className="col-md-4 mt-2">
                <label htmlFor="startDate" className="form-label">
                  Departure time
                </label>
                <input
                  value="testing"
                  name="departure_time"
                  id="startDate"
                  class="form-control"
                  type="time"
                  className="form-control"
                  placeholder
                  required
                />
              </div>
              <div className="col-md-4 mt-2">
                <label htmlFor="startDate" className="form-label">
                  Arrival time
                </label>
                <input
                  value="testing"
                  id="startDate"
                  name="arrival_time"
                  class="form-control"
                  type="time"
                  className="form-control"
                  placeholder
                  required
                />
              </div>
              <div className="col-md-4 mt-2">
                <label htmlFor="startDate" className="form-label">
                  Depature date
                </label>
                <input
                  value="testing"
                  id="startDate"
                  name="departure_date"
                  class="form-control"
                  type="date"
                  className="form-control"
                  placeholder
                  required
                />
              </div>

              <div className="col-md-3 mt-2">
                <label
                  htmlFor="firstName"
                  className="form-label"
                  id="inlineFormCustomSelect"
                >
                  Lugage
                </label>
                <select
                  value="Testing"
                  name="lugage"
                  class="custom-select mr-sm-2"
                  id="inlineFormCustomSelect"
                  required
                >
                  <option value="1">Active</option>
                  <option value="0">No Active</option>
                </select>
              </div>
              <div className="col-md-3 mt-2">
                <label
                  htmlFor="lastName"
                  className="form-label"
                  id="inlineFormCustomSelect"
                >
                  Wifi
                </label>
                <select
                  value="testing"
                  name="wifi"
                  class="custom-select mr-sm-2"
                  id="inlineFormCustomSelect"
                  required
                >
                  <option value="1">Active</option>
                  <option value="0">Non Active</option>
                </select>
              </div>
              <div className="col-md-3 mt-2">
                <label htmlFor="firstName" className="form-label">
                  Transit
                </label>
                <select
                  value="testing"
                  name="transit"
                  class="custom-select mr-sm-2"
                  id="inlineFormCustomSelect"
                  required
                >
                  <option value="1">Active</option>
                  <option value="0">Non Active</option>
                </select>
              </div>
              <div className="col-md-3 mt-2">
                <label
                  htmlFor="firstName"
                  id="inlineFormCustomSelect"
                  className="form-label"
                >
                  Meal
                </label>
                <select
                  value="testing"
                  name="meal"
                  class="custom-select mr-sm-2"
                  id="inlineFormCustomSelect"
                  required
                >
                  <option value="1">Active</option>
                  <option value="0">Non Active</option>
                </select>
              </div>

              <div className="col-md-3 mt-2">
                <label htmlFor="firstName" className="form-label">
                  Code
                </label>
                <input
                  type="text"
                  name="code"
                  value="testing"
                  className="form-control"
                  id="firstName"
                  placeholder
                  required
                />
              </div>
              <div className="col-md-3 mt-2">
                <label htmlFor="firstName" className="form-label">
                  Class
                </label>
                <input
                  value="testing"
                  name="classf"
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder
                  required
                />
              </div>
              <div className="col-md-3 mt-2">
                <label htmlFor="lastName" className="form-label">
                  Stock
                </label>
                <input
                  value="testing"
                  name="stock"
                  type="number"
                  className="form-control"
                  id="lastName"
                  placeholder
                  required
                />
              </div>
              <div className="col-md-3 mt-2">
                <label htmlFor="lastName" className="form-label">
                  Price
                </label>
                <input
                  type="number"
                  name="price"
                  value="testing"
                  className="form-control"
                  id="lastName"
                  placeholder
                  required
                />
              </div>
              <div className="col-md-6 mt-2">
                <label
                  htmlFor="firstName"
                  id="inlineFormCustomSelect"
                  className="form-label"
                >
                  Gate
                </label>
                <select
                  value="testing"
                  name="gate"
                  class="custom-select mr-sm-2"
                  id="inlineFormCustomSelect"
                  required
                >
                  <option value="1">Active</option>
                  <option value="0">Non Active</option>
                </select>
              </div>
              <div className="col-6 mt-2">
                <label htmlFor="address" className="form-label">
                  Terminal
                </label>
                <input
                  type="text"
                  name="terminal"
                  className="form-control"
                  id="address"
                  value="testing"
                  placeholder="Juanda"
                  required
                />
              </div>
            </div>
            <Link to="/flights">
              <button className="ml-4 mt-3 btn btn-warning" type="submit">
                Back To Flights
              </button>
            </Link>
            <button className="ml-4 mt-3 btn btn-primary" type="submit">
              Submit
            </button>
          </div>
        </form>
        <div id="content"></div>
      </div>
    </div>
  );
};

export default Edit;
