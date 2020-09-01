import Cookies from 'js-cookie';
import jwt from 'jsonwebtoken';

import secret from './secret';
import { LOGIN_USER } from '../redux/actions/types';

export default store => {
  const token = Cookies.get('jwt');

  try {
    const user = jwt.verify(token, secret);

    store.dispatch({
      type: LOGIN_USER,
      payload: user,
    });
  } catch (err) {}
};
