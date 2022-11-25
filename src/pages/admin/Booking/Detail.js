import React, { useEffect } from "react";
import moment from "moment";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../../components/admin/Module/Navbar/index";
import Sidebar from "../../../components/admin/Module/Sidebar/index";
import { getBookingDetails } from "../../../redux/actions/transaction";

const AdminDetailBooking = () => {
  const dispatch = useDispatch();
  const urlParams = useParams();
  const navigate = useNavigate();

  const detailBooking = useSelector((state) => {
    return state.detailBooking;
  });

  useEffect(() => {
    dispatch(getBookingDetails(urlParams.id, navigate));
  }, [dispatch]);
  return (
    <div id="wrapper">
      <Sidebar activebooking="active" />
      <div id="content-wrapper" className="d-flex flex-column">
        <Navbar />
        <div className="box-header with-border mb-3 ml-3">
          <h1 className="h3 mb-2 text-gray-800">
            Detail Booking {detailBooking.data.passenger_name}
          </h1>
        </div>
        <div className="box-header with-border mb-3 ml-3">
          <Link to="/admin/booking/">
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
                      <td width="30%" className="text-primary">
                        <h6 className="text-primary">Passenger Name</h6>
                      </td>
                      <td width="5%">:</td>
                      <td>{detailBooking.data.passenger_name}</td>
                    </tr>
                    <tr>
                      <td width="30%" className="text-primary">
                        <h6 className="text-primary">Passenger Seat</h6>
                      </td>
                      <td width="5%">:</td>
                      <td>{detailBooking.data.seat}</td>
                    </tr>
                    <tr>
                      <td classname="text-primary">
                        {" "}
                        <h6 className="text-primary">Airline</h6>
                      </td>
                      <td>:</td>
                      <td>{detailBooking.data.airline}</td>
                    </tr>
                    <tr>
                      <td classname="text-primary">
                        {" "}
                        <h6 className="text-primary">Departure</h6>
                      </td>
                      <td>:</td>
                      <td>{detailBooking.data.origin}</td>
                    </tr>
                    <tr>
                      <td classname="text-primary">
                        {" "}
                        <h6 className="text-primary">Arrival</h6>
                      </td>
                      <td>:</td>
                      <td>{detailBooking.data.destination}</td>
                    </tr>
                    <tr>
                      <td classname="text-primary">
                        {" "}
                        <h6 className="text-primary">Terminal</h6>
                      </td>
                      <td>:</td>
                      <td>{detailBooking.data.terminal}</td>
                    </tr>
                    <tr>
                      <td classname="text-primary">
                        {" "}
                        <h6 className="text-primary">Gate</h6>
                      </td>
                      <td>:</td>
                      <td>{detailBooking.data.gate}</td>
                    </tr>
                    <tr>
                      <td classname="text-primary">
                        {" "}
                        <h6 className="text-primary">Flight Date</h6>
                      </td>
                      <td>:</td>
                      <td>
                        {moment(detailBooking.data.flight_date).format("ll")} -{" "}
                        {moment(detailBooking.data.flight_date).format("LT")}
                      </td>
                    </tr>
                    <tr>
                      <td classname="text-primary">
                        {" "}
                        <h6 className="text-primary">Type</h6>
                      </td>
                      <td>:</td>
                      <td>{detailBooking.data.type}</td>
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
                        <h6 className="text-primary">Ticket Price</h6>
                      </td>
                      <td>:</td>
                      <td>
                        {new Intl.NumberFormat("id-ID", {
                          style: "currency",
                          currency: "IDR",
                          minimumFractionDigits: 0,
                        }).format(detailBooking.data.price)}
                      </td>
                    </tr>
                    <tr>
                      <td classname="text-primary">
                        {" "}
                        <h6 className="text-primary">Total Order</h6>
                      </td>
                      <td>:</td>
                      <td>{detailBooking.data.total_order}</td>
                    </tr>
                    <tr>
                      <td classname="text-primary">
                        {" "}
                        <h6 className="text-primary">Total Payment</h6>
                      </td>
                      <td>:</td>
                      <td>
                        {new Intl.NumberFormat("id-ID", {
                          style: "currency",
                          currency: "IDR",
                          minimumFractionDigits: 0,
                        }).format(
                          detailBooking.data.total_order *
                            detailBooking.data.price
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td classname="text-primary">
                        {" "}
                        <h6 className="text-primary">Payment Status</h6>
                      </td>
                      <td>:</td>
                      <td>{detailBooking.data.is_paid}</td>
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

export default AdminDetailBooking;
