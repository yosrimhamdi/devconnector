import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import './Profiles.scss';
import { fetchProfiles } from '../../../redux/actions';
import ProfileItem from './helpers/ProfileItem';
import Spinner from '../../common/Spinner';
import EndOfContent from '../../common/EndOfContent';
import fetchProfilePages from '../../../redux/actions/profiles/fetchProfilePages';
import updateCurrentProfilePage from '../../../redux/actions/profiles/updateCurrentProfilePage';

const Profiles = ({
  fetchProfiles,
  fetchProfilePages,
  updateCurrentProfilePage,
  profiles: { data, pages, currentPage },
  loading,
}) => {
  useEffect(() => {
    if (!data.length) {
      fetchProfiles(1);

      fetchProfilePages();
    }
  }, [fetchProfiles]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        document.documentElement.offsetHeight - 100 <=
          document.documentElement.scrollTop + window.innerHeight &&
        !loading &&
        currentPage + 1 <= pages
      ) {
        fetchProfiles(currentPage + 1);

        updateCurrentProfilePage(currentPage + 1);
      }
    };

    document.addEventListener('scroll', handleScroll);

    return () => document.removeEventListener('scroll', handleScroll);
  }, [currentPage, fetchProfiles, pages, loading]);

  const renderedProfiles = data.map((profile, i) => (
    <ProfileItem key={profile._id} profile={profile} i={i} />
  ));

  return (
    <div className="profiles">
      <ul className="profiles__content">{renderedProfiles}</ul>
      <Spinner white visible={loading} fullScreen={!data.length} />
      <EndOfContent
        currentPage={currentPage}
        pages={pages}
        loading={loading}
        white
      />
    </div>
  );
};

const mapStateToProps = ({ profiles, loading }) => ({
  profiles,
  loading,
});

export default connect(mapStateToProps, {
  fetchProfiles,
  updateCurrentProfilePage,
  fetchProfilePages,
})(Profiles);
