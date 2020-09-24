import React, { useState, useEffect } from 'react';
import MaterialPagination from '@material-ui/lab/Pagination';
import { connect } from 'react-redux';

import profiles from '../../../apis/profiles';
import { fetchProfiles } from '../../../redux/actions';

import './Pagination.scss';

const Pagination = ({ fetchProfiles }) => {
  const [count, setCount] = useState(1);
  const [prevPage, setPrevPage] = useState(1);

  useEffect(() => {
    const getCount = async () => {
      const response = await profiles.get('/all/count');

      setCount(response.data.count);
    };

    getCount();
  }, []);

  const onPageChange = (e, page) => {
    if (page !== prevPage) {
      fetchProfiles(page);
      setPrevPage(page);
    }
  };

  return (
    <div className="pagination">
      <MaterialPagination
        count={count}
        color="primary"
        onChange={onPageChange}
      />
    </div>
  );
};

export default connect(null, { fetchProfiles })(Pagination);
