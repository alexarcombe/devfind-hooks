import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { logoutUser } from '../../actions/authActions';
import { clearProfile } from '../../actions/profileActions';

function CustomNavbar() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const signOut = () => {
    dispatch(clearProfile());
    dispatch(logoutUser());
  };

  const { isAuthenticated, user } = auth;

  const authLinks = (
    <>
      <LinkContainer exact to="/posts">
        <a href="/" className="nav-link">
          Post Feed
        </a>
      </LinkContainer>
      <LinkContainer exact to="/dashboard">
        <a href="/" className="nav-link">
          Dashboard
        </a>
      </LinkContainer>
      <LinkContainer exact to="/" onClick={signOut}>
        <a href="/" className="nav-link">
          <img
            className="rounded-circle"
            src={user.avatar}
            alt={user.name}
            style={{ width: '25px', marginRight: '5px' }}
            title="You must have a gravatar connected to your email to display an image"
          />
          Log Out
        </a>
      </LinkContainer>
    </>
  );

  const guestLinks = (
    <>
      <LinkContainer exact to="/register">
        <a href="/" className="nav-link">
          Sign Up
        </a>
      </LinkContainer>
      <LinkContainer exact to="/login">
        <a href="/" className="nav-link">
          Log In
        </a>
      </LinkContainer>
    </>
  );

  const brand = auth.isAuthenticated ? (
    <LinkContainer exact to="/dashboard">
      <Navbar.Brand>DevFind</Navbar.Brand>
    </LinkContainer>
  ) : (
    <LinkContainer exact to="/">
      <Navbar.Brand>DevFind</Navbar.Brand>
    </LinkContainer>
  );

  return (
    <Navbar fixed="top" bg="dark" expand="sm" variant="dark" className="mb-4">
      <div className="container">
        {brand}
        <Navbar.Toggle aria-controls="menu" />
        <Navbar.Collapse id="menu">
          <Nav className="mr-auto">
            <LinkContainer exact to="/profiles">
              <a href="/" className="nav-link">
                Developers
              </a>
            </LinkContainer>
          </Nav>
          <Nav>{isAuthenticated ? authLinks : guestLinks}</Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default CustomNavbar;
