import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../../../components/admin/Module/Navbar/index";
import Sidebar from "../../../components/admin/Module/Sidebar/index";
import { actionEditDestination } from "../../../redux/actions/destination";

const Edit = () => {
  const [country, setCountry] = useState("");
  const [place, setPlace] = useState("");
  const [price, setPrice] = useState("");
  const [totalAirline, setTotalAirline] = useState("");
  const [image, setImage] = useState("");
  const [imagePreview, setImagePreview] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const { id } = useParams();

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
      dispatch(actionEditDestination(data, navigate));
      Swal.fire({
        icon: "success",
        title: "Berhasil mengupload airlanes",
        text: `Destination : ${country} - ${place}`,
      });
    }
  };
  useEffect(() => {
    getDestinationById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setImagePreview(URL.createObjectURL(file));
    console.log(URL.createObjectURL(file));
  };
  const getDestinationById = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/destination/${id}`
    );
    setImagePreview(response.data.data.image);
    // setImage(response.data.data.image)
    setCountry(response.data.data.country);
    setPlace(response.data.data.place);
    setPrice(response.data.data.price);
    setTotalAirline(response.data.data.totalAirline);
  };
  return (
    <div id="wrapper">
      <Sidebar activecountry="active" />
      <div id="content-wrapper" className="d-flex flex-column">
        <Navbar />
        <div className="box-header with-border mb-3 ml-3">
          <h1 className="h3 mb-2 text-gray-800">Edit Country</h1>
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
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
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
                  value={place}
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
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="Input Ticket Price"
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
                  id="totalAirline"
                  value={totalAirline}
                  onChange={(e) => setTotalAirline(e.target.value)}
                  placeholder="Input Total Airline"
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
                <label htmlFor="firstName" className="form-label ml-3">
                  Image
                </label>
                <br />
                <img
                  src={imagePreview}
                  alt="Bootstrap"
                  className="img-fluid mb-2"
                />
                <input
                  type="file"
                  onChange={(e) => onImageUpload(e)}
                  className="form-control"
                  id="image"
                />
              </div>
            </div>
            <Link to="/admin/destinations">
              <button className="ml-4 mt-3 btn btn-warning" type="submit">
                Back To Destination
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
