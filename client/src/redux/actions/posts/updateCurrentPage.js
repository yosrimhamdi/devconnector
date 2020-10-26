import { UPDATE_CURRENT_POST_PAGE } from '../types';

export default currentPage => {
  return {
    type: UPDATE_CURRENT_POST_PAGE,
    payload: { currentPage },
  };
};
