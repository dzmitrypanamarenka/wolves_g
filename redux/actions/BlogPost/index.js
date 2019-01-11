import axios from 'axios';
import { createAction } from 'redux-actions';

export const fetchPostsRequest = createAction('POSTS_FETCH_REQUEST');
export const fetchPostsSuccess = createAction('POSTS_FETCH_SUCCESS', (posts) =>  ({ posts }));
export const fetchPostsFailure = createAction('POSTS_FETCH_FAILURE');

export const fetchPosts = (id = null) => async (dispatch) => {
    dispatch(fetchPostsRequest());
    try {
      const url = 'https:/gamingwolves.net/blog/posts';
      // const url = 'http://localhost:3000/blog/posts';
      // const url = 'https://sheltered-sierra-42301.herokuapp.com/blog/posts';
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
