import {
  PUBLICATIONS_FAIL,
  PUBLICATIONS_REQUEST,
  PUBLICATIONS_SUCCESS,
} from '../constants/publicationsConstants';
import Api from '../compnonents/Helper/Api';

export const publications = () => async (dispatch) => {
  dispatch({
    type: PUBLICATIONS_REQUEST,
  });

  try {
    const { data } = await Api.get('/publications');
    dispatch({ type: PUBLICATIONS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PUBLICATIONS_FAIL, payload: error.message });
  }
};
