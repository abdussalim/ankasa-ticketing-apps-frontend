import Swal from "sweetalert2";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../../components/admin/Module/Navbar/index";
import Sidebar from "../../../components/admin/Module/Sidebar/index";
import { actionCreateDestination } from "../../../redux/actions/destination";

const AdminCreateDestination = () => {
  const [country, setCountry] = useState("");
  const [place, setPlace] = useState("");
  const [price, setPrice] = useState("");
  const [totalAirline, setTotalAirline] = useState("");
  const [image, setImage] = useState("");
  const [imagePreview, setImagePreview] = useState("");
  const [error, setError] = useState(false);
  const { createDestination } = useSelector((state) => state);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      country.length == 0 ||
      place.length == 0 ||
      price.length == 0 ||
      totalAirline.length == 0 ||
      image.length == 0
    ) {
      setError(true);
    }
    if (country && place && price && totalAirline && image) {
      const data = new FormData();
      data.append("country", country);
      data.append("place", place);
      data.append("price", price);
      data.append("totalAirline", totalAirline);
      data.append("image", image);
      e.preventDefault();
      dispatch(actionCreateDestination(data, navigate));
      Swal.fire({
        icon: "success",
        title: "Berhasil mengupload airlanes",
        text: `Destination : ${country} - ${place}`,
      });
    }
  };

  const onImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
    console.log(file);
    setImagePreview(URL.createObjectURL(file));
  };
  return (
    <div id="wrapper">
      <Sidebar activecountry="active" />
      <div id="content-wrapper" className="d-flex flex-column">
        <Navbar />
        <div className="box-header with-border mb-3 ml-3">
          <h1 className="h3 mb-2 text-gray-800">Create Country</h1>
        </div>
        <form action="" onSubmit={onSubmit}>
          <div>
            {" "}
            <div className="ml-3 mr-3 row">
              <div className="col-6 mt-2">
                <label htmlFor="text" className="form-label">
                  Country Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="country"
                  name="country"
                  onChange={(e) => setCountry(e.target.value)}
                  placeholder="Input Country Name"
                />
                {error && country.length <= 0 ? (
                  <label className="text-danger">
                    Country Name can't be Empty
                  </label>
                ) : (
                  ""
                )}
              </div>
              <div className="col-6 mt-2">
                <label htmlFor="text" className="form-label">
                  City Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="place"
                  placeholder="Input City Name"
                  onChange={(e) => setPlace(e.target.value)}
                />
                {error && place.length <= 0 ? (
                  <label className="text-danger">
                    City Name can't be Empty
                  </label>
                ) : (
                  ""
                )}
              </div>
              <div className="col-6 mt-2">
                <label htmlFor="text" className="form-label">
                  Ticket Price
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="price"
                  placeholder="Input Ticket Price"
                  onChange={(e) => setPrice(e.target.value)}
                />
                {error && price.length <= 0 ? (
                  <label className="text-danger">
                    Ticket Price can't be Empty
                  </label>
                ) : (
                  ""
                )}
              </div>
              <div className="col-6 mt-2">
                <label htmlFor="text" className="form-label">
                  Total Airline
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="total_airline"
                  placeholder="Input Total Airline"
                  onChange={(e) => setTotalAirline(e.target.value)}
                />
                {error && totalAirline.length <= 0 ? (
                  <label className="text-danger">
                    Total Airline can't be Empty
                  </label>
                ) : (
                  ""
                )}
              </div>
              <div className="col-md-6 mt-2">
                <label htmlFor="firstName" className="form-label">
                  Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => onImageUpload(e)}
                  className="form-control"
                  id="image"
                  required
                />
                {error && image.length <= 0 ? (
                  <label className="text-danger">Image can't be Empty</label>
                ) : (
                  ""
                )}
              </div>
            </div>
            <Link to="/admin/destinations">
              <button className="ml-4 mt-3 btn btn-warning" type="submit">
                Back To Country
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

export default AdminCreateDestination;
