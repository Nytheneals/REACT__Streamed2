export default function validate(values) {
  console.log({ ...values });
  const errors = {};

  // validate the inputs from "values"
  if (!values.smsHeader) {
    errors.smsHeader = 'Enter a merchant please';
  }

  // if (values.smsHeader && values.smsHeader.length > 0) {
  //   errors.smsHeader = `${148 - values.smsHeader.length} characters remaining`;
  // }

  // if (values.smsHeader && values.smsHeader.length > 148) {
  //   errors.smsHeader = `You have reached the max character count`;
  // }

  if (values.smsHeader) {
    if (values.smsHeader.length > 0) {
      errors.smsHeader = `${148 - values.smsHeader.length} characters remaining`;
    }
    if (values.smsHeader.length > 148) {
      errors.smsHeader = `You have reached the max character count`;
    }
  }

  if (!values.smsFooter) {
    errors.smsFooter = 'Enter a smsFooter';
  }
  if (!values.keyword) {
    errors.keyword = 'Enter a keyword';
  }
  if (!values.connectivityErrorMsg) {
    errors.connectivityErrorMsg = 'Enter a connectivityErrorMsg';
  }
  if (!values.unsupportedErrorMsg) {
    errors.unsupportedErrorMsg = 'Enter a unsupportedErrorMsg';
  }
  if (!values.invalidEmailErrorMsg) {
    errors.invalidEmailErrorMsg = 'Enter a invalidEmailErrorMsg';
  }
  if (!values.successfulEnrollmentMsg) {
    errors.successfulEnrollmentMsg = 'Enter a successfulEnrollmentMsg';
  }
  if (!values.alreadyEnrolledMsg) {
    errors.alreadyEnrolledMsg = 'Enter a alreadyEnrolledMsg';
  }
  if (!values.doubleOptInMsg) {
    errors.doubleOptInMsg = 'Enter a doubleOptInMsg';
  }
  if (!values.regUrl) {
    errors.regUrl = 'Enter a regUrl';
  }

  // EMAIL CHECKER
  if (
    values.enrollmentEmailSubject &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.enrollmentEmailSubject)
  ) {
    errors.enrollmentEmailSubject = "Oh that's an Invalid email address";
  }

  if (!values.enrollmentEmailSubject) {
    errors.enrollmentEmailSubject = 'Please email subject line';
  }
  if (!values.enrollmentEmailFrom) {
    errors.enrollmentEmailFrom = 'Enter a enrollmentEmailFrom';
  }
  if (!values.enrollmentEmailTo) {
    errors.enrollmentEmailTo = 'Enter a enrollmentEmailTo';
  }
  if (!values.enrollmentEmailReplyTo) {
    errors.enrollmentEmailReplyTo = 'Enter a enrollmentEmailReplyTo';
  }
  if (!values.textForEnrollment) {
    errors.textForEnrollment = 'Enter a textForEnrollment';
  }
  if (!values.selectedCardTemplateCode) {
    errors.selectedCardTemplateCode = 'Enter a selectedCardTemplateCode';
  }

  return errors;
}
