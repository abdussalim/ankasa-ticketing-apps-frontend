/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Title from "../../components/Base/Title-page";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/Module/Navbar/index";
import Sidebar from "../../components/Module/Sidebar/index";
// import { destinationsDetailActions } from "../../configs/redux/actions/destinationsDetailActions";

const Detail = () => {
  return (
    <div id="wrapper">
      <Sidebar activedestinations="active" />
      <div id="content-wrapper" className="d-flex flex-column">
        <Navbar />
        <Title title="Detail Destination" />
        <div className="box-header with-border mb-3 ml-3">
          <Link to="/destinations">
            <a href="" className="btn btn-success">
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
                        <h6 className="text-primary">Name</h6>
                      </td>
                      <td width="5%">:</td>
                      <td>Test</td>
                    </tr>
                    <tr>
                      <td classname="text-primary">
                        {" "}
                        <h6 className="text-primary">Alias</h6>
                      </td>
                      <td>:</td>
                      <td>Test</td>
                    </tr>
                    <tr>
                      <td classname="text-primary">
                        {" "}
                        <h6 className="text-primary">City Name</h6>
                      </td>
                      <td>:</td>
                      <td>Test</td>
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
                      <td classname="text-primary">
                        {" "}
                        <h6 className="text-primary">Image</h6>
                      </td>
                      <td>:</td>
                      <td>
                        <img width="150px" src="" alt="img" />
                      </td>
                    </tr>
                  </tbody>
                </table>
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
