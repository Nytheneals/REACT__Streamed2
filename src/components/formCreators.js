import React from 'react';

// SMALL
export const renderInputsm = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div className="_flatInput">
    <label htmlFor={label}>{label}</label>
    <input {...input} name="smsHeader" type={type} className="_inputField_sm" />
    {/* {touched && <span style={{ color: 'red' }}>{value.length}</span>} */}
    {/* {touched &&
      error && (
        <span
          style={{
            color: 'red',
            // padding: '0 10px 0 20% '
            fontSize: '10px',
            paddingLeft: '180px',
            justifyItems: 'left',
            // border: '2px solid red',
            width: '300px',
          }}
        >
          {error}
        </span>
      )} */}
    {/* {active && <span style={{ color: 'red' }}>hejgeuwyeiwue</span>} */}
    {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
  </div>
);
// MEDIUM
export const renderInputmd = ({
  input,
  label,
  type,
  // track,
  // counter,
  meta: { touched, error, warning },
}) => (
    <div className="_flatInput">
      <label htmlFor={label}>{label}</label>
      <input {...input} name="smsHeader" type={type} className="_inputField_md" />
      {/* {<span>{track ? counter() : undefined}</span>} */}
      {touched && error && <span style={{ color: 'red' }}>{error}</span>}
    </div>
  );

export const renderInputSelect = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div className="_flatInput">
    <label htmlFor={label}>{label}</label>
    <select {...input} name="smsHeader" type={type} className="_inputField_sm">
      <option value="1">eGift</option>
      <option value="2">Loyalty</option>
      <option value="3">One Gift</option>
    </select>
    {touched && error && <span style={{ color: 'red' }}>{error}</span>}
  </div>
);

export const renderInputlg = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div className="_flatInput">
    <label htmlFor={label}>{label}</label>
    <input {...input} name="smsHeader" type={type} className="_inputField_lg" />
    {touched && error && <span style={{ color: 'red' }}>{error}</span>}
  </div>
);

export const renderTextArea = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div className="_flatInput">
    <label htmlFor={label}>{label}</label>
    <textarea {...input} name="smsHeader" type={type} className="_inputField_xlg" />
    {touched && error && <span style={{ color: 'red' }}>{error}</span>}
  </div>
);
