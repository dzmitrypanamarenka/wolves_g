import axios from 'axios';
import { createAction } from 'redux-actions';

export const fetchPreviewRequest = createAction('PREVIEW_FETCH_REQUEST');
export const fetchPreviewSuccess = createAction('PREVIEW_FETCH_SUCCESS', (previews) =>  ({ previews }));
export const fetchPreviewFailure = createAction('PREVIEW_FETCH_FAILURE');

export const fetchPreviewPosts = (all) => async (dispatch) => {
  dispatch(fetchPreviewRequest());
  try {
    let url = 'https://gamingwolves.net/blog/preview';
    // let url = 'http://localhost:3000/blog/preview';
    // let url = 'https://sheltered-sierra-42301.herokuapp.com/blog/preview';
    if (all) {
      url += '/all';
    }
    const { data } = await axios.get(url);
    dispatch(fetchPreviewSuccess(data));
  } catch (e) {
    dispatch(fetchPreviewFailure());
  }
};
