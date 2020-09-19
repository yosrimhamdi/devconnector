import React, { useState } from 'react';
import { connect } from 'react-redux';

import { loginUser } from '../../../redux/actions';
import Email from './helpers/Email';
import Password from './helpers/Password';

const Login = ({ authUser, email }) => {
  const [page, setPage] = useState(1);

  let form = <Email onSubmit={() => setPage(page + 1)} />;

  if (page === 2) {
    form = (
      <Password
        previousFormPage={() => setPage(page - 1)}
        onSubmit={authUser}
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
  if (state.form.login) {
    if (state.form.login.values) {
      return {
        email: state.form.login.values.email,
      };
    }
  }

  return {};
};

export default connect(mapStateToProps, { loginUser })(Login);
