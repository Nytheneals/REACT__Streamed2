import React from 'react';

// SMALL
export const renderInputsm = ({ label, input, meta: { touched, active, error } }) => (
  <div className="_flatInput">
    <label htmlFor={label}>{label}</label>
    <input {...input} name="smsHeader" type="text" className="_inputField_sm" />
    {/* {touched && <span style={{ color: 'red' }}>{value.length}</span>} */}
    {touched && error && <span style={{ color: 'red' }}>{error}</span>}
    {active && <span style={{ color: 'red' }}>hejgeuwyeiwue</span>}
  </div>
);
// MEDIUM
export const renderInputmd = ({ label, input, meta: { touched, error } }) => (
  <div className="_flatInput">
    <label htmlFor={label}>{label}</label>
    <input {...input} name="smsHeader" type="text" className="_inputField_md" />
    {touched && error && <span style={{ color: 'red' }}>{error}</span>}
  </div>
);

export const renderInputSelect = ({ label, select, meta: { touched, error, active } }) => (
  <div className="_flatInput">
    <label htmlFor={label}>{label}</label>
    <select {...select} name="smsHeader" type="text" className="_inputField_sm">
      <option value="1">eGift</option>
      <option value="2">Loyalty</option>
      <option value="3">One Gift</option>
    </select>
    {touched && error && <span style={{ color: 'red' }}>{error}</span>}
  </div>
);

export const renderInputlg = ({ label, input, meta: { touched, error } }) => (
  <div className="_flatInput">
    <label htmlFor={label}>{label}</label>
    <input {...input} name="smsHeader" type="text" className="_inputField_lg" />
    {touched && error && <span style={{ color: 'red' }}>{error}</span>}
  </div>
);

export const renderTextArea = ({ label, input, meta: { touched, error } }) => (
  <div className="_flatInput">
    <label htmlFor={label}>{label}</label>
    <textarea {...input} name="smsHeader" type="text" className="_inputField_xlg" />
    {touched && error && <span style={{ color: 'red' }}>{error}</span>}
  </div>
);
