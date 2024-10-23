import React from 'react'
import { Link } from 'react-router-dom'
import Wrapper from '../assets/wrappers/RegisterAndLoginPage'
import { FormRow, Logo } from '../components'

const Register = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <h4>Register</h4>
        <FormRow type="text" name="name" defaultValue='Neel' />
        <FormRow type="text" name="Last name" LabelText='Last Name' defaultValue='Smith' />
        <FormRow type="text" name="location" defaultValue='earth' />
        <FormRow type="email" name="email" defaultValue='email@gmail.com' />
        <FormRow type="password" name="password" defaultValue='neeeeel' />
      <button type="submit"className='btn btn-block'>Submit</button>
      <p>
        Already a Member?
        <Link to="/login" className='member-btn'>
          Login
        </Link>
      </p>
      </form>
    </Wrapper>
  )
}

export default Register