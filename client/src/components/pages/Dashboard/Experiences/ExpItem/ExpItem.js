import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';

import './ExpItem.scss';
import { removeExp } from '../../../../../redux/actions';

class ExpItem extends React.Component {
  removeExp = () => {
    this.props.removeExp(this.props.exp._id);
  };

  render() {
    const { company, title, from, to } = this.props.exp;

    const formatedFrom = moment(from).format('YYYY-MM-DD');

    const formatedTo = moment(to).format('YYYY-MM-DD');

    const year = `${formatedFrom} / ${to ? `${formatedTo}` : 'now'}`;

    return (
      <tr className="exp-item">
        <td>{company}</td>
        <td>{title}</td>
        <td>{year}</td>
        <div className="exp-item__logo-container">
          <i
            onClick={this.removeExp}
            className="fas fa-trash-alt exp-item__remove"
            role="button"
          />
        </div>
      </tr>
    );
  }
}

export default connect(null, { removeExp })(ExpItem);
