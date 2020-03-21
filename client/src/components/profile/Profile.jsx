import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { Spinner, Container } from 'react-bootstrap';
import ProfileHeader from './ProfileHeader';
import ProfileAbout from './ProfileAbout';
import ProfileCreds from './ProfileCreds';
import ProfileGithub from './ProfileGithub';
import isEmpty from '../../validation/is-empty';
import { getProfileByHandle } from '../../actions/profileActions';

function Profile() {
  const { params } = useRouteMatch();
  const { profile, loading } = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  useEffect(() => {
    if (params.handle) {
      dispatch(getProfileByHandle(params.handle));
    }
  }, [dispatch, params]);

  let profileContent;

  if (profile === null || loading) {
    profileContent = <Spinner animation="border" variant="primary" />;
  } else {
    profileContent = (
      <div>
        <ProfileHeader profile={profile} />
        <ProfileAbout profile={profile} />
        <ProfileCreds
          education={profile.education}
          experience={profile.experience}
        />
        {isEmpty(profile.githubusername) ? null : (
          <ProfileGithub username={profile.githubusername} />
        )}
      </div>
    );
  }

  return (
    <div className="profile">
      <Container>{profileContent}</Container>
    </div>
  );
}

export default Profile;
