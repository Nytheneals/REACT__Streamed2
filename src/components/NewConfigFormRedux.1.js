import React, { Component } from 'react';
import Form from './Form';
import { Field, reduxForm } from 'redux-form';

class NewConfigForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      config: {
        smsHeader: '',
        smsFooter: '',
        keyword: '',
        connectivityErrorMsg: '',
        unsupportedErrorMsg: '',
        invalidEmailErrorMsg: '',
        successfulEnrollmentMsg: '',
        alreadyEnrolledMsg: '',
        doubleOptInMsg: '',
        regUrl: '',
        enrollmentEmailSubject: '',
        enrollmentEmailFrom: '',
        enrollmentEmailTo: '',
        enrollmentEmailReplyTo: '',
        textForEnrollment: '',
        selectedCardTemplateCode: '',
      },
      touched: {
        smsFooter: false,
        keyword: false,
        connectivityErrorMsg: false,
        unsupportedErrorMsg: false,
        invalidEmailErrorMsg: false,
        successfulEnrollmentMsg: false,
        alreadyEnrolledMsg: false,
        doubleOptInMsg: false,
        regUrl: false,
        enrollmentEmailSubject: false,
        enrollmentEmailFrom: false,
        enrollmentEmailTo: false,
        enrollmentEmailReplyTo: false,
        textForEnrollment: false,
        selectedCardTemplateCode: false,
      },
    };
  }

  // HELPERS
  handleInputChange = event => {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    this.setState({
      config: { ...this.state.config, [name]: value },
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state.config);
  };

  handleBlur = field => evt => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
    });
  };

  // RENDER FUNCTION
  render() {
    return (
      <Form className="container" onSubmit={this.handleSubmit}>
        <p className="_xlgText">Set Up SMS enrollment</p>
        <p className="_mdText">Set up program enrollment via SMS messages</p>
        {/* SECTION 1 */}
        <section className="sectors">
          <p className="_lgText">General information</p>

          {/* MERCHANT (smsHeader) */}
          <div className="_flatInput">
            <label htmlFor="smsHeader">Merchant (or program) name</label>
            <input name="smsHeader" type="text" className="_inputField_sm" />
          </div>

          {/* KEYWORD (keyword) */}
          <div className="_flatInput">
            <label htmlFor="keyword">Keyword</label>
            <input
              name="keyword"
              type="text"
              className="_inputField_sm"
              onChange={this.handleInputChange}
              value={this.state.config.keyword}
            />
          </div>

          {/* REGISTRATION URL (regUrl) */}
          <div className="_flatInput">
            <label htmlFor="regUrl">Registration URL</label>
            <input
              name="regUrl"
              type="text"
              className="_inputField_md"
              onChange={this.handleInputChange}
              value={this.state.config.regUrl}
            />
          </div>

          {/* SMS FOOTER (smsFooter) */}
          <div className="_flatInput">
            <label htmlFor="smsFooter">SMS footer</label>
            <input
              name="smsFooter"
              type="text"
              className="_inputField_md"
              onChange={this.handleInputChange}
              value={this.state.config.smsFooter}
            />
          </div>

          {/* CARD TEMPLATES (selectedCardTemplateCode) */}
          <div className="_flatInput ">
            <label htmlFor="selectedCardTemplateCode">Card or program</label>
            <select name="selectedCardTemplateCode" className="_inputField_sm">
              <option value="1">eGift</option>
              <option value="2">Loyalty</option>
              <option value="3">One Gift</option>
            </select>
          </div>
        </section>

        {/* SECTION 2 */}
        <section className="sectors">
          <p className="_lgText">Confirmation & Success Messages</p>

          {/* DOUBLE OPT IN (doubleOptInMsg) */}
          <div className="_flatInput">
            <label htmlFor="doubleOptInMsg">Confirm opt-in</label>
            <input
              name="doubleOptInMsg"
              type="text"
              className="_inputField_lg"
              onChange={this.handleInputChange}
              value={this.state.config.doubleOptInMsg}
            />
          </div>
          {/* ENROLLMENT EMAIL (successfulEnrollmentMsg) */}
          <div className="_flatInput">
            <label htmlFor="successfulEnrollmentMsg">Enrollment confirmation</label>
            <input
              name="successfulEnrollmentMsg"
              type="text"
              className="_inputField_lg"
              onChange={this.handleInputChange}
              value={this.state.config.successfulEnrollmentMsg}
            />
          </div>

          {/* SECTION 3 */}
          <section className="sectors">
            <p className="_lgText">Other messages</p>
            <p className="_mdText">Other SMS responses a user may receive.</p>

            {/* ALREADY ENROLLED (alreadyEnrolledMsg) */}
            <div className="_flatInput">
              <label htmlFor="alreadyEnrolledMsg">Already enrolled</label>
              <input
                name="alreadyEnrolledMsg"
                type="text"
                className="_inputField_lg"
                onChange={this.handleInputChange}
                value={this.state.config.alreadyEnrolledMsg}
              />
            </div>
          </section>

          {/* SECTION 4 */}

          <section className="sectors">
            <p className="_lgText">Error messages</p>
            <p className="_mdText">
              If the SMS Response fails, the customer will receive one of these messages.
            </p>

            {/* CONNECTIVITY PROBLEMS (connectivityErrorMsg) */}
            <div className="_flatInput">
              <label htmlFor="connectivityErrorMsg">Problems with connectivity</label>
              <input
                name="connectivityErrorMsg"
                type="text"
                className="_inputField_lg"
                onChange={this.handleInputChange}
                value={this.state.config.connectivityErrorMsg}
              />
            </div>

            {/* UNRECOGNIZABLE COMMAND (unsupportedErrorMsg) */}
            <div className="_flatInput">
              <label htmlFor=" unsupportedErrorMsg">Unrecognizable command</label>
              <input
                name="unsupportedErrorMsg"
                type="text"
                className="_inputField_lg"
                onChange={this.handleInputChange}
                value={this.state.config.unsupportedErrorMsg}
              />
            </div>

            {/* INVALID (invalidEmailErrorMsg) */}
            <div className="_flatInput">
              <label htmlFor=" invalidEmailErrorMsg">Invalid or no email address</label>
              <input
                name="invalidEmailErrorMsg"
                type="text"
                className="_inputField_lg"
                onChange={this.handleInputChange}
                value={this.state.config.invalidEmailErrorMsg}
              />
            </div>
          </section>

          {/* SECTION 5 */}

          <section className="sectors">
            <p className="_lgText">Enrollment Email</p>
            <p className="_mdText">When an email address is required to complete registration.</p>

            <div className="_emailSection">
              {/* REPLY TO (enrollmentEmailReplyTo) */}
              <div className="_flatInput">
                <label htmlFor="enrollmentEmailReplyTo">Reply to:Email address</label>
                <input
                  name="enrollmentEmailReplyTo"
                  type="text"
                  className="_inputField_sm"
                  onChange={this.handleInputChange}
                  value={this.state.config.enrollmentEmailReplyTo}
                />
              </div>

              {/* SENT FROM (enrollmentEmailFrom) */}
              <div className="_flatInput">
                <label htmlFor="enrollmentEmailFrom">Sent from:Email address</label>
                <input
                  name="enrollmentEmailFrom"
                  type="text"
                  className="_inputField_sm"
                  onChange={this.handleInputChange}
                  value={this.state.config.enrollmentEmailFrom}
                />
              </div>
            </div>
          </section>
          {/* EMAIL SUBJECT (enrollmentEmailSubject) */}
          <div className="_flatInput">
            <label htmlFor="enrollmentEmailSubject">Email subject line</label>
            <input
              name="enrollmentEmailSubject"
              type="text"
              className="_inputField_md"
              onChange={this.handleInputChange}
              value={this.state.config.enrollmentEmailSubject}
            />
          </div>

          <div className="_flatInput">
            <label htmlFor=" textForEnrollment">Email text</label>
            <textarea
              name="textForEnrollment"
              type="text"
              className="_inputField_xlg"
              onChange={this.handleInputChange}
              value={this.state.config.textForEnrollment}
            />
          </div>
        </section>
        <button type="submit" className="_smsbtn">
          Save program settings
        </button>
      </Form>
    );
  }
}

export default reduxForm({
  // validate,
  form: 'PostNewConfigForm',
})(NewConfigForm);
