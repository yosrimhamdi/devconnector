import React from 'react';

import './Table.scss';

const Table = props => (
  <table className="table">
    <tbody className="table__body">
      <tr>
        <th className="table__first-column">company</th>
        <th className="table__second-column">title</th>
        <th className="table__third-column">year</th>
        <th className="table__remove-logo"> </th>
      </tr>
      {props.children}
    </tbody>
  </table>
);

export default Table;
