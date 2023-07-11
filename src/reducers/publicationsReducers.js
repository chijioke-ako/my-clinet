import {
  PUBLICATIONS_FAIL,
  PUBLICATIONS_REQUEST,
  PUBLICATIONS_SUCCESS,
} from '../constants/publicationsConstants';

export const publicationsReducer = (
  state = { loading: true, publication: [] },
  action
) => {
  switch (action.type) {
    case PUBLICATIONS_REQUEST:
      return { loading: true };
    case PUBLICATIONS_SUCCESS:
      return { loading: false, publication: action.payload };
    case PUBLICATIONS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
