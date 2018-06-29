import styled from 'styled-components';

const Form = styled.form`
  ._smsbtn {
    margin-top: 20px;
    width: 200px;
    height: 36px;
    border-radius: 3px;
    text-transform: uppercase;
    font-size: 14px;
    background: #0a4599;
    color: white;
    padding: 10px;
    border: none;
  }

  /* HEADERS */

  form {
    width: 60%;
    margin: 0 auto;
  }

  body {
    font-family: 'Rubik', sans-serif;
    color: #333333;
  }

  .container {
    display: grid;
    font-family: @import url('https://fonts.googleapis.com/css?family=Rubik');
  }

  /* HEADERS */

  p {
    margin: 0;
    padding: 0;
    border: 0;
  }

  ._smText {
    font-size: 18px;
  }

  ._mdText {
    font-size: 24px;
    color: #5c5c5c;
  }

  ._lgText {
    font-size: 24px;
    font-weight: bold;
  }

  ._xlgText {
    font-size: 32px;
    font-weight: bold;
  }

  label {
    font-size: 14px;
    color: #5c5c5c;
    margin: 30px 0 5px 0;
    padding: 0;
    border: 0;
  }

  /* *:focus {
  outline: none;
} */

  /* HEADERS */

  /* FIELDS */

  ._flatInput {
    display: grid;
  }

  ._inputField_sm {
    background: #f2f1f3;
    width: 300px;
    height: 40px;
    border: none;
    border-radius: none;
  }

  button,
  input[type='submit'] {
    width: auto;
    background: red;
    color: white;
    border: 0;
    font-size: 2rem;
    font-weight: 600;
    padding: 0.5rem 1.2rem;
  }

  ._inputField_md {
    background: #f2f1f3;
    width: 436px;
    height: 40px;
    border: none;
  }

  ._inputField_lg {
    background: #f2f1f3;
    width: 436px;
    height: 60px;
    border: none;
  }

  ._inputField_xlg {
    background: #f2f1f3;
    width: 436px;
    height: 120px;
    border: none;
  }

  ._inputField_text {
    background: #f2f1f3;
    width: 872px;
    height: 90px;
  }

  section {
    margin-top: 25px;

    /* background: #0A4599; */
  }

  textarea,
  input {
    outline: none;
    font-size: 14px;
    padding: 0 15px;
  }

  textarea {
    padding: 15px;
  }

  input:hover {
    border-bottom: 2px solid blue;
  }

  /* EMAIL ENROLLMEMENT */

  ._emailSection {
    width: 60%;
    // grid-gap: 10px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;

Form.displayName = 'Form';

export default Form;
