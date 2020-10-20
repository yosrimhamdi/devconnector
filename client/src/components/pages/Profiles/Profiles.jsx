import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import './Profiles.scss';
import { fetchProfiles } from '../../../redux/actions';
import ProfileItem from './helpers/ProfileItem';
import Spinner from '../../common/Spinner';
import profilesAPI from '../../../apis/profiles';

const Profiles = ({ fetchProfiles, profiles, loading }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const [pages, setPages] = useState(1);

  useEffect(() => {
    fetchProfiles();
  }, [fetchProfiles]);

  useEffect(() => {
    const getPages = async () => {
      const response = await profilesAPI.get('/pages');

      setPages(response.data.pages);
    };

    getPages();
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (
        document.documentElement.offsetHeight ===
          document.documentElement.scrollTop + window.innerHeight &&
        currentPage + 1 <= pages
      ) {
        fetchProfiles(currentPage + 1);

        setCurrentPage(currentPage + 1);
      }
    };

    document.addEventListener('scroll', onScroll);

    return () => document.removeEventListener('scroll', onScroll);
  }, [currentPage, fetchProfiles, pages]);

  const renderedProfiles = profiles.map((profile, i) => (
    <ProfileItem key={profile._id} profile={profile} i={i} />
  ));

  return (
    <div className="profiles">
      <ul className="profiles__content">{renderedProfiles}</ul>
      {loading ? <Spinner white spaceAround /> : null}
    </div>
  );
};

const mapStateToProps = ({ profiles, loading }) => ({
  profiles: Object.values(profiles),
  loading,
});

export default connect(mapStateToProps, { fetchProfiles })(Profiles);
