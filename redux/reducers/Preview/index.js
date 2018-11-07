import { handleActions } from 'redux-actions';
import { previewActions } from '../../actions';

export default handleActions({
  [previewActions.fetchPreviewRequest](state) {
    return state;
  },
  [previewActions.fetchPreviewFailure](state) {
    return state;
  },
  [previewActions.fetchPreviewSuccess](state, { payload: { previews }}) {
    return {...state, previews}
  },
}, {});