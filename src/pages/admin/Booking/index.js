import Swal from "sweetalert2";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../../components/admin/Module/Navbar/index";
import Sidebar from "../../../components/admin/Module/Sidebar/index";
import { Link } from "react-router-dom";
import {
  deleteTicket,
  getListBooking,
} from "../../../redux/actions/transaction";

const AdminBooking = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { listBooking } = useSelector((state) => state);
  const urlParams = useParams();

  useEffect(() => {
    dispatch(getListBooking(navigate));
  }, [dispatch, navigate]);

  const deleteBooking = async (id) => {
    Swal.fire({
      title: "Are you sure to delete this transaction?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteTicket(id, urlParams.id)
          .then((response) => {
            Swal.fire({
              title: "Transaction Deleted",
              icon: "success",
            });
            dispatch(getListBooking(navigate));
          })
          .catch((err) => {
            Swal.fire({
              title: "Delete failed",
              icon: "error",
            });
          });
      }
    });
  };
  return (
    <div id="wrapper">
      <Sidebar activebooking="active" />
      <div id="content-wrapper" className="d-flex flex-column">
        <Navbar />
        <div>
          <div className="container-fluid">
            {/* Page Heading */}
            <h1 className="h3 mb-2 text-gray-800">Admin Booking</h1>
            {/* DataTales Example */}
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">
                  Data Booking
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
                        <th>Passenger Name</th>
                        <th>Passenger Seat</th>
                        <th>Ticket Price</th>
                        <th>Total Order</th>
                        <th>Total Payment</th>
                        <th>Payment Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {listBooking.data.map((item, index) => (
                        <tr key={item.id}>
                          <td>{index + 1}</td>
                          <td>{item.passenger_name}</td>
                          <td>{item.seat}</td>
                          <td>
                            {new Intl.NumberFormat("id-ID", {
                              style: "currency",
                              currency: "IDR",
                              minimumFractionDigits: 0,
                            }).format(item.price)}
                          </td>
                          <td>{item.total_order}</td>
                          <td>
                            {new Intl.NumberFormat("id-ID", {
                              style: "currency",
                              currency: "IDR",
                              minimumFractionDigits: 0,
                            }).format(item.total_order * item.price)}
                          </td>
                          <td>{item.is_paid}</td>
                          <td>
                            <Link to={`/admin/detailBooking/${item.id}`}>
                              <button className="btn btn-success">
                                <span className="text">Detail</span>
                              </button>
                            </Link>
                            <Link to={`/editBooking/${item.id}`}>
                              <button className="mr-2 ml-2 btn btn-primary">
                                <span className="text">Edit</span>
                              </button>
                            </Link>
                            <button
                              onClick={() => deleteBooking(item.id)}
                              className=" btn btn-danger"
                            >
                              <span className="text">Delete</span>
                            </button>
                          </td>
                        </tr>
                      ))}
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

export default AdminBooking;
