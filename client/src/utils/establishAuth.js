import Cookies from 'js-cookie';
import jwt from 'jsonwebtoken';
import _ from 'lodash';

import secret from './secret';
import { LOGIN_USER } from '../redux/actions/types';

export default store => {
  const token = Cookies.get('jwt');

  try {
    let user = jwt.verify(token, secret);

    user = _.omit(user, 'iat', 'exp');

    store.dispatch({
      type: LOGIN_USER,
      payload: { user },
    });
  } catch (err) {
    // skip
  }
};
