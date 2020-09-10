import { reset } from 'redux-form';

import { CREATE_POST, ERROR_HAS_OCCURED } from '../types';
import posts from '../../../apis/posts';

export default formValues => async dispatch => {
  try {
    const response = await posts.post('/', formValues);

    dispatch({
      type: CREATE_POST,
      payload: response.data,
    });

    dispatch(reset('createPost'));
  } catch (err) {
    dispatch({
      type: ERROR_HAS_OCCURED,
      payload: err.response.data,
    });
  }
};
