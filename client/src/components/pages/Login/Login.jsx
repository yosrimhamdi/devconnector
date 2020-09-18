import React, { useState } from 'react';
import { connect } from 'react-redux';

import './Login.scss';
import { loginUser } from '../../../redux/actions';
import Email from './Email';
import Password from './Password';

const Login = ({ loginUser }) => {
  const [page, setPage] = useState(1);

  const next = () => setPage(page + 1);
  const prev = () => setPage(page - 1);

  let content = <Email onSubmit={next} />;

  if (page === 2) {
    content = <Password previousPage={prev} onSubmit={loginUser} />;
  }

  return (
    <div className="login">
      <div className="login__content">{content}</div>
    </div>
  );
};

export default connect(null, { loginUser })(Login);
