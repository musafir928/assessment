import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email1: "",
    email2: "",
    password: "",
    password2: ""
  });

  const { name, email1, email2, password, password2 } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    if (password !== password2 || email1 !== email2) {
      console.log("warning");
    } else {
      // register({ name, email, password });
      console.log("correct!!!");
      console.log(formData);
    }
  };

  return (
    <div className='container'>
      <h1 className='large text-primary'>Sign Up</h1>
      <p className='lead'>
        <i className='fas fa-user' /> Create Your Account
      </p>
      <form className='form' onSubmit={e => onSubmit(e)}>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Name'
            name='name'
            value={name}
            onChange={e => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <input
            type='email'
            placeholder='Email Address'
            name='email1'
            value={email1}
            onChange={e => onChange(e)}
          />
          <small className='form-text'>
            This site requires a valid Email, please input your valid email!
          </small>
          <br />
          <input
            type='email'
            placeholder='Confirm Email Address'
            name='email2'
            value={email2}
            onChange={e => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Password'
            name='password'
            value={password}
            onChange={e => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Confirm Password'
            name='password2'
            value={password2}
            onChange={e => onChange(e)}
          />
        </div>
        <input type='submit' className='btn btn-primary' value='Register' />
      </form>
      <p className='my-1'>
        Already have an account? <Link to='/login'>Sign In</Link>
      </p>
    </div>
  );
};

export default Register;
