import React, { Component } from 'react';
import Form from './Form';
import { Field, reduxForm } from 'redux-form';

const renderInput = ({ label, input, meta }) => (
  <div className="_flatInput">
    <label htmlFor="smsHeader">Merchant (or program) name</label>
    <input component="input" name="smsHeader" type="text" className="_inputField_sm" />
  </div>
);

const renderSelect = ({ label, input, meta }) => (
  <div className="_flatInput">
    <label htmlFor="smsHeader">{label}</label>
    <input {...input} name="smsHeader" type="text" className="_inputField_sm" />
  </div>
);

const renderTextarea = ({ label, input, meta }) => (
  <div className="_flatInput">
    <label htmlFor="smsHeader">Merchant (or program) name</label>
    <input component="input" name="smsHeader" type="text" className="_inputField_sm" />
  </div>
);

class NewConfigForm extends Component {
  // RENDER FUNCTION
  _handleSubmittal = values => {
    console.log('FORM 👉🏽', values);
  };

  render() {
    const { handleSubmit, submitting } = this.props;
    return (
      <Form className="container" onSubmit={handleSubmit(this._handleSubmittal)}>
        <p className="_xlgText">Set Up SMS enrollment</p>
        <p className="_mdText">Set up program enrollment via SMS messages</p>
        {/* SECTION 1 */}
        <section className="sectors">
          <p className="_lgText">General information</p>

          {/* MERCHANT (smsHeader) */}
          <div className="_flatInput">
            <label htmlFor="smsHeader">Merchant (or program) name</label>
            <Field component="input" name="smsHeader" type="text" className="_inputField_sm" />
          </div>

          {/* KEYWORD (keyword) */}
          <div className="_flatInput">
            <label htmlFor="keyword">Keyword</label>
            <Field component="input" name="keyword" type="text" className="_inputField_sm" />
          </div>

          {/* REGISTRATION URL (regUrl) */}
          <div className="_flatInput">
            <label htmlFor="regUrl">Registration URL</label>
            <Field component="input" name="regUrl" type="text" className="_inputField_md" />
          </div>

          {/* SMS FOOTER (smsFooter) */}
          <div className="_flatInput">
            <label htmlFor="smsFooter">SMS footer</label>
            <input component="input" name="smsFooter" type="text" className="_inputField_md" />
          </div>

          {/* CARD TEMPLATES (selectedCardTemplateCode) */}
          <div className="_flatInput ">
            <label htmlFor="selectedCardTemplateCode">Card or program</label>
            <Field component="select" name="selectedCardTemplateCode" className="_inputField_sm">
              <option value="1">eGift</option>
              <option value="2">Loyalty</option>
              <option value="3">One Gift</option>
            </Field>
          </div>
        </section>

        {/* SECTION 2 */}
        <section className="sectors">
          <p className="_lgText">Confirmation & Success Messages</p>

          {/* DOUBLE OPT IN (doubleOptInMsg) */}
          <div className="_flatInput">
            <label htmlFor="doubleOptInMsg">Confirm opt-in</label>
            <Field component="input" name="doubleOptInMsg" type="text" className="_inputField_lg" />
          </div>
          {/* ENROLLMENT EMAIL (successfulEnrollmentMsg) */}
          <div className="_flatInput">
            <label htmlFor="successfulEnrollmentMsg">Enrollment confirmation</label>
            <Field
              component="input"
              name="successfulEnrollmentMsg"
              type="text"
              className="_inputField_lg"
            />
          </div>

          {/* SECTION 3 */}
          <section className="sectors">
            <p className="_lgText">Other messages</p>
            <p className="_mdText">Other SMS responses a user may receive.</p>

            {/* ALREADY ENROLLED (alreadyEnrolledMsg) */}
            <div className="_flatInput">
              <label htmlFor="alreadyEnrolledMsg">Already enrolled</label>
              <Field
                component="input"
                name="alreadyEnrolledMsg"
                type="text"
                className="_inputField_lg"
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
              <Field
                component="input"
                name="connectivityErrorMsg"
                type="text"
                className="_inputField_lg"
              />
            </div>

            {/* UNRECOGNIZABLE COMMAND (unsupportedErrorMsg) */}
            <div className="_flatInput">
              <label htmlFor=" unsupportedErrorMsg">Unrecognizable command</label>
              <Field
                component="input"
                name="unsupportedErrorMsg"
                type="text"
                className="_inputField_lg"
              />
            </div>

            {/* INVALID (invalidEmailErrorMsg) */}
            <div className="_flatInput">
              <label htmlFor=" invalidEmailErrorMsg">Invalid or no email address</label>
              <Field
                component="input"
                name="invalidEmailErrorMsg"
                type="text"
                className="_inputField_lg"
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
                <Field
                  component="input"
                  name="enrollmentEmailReplyTo"
                  type="text"
                  className="_inputField_sm"
                />
              </div>

              {/* SENT FROM (enrollmentEmailFrom) */}
              <div className="_flatInput">
                <label htmlFor="enrollmentEmailFrom">Sent from:Email address</label>
                <Field
                  component="input"
                  name="enrollmentEmailFrom"
                  type="text"
                  className="_inputField_sm"
                />
              </div>
            </div>
          </section>
          {/* EMAIL SUBJECT (enrollmentEmailSubject) */}
          <div className="_flatInput">
            <label htmlFor="enrollmentEmailSubject">Email subject line</label>
            <Field
              component="input"
              name="enrollmentEmailSubject"
              type="text"
              className="_inputField_md"
            />
          </div>

          <div className="_flatInput">
            <label htmlFor=" textForEnrollment">Email text</label>
            <Field
              component="textarea"
              name="textForEnrollment"
              type="text"
              className="_inputField_xlg"
            />
          </div>
        </section>
        <button type="submit" className="_smsbtn" disabled={submitting}>
          Save program settings
        </button>
      </Form>
    );
  }
}

export default reduxForm({
  // validate,
  form: 'PostNewConfigForm',
  destroyOnUnmount: false,
})(NewConfigForm);
