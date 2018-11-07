import axios from 'axios';
import { createAction } from 'redux-actions';

export const fetchPostsRequest = createAction('POSTS_FETCH_REQUEST');
export const fetchPostsSuccess = createAction('POSTS_FETCH_SUCCESS', (posts) =>  ({ posts }));
export const fetchPostsFailure = createAction('POSTS_FETCH_FAILURE');

export const fetchPosts = (id = null) => async (dispatch) => {
    dispatch(fetchPostsRequest());
    try {
      const url = 'http://localhost:8081/blog/posts';
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