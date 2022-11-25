import Swal from "sweetalert2";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../../components/admin/Module/Navbar/index";
import Sidebar from "../../../components/admin/Module/Sidebar/index";
import { Link } from "react-router-dom";
import {
  deleteDestination,
  getDestination,
} from "../../../redux/actions/destination";

const AdminDestinations = () => {
  const dispatch = useDispatch();
  const { listDestination } = useSelector((state) => state);
  const urlParams = useParams();

  useEffect(() => {
    dispatch(getDestination());
  }, [dispatch]);

  const deleteDestinations = async (id) => {
    Swal.fire({
      title: "Are you sure to delete this airline?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteDestination(id, urlParams.id)
          .then((response) => {
            Swal.fire({
              title: "Destination successfully canceled",
              icon: "success",
            });
            dispatch(getDestination());
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
      <Sidebar activecountry="active" />
      <div id="content-wrapper" className="d-flex flex-column">
        <Navbar />
        <div>
          <div className="container-fluid">
            {/* Page Heading */}
            <h1 className="h3 mb-2 text-gray-800">Admin Destinations</h1>
            {/* DataTales Example */}
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">
                  Data Destinations
                </h6>
              </div>
              <Link to="/admin/createDestinations">
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
                        <th>Country</th>
                        <th>Popular City</th>
                        <th>Ticket Price</th>
                        <th>Total Airline</th>
                        <th>Image</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {listDestination.data.map((item, index) => (
                        <tr key={item.id}>
                          <td>{index + 1}</td>
                          <td>{item.country}</td>
                          <td>{item.place}</td>
                          <td>
                            {new Intl.NumberFormat("id-ID", {
                              style: "currency",
                              currency: "IDR",
                              minimumFractionDigits: 0,
                            }).format(item.price)}
                          </td>
                          <td>{item.total_airline}</td>
                          <td>
                            {" "}
                            <img
                              width="200"
                              height="200"
                              src={item.image}
                              alt="img"
                              crossorigin="anonymous"
                            />
                          </td>
                          <td>
                            <Link to={`/detailCountry/${item.id}`}>
                              <button className="btn btn-success">
                                <span className="text">Detail</span>
                              </button>
                            </Link>
                            <Link to={`/admin/editDestinations/${item.id}`}>
                              <button className="mr-2 ml-2 btn btn-primary">
                                <span className="text">Edit</span>
                              </button>
                            </Link>
                            <button
                              onClick={() => deleteDestinations(item.id)}
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

export default AdminDestinations;
