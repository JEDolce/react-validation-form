import React from 'react';
import { useState } from 'react';
import './app.css';
import Input from './components/Input';

function App() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: ""
  });

  const inputsData = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMsg: "Username must be 5-20 characters long and not include any special character",
      label: "Username",
      pattern: "^[A-Za-z0-9]{5,20}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMsg: "Invalid email address",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      errorMsg: "",
      label: "Birthday"
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMsg: "Password must be 8-20 characters long and include at least one capital letter and one number",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])([a-zA-Z0-9!@#$%^&*]{8,20})$`,
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Password",
      errorMsg: "Passwords must be the same",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputsData.map(input =>
          <Input
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={handleChange}
          />
        )}
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default App;
