import Api from '../compnonents/Helper/Api';
import {
  USER_SIGNING_FAIL,
  USER_SIGNING_REQUEST,
  USER_SIGNING_SUCCESS,
  USER_SIGNOUT,
} from '../constants/usersConstants';

export const signin = (email, password) => async (dispatch) => {
  dispatch({
    type: USER_SIGNING_REQUEST,
    payload: { email, password },
  });

  try {
    const { data } = await Api.post('/login', { email, password });
    dispatch({ type: USER_SIGNING_SUCCESS, payload: data });
    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_SIGNING_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const signout = () => (dispatch) => {
  localStorage.removeItem('userInfo');
  dispatch({ type: USER_SIGNOUT });
};
