/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Title from "../../components/Base/Title-page";
import Navbar from "../../components/Module/Navbar/index";
import Sidebar from "../../components/Module/Sidebar/index";

const Detail = () => {
  const token = localStorage.getItem("token");
  const { id } = useParams();
  const [form, setForm] = useState({
    name: "",
    email: "",
    photo: "",
    phone: "",
    city: "",
    address: "",
    postal_code: "",
    level: "",
    create_date: "",
  });
  // };
  const images =
    "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Kurt&hairColor=BlondeGolden&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Pale";
  useEffect(() => {
    getUserByID();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getUserByID = async () => {
    const response = await axios.get(`http://localhost:6969/user/${id}`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    setForm(response.data.data[0]);
    // setImagePreview(response.data.data.image);
  };
  return (
    <div id="wrapper">
      <Sidebar activeusers="active" />
      <div id="content-wrapper" className="d-flex flex-column">
        <Navbar />
        {/* <Title title="Detail User" subTitle={form.name} /> */}
        <Title title="Detail User" subTitle={form.name} />
        <div className="box-header with-border mb-3 ml-3">
          <Link to="/users">
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
                      <td>{form.name}</td>
                      {/* <td>Nama Pengguna</td> */}
                    </tr>
                    <tr>
                      <td classname="text-primary">
                        {" "}
                        <h6 className="text-primary">Email</h6>
                      </td>
                      <td>:</td>
                      <td>{form.email}</td>
                    </tr>
                    <tr>
                      <td classname="text-primary">
                        {" "}
                        <h6 className="text-primary">No HP</h6>
                      </td>
                      <td>:</td>
                      <td>{form.phone}</td>
                    </tr>
                    <tr>
                      <td classname="text-primary">
                        {" "}
                        <h6 className="text-primary">City</h6>
                      </td>
                      <td>:</td>
                      <td>{form.city}</td>
                    </tr>
                    <tr>
                      <td classname="text-primary">
                        {" "}
                        <h6 className="text-primary">Address</h6>
                      </td>
                      <td>:</td>
                      <td>{form.address}</td>
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
                        <h6 className="text-primary">Post Code</h6>
                      </td>
                      <td>:</td>
                      <td>{form.postal_code}</td>
                    </tr>
                    <tr>
                      <td classname="text-primary">
                        {" "}
                        <h6 className="text-primary">Photo Profil</h6>
                      </td>
                      <td>:</td>
                      <td>
                        <img
                          width="150px"
                          src={form.photo ? form.photo : images}
                          alt="img"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td classname="text-primary">
                        {" "}
                        <h6 className="text-primary">Active</h6>
                      </td>
                      <td>:</td>
                      <td>{form.is_active ? "active" : "non active"}</td>
                    </tr>
                    <tr>
                      <td classname="text-primary">
                        {" "}
                        <h6 className="text-primary">Level</h6>
                      </td>
                      <td>:</td>
                      <td>{form.level}</td>
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
