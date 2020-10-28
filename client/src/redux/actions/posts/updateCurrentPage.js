import { UPDATE_CURRENT_POST_PAGE } from '../types';

export default currentPage => ({
  type: UPDATE_CURRENT_POST_PAGE,
  payload: { currentPage },
});
