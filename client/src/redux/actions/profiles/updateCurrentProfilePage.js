import { UPDATE_CURRENT_PROFILE_PAGE } from '../types';

export default currentPage => ({
  type: UPDATE_CURRENT_PROFILE_PAGE,
  payload: { currentPage },
});
