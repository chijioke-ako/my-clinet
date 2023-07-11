import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import {
  publicationDetailsReducer,
  publicationReducer,
} from '../../reducers/publicationReducers';
import { partnerReducer } from '../../reducers/partnersReducers';
import { publicationsReducer } from '../../reducers/publicationsReducers';
import { userSingingReducer } from '../../reducers/userReducers';

const initialSate = {
  userSignin: {
    userInfo: localStorage.getItem('userInfo')
      ? JSON.parse(localStorage.getItem('userInfo'))
      : null,
  },
};

const reducer = combineReducers({
  listPublication: publicationReducer,
  publications: publicationsReducer,
  detailedPublication: publicationDetailsReducer,
  listPartners: partnerReducer,
  userSignin: userSingingReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialSate,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
