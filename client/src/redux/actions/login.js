import users from '../../apis/users';

export default formValues => async dispatch => {
  const response = await users.post('/login', formValues);

  console.log(response);
};
