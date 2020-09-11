import React from 'react';

import './Table.scss';

const Table = ({ columnNames: [first, second, third], children }) => (
  <table className="table">
    <tbody className="table__body">
      <tr>
        <th className="table__first-column">{first}</th>
        <th className="table__second-column">{second}</th>
        <th className="table__third-column">{third}</th>
        <th className="table__remove-logo-column"> </th>
      </tr>
      {children}
    </tbody>
  </table>
);

export default Table;
