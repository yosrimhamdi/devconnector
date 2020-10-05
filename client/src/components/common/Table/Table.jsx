import React from 'react';

import './Table.scss';

const Table = ({ columnNames: [first, second, third], children }) => (
  <table className="table">
    <tbody>
      <tr className="table__headers">
        <th>{first}</th>
        <th>{second}</th>
        <th>{third}</th>
      </tr>
      {children}
    </tbody>
  </table>
);

export default Table;
