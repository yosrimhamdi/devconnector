// import { REMOVE_EXP } from './types';

import profiles from '../../apis/profiles';
import { REMOVE_EXP } from './types';

export default id => async dispatch => {
  const response = await profiles.delete(`/experience/${id}`);

  dispatch({
    type: REMOVE_EXP,
    payload: response.data,
  });
};
