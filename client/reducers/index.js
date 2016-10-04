import { combineReducers } from 'redux';
import toggle from './toggle';
import rssFeed from './rssFeed';
import currentUser from './currentUser';
import addButtonClick from './addButtonClick';

const reducers = combineReducers({
  toggle,
  rssFeed,
  currentUser,
  addButtonClick,
});

export default reducers;
