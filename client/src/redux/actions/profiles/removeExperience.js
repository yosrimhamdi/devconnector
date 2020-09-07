import { REMOVE_EXPERIENCE } from '../types';

import profiles from '../../../apis/profiles';

export default id => async dispatch => {
  const response = await profiles.delete(`/experience/${id}`);

  dispatch({
    type: REMOVE_EXPERIENCE,
    payload: response.data,
  });
};
