import {
  ADD_POST,
  DELETE_POST,
  FETCH_POST,
  FETCH_MEETUP,
  LOGIN
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

export const login = ({ username, password }, history) => {
  const data = {
    username: username,
    password: password
  };
  return dispatch => {
    return axios
      .post(apiUrl + "/auth/login", data)
      .then(response => {
        dispatch(loginSuccess(response.data));
        Swal.fire("", "Logged In successfully", "success");
        history.push("/");
      })
      .catch(error => {
        console.log(error.response);
        Swal.fire("Oops...", error.response.data.error, "error");
      });
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
      password: data.password
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
