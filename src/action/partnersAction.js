import {
  PARTNERS_LIST_FAIL,
  PARTNERS_LIST_REQUEST,
  PARTNERS_LIST_SUCCESS,
} from '../constants/partnersConstants';
import Api from '../compnonents/Helper/Api';

export const listPartners = () => async (dispatch) => {
  dispatch({
    type: PARTNERS_LIST_REQUEST,
  });

  try {
    const { data } = await Api.get('/partner');
    dispatch({ type: PARTNERS_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PARTNERS_LIST_FAIL, payload: error.message });
  }
};
