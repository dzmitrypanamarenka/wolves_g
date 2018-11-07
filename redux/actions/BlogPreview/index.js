import axios from 'axios';
import { createAction } from 'redux-actions';

export const fetchPreviewRequest = createAction('PREVIEW_FETCH_REQUEST');
export const fetchPreviewSuccess = createAction('PREVIEW_FETCH_SUCCESS', (previews) =>  ({ previews }));
export const fetchPreviewFailure = createAction('PREVIEW_FETCH_FAILURE');

export const fetchPreviewPosts = (id = null) => async (dispatch) => {
  dispatch(fetchPreviewRequest());
  try {
    const url = 'https://lit-island-20029.herokuapp.com/blog/preview';
    const { data } = await axios.get(url);
    dispatch(fetchPreviewSuccess(data));
  } catch (e) {
    dispatch(fetchPreviewFailure());
  }
};