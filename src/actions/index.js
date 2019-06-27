import {
  ADD_POST,
  DELETE_POST,
  FETCH_POST,
  FETCH_MEETUP,
  LOGIN,
  REGISTER,
  VIEW_MEETUP
} from "./types";

import Swal from "sweetalert2";
import { dispatch } from "rxjs/internal/observable/pairs";
import { post, get, destroy } from "../helpers/helper";
const apiUrl = "https://bencyn-questioner.herokuapp.com/api/v2";

//  View Meetups Action Logic
export const login = (data, history) => dispatch =>
  post(apiUrl + "/auth/login", { ...data })
    .then(response => {
      dispatch(loginSuccess(response));
      localStorage.setItem("authenticated", true);
      Swal.fire("", response.data.message, "success");
      history.push("/");
    })
    .catch(error => {
      Swal.fire("Oops...", error.response.data.error, "error");
    });

export const register = (data, history) => {
  let notification = document.getElementById("notification");
  let submit = document.getElementById("submit");
  return dispatch =>
    post(apiUrl + "/auth/signup", { ...data })
      .then(response => {
        dispatch(registerSuccess(response.data));
        sessionStorage.setItem(
          "success",
          "!! you have successfully created an account, login to continue !!"
        );
        history.push("/login");
      })
      .catch(error => {
        notification.style.display = "block";
        notification.innerHTML = `${error.response.data.error}`;
        submit.innerHTML = "Register";
        submit.removeAttribute("disabled", "disabled");
        Swal.fire("Oops...", error.response.data.error, "error");
      });
};

export const getMeetup = (id, history) => dispatch =>
  get(apiUrl + "/meetups/" + id)
    .then(response => {
      dispatch(viewMeetup(response));
      history.push("/meetup");
    })
    .catch(error => {
      throw error;
    });

export const viewMeetup = meetup => {
  return {
    type: VIEW_MEETUP,
    meetup: meetup.data
  };
};

export const registerSuccess = data => {
  return {
    type: REGISTER,
    payload: {
      firstname: data.firstname,
      lastname: data.lastname,
      othername: data.othername,
      phone_number: data.phone_number,
      username: data.username,
      email: data.email,
      password: data.password,
      confirm_password: data.confirm_password
    }
  };
};

export const loginSuccess = data => {
  return {
    type: LOGIN,
    payload: {
      token: data.data.data[0].token,
      authenticated: true
    }
  };
};

export const deletePostSuccess = id => {
  return {
    type: DELETE_POST,
    payload: {
      id
    }
  };
};

export const deletePost = id => dispatch =>
  destroy(apiUrl + "/" + id)
    .then(response => {
      dispatch(deletePostSuccess(response.data));
    })
    .catch(error => {
      throw error;
    });

export const fetchMeetups = meetups => {
  return {
    type: FETCH_MEETUP,
    meetups: meetups.data.meetup
  };
};

export const fetchAllMeetups = () => dispatch =>
  get(apiUrl + "/meetups/upcoming/")
    .then(response => {
      dispatch(fetchMeetups(response));
    })
    .catch(error => {
      throw error;
    });
