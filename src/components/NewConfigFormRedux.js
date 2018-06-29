import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import Form from './Form';
import validate from './Validate';
import {
  renderInputsm,
  renderInputmd,
  renderInputSelect,
  renderInputlg,
  renderTextArea,
} from './formCreators.js';

// // SMALL
// const renderInputsm = ({ label, input, meta: { touched, error } }) => (
//   <div className="_flatInput">
//     <label htmlFor={label}>{label}</label>
//     <input {...input} name="smsHeader" type="text" className="_inputField_sm" />
//     {/* {touched && <span style={{ color: 'red' }}>{value.length}</span>} */}
//     {touched && error && <span style={{ color: 'red' }}>{error}</span>}
//   </div>
// );
// // MEDIUM
// const renderInputmd = ({ label, input, meta: { touched, error } }) => (
//   <div className="_flatInput">
//     <label htmlFor={label}>{label}</label>
//     <input {...input} name="smsHeader" type="text" className="_inputField_md" />
//     {touched && error && <span style={{ color: 'red' }}>{error}</span>}
//   </div>
// );

// const renderInputSelect = ({ label, select, meta: { touched, error } }) => (
//   <div className="_flatInput">
//     <label htmlFor={label}>{label}</label>
//     <select {...select} name="smsHeader" type="text" className="_inputField_sm">
//       <option value="1">eGift</option>
//       <option value="2">Loyalty</option>
//       <option value="3">One Gift</option>
//     </select>
//     {touched && error && <span style={{ color: 'red' }}>{error}</span>}
//   </div>
// );

// const renderInputlg = ({ label, input, meta: { touched, error } }) => (
//   <div className="_flatInput">
//     <label htmlFor={label}>{label}</label>
//     <input {...input} name="smsHeader" type="text" className="_inputField_lg" />
//     {touched && error && <span style={{ color: 'red' }}>{error}</span>}
//   </div>
// );

// const renderTextArea = ({ label, input, meta: { touched, error } }) => (
//   <div className="_flatInput">
//     <label htmlFor={label}>{label}</label>
//     <textarea {...input} name="smsHeader" type="text" className="_inputField_xlg" />
//     {touched && error && <span style={{ color: 'red' }}>{error}</span>}
//   </div>
// );

class NewConfigForm extends Component {
  // RENDER FUNCTION
  _handleSubmittal = values => {
    console.log('FORM 👉🏽', values);
  };

  render() {
    console.log(this.props);
    const {
      handleSubmit,
      submitting,
      // field: { content },
    } = this.props;
    // const length = content.value ? content.value.length : 0;
    return (
      <Form className="container" onSubmit={handleSubmit(this._handleSubmittal)}>
        <p className="_xlgText">Set Up SMS enrollment</p>
        <p className="_mdText">Set up program enrollment via SMS messages</p>
        {/* SECTION 1 */}
        <section className="sectors">
          <p className="_lgText">General information</p>

          {/* MERCHANT (smsHeader) */}
          <Field
            label="Merchant (or program) name"
            name="smsHeader"
            component={renderInputsm}
            // length={length}
          />

          {/* KEYWORD (keyword) */}
          <Field component="input" label="Keyword" name="keyword" component={renderInputsm} />

          {/* REGISTRATION URL (regUrl) */}
          <Field label="Registration URL" name="regUrl" component={renderInputmd} />

          {/* SMS FOOTER (smsFooter) */}
          <Field label="SMS footer" name="smsFooter" component={renderInputmd} />

          {/* CARD TEMPLATES (selectedCardTemplateCode) */}
          {/* <Field
            label="Card or program"
            name=" selectedCardTemplateCode"
            component={renderInputSelect}
          /> */}

          <div className="_flatInput ">
            <label htmlFor="selectedCardTemplateCode">Card or program</label>
            <Field name="selectedCardTemplateCode" className="_inputField_sm" component="select">
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
          <Field label="Confirm opt-in" name="doubleOptInMsg" component={renderInputlg} />

          {/* ENROLLMENT EMAIL (successfulEnrollmentMsg) */}
          <Field
            label="Enrollment confirmation"
            component={renderInputlg}
            name="successfulEnrollmentMsg"
          />

          {/* SECTION 3 */}
          <section className="sectors">
            <p className="_lgText">Other messages</p>
            <p className="_mdText">Other SMS responses a user may receive.</p>

            {/* ALREADY ENROLLED (alreadyEnrolledMsg) */}
            <Field label="Already enrolled" name="alreadyEnrolledMsg" component={renderInputlg} />
          </section>

          {/* SECTION 4 */}

          <section className="sectors">
            <p className="_lgText">Error messages</p>
            <p className="_mdText">
              If the SMS Response fails, the customer will receive one of these messages.
            </p>

            {/* CONNECTIVITY PROBLEMS (connectivityErrorMsg) */}
            <Field
              label="Problems with connectivity"
              name="connectivityErrorMsg"
              component={renderInputlg}
            />

            {/* UNRECOGNIZABLE COMMAND (unsupportedErrorMsg) */}
            <Field
              label="Unrecognizable command"
              name="unsupportedErrorMsg"
              component={renderInputlg}
            />

            {/* INVALID (invalidEmailErrorMsg) */}

            <Field
              label="Invalid or no email address"
              name="invalidEmailErrorMsg"
              component={renderInputlg}
            />
          </section>

          {/* SECTION 5 */}

          <section className="sectors">
            <p className="_lgText">Enrollment Email</p>
            <p className="_mdText">When an email address is required to complete registration.</p>

            <div className="_emailSection">
              {/* REPLY TO (enrollmentEmailReplyTo) */}
              <Field
                label="Reply to:Email address"
                name="enrollmentEmailReplyTo"
                component={renderInputsm}
              />

              {/* SENT FROM (enrollmentEmailFrom) */}
              <Field
                label="Sent from:Email address"
                name="enrollmentEmailFrom"
                component={renderInputsm}
              />
            </div>
          </section>
          {/* EMAIL SUBJECT (enrollmentEmailSubject) */}
          <Field
            label="Email subject line"
            name="enrollmentEmailSubject"
            component={renderInputsm}
          />

          {/* TEXT AREA */}
          <Field label="Email text" name="textForEnrollment" component={renderTextArea} />
        </section>
        <button type="submit" className="_smsbtn" disabled={submitting}>
          Save program settings
        </button>
      </Form>
    );
  }
}

export default reduxForm({
  validate,
  form: 'PostNewConfigForm',
  destroyOnUnmount: false,
})(NewConfigForm);
