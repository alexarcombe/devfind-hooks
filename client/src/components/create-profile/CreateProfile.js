import React, { Component } from 'react';
import { connect } from 'react-redux';
import porpTypes from 'prop-types';
import { createProfile } from '../../actions/profileActions';
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import SelectListGroup from '../common/SelectListGroup';
import InputGroup from '../common/InputGroup';
import { withRouter } from 'react-router-dom';

class CreateProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displaySocialInputs: false,
      handle: '',
      company: '',
      website: '',
      location: '',
      status: '',
      skills: '',
      githubusername: '',
      bio: '',
      twitter: '',
      facebook: '',
      instagram: '',
      linkedin: '',
      youtube: '',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({
      errors: nextProps.errors
    });
  }

  onChange(e) {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const neeProfile = {
      handle: this.state.handle,
      company: this.state.company,
      website: this.state.website,
      location: this.state.location,
      status: this.state.status,
      skills: this.state.skills,
      githubusername: this.state.githubusername,
      bio: this.state.bio,
      twitter: this.state.twitter,
      facebook: this.state.facebook,
      instagram: this.state.instagram,
      linkedin: this.state.linkedin,
      youtube: this.state.youtube
    };

    this.props.createProfile(neeProfile, this.props.history);
  }

  render() {
    const { errors, displaySocialInputs } = this.state;

    let socialInputs;

    if (displaySocialInputs) {
      socialInputs = (
        <div>
          <InputGroup
            name="facebook"
            placeholder="Facebook Page URL"
            value={this.state.facebook}
            error={errors.facebook}
            onChange={this.onChange}
            icon="fab fa-facebook m-auto"
          />

          <InputGroup
            name="instagram"
            placeholder="Instagram Page URL"
            value={this.state.instagram}
            error={errors.instagram}
            onChange={this.onChange}
            icon="fab fa-instagram m-auto"
          />

          <InputGroup
            name="twitter"
            placeholder="Twitter Page URL"
            value={this.state.twitter}
            error={errors.twitter}
            onChange={this.onChange}
            icon="fab fa-twitter m-auto"
          />

          <InputGroup
            name="youtube"
            placeholder="Youtube Page URL"
            value={this.state.youtube}
            error={errors.youtube}
            onChange={this.onChange}
            icon="fab fa-youtube m-auto"
          />

          <InputGroup
            name="linkedin"
            placeholder="LinkedIn Page URL"
            value={this.state.linkedin}
            error={errors.linkedin}
            onChange={this.onChange}
            icon="fab fa-linkedin m-auto"
          />
        </div>
      );
    }

    return (
      <div className="create-profile">
        <div className="container ">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Create Profile</h1>
              <p className="lead text-center">
                Let's get some information to make your profile stand out.
              </p>
              <small className="d-block pb-3">* = required fields</small>
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="* Profile Handle"
                  name="handle"
                  value={this.state.handle}
                  error={errors.handle}
                  onChange={this.onChange}
                  info="A unique handle for your profile URL. Your full name, company name, nickname, etc (This CAN'T be changed later)"
                />

                <SelectListGroup
                  name="status"
                  value={this.state.status}
                  onChange={this.onChange}
                  error={errors.status}
                  info="Give us an idea of where you are at in your career"
                  options={[
                    { label: '* Select Professional Status', value: '' },
                    { label: 'Developer', value: 'Developer' },
                    { label: 'Junior Developer', value: 'Junior Developer' },
                    {
                      label: 'Intermidate Developer',
                      value: 'Intermidate Developer'
                    },
                    { label: 'Senior Developer', value: 'Senior Developer' },
                    { label: 'Student/Learning', value: 'Student/Learning' },
                    { label: 'Instuctor/Teacher', value: 'Instuctor/Teacher' },
                    { label: 'Intern', value: 'Intern' },
                    { label: 'Other', value: 'Other' }
                  ]}
                />

                <TextFieldGroup
                  name="company"
                  placeholder="Company"
                  value={this.state.company}
                  onChange={this.onChange}
                  error={errors.company}
                  info="Could be your own company or one you work for"
                />

                <TextFieldGroup
                  name="website"
                  placeholder="Website"
                  value={this.state.website}
                  onChange={this.onChange}
                  error={errors.website}
                  info="Could be your own or a company website"
                />

                <TextFieldGroup
                  name="location"
                  placeholder="Location"
                  value={this.state.location}
                  onChange={this.onChange}
                  error={errors.location}
                  info="City & state suggested (eg. Boston, MA)"
                />

                <TextFieldGroup
                  name="skills"
                  placeholder="Skills"
                  value={this.state.skills}
                  onChange={this.onChange}
                  error={errors.skills}
                  info="Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)"
                />

                <TextFieldGroup
                  name="githubusername"
                  placeholder="Github Username"
                  value={this.state.githubusername}
                  onChange={this.onChange}
                  error={errors.githubusername}
                  info="If you want your latest repos and a Github link, include your username"
                />

                <TextAreaFieldGroup
                  name="bio"
                  placeholder="A short bio of yourself"
                  value={this.state.bio}
                  onChange={this.onChange}
                  error={errors.bio}
                  info="Tell us a little about yourself"
                />

                <div className="mb-3">
                  <button
                    type="button"
                    className="btn btn-light"
                    onClick={() => {
                      this.setState(prevState => ({
                        displaySocialInputs: !prevState.displaySocialInputs
                      }));
                    }}
                  >
                    Add socialnetwork links
                  </button>
                  <span className="text-muted ml-3">Optional</span>
                </div>

                {displaySocialInputs ? socialInputs : ''}

                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-info btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CreateProfile.porpTypes = {
  createProfile: porpTypes.func.isRequired,
  auth: porpTypes.object.isRequired,
  errors: porpTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { createProfile })(
  withRouter(CreateProfile)
);
