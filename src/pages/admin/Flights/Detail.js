import moment from "moment";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/Module/Navbar/index";
import Sidebar from "../../components/Module/Sidebar/index";
// import { flightsDetailActions } from "../../configs/redux/actions/flightsDetailActions";

const Detail = () => {
  return (
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <Navbar />
        <div>
          <div className="box-header with-border mb-3 ml-3">
            <h1 classname="h3 mb-2 text-gray-800">Detail Flights</h1>
          </div>
          <div className="box-header with-border mb-3 ml-3">
            <Link to="/flights">
              <a href=" " className="btn btn-success">
                Kembali
              </a>
            </Link>
          </div>
          <div className="ml-1 row">
            <div className="col-md-6">
              <div className="box">
                <div className="box-body">
                  <table className="table table-bordered">
                    <tbody>
                      <tr>
                        <td width="30%" classname="text-primary">
                          <h6 className="text-primary">Airlines</h6>
                        </td>
                        <td width="5%">:</td>
                        <td>Test</td>
                      </tr>
                      <tr>
                        <td classname="text-primary">
                          {" "}
                          <h6 className="text-primary">Departure city</h6>
                        </td>
                        <td>:</td>
                        <td>Test</td>
                      </tr>
                      <tr>
                        <td classname="text-primary">
                          <h6 className="text-primary">Arival city</h6>
                        </td>
                        <td>:</td>
                        <td>Test</td>
                      </tr>
                      <tr>
                        <td classname="text-primary">
                          {" "}
                          <h6 className="text-primary">Departure time</h6>
                        </td>
                        <td>:</td>
                        <td>01.00</td>
                      </tr>
                      <tr>
                        <td classname="text-primary">
                          <h6 className="text-primary">Arrival time</h6>
                        </td>
                        <td>:</td>
                        <td>02.00</td>
                      </tr>
                      <tr>
                        <td classname="text-primary">
                          <h6 className="text-primary">Departure date</h6>
                        </td>
                        <td>:</td>
                        <td>22-10-2022</td>
                      </tr>
                      <tr>
                        <td classname="text-primary">
                          {" "}
                          <h6 className="text-primary">Code</h6>
                        </td>
                        <td>:</td>
                        <td>10101010</td>
                      </tr>
                      <tr>
                        <td classname="text-primary">
                          {" "}
                          <h6 className="text-primary">Active</h6>
                        </td>
                        <td>:</td>
                        <td>Active</td>
                      </tr>
                      <tr>
                        <td classname="text-primary">
                          {" "}
                          <h6 className="text-primary">Stock</h6>
                        </td>
                        <td>:</td>
                        <td>10</td>
                      </tr>
                      <tr>
                        <td classname="text-primary">
                          {" "}
                          <h6 className="text-primary">Price</h6>
                        </td>
                        <td>:</td>
                        <td> Rp 50.000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="box">
                <div className="box-header with-border " />
                <div className="box-body">
                  <table className="table table-bordered">
                    <tbody>
                      <tr>
                        <td width="30%">
                          <h6 className="text-primary"> Wifi</h6>
                        </td>
                        <td width="5%">:</td>
                        <td>Ready</td>
                      </tr>
                      <tr>
                        <td>
                          <h6 className="text-primary"> Lugage</h6>
                        </td>
                        <td>:</td>
                        <td>Ready</td>
                      </tr>
                      <tr>
                        <td classname="text-primary">
                          <h6 className="text-primary"> Meal</h6>
                        </td>
                        <td>:</td>
                        <td>Ready</td>
                      </tr>
                      <tr>
                        <td classname="text-primary">
                          <h6 className="text-primary"> Transit</h6>
                        </td>
                        <td>:</td>
                        <td>Ready</td>
                      </tr>
                      <tr>
                        <td classname="text-primary">
                          <h6 className="text-primary"> Gate</h6>
                        </td>
                        <td>:</td>
                        <td>Ready</td>
                      </tr>
                      <tr>
                        <td classname="text-primary">
                          {" "}
                          <h6 className="text-primary"> Terminal</h6>
                        </td>
                        <td>:</td>
                        <td>10</td>
                      </tr>
                      <tr>
                        <td classname="text-primary">
                          {" "}
                          <h6 className="text-primary"> Class</h6>
                        </td>
                        <td>:</td>
                        <td>Economy</td>
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

export default Detail;
