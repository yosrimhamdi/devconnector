import users from '../../apis/users';

export default formValues => async dispatch => {
  const response = await users.post('/register', formValues);

  console.log(response);
};
