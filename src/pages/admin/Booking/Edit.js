import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../../../components/admin/Module/Navbar/index";
import Sidebar from "../../../components/admin/Module/Sidebar/index";
import { editAirlines } from "../../../redux/actions/airline";

const AdminEditBooking = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [pilot, setPilot] = useState("");
  const [phone, setPhone] = useState("");
  const [imagePreview, setImagePreview] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const { id } = useParams();

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      image.length == 0 ||
      name.length == 0 ||
      pilot.length == 0 ||
      phone.length == 0
    ) {
      setError(true);
    }
    if (name && image && pilot && phone) {
      const data = new FormData();
      data.append("name", name);
      data.append("pic", pilot);
      data.append("phone", phone);
      data.append("image", image);
      e.preventDefault();
      dispatch(editAirlines(id, data, navigate));
      Swal.fire({
        icon: "success",
        title: "Berhasil mengupdate airlines",
        text: `airlines : ${name}`,
      });
    }
  };
  useEffect(() => {
    getAirlineById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const getAirlineById = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/airlines/${id}`
    );
    setImagePreview(response.data.data.image);
    // setImage(response.data.data.image)
    setName(response.data.data.name);
    setPilot(response.data.data.pic);
    setPhone(response.data.data.phone);
  };
  return (
    <div id="wrapper">
      <Sidebar activebooking="active" />
      <div id="content-wrapper" className="d-flex flex-column">
        <Navbar />
        <div className="box-header with-border mb-3 ml-3">
          <h1 className="h3 mb-2 text-gray-800">Edit Booking</h1>
        </div>
        <form action="">
          <div>
            {" "}
            <div className="ml-3 mr-3 row">
              <div className="col-6 mt-2">
                <label htmlFor="text" className="form-label">
                  Name
                </label>
                <Input
                  type="text"
                  className="form-control"
                  id="text"
                  value="test"
                />
              </div>
              <div className="col-6 mt-2">
                <label className="mr-sm-2" htmlFor="inlineFormCustomSelect">
                  Payment Status
                </label>
                <select
                  name="success"
                  className="custom-select mr-sm-2"
                  id="inlineFormCustomSelect"
                  value="success"
                >
                  <option value="0">PENDING</option>
                  <option value="1">SUCCESS</option>
                </select>
              </div>
              <div className="col-md-6 mt-2">
                <label htmlFor="image" className="form-label">
                  Title
                </label>
                <br />
                <Input
                  type="text"
                  className="form-control"
                  id="text"
                  value="test"
                />
              </div>
              <div className="col-md-6 mt-2">
                <label htmlFor="image" className="form-label">
                  Insurance
                </label>
                <br />
                <Input
                  type="text"
                  className="form-control"
                  id="text"
                  value="test"
                  placeholder="insurance"
                />
              </div>
              <div className="col-md-6 mt-2">
                <label htmlFor="image" className="form-label">
                  Nationality
                </label>
                <br />
                <Input
                  type="text"
                  className="form-control"
                  id="text"
                  value="test"
                />
              </div>
              <div className="col-md-6 mt-2">
                <label htmlFor="image" className="form-label">
                  Total payment
                </label>
                <br />
                <Input
                  type="text"
                  className="form-control"
                  id="text"
                  value="Rp 100.000"
                />
              </div>
            </div>
            <Link to="/booking">
              <Button
                title="Back To booking"
                className="ml-4 mt-3 btn btn-warning"
              />
            </Link>
            <Button title="Submit" className="ml-4 mt-3 btn btn-primary" />
          </div>
        </form>
        <div id="content"></div>
      </div>
    </div>
  );
};

export default Edit;
