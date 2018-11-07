import { combineReducers } from 'redux';

import posts from './BlogPost';
import previews from './Preview';


export default combineReducers({
    posts,
    previews,
});
