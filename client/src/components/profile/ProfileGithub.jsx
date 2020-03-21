import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Card, Row, Col } from 'react-bootstrap';

function ProfileGithub(props) {
  const [repos, setRepos] = useState([]);
  const { username } = props;

  useEffect(() => {
    const clientId = '433a07bfae5d0878fe53';
    const clientSecret = 'b0d68343b65574bdcc774316de755f6d0bc37d91';
    const count = 5;
    const sort = 'created: asc';
    fetch(
      `https://api.github.com/users/${username}/repos?per_page=${count}&sort=${sort}&client_id=${clientId}&client_secret=${clientSecret}`,
    )
      .then((res) => res.json())
      .then((data) => {
        setRepos(data);
      })
      .catch((err) => console.log(err));
  }, [username]);

  const repoItems = repos.map((repo) => (
    <Card key={repo.id} body className="mb-2">
      <Row>
        <Col>
          <h4>
            <Link to={repo.html_url} className="text-info" target="_blank">
              {repo.name}
            </Link>
          </h4>
          <p>{repo.description}</p>
          <span className="badge badge-info mr-1">
            Stars:
            {' '}
            {repo.stargazers_count}
          </span>
          <span className="badge badge-secondary mr-1">
            Watchers:
            {' '}
            {repo.watchers_count}
          </span>
          <span className="badge badge-success">
            Forks:
            {repo.forks_count}
          </span>
        </Col>
      </Row>
    </Card>
  ));

  return (
    <>
      <hr />
      <h3 className="mb-4">Latest GitHub Repos</h3>
      {repoItems}
    </>
  );
}

ProfileGithub.propTypes = {
  username: PropTypes.string.isRequired,
};

export default ProfileGithub;
