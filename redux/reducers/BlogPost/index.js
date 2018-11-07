import { handleActions } from 'redux-actions';
import { postActions } from '../../actions';

export default handleActions({
  [postActions.fetchPostsRequest](state) {
    return state;
  },
  [postActions.fetchPostsFailure](state) {
    return state;
  },
  [postActions.fetchPostsSuccess](state, { payload: { posts }}) {
    return {...state, posts}
  },
}, {});

