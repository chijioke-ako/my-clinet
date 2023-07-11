import {
  PUBLICATION_DETAILS_FAIL,
  PUBLICATION_DETAILS_REQUEST,
  PUBLICATION_DETAILS_SUCCESS,
  PUBLICATION_LIST_FAIL,
  PUBLICATION_LIST_REQUEST,
  PUBLICATION_LIST_SUCCESS,
} from '../constants/publication';

export const publicationReducer = (
  state = { loading: true, publications: [] },
  action
) => {
  switch (action.type) {
    case PUBLICATION_LIST_REQUEST:
      return { loading: true };
    case PUBLICATION_LIST_SUCCESS:
      return { loading: false, publications: action.payload };
    case PUBLICATION_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const publicationDetailsReducer = (
  state = { publication: {}, loading: true },
  action
) => {
  switch (action.type) {
    case PUBLICATION_DETAILS_REQUEST:
      return { loading: true };
    case PUBLICATION_DETAILS_SUCCESS:
      return { loading: false, publication: action.payload };
    case PUBLICATION_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
