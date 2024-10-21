import React from 'react'
import '../App.css'
import Image from '../assets/wallet.png'
const Signup = () => {
    let img = ["https://www.flaticon.com/free-icons/wallet"]
  return (
    <div className='main-container'>
      <div className="container">
        <img className='image'src={Image} />
        <h1 className='header'>Personal Expense</h1>
        <h1 className='header'>Tracker</h1>
        <h2 className='signin'> Sign In </h2>
        <p className='signup'>Not registered yet ? <span>Sign up</span></p>

        <hr className='line'/>

        <form className='form'>
            <div className='email-container'>

            <label>Email</label>
            <input type="email" placeholder='Email address' className='input' />
            </div>
            <div className='email-container'>

            <label>Password</label>
            <input type="password" placeholder='Password' className='input'/>
            </div>
            <button className='button'>SIGN IN</button>
        </form>
      </div>
    </div>
  )
}

export default Signup
