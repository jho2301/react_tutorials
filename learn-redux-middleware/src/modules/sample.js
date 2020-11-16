import { handleActions } from "redux-actions";
import * as api from "../lib/api";

const GET_POST = "sample/GET_POST";
const GET_POST_SUCCESS = "sample/GET_POST_SAMPLE";
const GET_POST_FAILURE = "sample/GET_POST_FAILURE";

const GET_USER = "sample/GET_USERS";
const GET_USER_SUCCESS = "sample/GET_USER_SUCCESS";
const GET_USER_FAILURE = "sample/GET_USER_FAILURE";

export const getPOST = (id) => async (dispatch) => {
  dispatch({ type: GET_POST });
  try {
    const res = await api.getPost(id);
    dispatch({
      type: GET_POST_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({ type: GET_POST_FAILURE, paylaod: err, error: true });
    throw err;
  }
};
