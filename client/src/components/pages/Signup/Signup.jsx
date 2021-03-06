import React, { useState } from 'react';
import { connect } from 'react-redux';

import registerUser from '../../../redux/actions/auth/registerUser';
import Email from './helpers/Email';
import Password from './helpers/Password';
import UserName from './helpers/UserName';
import useDestroyFormOnUnmount from '../../../hooks/useDestroyFormOnUnmount';

const Register = ({ registerUser, email }) => {
  const [page, setPage] = useState(1);

  useDestroyFormOnUnmount('signup');

  let form = <Email nextPage={() => setPage(page + 1)} />;

  if (page === 2) {
    form = (
      <Password
        onSubmit={() => setPage(page + 1)}
        previousFormPage={() => setPage(page - 1)}
        email={email}
      />
    );
  }

  if (page === 3) {
    form = (
      <UserName
        onSubmit={registerUser}
        previousFormPage={() => setPage(page - 1)}
        email={email}
      />
    );
  }

  return (
    <div className="auth">
      <div className="auth__content">{form}</div>
    </div>
  );
};

const mapStateToProps = state => {
  if (state.form.signup) {
    if (state.form.signup.values) {
      return {
        email: state.form.signup.values.email,
      };
    }
  }

  return {};
};

export default connect(mapStateToProps, { registerUser })(Register);
