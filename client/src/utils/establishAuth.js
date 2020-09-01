import Cookies from 'js-cookie';
import jwt from 'jsonwebtoken';

export default store => {
  const token = Cookies.get('jwt');

  try {
    const user = jwt.verify(
      token,
      'this-is-a-secure-private-key-i-am-really-hungry-right-now-next-is-nodejs',
    );

    console.log(user);
  } catch (err) {
    console.log('error');
  }
};
