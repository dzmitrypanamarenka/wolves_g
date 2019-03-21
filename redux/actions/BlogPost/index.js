import axios from 'axios';
import { createAction } from 'redux-actions';
import config from '../../../config/fe_config';

export const fetchPostsRequest = createAction('POSTS_FETCH_REQUEST');
export const fetchPostsSuccess = createAction('POSTS_FETCH_SUCCESS', (posts) =>  ({ posts }));
export const fetchPostsFailure = createAction('POSTS_FETCH_FAILURE');

export const fetchPosts = (id = null) => async (dispatch) => {
    dispatch(fetchPostsRequest());
    try {
      const url = `${config.url[process.env.NODE_ENV]}/blog/posts`;
      let data;
      if(id){
        data = await axios.post(url, { id });
      } else {
        data = await axios.get(url);
      }
      dispatch(fetchPostsSuccess(data));
    } catch (e) {
      dispatch(fetchPostsFailure());
    }
};
