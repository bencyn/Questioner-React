import {
  ADD_POST,
  DELETE_POST,
  FETCH_POST,
  FETCH_MEETUP,
  LOGIN,
  REGISTER
} from "./types";
import axios from "axios";
import Swal from "sweetalert2";

const apiUrl = "https://bencyn-questioner.herokuapp.com/api/v2";

export const createPost = ({ title, body }) => {
  return dispatch => {
    return axios
      .post(`${apiUrl}`, { title, body })
      .then(response => {
        dispatch(createPostSuccess(response.data));
      })
      .catch(error => {
        throw error;
      });
  };
};

export const login = (data, history) => {
  return dispatch => {
    return axios
      .post(apiUrl + "/auth/login", { ...data })
      .then(response => {
        dispatch(loginSuccess(response.data));
        localStorage.setItem("authenticated", true);
        Swal.fire("", response.data.message, "success");
        history.push("/");
      })
      .catch(error => {
        Swal.fire("Oops...", error.response.data.error, "error");
      });
  };
};

export const register = (data, history) => {
  var notification = document.getElementById("notification");
  var submit = document.getElementById("submit");
  return dispatch => {
    return axios
      .post(apiUrl + "/auth/signup", { ...data })
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

export const createPostSuccess = data => {
  return {
    type: ADD_POST,
    payload: {
      id: data.id,
      title: data.title,
      body: data.body,
      userId: data.userId
    }
  };
};

export const loginSuccess = data => {
  return {
    type: LOGIN,
    payload: {
      username: data.username,
      password: data.password,
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

export const deletePost = id => {
  return dispatch => {
    return axios
      .delete(`${apiUrl}/${id}`)
      .then(response => {
        dispatch(deletePostSuccess(response.data));
      })
      .catch(error => {
        throw error;
      });
  };
};
export const fetchPosts = posts => {
  return {
    type: FETCH_POST,
    posts
  };
};

export const fetchMeetups = meetups => {
  return {
    type: FETCH_MEETUP,
    meetups
  };
};

export const fetchAllMeetups = () => {
  return dispatch => {
    return axios
      .get(`${apiUrl}/meetups/upcoming/`)
      .then(response => {
        console.log(response.data.meetup);
        dispatch(fetchMeetups(response.data.meetup));
      })
      .catch(error => {
        throw error;
      });
  };
};
