import users from '../../apis/users';

export default formValues => async dispatch => {
  const response = await users.post('/auth/register', formValues);

  console.log(response);
};
