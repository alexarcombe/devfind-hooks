import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  Container, Row, Col, Form, Button,
} from 'react-bootstrap';
import { createProfile } from '../../actions/profileActions';
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import SelectListGroup from '../common/SelectListGroup';
import CustomInputGroup from '../common/CustomInputGroup';

function CreateProfile() {
  const errors = useSelector((state) => state.errors);
  const dispatch = useDispatch();
  const history = useHistory();
  const [displaySocialInputs, setDisplaySocialInputs] = useState(false);
  const [displaySocialText, setDisplaySocialText] = useState(
    'Add socialnetwork links',
  );
  const [handle, setHandle] = useState('');
  const [company, setCompany] = useState('');
  const [website, setWebsite] = useState('');
  const [location, setLocation] = useState('');
  const [status, setStatus] = useState('');
  const [skills, setSkills] = useState('');
  const [githubusername, setGithubusername] = useState('');
  const [bio, setBio] = useState('');
  const [twitter, setTwitter] = useState('');
  const [facebook, setFacebook] = useState('');
  const [instagram, setInstagram] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [youtube, setYoutube] = useState('');

  function onSubmit(e) {
    e.preventDefault();
    const newProfile = {
      handle,
      company,
      website,
      location,
      status,
      skills,
      githubusername,
      bio,
      twitter,
      facebook,
      instagram,
      linkedin,
      youtube,
    };

    dispatch(createProfile(newProfile, history));
  }

  let socialInputs;

  if (displaySocialInputs) {
    socialInputs = (
      <div>
        <CustomInputGroup
          name="facebook"
          placeholder="Facebook Page URL"
          value={facebook}
          error={errors.facebook}
          onChange={(e) => setFacebook(e.target.value)}
          icon="fab fa-facebook m-auto"
        />

        <CustomInputGroup
          name="instagram"
          placeholder="Instagram Page URL"
          value={instagram}
          error={errors.instagram}
          onChange={(e) => setInstagram(e.target.value)}
          icon="fab fa-instagram m-auto"
        />

        <CustomInputGroup
          name="twitter"
          placeholder="Twitter Page URL"
          value={twitter}
          error={errors.twitter}
          onChange={(e) => setTwitter(e.target.value)}
          icon="fab fa-twitter m-auto"
        />

        <CustomInputGroup
          name="youtube"
          placeholder="Youtube Page URL"
          value={youtube}
          error={errors.youtube}
          onChange={(e) => setYoutube(e.target.value)}
          icon="fab fa-youtube m-auto"
        />

        <CustomInputGroup
          name="linkedin"
          placeholder="LinkedIn Page URL"
          value={linkedin}
          error={errors.linkedin}
          onChange={(e) => setLinkedin(e.target.value)}
          icon="fab fa-linkedin m-auto"
        />
      </div>
    );
  }

  return (
    <div className="create-profile">
      <Container>
        <Row>
          <Col md={8} className="m-auto">
            <h1 className="display-4 text-center">Create Profile</h1>
            <p className="lead text-center">
              Let&apos;s get some information to make your profile stand out.
            </p>
            <small className="d-block pb-3">* = required fields</small>
            <Form onSubmit={onSubmit}>
              <TextFieldGroup
                placeholder="* Profile Handle"
                name="handle"
                value={handle}
                error={errors.handle}
                onChange={(e) => setHandle(e.target.value)}
                info="A unique handle for your profile URL. Your full name, company name, nickname, etc (This CAN'T be changed later)"
              />

              <SelectListGroup
                name="status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                error={errors.status}
                info="Give us an idea of where you are at in your career"
                options={[
                  { label: '* Select Professional Status', value: '' },
                  { label: 'Developer', value: 'Developer' },
                  { label: 'Junior Developer', value: 'Junior Developer' },
                  {
                    label: 'Intermidate Developer',
                    value: 'Intermidate Developer',
                  },
                  { label: 'Senior Developer', value: 'Senior Developer' },
                  { label: 'Student/Learning', value: 'Student/Learning' },
                  { label: 'Instuctor/Teacher', value: 'Instuctor/Teacher' },
                  { label: 'Intern', value: 'Intern' },
                  { label: 'Other', value: 'Other' },
                ]}
              />

              <TextFieldGroup
                name="company"
                placeholder="Company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                error={errors.company}
                info="Could be your own company or one you work for"
              />

              <TextFieldGroup
                name="website"
                placeholder="Website"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                error={errors.website}
                info="Could be your own or a company website"
              />

              <TextFieldGroup
                name="location"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                error={errors.location}
                info="City & state suggested (eg. Boston, MA)"
              />

              <TextFieldGroup
                name="skills"
                placeholder="Skills"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
                error={errors.skills}
                info="Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)"
              />

              <TextFieldGroup
                name="githubusername"
                placeholder="Github Username"
                value={githubusername}
                onChange={(e) => setGithubusername(e.target.value)}
                error={errors.githubusername}
                info="If you want your latest repos and a Github link, include your username"
              />

              <TextAreaFieldGroup
                name="bio"
                placeholder="A short bio of yourself"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                error={errors.bio}
                info="Tell us a little about yourself"
              />

              <div className="mb-3">
                <Button
                  type="button"
                  variant="light"
                  onClick={() => {
                    setDisplaySocialInputs(!displaySocialInputs);
                    setDisplaySocialText(
                      displaySocialInputs
                        ? 'Add socialnetwork links'
                        : 'Hide socialnetwork links',
                    );
                  }}
                  value
                >
                  {displaySocialText}
                </Button>
                <span className="text-muted ml-3">Optional</span>
              </div>

              {displaySocialInputs ? socialInputs : ''}

              <Button type="submit" variant="info" block className="mt-3">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CreateProfile;
