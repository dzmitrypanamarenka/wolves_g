import axios from 'axios';
import { createAction } from 'redux-actions';

export const fetchPreviewRequest = createAction('PREVIEW_FETCH_REQUEST');
export const fetchPreviewSuccess = createAction('PREVIEW_FETCH_SUCCESS', (previews) =>  ({ previews }));
export const fetchPreviewFailure = createAction('PREVIEW_FETCH_FAILURE');

export const fetchPreviewPosts = (id = null) => async (dispatch) => {
  dispatch(fetchPreviewRequest());
  try {
    const url = 'http://ec2-18-223-109-21.us-east-2.compute.amazonaws.com/blog/preview';
    // const url = 'http://localhost:3000/blog/preview';
    const { data } = await axios.get(url);
    dispatch(fetchPreviewSuccess(data));
  } catch (e) {
    dispatch(fetchPreviewFailure());
  }
};
