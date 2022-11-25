import axios from "axios";
import Swal from "sweetalert2";
import {
  GET_DESTINATION_PENDING,
  GET_DESTINATION_SUCCESS,
  GET_DESTINATION_FAILED,
  CREATE_DESTINATION_SUCCESS,
  CREATE_DESTINATION_FAILED,
  EDIT_DESTINATION_SUCCESS,
  EDIT_DESTINATION_FAILED,
  GET_OLDDESTINATION_FAILED,
  GET_OLDDESTINATION_SUCCESS,
  GET_OLDDESTINATION_PENDING,
} from "./types";

export const getDestination = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_DESTINATION_PENDING,
      payload: null,
    });

    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/destination`
      // { withCredentials: true }
    );

    dispatch({
      type: GET_DESTINATION_SUCCESS,
      payload: res.data.data,
    });
  } catch (error) {
    dispatch({
      type: GET_DESTINATION_FAILED,
      payload: error.message,
    });
  }
};

export const getOldDestination = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_OLDDESTINATION_PENDING,
      payload: null,
    });

    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/destination?sortType=ASC&limit=10`
      // { withCredentials: true }
    );

    dispatch({
      type: GET_OLDDESTINATION_SUCCESS,
      payload: res.data.data,
    });
  } catch (error) {
    dispatch({
      type: GET_OLDDESTINATION_FAILED,
      payload: error.message,
    });
  }
};

export const actionCreateDestination = (data, navigate) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");

    dispatch({ type: GET_DESTINATION_PENDING });
    const res = await axios.post(
      ` ${process.env.REACT_APP_API_URL}/destination`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        // withCredentials: true,
      },
      {
        "content-type": "multipart/form-data",
      }
    );
    navigate("/admin/destinations");
    dispatch({ type: CREATE_DESTINATION_SUCCESS, payload: res });
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
    });
    dispatch({ type: CREATE_DESTINATION_FAILED, payload: error.response });
  }
};

export const actionEditDestination =
  (id, data, navigate) => async (dispatch) => {
    try {
      const token = localStorage.getItem("token");

      dispatch({ type: GET_DESTINATION_PENDING });
      const res = await axios.put(
        ` ${process.env.REACT_APP_API_URL}/destination/${id}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          // withCredentials: true,
        },
        {
          "content-type": "multipart/form-data",
        }
      );
      navigate("/admin/destinations");
      dispatch({ type: EDIT_DESTINATION_SUCCESS, payload: res });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
      });
      dispatch({ type: EDIT_DESTINATION_FAILED, payload: error.response });
    }
  };

export const deleteDestination = (id) => {
  return new Promise((resolve, reject) => {
    axios
      .delete(`${process.env.REACT_APP_API_URL}/destination/${id}`)
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
