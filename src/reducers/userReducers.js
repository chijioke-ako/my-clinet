import {
  USER_SIGNING_FAIL,
  USER_SIGNING_REQUEST,
  USER_SIGNING_SUCCESS,
  USER_SIGNOUT,
} from '../constants/usersConstants';

export const userSingingReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_SIGNING_REQUEST:
      return { loading: true };
    case USER_SIGNING_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_SIGNING_FAIL:
      return { loading: false, error: action.payload };
    case USER_SIGNOUT:
      return {};
    default:
      return state;
  }
};
