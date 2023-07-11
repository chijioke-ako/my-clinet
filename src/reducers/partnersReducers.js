import {
  PARTNERS_LIST_FAIL,
  PARTNERS_LIST_REQUEST,
  PARTNERS_LIST_SUCCESS,
} from '../constants/partnersConstants';

export const partnerReducer = (
  state = { loading: true, partners: [] },
  action
) => {
  switch (action.type) {
    case PARTNERS_LIST_REQUEST:
      return { loading: true };
    case PARTNERS_LIST_SUCCESS:
      return { loading: false, partners: action.payload };
    case PARTNERS_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
