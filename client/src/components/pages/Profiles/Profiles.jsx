import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import './Profiles.scss';
import fetchProfiles from '../../../redux/actions/profiles/fetchProfiles';
import ProfileItem from './helpers/ProfileItem';
import Spinner from '../../common/Spinner';
import EndOfContent from '../../common/EndOfContent';
import fetchProfilePages from '../../../redux/actions/profiles/fetchProfilePages';
import updateCurrentProfilePage from '../../../redux/actions/profiles/updateCurrentProfilePage';
import Nav from '../../layouts/Nav';

const Profiles = ({
  fetchProfiles,
  fetchProfilePages,
  updateCurrentProfilePage,
  profiles: { data, pages, currentPage },
  loading,
  initialMount,
}) => {
  useEffect(() => {
    if (initialMount.profiles) {
      fetchProfiles(1);

      fetchProfilePages();
    }
  }, []);

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

  let renderedProfiles = null;

  if (!initialMount.profiles) {
    renderedProfiles = data.map((profile, i) => (
      <ProfileItem key={profile._id} profile={profile} i={i} />
    ));
  }

  return (
    <>
      <Nav isProfiles />
      <div className="profiles">
        <ul className="profiles__content">{renderedProfiles}</ul>
        <Spinner white visible={loading} fullScreen={initialMount.profiles} />
        <EndOfContent
          currentPage={currentPage}
          pages={pages}
          loading={loading}
          white
        />
      </div>
    </>
  );
};

const mapStateToProps = ({ profiles, loading, initialMount }) => ({
  profiles: { ...profiles, data: Object.values(profiles.data) },
  loading,
  initialMount,
});

export default connect(mapStateToProps, {
  fetchProfiles,
  updateCurrentProfilePage,
  fetchProfilePages,
})(Profiles);
