import React from 'react'
import { Link } from 'react-router-dom'
import Wrapper from '../assets/wrappers/RegisterAndLoginPage'
import { FormRow, Logo } from '../components'

const Login = () => {
  return (
   <Wrapper>
    <form className='form'>
      <Logo/>
      <h4>Login</h4>
      <FormRow type='email' name='email'
      defaultValue='email@gmail.com' />
      <FormRow type='password' name='password'
      defaultValue='email.gmail.com' />
      <button type='submit' className='btn btn-block'>
        Submit
      </button>
      <button type='button' className='btn btn-block'>
        explore the app
      </button>
      <p>
        Not a member yet?
        <Link to="/register" className='member-btn'>
          Register
        </Link>
      </p>
    </form>
   </Wrapper>
  )
}

export default Login