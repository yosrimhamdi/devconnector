import React, { useState } from 'react';
import { connect } from 'react-redux';

import { registerUser } from '../../../redux/actions';
import Email from './helpers/Email';
import Password from './helpers/Password';
import UserName from './helpers/UserName';

const Register = ({ registerUser }) => {
  const [page, setPage] = useState(1);

  const next = () => setPage(page + 1);
  const prev = () => setPage(page - 1);

  let form = <Email onSubmit={next} />;

  if (page === 2) {
    form = <Password onSubmit={next} previousPage={prev} />;
  }

  if (page === 3) {
    form = <UserName onSubmit={registerUser} previousPage={prev} />;
  }

  return (
    <div className="login">
      <div className="login__content">{form}</div>
    </div>
  );
};

export default connect(null, { registerUser })(Register);
