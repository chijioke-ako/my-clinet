import {
  PUBLICATION_DETAILS_FAIL,
  PUBLICATION_DETAILS_REQUEST,
  PUBLICATION_DETAILS_SUCCESS,
  PUBLICATION_LIST_FAIL,
  PUBLICATION_LIST_REQUEST,
  PUBLICATION_LIST_SUCCESS,
} from '../constants/publication';
import Api from '../compnonents/Helper/Api';

export const listPublication = () => async (dispatch) => {
  dispatch({
    type: PUBLICATION_LIST_REQUEST,
  });

  try {
    const { data } = await Api.get('/lastPublications');
    dispatch({ type: PUBLICATION_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PUBLICATION_LIST_FAIL, payload: error.message });
  }
};

export const detailedPublication = (id) => async (dispatch) => {
  dispatch({ type: PUBLICATION_DETAILS_REQUEST, payload: id });

  try {
    const { data } = await Api.get(`/publications/${id}`);
    dispatch({ type: PUBLICATION_DETAILS_SUCCESS, payload: data.data });
  } catch (error) {
    dispatch({
      type: PUBLICATION_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
